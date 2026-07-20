# Áudios do Guia do Calouro (COM170 · Semana 4)

## Organização

```text
audio/
  README.md              ← este arquivo
  gerar-audios.mjs       ← CLI de geração (dev)
  manifest.json          ← id → arquivo + hash do texto
  roteiros/              ← texto fonte (.md), um por clip
  clips/                 ← MP3 de produção (tour, FAQ, welcome, bilhete)
  amostras/              ← MP3 de teste de vozes (sample-voz-*)
```

| Pasta | Conteúdo |
|--------|----------|
| `roteiros/` | Markdown com frontmatter (`id`, `voz`, `tipo`) |
| `clips/` | Só MP3 usados no site |
| `amostras/` | Só 4 amostras de referência (não entram no tour) |

**Não** misturar MP3 soltos na raiz de `audio/`.

## Runtime (`tour.html`)

- Caminho dos clips: `audio/clips/<id>.mp3`
- Tour / welcome: após **Sim, narrar**
- FAQ: só no clique do ícone 🔊 (pergunta → pausa ~1s → resposta)
- Bilhete: voz **Algenib** se narração ativa
- Sem áudio / 404 → só texto

## Gerar (dev)

Pré-requisitos: `GEMINI_API_KEY` em `EngComp-UNIVESP/.env`; deps no repo LAI (`@google/genai`, `lamejs`).

```powershell
cd .../atividade_semanal/audio
node gerar-audios.mjs --dry-run
node gerar-audios.mjs
node gerar-audios.mjs --only faq-01-ava-portal --force
```

- Tour / FAQ / welcome: voz padrão **Aoede** (no frontmatter do roteiro)
- Bilhete: **Algenib**
- Free tier TTS: ~**3 RPM** e ~**10 RPD** (ver AI Studio)

### Amostras de voz (só referência)

Mantidas em `amostras/` (todo o resto foi removido):

| Arquivo | Voz | Papel |
|---------|-----|--------|
| `sample-voz-aoede.mp3` | Aoede | feminina (tour / FAQ) |
| `sample-voz-kore.mp3` | Kore | feminina (alternativa) |
| `sample-voz-algenib.mp3` | Algenib | masculina (Bilhete) |
| `sample-voz-charon.mp3` | Charon | masculina (referência) |

## Quando o texto mudar

1. Editar o `.md` em `roteiros/`
2. Ajustar o texto na tela (`tour.html`), se for o caso
3. `node gerar-audios.mjs` (regenera se o `textHash` mudou)
4. Commitar `roteiros/` + `clips/` + `manifest.json`
