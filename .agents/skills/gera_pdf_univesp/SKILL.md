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
   - Caixas de prompt em código (`code-block`) com fundo escuro (`#0f172a`) e texto azul/ciano (`#38bdf8`).
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

3. **Compilação do PDF via Python + Headless Chrome:**
   - Executar o comando Python em `subprocess` invocando o Chrome instalado no sistema:
     ```python
     import subprocess
     subprocess.run([
         r"C:\Program Files\Google\Chrome\Application\chrome.exe",
         "--headless=new",
         "--no-sandbox",
         r"--print-to-pdf=C:\caminho\para\arquivo.pdf",
         r"file:///C:/caminho/para/arquivo.html"
     ])
     ```
   - Confirmar a criação e o tamanho do arquivo via `os.path.getsize`.

4. **Regra de Versionamento:**
   - **NÃO commitar no Git** até que o usuário solicite explicitamente (`só commit quando eu solicitar`).

# Restrições

- Não utilizar pacotes Python inexistentes ou não garantidos (como `fitz`/PyMuPDF). Utilizar sempre o Chrome nativo do sistema via `subprocess`.
- Manter o documento anônimo para submissão em revisões por pares cegas.
