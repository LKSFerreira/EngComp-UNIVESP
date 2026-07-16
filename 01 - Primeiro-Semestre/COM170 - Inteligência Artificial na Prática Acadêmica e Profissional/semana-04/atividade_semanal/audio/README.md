# Áudios do tour (narração premium)

> **Status:** pasta reservada — clips ainda não gerados.  
> Ver **Etapa 4.5** no [ROADMAP.md](../ROADMAP.md).

## Princípio

O guia funciona **100% sem áudio** (texto no tooltip/modal + botões).  
A narração é um **extra**: trechos curtos, um arquivo por passo, versionados no Git.

## Como vai funcionar (runtime)

1. Usuário inicia o tour e/ou clica em **Ouvir**.
2. O `tour.html` toca `audio/tour-XX-....mp3` correspondente ao passo.
3. Se o arquivo não existir, falhar ou o usuário estiver mudo → **só o texto**.

Nenhuma chamada à API do Gemini (nem outra) no navegador do calouro.

## Como gerar (produção / dev)

1. Congelar o texto do passo no tour (`description` ou `narrationText`).
2. Passar o texto no **sintetizador Gemini** (projeto à parte do responsável).
3. Exportar MP3 (ou OGG) curto.
4. Salvar aqui com nome estável, ex.: `tour-01-header.mp3`.
5. Registrar no `manifest.json` (quando existir) a versão do texto.

Se o texto da dica mudar → regenerar o áudio e commitar de novo (versão alinhada).

## Nomenclatura prevista

| Arquivo | Passo (exemplo) |
|---------|------------------|
| `tour-01-header.mp3` | Barra superior |
| `tour-02-painel.mp3` | Saudação / Painel |
| `tour-03-banners.mp3` | Avisos |
| … | … |

## Acessibilidade

- Texto sempre visível.
- Controle de mudo / não autoplay forçado no load.
- Falha de áudio não interrompe o tour.
