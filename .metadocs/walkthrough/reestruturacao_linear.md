# Walkthrough: Reestruturação Linear Completa do Repositório (10 Semestres)

O repositório foi totalmente reestruturado e alinhado com o currículo oficial da UNIVESP (**10 Semestres / 5 Anos**) extraído do PDF `EC_matrizcurricular.pdf`. Ele agora serve como um ambiente de estudos linear, organizado e escalável, pronto para acompanhar toda a trajetória acadêmica.

---

## 🛠️ Mudanças Realizadas

1. **Dashboard Central de 10 Semestres**:
   * O `README.md` principal da raiz foi atualizado para atuar como um painel acadêmico cobrindo os 10 semestres oficiais do curso de Engenharia de Computação, com links diretos, colunas de status, progresso e notas.

2. **Onboarding Acadêmico**:
   * Criado o diretório `00 - Onboarding-e-Matricula/README.md` contendo orientações práticas sobre metodologias de estudo ativas (Active Recall, Feynman, Spaced Repetition) e link para o manual local do aluno.

3. **Geração dos Semestres e Disciplinas**:
   * Criadas as pastas para todos os 10 semestres oficiais (`01 - Primeiro-Semestre/` a `10 - Decimo-Semestre/`).
   * Cada disciplina oficial foi gerada no formato `[Código] - [Nome]`. O `README.md` de cada pasta da disciplina foi preenchido com a ementa oficial correta de engenharia, objetivos, tabela de notas e cronograma semanal.
   * Criadas subpastas `semana-01` a `semana-08` em todas as disciplinas, contendo arquivos `semana-XX.md` com templates de anotações semanais de videoaulas baseados no padrão de `prompt.md`.

4. **Restauração e Preservação de Dados**:
   * Notas de Estruturas de Dados, POO, Sistemas Computacionais, Estatística, Gestão e Formação Profissional foram restauradas nos caminhos correspondentes em `03 - Terceiro-Semestre/`.
   * A disciplina de Banco de Dados (`COM300`), alocada de forma correta no 4º semestre pela nova grade, foi migrada para `04 - Quarto-Semestre/COM300 - Bancos de Dados/` preservando todos os arquivos de notas e PDFs originais.

5. **Áreas Administrativas de Conclusão**:
   * Criadas as pastas `11 - Atividades-Complementares/` e `12 - Colacao-de-Grau/` com READMEs estruturados contendo planilhas de registro de horas e checklists de documentos para formatura.
   * O Trabalho de Conclusão de Curso (TCC) foi realocado de forma linear para a pasta do 10º semestre (`10 - Decimo-Semestre/TCC530 - Trabalho de Conclusão de Curso (TCC)/`), mantendo a ementa e a ordem linear cronológica.

6. **Manual do Aluno**:
   * Criado o arquivo `Documents/manual-do-aluno.md` com o conteúdo da página oficial da UNIVESP formatado de forma limpa.

---

## 🔬 Verificação e Validação

* **Integridade das Notas**: Verificado que as notas anteriores em Markdown de Estrutura de Dados e Sistemas Computacionais e as de Banco de Dados (com PDFs anexos) foram preservadas e movidas perfeitamente.
* **Corretude das Ementas**: O script gerou as pastas e ementas correspondentes para as novas matérias de engenharia (como Circuitos Digitais, Sistemas Embarcados, Protocolos IoT, etc.) de acordo com a ementa institucional oficial da UNIVESP.
* **Navegabilidade**: Os links das tabelas do `README.md` raiz foram validados e estão funcionando relativos aos caminhos do repositório.
