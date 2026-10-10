---
name: gera_pdf_univesp
description: Gera relatórios, portfólios e atividades acadêmicas em HTML/PDF replicando fielmente o design system visual institucional da UNIVESP com Headless Chrome. Use sempre que o usuário pedir para gerar PDF, exportar atividade em PDF ou formatar portfólio acadêmico.
---

# Propósito

Esta skill orienta a criação de documentos acadêmicos em formato HTML/CSS prontos para compilação via **Headless Chrome** em PDFs com qualidade gráfica institucional (layout A4 em páginas contínuas ou bem delimitadas, gradientes escuros, tipografia Inter, cartões coloridos de perguntas e tabelas de rubricas).

# Estilo e Design System Institucional

1. **Tipografia:** Fonte `Inter` (Google Fonts), com suporte a acentuação UTF-8 nativa.
2. **Capa (Página 1):**
   - Fundo em gradiente escuro (`linear-gradient(145deg, #091224 0%, #0d1b3a 60%, #112347 100%)`).
   - SVG central de cérebro conexionista ou ícone ilustrativo com brilho neon (`drop-shadow`).
   - Tag superior (`badge-tag`) em maiúsculas com acentuada cor azul neon (`#60a5fa`).
   - Caixas de introdução e instruções com cantos arredondados, bordas sutis e fundo translúcido (`backdrop-filter`).
3. **Páginas Internas (A4 - 210mm x 297mm):**
   - Fundo suave (`#f8fafc`).
   - Cabeçalho minimalista com indicador circular de módulo e numeração de páginas no rodapé.
   - Cartões de perguntas (`card-question`) com bordas superiores coloridas distintas por bloco:
     - Bloco 1 (Pergunta 1): Azul (`#2563eb`)
     - Bloco 2 (Pergunta 2): Verde/Teal (`#0d9488`)
     - Bloco 3 (Pergunta 3): Laranja (`#d97706`)
     - Bloco 4 (Pergunta 4): Roxo (`#7c3aed`)
   - Caixas de prompt em código (`code-block` / `code-prompt`) com fundo claro e legível (`#f8fafc`), borda sutil (`#cbd5e1`), borda lateral de destaque (`#0284c7`) e texto escuro de alta legibilidade (`#0f172a` / `#1e293b`), otimizado para leitura acadêmica e impressão sem fadiga visual.
   - Badge de verificação de fonte em verde (`#dcfce7` / `#15803d`).
4. **Tabela de Rubrica (Avaliação por Pares):**
   - Tabela estilizada com cabeçalho escuro (`#0f172a`).
   - Coluna de pontuação máxima (Nível 3) destacada com fundo verde translúcido (`#f0fdf4`) e borda lateral verde (`#22c55e`).

# Workflow de Execução

1. **Leitura e Extração das Respostas Autênticas:**
   - Obter o texto exato escrito pelo aluno.
   - **Regra Inviolável de Preservação Semântica:** É PERMITIDO corrigir pontuação, acentuação e ortografia. É **ESTRITAMENTE PROIBIDO** alterar a semântica, exagerar, inventar razões ou desviar a intenção original do usuário.

2. **Criação do Arquivo HTML (`.html`):**
   - Criar um HTML responsivo com CSS de impressão `@media print` e botão superior de impressão (invisível no PDF final).

3. **Compilação do PDF via Utilitário Oficial (`tools/gera_pdf_univesp.py`):**
   - Executar o utilitário genérico institucional localizado na raiz do projeto:
     ```bash
     python tools/gera_pdf_univesp.py "caminho/para/arquivo.html"
     ```
   - O utilitário localiza automaticamente o executável do Google Chrome no sistema operacional, aplica os parâmetros A4 milimétricos (`--headless=new`, `--no-sandbox`, `--disable-gpu`) e compila o PDF garantindo a integridade gráfica do documento.

4. **Regra de Versionamento:**
   - **NÃO commitar no Git** até que o usuário solicite explicitamente (`só commit quando eu solicitar`).

## Autodeclaração Dinâmica de Uso de IA (Duas Metades) - REGRA OBRIGATÓRIA

Todo documento acadêmico gerado via HTML/PDF para a UNIVESP deve incluir obrigatoriamente a **Declaração de Uso de Ferramentas de Inteligência Artificial em Duas Metades**, parametrizada de forma **100% dinâmica** de acordo com as ferramentas, os modelos, a configuração exata de esforço e as tarefas executadas (incluindo a formatação e geração do arquivo .PDF):

1. **Primeira Metade (Autodeclaração Dinâmica das Ferramentas de IA):**
   - Nome das Ferramentas em uso (ex.: *Gemini WebChat (Google)*, *Antigravity (Google)*);
   - Modelo Exato em Execução (ex.: *Gemini 3.8 Flash*);
   - Nível de Esforço com nomenclatura exata da interface utilizada:
      - Ex. Gemini WebChat: `nível de esforço: Máx. Muito detalhado` (ou `Mín. Rápido e eficiente` / `Médio Equilibrado`);
      - Ex. Antigravity IDE: `Low / Medium / High`;
   - Tarefas Executadas delimitadas com precisão:
      - *Debate/Raciocínio:* contra-ataque dialético oposto à recomendação técnica ou geração de hipóteses;
      - *Engenharia de Documento / PDF:* diagramação, estilização visual em HTML/CSS e compilação técnica em formato .PDF institucional UNIVESP;
2. **Segunda Metade (Auditoria Humana Inalienável):**
   - O que o estudante conferiu (ex.: *validade lógica, ausência de alucinações, pertinência contextual, fidelidade de formatação visual do .PDF e integridade textual*);
   - Onde conferiu (ex.: *Etapas 1 a 5, Ficha de Resultados e documento PDF gerado*);
   - Como conferiu (ex.: *analisando cada apontamento com o texto literal dos documentos de referência, confrontando as diretrizes do template e aplicando os conceitos teóricos da disciplina*).

Essa autodeclaração não pode ser estática nem genérica: deve espelhar com rigor cirúrgico a configuração real e todas as ferramentas de IA empregadas pelo estudante.

# Restrições

- Não utilizar pacotes Python inexistentes ou não garantidos (como `fitz`/PyMuPDF). Utilizar sempre o Chrome nativo do sistema via `subprocess`.
- Manter o documento anônimo para submissão em revisões por pares cegas.
- **Expansão de siglas:** Toda sigla ou acrônimo utilizado no documento (ex.: IES, IAG, AVA) deve obrigatoriamente ser acompanhado do seu significado por extenso na primeira menção (ex.: *"Instituições de Ensino Superior (IES)"*) ou em legenda explicativa direta, eliminando qualquer ambiguidade para o leitor.

