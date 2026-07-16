# Áudios do tour (narração premium)

> **Status:** scripts prontos · geração via `gerar-audios.mjs` · runtime no `tour.html` em seguida.  
> **Voz desta fase:** só **Aoede** (feminina, Gemini TTS).  
> **Fora do escopo agora:** FAQ · Bilhete Dourado (depois, voz masculina).

## Princípio

O guia funciona **100% sem áudio**.  
A narração é **opt-in** após um clique (política de autoplay dos navegadores).

## Orquestração (pipeline)

```text
1. Textos na tela (tour.html → description de cada passo)
        ↓  espelhar / ajustar oralidade
2. Roteiro falado (audio/scripts/tour-XX-*.md)  ← fonte da síntese
        ↓  node gerar-audios.mjs
3. Gemini TTS (voz Aoede) → PCM → MP3
        ↓
4. audio/tour-XX-*.mp3 + manifest.json
        ↓  commit
5. Runtime: modal "Tour narrado?" → se Sim, play do clip ao abrir cada passo
```

| Camada | O quê | Onde |
|--------|--------|------|
| **Roteiro** | Texto falado = conteúdo do card (sem botões, sem "Passo N", sem FAQ) | `audio/scripts/*.md` |
| **Geração** | Node + Gemini + lamejs (reusa deps do repo LAI) | `audio/gerar-audios.mjs` |
| **Artefato** | 1 MP3 por passo + hash do texto | `audio/*.mp3`, `manifest.json` |
| **Runtime** | `HTMLAudioElement` após gesto do usuário | `tour.html` |

### O que é falado

- **Sim:** conteúdo da boas-vindas (`welcome.mp3`) e o parágrafo de cada passo do tour.
- **Não:** título do card (fica só visual), botões, modal de consentimento, **FAQ**, **Bilhete Dourado** (fase 2, voz masculina).

## Voz

| Uso | Voz Gemini | Fase |
|-----|------------|------|
| Tour (todos os passos) | **Aoede** | agora |
| Bilhete Dourado | Puck / Charon / Fenrir | depois |
| FAQ | — | sem narração |

## Como gerar

Pré-requisitos:

1. Repo **`learning-artificial-intelligence`** com `npm install` (tem `@google/genai` e `lamejs`).
2. `GEMINI_API_KEY` no `.env` desse repo (ou variável de ambiente).
3. Node 18+.

Na pasta `audio/`:

```powershell
# Lista o que seria gerado (sem gastar cota)
node gerar-audios.mjs --dry-run

# Gera só os MP3 que faltam ou cujo texto mudou
node gerar-audios.mjs

# Regenera um passo
node gerar-audios.mjs --only tour-01-barra-superior --force

# Regenera tudo
node gerar-audios.mjs --force
```

Se o LAI não estiver no caminho padrão:

```powershell
$env:LAI_ROOT = "C:\Users\LKSFERREIRA\Documents\GitHub\learning-artificial-intelligence"
node gerar-audios.mjs
```

O script **não** usa o `sintetizar.js` solto na raiz do EngComp (cópia do LAI).  
Ele reutiliza a **mesma stack** (Gemini `gemini-3.1-flash-tts-preview` + lamejs) com pastas certas deste tour.

## Nomenclatura

| Arquivo | Onde |
|---------|------|
| `welcome.mp3` | Modal de boas-vindas |
| `tour-01-barra-superior.mp3` | Barra superior |
| `tour-02-avisos-campanhas.mp3` | Avisos |
| … | … |
| `tour-22-menu-perfil.mp3` | Menu do perfil |

Roteiro espelhado em `scripts/` com o mesmo `id`.

## Runtime planejado (próximo passo no `tour.html`)

1. **Antes** da modal de boas-vindas: modal  
   *“Deseja um tour narrado?”* → **Sim** / **Não**.
2. **Sim** = gesto do usuário → `narracaoAtiva = true` (+ `localStorage` opcional) e desbloqueia `Audio`.
3. Em cada `showStep(i)`: se narrado, `audio.src = "audio/" + step.audioId + ".mp3"` e `play()`; ao mudar de passo, `pause()` + troca.
4. **Não** / falha 404 / erro de rede → só texto (como hoje).
5. FAQ e Bilhete **não** entram no player nesta fase.

## Acessibilidade

- Texto sempre na tela.
- Sem autoplay no load da página.
- Áudio ausente não trava o tour.
- Preferência narrado/mudo respeitada após o consentimento.

## Quando o texto do tour mudar

1. Atualizar `description` em `tour.html`.
2. Atualizar o `.md` correspondente em `scripts/`.
3. `node gerar-audios.mjs` (detecta `textHash` diferente e regenera).
4. Commitar MP3 + `manifest.json` + script.
