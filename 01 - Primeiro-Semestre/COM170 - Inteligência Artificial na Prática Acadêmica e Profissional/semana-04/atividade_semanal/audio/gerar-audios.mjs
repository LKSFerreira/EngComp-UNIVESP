/**
 * Gerador de áudios do tour COM170 S4 (Guia do Calouro).
 *
 * - Fonte: scripts/*.md (texto falado = corpo do roteiro; sem título no áudio)
 * - Voz padrão: Aoede (feminina, Gemini TTS)
 * - Saída: ./tour-XX-....mp3 + manifest.json
 * - Reaproveita deps e .env do projeto learning-artificial-intelligence
 *
 * Uso (PowerShell, a partir desta pasta audio/):
 *   node gerar-audios.mjs              # só o que falta
 *   node gerar-audios.mjs --force      # regenera todos
 *   node gerar-audios.mjs --only tour-01-barra-superior
 *   node gerar-audios.mjs --dry-run    # lista sem chamar API
 *
 * Variáveis:
 *   LAI_ROOT  caminho do repo learning-artificial-intelligence (opcional)
 *   GEMINI_API_KEY  se não houver .env no LAI_ROOT
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import vm from "vm";
import crypto from "crypto";
import { createRequire } from "module";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const VOZ_PADRAO = "Aoede";
const MODEL = "gemini-3.1-flash-tts-preview";
const SAMPLE_RATE = 24000;
/** Pausa entre clips (free tier Gemini TTS costuma limitar ~10 req/min). */
const DELAY_MS = 6500;

const DIR_SCRIPTS = path.join(__dirname, "scripts");
const DIR_OUT = __dirname;
const MANIFEST_PATH = path.join(__dirname, "manifest.json");

/** Repo LAI: deps (@google/genai, lamejs) + .env com GEMINI_API_KEY */
// audio/ → atividade_semanal → semana-04 → COM170 → 01… → EngComp-UNIVESP → GitHub/
const LAI_DEFAULT = path.resolve(__dirname, "../../../../../../learning-artificial-intelligence");

const LAI_ROOT = process.env.LAI_ROOT
  ? path.resolve(process.env.LAI_ROOT)
  : LAI_DEFAULT;

const LAI_CANDIDATES = [
  LAI_ROOT,
  LAI_DEFAULT,
  path.resolve("C:/Users/LKSFERREIRA/Documents/GitHub/learning-artificial-intelligence"),
];

function resolveLaiRoot() {
  for (const c of LAI_CANDIDATES) {
    if (fs.existsSync(path.join(c, "package.json")) && fs.existsSync(path.join(c, "node_modules"))) {
      return c;
    }
  }
  return LAI_ROOT;
}

const laiRoot = resolveLaiRoot();

function loadEnv(envPath) {
  if (!fs.existsSync(envPath)) return;
  const content = fs.readFileSync(envPath, "utf-8");
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const i = trimmed.indexOf("=");
    if (i === -1) continue;
    const key = trimmed.slice(0, i).trim();
    const val = trimmed
      .slice(i + 1)
      .trim()
      .replace(/^["']|["']$/g, "");
    if (!process.env[key]) process.env[key] = val;
  }
}

loadEnv(path.join(laiRoot, ".env"));
loadEnv(path.join(__dirname, "../../../../../.env")); // EngComp se existir

const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;

function parseArgs(argv) {
  const opts = { force: false, dryRun: false, only: null };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--force") opts.force = true;
    else if (a === "--dry-run") opts.dryRun = true;
    else if (a === "--only" && argv[i + 1]) {
      opts.only = argv[++i].replace(/\.md$/i, "");
    }
  }
  return opts;
}

function extrairFrontmatter(conteudo) {
  const match = conteudo.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { meta: {}, corpo: conteudo.trim() };
  const meta = {};
  for (const line of match[1].split("\n")) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const i = t.indexOf(":");
    if (i === -1) continue;
    meta[t.slice(0, i).trim()] = t
      .slice(i + 1)
      .trim()
      .replace(/^["']|["']$/g, "");
  }
  return { meta, corpo: match[2].trim() };
}

/** Limpa markdown residual; o áudio usa só o corpo do roteiro (sem título). */
function limparParaFala(texto) {
  if (!texto) return "";
  let t = texto;
  t = t.replace(/<!-- audio-skip-start -->[\s\S]*?<!-- audio-skip-end -->/g, "");
  t = t.replace(/```[\s\S]*?```/g, " ");
  t = t.replace(/`([^`]+)`/g, "$1");
  t = t.replace(/!\[([^\]]*)\]\([^)]+\)/g, "");
  t = t.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
  t = t.replace(/^#+\s+(.+)$/gm, "$1");
  t = t.replace(/\*\*([^*]+)\*\*/g, "$1");
  t = t.replace(/\*([^*]+)\*/g, "$1");
  t = t.replace(/__([^_]+)__/g, "$1");
  t = t.replace(/_([^_]+)_/g, "$1");
  t = t.replace(/<\/?strong>/gi, "");
  t = t.replace(/<[^>]+>/g, " ");
  t = t.replace(/\n+/g, " ");
  t = t.replace(/\s+/g, " ");
  return t.trim();
}

function hashTexto(texto) {
  return crypto.createHash("sha256").update(texto, "utf8").digest("hex").slice(0, 16);
}

function carregarLameEncoder(lai) {
  const lamePath = path.join(lai, "node_modules/lamejs/lame.min.js");
  if (!fs.existsSync(lamePath)) {
    throw new Error(`lamejs não encontrado em ${lamePath}. Rode npm install no LAI.`);
  }
  const code = fs.readFileSync(lamePath, "utf-8");
  const sandbox = { window: {}, global: {}, exports: {}, module: { exports: {} } };
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox);
  return sandbox.lamejs.Mp3Encoder;
}

function pcmParaMp3(pcmData, sampleRate, Mp3Encoder) {
  const amostras = new Int16Array(pcmData.buffer, pcmData.byteOffset, pcmData.byteLength / 2);
  const encoder = new Mp3Encoder(1, sampleRate, 128);
  const chunks = [];
  const bloco = 1152;
  for (let i = 0; i < amostras.length; i += bloco) {
    const slice = amostras.subarray(i, i + bloco);
    const out = encoder.encodeBuffer(slice);
    if (out.length) chunks.push(Buffer.from(out));
  }
  const fin = encoder.flush();
  if (fin.length) chunks.push(Buffer.from(fin));
  return Buffer.concat(chunks);
}

function listarScripts() {
  if (!fs.existsSync(DIR_SCRIPTS)) return [];
  return fs
    .readdirSync(DIR_SCRIPTS)
    .filter((f) => f.endsWith(".md"))
    .sort()
    .map((f) => {
      const full = path.join(DIR_SCRIPTS, f);
      const raw = fs.readFileSync(full, "utf-8");
      const { meta, corpo } = extrairFrontmatter(raw);
      const id = meta.id || path.basename(f, ".md");
      const fala = limparParaFala(corpo);
      return {
        id,
        titulo: meta.titulo || id,
        voz: meta.voz || VOZ_PADRAO,
        fala,
        textHash: hashTexto(fala),
        scriptFile: f,
        outFile: `${id}.mp3`,
        outPath: path.join(DIR_OUT, `${id}.mp3`),
      };
    });
}

function lerManifest() {
  if (!fs.existsSync(MANIFEST_PATH)) {
    return { voice: VOZ_PADRAO, model: MODEL, clips: {} };
  }
  try {
    return JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf-8"));
  } catch {
    return { voice: VOZ_PADRAO, model: MODEL, clips: {} };
  }
}

function salvarManifest(m) {
  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(m, null, 2) + "\n", "utf-8");
}

async function sintetizarUm(ai, Mp3Encoder, clip) {
  // Sempre pt-BR: sotaque brasileiro, sem Portugal e sem inglês.
  // Tom neutro (não forçar "mentora"/feminino) para vozes masculinas e femininas.
  const prompt =
    "Fale exclusivamente em português do Brasil (pt-BR), com sotaque brasileiro natural. " +
    "Não use sotaque de Portugal, não misture inglês e não traduza o texto. " +
    "Tom calmo, acolhedor e didático, como um guia de estudos da universidade. " +
    "Leia o texto a seguir de forma limpa e direta, sem introduções, sem comentários e sem ler metadados: " +
    clip.fala;

  const resposta = await ai.interactions.create({
    model: MODEL,
    input: prompt,
    response_format: { type: "audio" },
    generation_config: {
      speech_config: [{ voice: clip.voz }],
    },
  });

  const audioBase64 = resposta.output_audio?.data;
  if (!audioBase64) throw new Error("API retornou áudio nulo");

  const pcm = Buffer.from(audioBase64, "base64");
  const mp3 = pcmParaMp3(pcm, SAMPLE_RATE, Mp3Encoder);
  fs.writeFileSync(clip.outPath, mp3);
  return mp3.length;
}

async function main() {
  const opts = parseArgs(process.argv);
  console.log("\n=== Gerador de áudios — Tour AVA COM170 S4 ===");
  console.log(`LAI_ROOT : ${laiRoot}`);
  console.log(`Scripts  : ${DIR_SCRIPTS}`);
  console.log(`Saída    : ${DIR_OUT}`);
  console.log(`Voz      : ${VOZ_PADRAO} (só feminina nesta fase)`);
  console.log(`Modo     : ${opts.dryRun ? "dry-run" : opts.force ? "force" : "incremental"}\n`);

  if (!fs.existsSync(laiRoot)) {
    console.error(`✖ Repo LAI não encontrado. Defina LAI_ROOT. Tentou: ${laiRoot}`);
    process.exit(1);
  }

  let clips = listarScripts();
  if (opts.only) {
    clips = clips.filter((c) => c.id === opts.only || c.id.includes(opts.only));
    if (!clips.length) {
      console.error(`✖ Nenhum script bate com --only ${opts.only}`);
      process.exit(1);
    }
  }

  if (!clips.length) {
    console.error("✖ Nenhum .md em scripts/");
    process.exit(1);
  }

  const manifest = lerManifest();
  manifest.voice = VOZ_PADRAO;
  manifest.model = MODEL;
  if (!manifest.clips) manifest.clips = {};

  const pendentes = [];
  for (const c of clips) {
    const existe = fs.existsSync(c.outPath) && fs.statSync(c.outPath).size > 0;
    const prev = manifest.clips[c.id];
    const textoMudou = prev && prev.textHash && prev.textHash !== c.textHash;
    const precisa = opts.force || !existe || textoMudou;
    const status = !precisa
      ? "ok"
      : !existe
        ? "faltando"
        : textoMudou
          ? "texto-mudou"
          : "force";
    console.log(
      `  [${status.padEnd(12)}] ${c.id}  (${c.fala.length} chars) → ${c.outFile}`,
    );
    if (precisa) pendentes.push(c);
  }

  if (opts.dryRun) {
    console.log(`\nDry-run: ${pendentes.length} clip(s) seriam gerados. Nada gravado.\n`);
    return;
  }

  if (!pendentes.length) {
    console.log("\n✔ Nada a gerar. Use --force para regenerar.\n");
    salvarManifest(manifest);
    return;
  }

  if (!apiKey) {
    console.error(
      "\n✖ GEMINI_API_KEY ausente. Coloque no .env do learning-artificial-intelligence ou exporte a variável.\n",
    );
    process.exit(1);
  }

  const require = createRequire(path.join(laiRoot, "package.json"));
  const { GoogleGenAI } = require("@google/genai");
  const Mp3Encoder = carregarLameEncoder(laiRoot);
  const ai = new GoogleGenAI({ apiKey });

  console.log(`\n⚡ Gerando ${pendentes.length} clip(s)...\n`);

  for (let i = 0; i < pendentes.length; i++) {
    const c = pendentes[i];
    process.stdout.write(`  (${i + 1}/${pendentes.length}) ${c.id} [${c.voz}] ... `);
    try {
      const bytes = await sintetizarUm(ai, Mp3Encoder, c);
      manifest.clips[c.id] = {
        file: c.outFile,
        voice: c.voz,
        textHash: c.textHash,
        chars: c.fala.length,
        bytes,
        updatedAt: new Date().toISOString(),
        script: `scripts/${c.scriptFile}`,
        // FAQ e Bilhete ficam de fora deste manifesto de tour
        scope: "tour-step-body",
      };
      salvarManifest(manifest);
      console.log(`ok (${(bytes / 1024).toFixed(1)} KB)`);
      if (i < pendentes.length - 1) {
        await new Promise((r) => setTimeout(r, DELAY_MS));
      }
    } catch (err) {
      console.log("FALHOU");
      console.error(`    ${err.message || err}`);
      console.error("\nParando lote (revise cota/API e rode de novo; o que já saiu ficou gravado).\n");
      process.exit(1);
    }
  }

  console.log("\n✔ Lote concluído. MP3s em audio/ + manifest.json atualizado.\n");
  console.log("Próximo: ligar player no tour.html (consentimento → play por passo).\n");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
