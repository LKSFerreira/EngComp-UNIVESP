# Guia do Calouro · AVA da UNIVESP

> Branch **`gh-pages`** — publicação estática do tour interativo no **GitHub Pages**.

---

## Acesse o site

**[Abrir o Guia do Calouro](https://lksferreira.github.io/EngComp-UNIVESP/)**

Tour simulado do Ambiente Virtual de Aprendizagem (AVA) da UNIVESP, com navegação guiada, FAQ e narração opcional.  
Não substitui o AVA oficial: é um material didático para orientação de calouros.

---

## Propósito desta branch

A branch `gh-pages` existe **somente** para hospedar o website público do tour.

| Esta branch | Não é |
|-------------|--------|
| Deploy do site estático | Branch de desenvolvimento do semestre |
| Arquivos que a página carrega no navegador | Caderno de anotações, agents, PDFs, outras disciplinas |
| Fonte do GitHub Pages | Repositório completo de estudos |

O **material de estudo** (semanas, anotações, ferramentas de geração de áudio, regras do agente, etc.) fica na branch **`main`**.

---

## Decisão de arquitetura

### Por que separar `main` e `gh-pages`?

1. **Papéis distintos**  
   - `main` → estudar, versionar o curso e evoluir o tour.  
   - `gh-pages` → servir o que o calouro (e o professor) abrem no navegador.

2. **Deploy enxuto**  
   O Pages não precisa de `.agents/`, outras disciplinas, SingleFile de referência, roteiros de TTS, amostras de voz ou chaves de API. Manter isso aqui inflava o repositório de publicação e misturava contextos.

3. **Segurança e clareza**  
   Secrets (ex.: `.env` com API key) **não** entram nesta branch. O site não chama Gemini em runtime: os áudios já vêm como **MP3 estáticos**.

4. **Progressive enhancement**  
   O tour funciona **100% com texto e cliques**. A narração é opcional (opt-in + clique no FAQ).

### O que há nesta branch

```text
index.html                          ← site (tour do AVA)
.gitignore                          ← ignora .env e afins
01 - Primeiro-Semestre/.../semana-04/atividade_semanal/
  audio/clips/*.mp3                 ← narração (tour, FAQ, welcome, bilhete)
  referencia/link1_*.jpg            ← banners oficiais dos cards do Painel
  referencia/link2_*.jpg
  referencia/link3_*.jpg
```

Caminhos longos sob `01 - Primeiro-Semestre/...` existem porque o `index.html` resolve assets pela pasta da atividade (compatível com o layout do monorepo de estudos na `main`).

### O que não há (de propósito)

- Outras disciplinas e semestres  
- Documentação do curso / matriz curricular  
- `roteiros/`, `gerar-audios.mjs`, amostras de voz  
- Capturas SingleFile e demais referências de desenvolvimento  
- Skills, workflows e configurações de agente  

---

## Atividade realizada

**Disciplina:** COM170 — Inteligência Artificial na Prática Acadêmica e Profissional  
**Semana 4 · Atividade semanal:** Guia do Calouro (tour do AVA)

### Entrega principal

Um **site interativo** que apresenta o AVA de forma didática:

1. **Consentimento de narração** (Sim / Não) — respeita política de autoplay do navegador  
2. **Boas-vindas** e apresentação do botão flutuante (Guia)  
3. **Tour guiado** pelo Painel, Meus cursos e página da disciplina  
4. **FAQ** com texto expandível e narração ao abrir cada item  
5. **Bilhete Dourado** — recado sobre a trilha sequencial dos PIEs  

### Stack

- HTML + CSS + JavaScript estático  
- Tailwind (CDN) e Lucide (ícones)  
- Áudios pré-gerados (Gemini TTS em fluxo de **produção**, não no browser)  
- Hospedagem: **GitHub Pages** (esta branch)

### Uso de IA

A IA apoiou a construção do material e a síntese de voz **fora do site**.  
No navegador do calouro **não** há chamada a API de IA: só arquivos estáticos.

---

## Convite

Se você é **calouro** da UNIVESP (ou está ajudando alguém a começar):

1. Abra o link: **https://lksferreira.github.io/EngComp-UNIVESP/**  
2. Escolha se deseja o tour **narrado** ou só com texto  
3. Explore o Painel, os atalhos, a disciplina e o FAQ  
4. No fim, leia o **Bilhete Dourado**

Boa jornada no curso.

---

## Desenvolvimento

Para editar o tour, gerar áudios ou trabalhar no restante do repositório de estudos:

```bash
git checkout main
```

A pasta da atividade na `main` inclui `tour.html`, `audio/` completo (`clips/`, `roteiros/`, gerador), referências e material de envio.

Publicar de novo no Pages: atualizar os arquivos necessários na `main` e **publicar/copiar** o artefato de deploy para esta branch `gh-pages` (somente o que o site usa).

---

*UNIVESP · Engenharia de Computação · COM170 · Semana 4*
