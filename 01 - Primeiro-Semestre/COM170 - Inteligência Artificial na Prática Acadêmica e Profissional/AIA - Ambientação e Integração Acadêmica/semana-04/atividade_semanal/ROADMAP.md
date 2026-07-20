# ROADMAP — Tour Simulado do AVA (Guia do Calouro)

> **Regra de ouro:** nenhuma etapa avança sozinha.  
> Só marcamos uma etapa como **CUMPRIDA** quando o responsável disser explicitamente que o objetivo foi cumprido.  
> Até lá, a etapa fica **EM ANDAMENTO** ou **PENDENTE**.

**Última atualização do status:** 2026-07-15  
**Base de trabalho:** `tour.html` (HTML estático, não React)  
**Deploy:** cherry-pick → branch de deploy → push → GitHub Pages **manual**  
**Tela inicial do produto:** Painel `/my/` (simulado)

---

## Legenda de status

| Status | Significado |
|--------|-------------|
| `PENDENTE` | Ainda não iniciada |
| `EM ANDAMENTO` | Em execução agora |
| `AGUARDANDO OK` | Implementada/proposta; falta o usuário confirmar cumprimento |
| `CUMPRIDA` | Usuário confirmou — só então passamos à próxima |
| `BLOQUEADA` | Depende de outra etapa ou de material externo |

---

## Visão do produto (meta final)

Casca do AVA **reconhecível**, cobrindo as partes relevantes da plataforma (não “metade”), com:

1. **Tour guiado** (overlay passo a passo) — **sempre legível e operável sem áudio**
2. **Modo livre** ao final: clique → modal **não bloqueante** com a mesma lógica didática do tour
3. **Narração opcional (premium):** áudios curtos versionados por passo do tour (e, se fizer sentido, por modal livre)
4. Conteúdo alinhado a FAQ S2, cartão S3 e **Semana 4 + Laboratório de revisão entre pares**
5. Publicação permanente via **GitHub Pages** (configuração manual do usuário)
6. **README** como capa do material para o Laboratório

**Escopo:** apenas AVA (não Portal do Aluno).  
**Stack:** HTML + CSS + JS estático + arquivos de áudio estáticos (sem API em runtime).

---

## Princípio: progressive enhancement (áudio)

| Camada | Obrigatória? | Comportamento |
|--------|----------------|---------------|
| Texto no tooltip/modal | **Sim** | Fonte da verdade didática |
| Controles do tour (Avançar/Voltar) | **Sim** | Funcionam com áudio off, mudo, erro de rede ou arquivo ausente |
| Narração (TTS pré-gerada) | **Não** | Extra premium; botão ouvir / autoplay só com preferência do usuário |
| API Gemini em produção | **Não** | Geração **offline** no dev; no Pages só entram `.mp3`/`.ogg` versionados |

**Regras de UX**

- Nunca tornar o áudio a única forma de receber a dica.
- Não autoplay agressivo no carregamento da página (política de browser + acessibilidade).
- Preferência do usuário: `narracao: on | off` (ex.: `localStorage`), padrão **off** ou **on só após o primeiro clique em “Ouvir”**.
- Se o arquivo falhar (`error` / 404): silêncio + tour continua; opcional ícone “áudio indisponível”.
- Mesmo texto falado = texto escrito (ou `narrationText` se precisar de frase um pouco mais oral).

---

## Fluxo Git (referência fixa)

```
[trabalho em main / pasta atividade_semanal]
        │
        ▼  (usuário aprova etapa + pede commit, se quiser)
[commit(s) atômicos]
        │
        ▼  (usuário pede)
[cherry-pick → branch de deploy]
        │
        ▼  (usuário pede)
[push da branch de deploy]
        │
        ▼  (usuário faz sozinho)
[GitHub Pages manual]
```

---

## Etapas

### Etapa 0 — Alinhamento e documentos de controle

| Campo | Valor |
|-------|--------|
| **Status** | `CUMPRIDA` |
| **Objetivo** | Time e agente alinhados sobre produto, fluxo Git e regra do roadmap |
| **Entregáveis** | `README.md`, `ROADMAP.md` (este arquivo), entendimento do fluxo cherry-pick → Pages manual |
| **Critério de aceite** | Usuário confirma que o fluxo e os docs estão corretos |
| **Fora de escopo** | Código do tour, branch, push |

**Notas**

- Cumprida em 2026-07-15 por confirmação do usuário (“considera etapa 0 cumprida… pode implementar”).
- Fluxo: desenvolver tudo na pasta da atividade; deploy (cherry-pick/push/Pages) só no final.
- Base evoluiu a partir do `tour.html` original + referência `referencia/01-my-dashboard.png`.

---

### Etapa 1 — Inventário da base e gaps

| Campo | Valor |
|-------|--------|
| **Status** | `AGUARDANDO OK` |
| **Objetivo** | Lista objetiva do que o `tour.html` já cobre vs. o que falta para o produto final |
| **Entregáveis** | Lista de telas/hotspots (gap analysis) no próprio ROADMAP ou anexo curto |
| **Critério de aceite** | Usuário concorda com a lista “tem / falta” e com a ordem de implementação |
| **Depende de** | Etapa 0 cumprida |

**Gaps já identificados (rascunho — validar na Etapa 1)**

| Item | Situação |
|------|----------|
| Tour guiado (overlay) | Existe (8 passos) |
| FAQ pesquisável | Existe (revisar conteúdo + PT-BR) |
| Aba Notas | Existe (expandir se necessário) |
| Casca “idêntica” ao AVA real | Parcial (inspirada, não fiel) |
| Dashboard / Meus cursos | Falta |
| Semana 4 + Laboratório revisão entre pares | Falta |
| Modo livre com modais não bloqueantes | Falta |
| Banner “simulação educativa” | Fraco / falta reforço |
| Textos PT-BR e alinhamento FAQ S2 / cartão S3 | Parcial |
| Branch de deploy + README na branch Pages | Falta |

---

### Etapa 2 — Motor de UX: tour guiado + modo livre

| Campo | Valor |
|-------|--------|
| **Status** | `AGUARDANDO OK` |
| **Objetivo** | Um único modelo de conteúdo alimenta (A) tour guiado e (B) cliques livres com modais não bloqueantes |
| **Entregáveis** | Tour completo → ao finalizar, modo exploração ativo; cliques abrem explicações sem travar a página |
| **Critério de aceite** | Usuário percorre o tour e, em seguida, clica em áreas e recebe as explicações corretas |
| **Depende de** | Etapa 1 cumprida |

**Implementação parcial (2026-07-15)**

- Tela inicial = Painel `/my/` simulado (`Olá, ALUNO!`).
- Tour guiado (9 passos): Painel → Meus cursos → Disciplina → Lab S4.
- Modo livre: modal canto inferior direito em header/cards/links; não bloqueia a página.
- Ainda refinar visual pixel-perfect e cobrir mais hotspots (Etapas 3–4).

---

### Etapa 3 — Cobertura das partes do AVA

| Campo | Valor |
|-------|--------|
| **Status** | `PENDENTE` |
| **Objetivo** | Cobrir as partes relevantes da plataforma (templates reutilizados), com Semana 4 como modelo completo |
| **Entregáveis** | Estrutura de navegação/simulada incluindo ao menos: disciplina, semanas, fórum, **Laboratório S4 (revisão entre pares)**, blocos laterais; dashboard se couber no tempo sem degradar qualidade |
| **Critério de aceite** | Usuário reconhece o fluxo real do AVA e o diferencial da S4 (lab) |
| **Depende de** | Etapa 2 cumprida (ou paralelismo só se o usuário autorizar) |

**Nota de desenho:** não repetir a mesma explicação para S1/S2/S3 se o padrão for idêntico; S4 entra por ter o Laboratório de revisão entre pares.

---

### Etapa 4 — Visual “cara de AVA” + conteúdo final

| Campo | Valor |
|-------|--------|
| **Status** | `PENDENTE` |
| **Objetivo** | Aproximar a casca do Moodle/UNIVESP real e fechar textos (PT-BR, FAQ, cartão, avisos legais/didáticos) |
| **Entregáveis** | Layout reconhecível; textos revisados; aviso de simulação visível; conteúdo didático coerente com o material do grupo |
| **Critério de aceite** | Usuário olha e diz: “parece o AVA o suficiente” + conteúdo está correto para entregar |
| **Depende de** | Etapa 3 (ou 2, se visual for antecipado com OK do usuário) |
| **Material externo útil** | Prints do AVA (dashboard, curso, S4, lab) |

---

### Etapa 4.5 — Narração versionada (premium / progressive enhancement)

| Campo | Valor |
|-------|--------|
| **Status** | `PENDENTE` |
| **Objetivo** | Cada passo do tour (e opcionalmente modais livres) pode ser **ouvido**, sem depender de ouvir para usar o guia |
| **Entregáveis** | Pasta `audio/`; manifesto de clips; player no tooltip; preferência mudo; scripts/notas de geração (Gemini ou outro) **fora** do runtime |
| **Critério de aceite** | (1) Tour 100% usável com áudio desligado ou arquivos apagados; (2) com áudio ligado, cada passo toca o clip certo; (3) clips curtos versionados no Git |
| **Depende de** | Textos do tour **estáveis** (após Etapa 2/4); gerador do usuário (ex.: projeto Gemini) |

**Desenho técnico previsto**

```text
atividade_semanal/
  tour.html
  audio/
    README.md                 # como gerar / regenerar
    manifest.json             # id → arquivo + hash/versão do texto
    tour-01-header.mp3
    tour-02-painel.mp3
    ...
```

Contrato no JS (exemplo):

```js
{
  id: "tour-01-header",
  elementId: "univesp-header",
  title: "...",
  description: "...",           // sempre na tela
  narrationText: "...",         // opcional; se omitido = description
  audio: "audio/tour-01-header.mp3"  // opcional; se faltar, só texto
}
```

**Pipeline de conteúdo (dev, não Pages)**

1. Congelar texto do passo (`description` / `narrationText`).
2. Gerar fala com o sintetizador (Gemini no outro projeto do usuário).
3. Exportar MP3/OGG curto (ideal &lt; 20–30 s por passo).
4. Commitar arquivo + atualizar `manifest.json` (versão do texto).
5. Se o texto mudar, bump da versão e regenerar o clip (áudio versionado junto com a dica).

**Por que versionar áudio (e não TTS ao vivo no browser)**

- GitHub Pages sem chave de API / sem cota em runtime.
- Voz estável e revisável (mesmo áudio para todos os calouros).
- Offline / falha de CDN de TTS não quebra o tour.
- Diff no Git quando a dica muda.

**UI prevista no tooltip**

- Ícone 🔊 Ouvir / ⏸ Pausar / estado mudo global.
- Indicador discreto se não houver arquivo para aquele passo.

---

### Etapa 5 — Preparação da branch de deploy

| Campo | Valor |
|-------|--------|
| **Status** | `PENDENTE` |
| **Objetivo** | Isolar o artefato publicável para GitHub Pages |
| **Entregáveis** | Branch de deploy definida; arquivos necessários (`index.html` ou `tour.html` na raiz da branch, README, assets); instrução de cherry-pick documentada |
| **Critério de aceite** | Usuário valida o conteúdo da branch localmente antes do push |
| **Depende de** | Etapas de produto suficientes para publicar (mínimo: material entregável no Lab) |

**Convenção prevista (ajustável):**

- Branch de deploy: `gh-pages` (ou nome que o usuário preferir)
- Site na **raiz** da branch (Pages simples)
- Cherry-pick dos commits da pasta/atividade → árvore limpa na branch de deploy

---

### Etapa 6 — Push da branch de deploy

| Campo | Valor |
|-------|--------|
| **Status** | `PENDENTE` |
| **Objetivo** | Enviar a branch de deploy ao remoto |
| **Entregáveis** | `git push` da branch de deploy (somente com pedido explícito) |
| **Critério de aceite** | Branch visível no GitHub |
| **Depende de** | Etapa 5 cumprida + pedido explícito de push |

---

### Etapa 7 — GitHub Pages (manual) + entrega no Laboratório

| Campo | Valor |
|-------|--------|
| **Status** | `PENDENTE` |
| **Objetivo** | Site no ar + envio no Moodle |
| **Entregáveis** | URL pública; envio do link (+ README) no Laboratório da Semana 4 |
| **Critério de aceite** | Link abre o tour; usuário confirma envio no Lab |
| **Depende de** | Etapa 6 + ação manual do usuário no GitHub Pages |
| **Responsável Pages** | **Somente o usuário** (Settings → Pages) |

---

### Etapa 8 — Revisão por pares (Semana 4 · Atividade 2)

| Campo | Valor |
|-------|--------|
| **Status** | `PENDENTE` |
| **Objetivo** | Revisar o material de outro grupo (rubrica + comentário 80–120 palavras) |
| **Entregáveis** | Revisão enviada no Laboratório |
| **Critério de aceite** | Envio confirmado pelo usuário |
| **Depende de** | Distribuição anônima pelo Laboratório (prazo institucional) |

---

## Fila de execução (ordem padrão)

1. Etapa 0 — docs e alinhamento ← **CUMPRIDA**
2. Etapa 1 — gaps fechados com OK
3. Etapa 2 — motor tour + modo livre (+ base /my/) ← **AGUARDANDO OK**
4. Etapa 3 — cobertura AVA + Lab S4
5. Etapa 4 — visual + conteúdo
6. **Etapa 4.5 — narração versionada (premium)** — depois dos textos estáveis
7. Etapa 5 — branch de deploy (cherry-pick)
8. Etapa 6 — push (sob pedido)
9. Etapa 7 — Pages manual + Laboratório
10. Etapa 8 — revisão por pares

Ordem pode ser reordenada **somente** com autorização explícita (ex.: antecipar visual se os prints chegarem cedo; ou encaixar 4.5 antes do polish visual se os textos do tour já estiverem fechados).

---

## Registro de confirmações do usuário

> Preencher quando o usuário disser que a etapa foi cumprida.

| Etapa | Data | Confirmação (resumo) |
|-------|------|----------------------|
| 0 | 2026-07-15 | Usuário: etapa 0 cumprida + pode implementar; focar /my/ ao abrir |
| 1 | — | Inventário feito na prática (print /my/ + gaps); aguarda OK formal se quiser fechar a etapa |
| 2 | — | Implementação entregue no tour.html — aguarda OK (tela /my/, tour, modo livre) |
| 3 | — | — |
| 4 | — | — |
| 5 | — | — |
| 6 | — | — |
| 7 | — | — |
| 8 | — | — |

---

## Como o agente deve se comportar

1. Trabalhar **só** na etapa com status `EM ANDAMENTO` (ou na que o usuário mandar iniciar).
2. Ao terminar o trabalho técnico da etapa, marcar como `AGUARDANDO OK` e **parar**.
3. **Não** alterar status para `CUMPRIDA` sem frase clara do usuário (ex.: “etapa X cumprida”, “pode avançar”).
4. **Não** criar branch de deploy, cherry-pick, push ou commit sem pedido explícito.
5. **Não** configurar GitHub Pages no lugar do usuário.
6. Atualizar este `ROADMAP.md` quando o status mudar de verdade (início, aguardando OK, cumprida).
