# Plano de Implementação: Reestruturação Linear e Escalável (Matrícula à Colação de Grau)

Este plano descreve a reestruturação completa do repositório para transformá-lo em uma trilha linear, organizada e didática de estudos para o curso de **Engenharia de Computação (UNIVESP)**, com base nas decisões de design tomadas.

---

## Decisões de Design Aprovadas

1. **Padrão de Nomeação**: Formato `[Código] - [Nome]` (ex: `COM160 - Estruturas de Dados`) para todas as disciplinas.
2. **Estrutura Semanal Antecipada**: Para cada matéria, geraremos as pastas `semana-01` a `semana-08` com arquivos de notas `semana-XX.md` baseados em um template didático padrão de estudos.
3. **Projetos Integradores (PIs)**: Organizados cronologicamente dentro de seus respectivos semestres de realização (ex: `PJI110` no 4º Semestre).
4. **Dashboard Principal**: O `README.md` raiz conterá tabelas cronológicas por semestre com colunas para:
   * **Código** e **Disciplina**
   * **Status** (A Cursar, Cursando, Concluída)
   * **Progresso** (barra visual `[████████                ] 40%`)
   * **Nota Final**

---

## Arquitetura Final de Pastas

```
EngComp-UNIVESP/
├── 00 - Onboarding-e-Matricula/
│   └── README.md                    # Metodologia de estudo, links úteis e onboarding
├── 01 - Primeiro-Semestre/
│   ├── SOC100 - Ética, Cidadania e Sociedade/
│   │   ├── README.md
│   │   ├── semana-01/
│   │   │   └── semana-01.md
│   │   └── ... (até semana-08)
│   ├── LET110 - Leitura e Produção de Textos/
│   └── ...
├── 02 - Segundo-Semestre/
├── 03 - Terceiro-Semestre/ (Migrado e renomeado de "03 - semestre")
│   ├── COM160 - Estruturas de Dados/
│   ├── COM200 - Formação Profissional em Computação/
│   ├── COM210 - Sistemas Computacionais/
│   ├── PES300 - Estatística e Probabilidade/
│   ├── ADM200 - Gestão da Inovação e Desenvolvimento de Produtos/
│   └── COM230 - Programação Orientada a Objetos/
├── 04 - Quarto-Semestre/ (Com "COM300 - Banco de Dados" migrado para cá)
├── 05 - Quinto-Semestre/
├── 06 - Sexto-Semestre/
├── 07 - Setimo-Semestre/
├── 08 - Oitavo-Semestre/
├── 09 - Trabalho-de-Conclusao/
├── 10 - Atividades-Complementares/
└── 11 - Colacao-de-Grau/
```

---

## Plano de Ação

### Fase 1: Backup e Limpeza
* Realizar um backup temporário de `03 - semestre/` para uma pasta de scratch para evitar qualquer risco de perda de arquivos de notas atuais durante a reorganização.
* Deletar a pasta `03 - semestre/` antiga do repositório para evitar duplicações e conflitos.

### Fase 2: Geração Programática da Estrutura
  1. Crie os diretórios de nível superior (`00 - Onboarding-e-Matricula`, `01 - Primeiro-Semestre`, ..., `11 - Colacao-de-Grau`).
  2. Crie as subpastas de disciplinas de acordo com a matriz do curso extraída de `matriz_curricular_tabela.md`.
  3. Gere o arquivo `README.md` de cada disciplina com a ementa correta e objetivos extraídos de `matriz_curricular.md`.
  4. Crie as pastas `semana-01` a `semana-08` com arquivos de anotações contendo um template em pt-BR com espaços reservados para:
     * Resumo das videoaulas (conforme padrão de `prompt.md`).
     * Leituras indicadas.
     * Exercícios e anotações pessoais.
  5. Crie as estruturas para as Atividades Complementares, TCC e Colação de Grau.

### Fase 3: Restauração de Dados Existentes
* Restaurar as notas já existentes da pasta de backup temporário para os novos caminhos correspondentes:
  * Notas das disciplinas do 3º semestre no novo caminho `03 - Terceiro-Semestre/`.
  * Notas de Banco de Dados no novo caminho `04 - Quarto-Semestre/COM300 - Banco de Dados/`.

### Fase 4: Dashboard Central e Onboarding
* Atualizar o `README.md` principal da raiz com o novo dashboard de progresso do curso.
* Criar o arquivo `README.md` de Onboarding com dicas de metodologias de estudo ativas aplicáveis ao ensino a distância (EAD).

---

## Verification Plan

### Manual Verification
1. **Auditoria de Integridade**: Validar se nenhum arquivo de anotação anterior foi corrompido ou perdido na migração de `03 - semestre/` para `03 - Terceiro-Semestre/` e `04 - Quarto-Semestre/COM300 - Banco de Dados/`.
2. **Checagem de Links**: Clicar e navegar pelos links relativos de semestres e disciplinas a partir do `README.md` raiz para certificar sua integridade.
3. **Validação de Encoding**: Certificar que todos os arquivos criados e modificados estão salvos em UTF-8 com acentuação legível.
