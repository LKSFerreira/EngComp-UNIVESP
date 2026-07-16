# Guia do Calouro — Tour Simulado do AVA (UNIVESP)

> **Material da Semana 4 · COM170**  
> Inteligência Artificial na Prática Acadêmica e Profissional  
> **Grupo:** COM170-EC-DRP11-2026S2-T001-G5  
> **Formato:** tour interativo (casca estática do AVA/Moodle) + FAQ do ingressante

---

## O que é isto?

Uma **simulação educativa** do Ambiente Virtual de Aprendizagem (AVA/Moodle) da UNIVESP.

- **Não é** o AVA real — não faz login, não grava nota, não envia atividade.
- **É** uma casca visual com **tour guiado** e, depois, **exploração livre** com explicações ao clicar.
- Objetivo: o calouro entende **o que cada parte da plataforma faz** e **como usar**, sem medo de “clicar errado” no sistema oficial.

**Aviso:** material produzido por estudantes para o Guia dos Calouros. Não substitui o AVA, o Portal do Aluno, o Manual do Aluno nem comunicados oficiais da UNIVESP.

---

## Para quem é

Estudante que **acabou de chegar** na UNIVESP e ainda se perde no Moodle: menu da disciplina, semanas, fórum do grupo, laboratório de revisão entre pares, notas, mensagens.

---

## Como usar (calouro)

1. Abra o link do GitHub Pages (quando publicado) **ou** abra o arquivo `tour.html` no navegador.
2. No modal inicial, use **Iniciar tour** (ou explore por conta própria).
3. O botão flutuante fica no **meio da borda direita** (FAQ, pistas e reinício do tour).
4. Siga os passos do overlay (Avançar / Voltar).
5. Ao terminar o tour pela primeira vez, o guia pede para abrir o botão flutuante (FAQ e pistas).
6. Depois, explore livremente: cliques nas áreas da tela abrem dicas.

---

## Arquivos deste material

| Arquivo | Função |
|---------|--------|
| `tour.html` | Produto principal: casca do AVA + tour + FAQ |
| `README.md` | Este arquivo — capa do material e instruções |
| `ROADMAP.md` | Plano de evolução em etapas (só avança com OK do responsável) |

Conteúdo de apoio (semanas anteriores do grupo):

- FAQ da Semana 2 (`../semana-02/atividade_semanal/`)
- Cartão da Semana 3 (`../semana-03/atividade_semanal/`)

---

## Stack

- HTML + CSS (Tailwind via CDN) + JavaScript puro
- Sem build, sem servidor, sem banco de dados
- Adequado a **GitHub Pages** (site 100% estático)
- **Narração (planejada):** áudios curtos pré-gerados (ex.: Gemini TTS no fluxo de produção) versionados em `audio/` — o tour **não depende** de ouvir; áudio é camada premium opcional

---

## Fluxo de trabalho Git (equipe / agente)

Trabalhamos **sempre na pasta da atividade em `main` (ou branch de desenvolvimento)**. O deploy é um caminho **separado e controlado**:

```
1. Desenvolver e validar aqui
   01 - .../semana-04/atividade_semanal/

2. Quando a etapa do ROADMAP estiver cumprida e aprovada:
   → commit na branch de trabalho (se solicitado)
   → cherry-pick do(s) commit(s) para a branch de deploy
     (nome previsto: gh-pages ou pages-guia-calouro — a definir na Etapa 0)

3. Push somente da branch de deploy (quando solicitado)

4. Deploy no GitHub Pages: ação MANUAL do responsável no GitHub
   (Settings → Pages → branch de deploy / pasta)
```

### Regras combinadas

| Regra | Detalhe |
|-------|---------|
| Desenvolvimento | Pasta `atividade_semanal/` neste repositório |
| Deploy | Cherry-pick → branch de deploy → push → Pages manual |
| Commit / push | Só quando o usuário pedir explicitamente |
| ROADMAP | Só muda de etapa quando o usuário disser que o objetivo foi cumprido |
| Pages | Configuração e publicação final feitas **manualmente** pelo usuário |

### Entrega no Laboratório do Moodle

1. **Link** do GitHub Pages (quando no ar)
2. Este **README** (capa do material para o revisor anônimo)
3. Opcional: print ou PDF de apoio, se o Laboratório exigir anexo

---

## Fontes do conteúdo

- Experiência real de navegação no AVA da disciplina COM170
- FAQ e dúvidas reunidas na Semana 2
- Cartão do curso / PPC (Semana 3)
- Descrição das atividades da Semana 4 (incluindo Laboratório de revisão entre pares)
- Manual do Aluno e documentos institucionais, quando citados no material

---

## Créditos

- **Disciplina:** COM170 — Inteligência Artificial na Prática Acadêmica e Profissional  
- **Turma / grupo:** COM170-EC-DRP11-2026S2-T001-G5  
- **Semestre:** 2026S2  
- **Uso de IA:** apoio na organização, síntese e implementação do material (conforme missão da semana)

---

## Estado atual

Consulte o arquivo **[ROADMAP.md](./ROADMAP.md)** para o status de cada etapa.  
O `tour.html` atual é a **base**: tour guiado + FAQ + casca inspirada no AVA. Evolução visual, Laboratório S4 e modo livre estão no roadmap.
