# Quinzena 03 — Módulo 3: Quando a IA Acerta uma Tarefa e Erra a Vizinha

> **Disciplina:** COM170 — Inteligência Artificial na Prática Acadêmica e Profissional  
> **Docente Responsável:** Prof. José Avelino Placca  
> **Foco do Módulo 3:** A **Fronteira Serrilhada** da IA (*Jagged Frontier*), o **Teste dos 10 Segundos**, a distinção entre **Dificuldade Aparente vs. Risco Real**, e a **Triagem Crítica de Validação**.

---

## 🧭 1. Visão Geral do Módulo

Existe uma armadilha psicológica central no uso de modelos de linguagem: **o erro não muda de tom**.

A IA responde a uma alucinação com a mesma elegância sintática, a mesma convicção e o mesmo vocabulário formal de quando acerta uma dedução complexa.
- Um erro que *soa errado*, você percebe e descarta.
- Um erro que *soa certo*, você não percebe e **entrega com o seu nome**.

> [!IMPORTANT]
> **A Saída Não É Desconfiar de Tudo:**  
> Desconfiar de 100% dos outputs paralisa o trabalho e anula o ganho de produtividade. A estratégia inteligente consiste em **decidir o que será conferido antes de ver a resposta**, aplicando uma triagem rápida baseada na probabilidade de falha do modelo.

---

## 🎥 2. Videoaula: Quando a IA Acerta uma Tarefa e Erra a Vizinha

- 📺 **Vídeo Oficial UNIVESP:** [Assistir no YouTube (Quando a IA Acerta uma Tarefa e Erra a Vizinha)](https://www.youtube.com/watch?v=Ilg1uYHwOnE)
- **Conceito-Chave:** A fronteira de capacidade da IA é **serrilhada e não-linear**: ela resolve problemas que parecem difíceis ao cérebro humano e tropeça em detalhes que parecem triviais.

---

## 🏔️ 3. A Fronteira Serrilhada e o Teste dos 10 Segundos

A intuição humana tende a acreditar que existe uma régua contínua de dificuldade: *"se a IA consegue programar um algoritmo complexo, ela certamente sabe o horário da biblioteca"*. **Essa premissa é falsa.**

```
                     ┌─────────────────────────────────────────┐
                     │     A FRONTEIRA SERRILHADA DA IA        │
                     └────────────────────┬────────────────────┘
                                          │
             ┌────────────────────────────┴────────────────────────────┐
             ▼                                                         ▼
     🌐 ALTA FREQUÊNCIA NO TREINO                              📉 BAIXA FREQUÊNCIA NO TREINO
     (Parte Segura / Baixo Risco)                              (Parte de Risco / Alucinação Provável)
     
     • Fotossíntese, Cálculo, ABNT,                            • Horário do polo neste semestre,
       Conceitos clássicos de programação.                       taxa vigente hoje, normas internas.
     • Está em milhares de páginas na web.                     • Está em poucos sites ou em PDFs fechados.
     • Resposta universalmente estável.                        • IA preenche a lacuna com plausibilidade.
```

---

### ⏱️ O Teste dos 10 Segundos

Antes de enviar qualquer prompt ou confiar no resultado, faça a pergunta de triagem:
> **"Esse assunto está em 1.000 sites públicos ou está em 3 páginas específicas?"**
- **1.000 sites:** A informação é amplamente documentada $\rightarrow$ **Zona Segura** (Baixo risco de erro factual).
- **3 sites (ou documentos internos/recentes):** A informação depende de dado local ou norma vigente $\rightarrow$ **Zona de Risco** (Obrigatório conferir na fonte primária).

---

### 🔍 Os Dois Vetores de Localização de Risco

1. 📍 **Raridade da Situação:**  
   *A tarefa envolve dado local, norma recente, terminologia interna ou regra específica da sua universidade/empresa?*  
   $\rightarrow$ Quanto mais específica e recente a informação, maior a chance de o modelo gerar uma resposta plausível, porém fabricada.

2. 👁️ **Verificabilidade:**  
   *Eu possuo base técnica prévia para perceber se a resposta estiver errada? E tenho acesso fácil à fonte oficial para conferir?*  
   $\rightarrow$ O risco de erro invisível não é apenas uma propriedade do algoritmo; é uma propriedade da **dupla (Tarefa + Conhecimento do Usuário)**.

---

## ⚖️ 4. As Perguntas do Módulo 2 vs. As Perguntas do Módulo 3

O Módulo 2 e o Módulo 3 trazem tríades de perguntas que atuam em momentos distintos do fluxo de trabalho:

| Dimensão | 📘 Tríade do Módulo 2 (Planejamento da Divisão) | 📗 Tríade do Módulo 3 (Auditoria do Resultado) |
| :--- | :--- | :--- |
| **Momento de Aplicação** | **Antes de começar:** Decide *como dividir* o trabalho com a ferramenta (**Centauro** vs. **Ciborgue**). | **Após a geração:** Decide *o que precisa ser conferido* antes de utilizar o texto entregue. |
| **Pergunta 1** | 🔍 **Auditabilidade:** *Consigo mostrar a terceiros de onde veio cada parte do que entreguei?* | 👁️ **Verificabilidade:** *Eu teria base suficiente para notar uma falha se ela estivesse ali?* |
| **Pergunta 2** | 🧠 **Ganho de Aprendizado:** *Fazer isso sozinho ensina algo que preciso dominar no semestre?* | 🧠 **Ganho de Aprendizado:** *(Mesmo critério: vale para a divisão e para a checagem).* |
| **Pergunta 3** | ⚠️ **Criticidade:** *Um erro aqui gera consequência séria para o resultado final?* | 📍 **Raridade:** *A situação envolve dado local, norma recente ou número solto sem autor?* |

> [!NOTE]
> **Auditabilidade vs. Verificabilidade:**  
> - **Auditabilidade** é *externa*: capacidade de comprovar a autoria e a procedência dos dados para o professor/banca.  
> - **Verificabilidade** é *interna*: capacidade cognitiva do estudante de enxergar o erro antes de ser enganado pela fluência do texto.

---

## 📊 5. Laboratório 1: Dificuldade Aparente vs. Risco Real (5 Pares)

Análise comparativa demonstrando que a complexidade aparente de uma tarefa **não anda junto** com o risco real de erro invisível:

| Par | Pedido A (Mais Complexo / Baixo Risco) | Pedido B (Mais Simples / Alto Risco) | Vetor Determinante | Por que o Pedido B é o Mais Perigoso? |
| :---: | :--- | :--- | :---: | :--- |
| **1** | Explicar como funciona a fotossíntese. | Dizer o horário da biblioteca do polo neste semestre. | 📍 **Raridade** | Fotossíntese é universal e abundante no pré-treino; o horário do polo é local, recente e raramente indexado. |
| **2** | Escrever a fórmula de juros compostos e explicar termos. | Dizer a taxa vigente hoje de um financiamento estudantil. | 📍 **Raridade** | A fórmula matemática é imutável há séculos; a taxa vigente oscila e depende de regulação atualizada. |
| **3** | Explicar o conceito de norma técnica e sua finalidade. | Dizer o que a norma passou a exigir na revisão do ano passado. | 📍 **Raridade** | O conceito é clássico; a revisão recente circulou pouco e muitas vezes está atrás de paywall/norma fechada. |
| **4** | Traduzir parágrafo de um idioma que **você lê**. | Traduzir parágrafo de um idioma que **você NÃO lê**. | 👁️ **Verificabilidade** | A tarefa de tradução é idêntica para a IA, mas no segundo caso você não tem base para detectar distorções. |
| **5** | Resumir um capítulo que **você já leu**. | Resumir um capítulo que **você AINDA NÃO leu**. | 👁️ **Verificabilidade** | Se você não leu, aceita o resumo no escuro, sem notar omissões críticas de conceitos que serão cobrados. |

---

### 📌 Síntese da Matriz de Risco

```
  ┌───────────────────────────────────────────────┬──────────────────────┬─────────────────────────┐
  │ PEDIDO ANALISADO                              │ DIFICULDADE APARENTE │ RISCO DE ERRO INVISÍVEL │
  ├───────────────────────────────────────────────┼──────────────────────┼─────────────────────────┤
  │ Explicar como funciona a fotossíntese          │ Parece difícil       │ 🟢 Baixo (Universal)    │
  │ Horário da biblioteca do polo neste semestre  │ Parece trivial       │ 🔴 Alto (Local/Raro)    │
  │ Fórmula de juros compostos e variáveis        │ Parece difícil       │ 🟢 Baixo (Universal)    │
  │ Taxa vigente hoje de financiamento            │ Parece trivial       │ 🔴 Alto (Dinâmico/Hoje) │
  │ Explicar conceito de norma técnica            │ Parece média         │ 🟢 Baixo (Conceitual)   │
  │ Mudança na revisão da norma no ano passado    │ Parece média         │ 🔴 Alto (Recente)       │
  │ Traduzir texto em idioma que você lê          │ Parece média         │ 🟢 Baixo (Auditável)    │
  │ Traduzir texto em idioma que você NÃO lê      │ Parece média         │ 🔴 Alto (Às cegas)      │
  │ Resumir capítulo que você já leu              │ Parece trivial       │ 🟢 Baixo (Conferível)   │
  │ Resumir capítulo que você NÃO leu             │ Parece trivial       │ 🔴 Alto (Sem âncora)    │
  └───────────────────────────────────────────────┴──────────────────────┴─────────────────────────┘
```

---

## 🎯 6. Laboratório 2: Triagem de Tempo Escasso — O Que Conferir Primeiro?

Quando você recebe uma resposta longa com várias afirmações e **o tempo só permite conferir 2 itens**, onde concentrar o esforço de validação?

### Caso 1: Trabalho sobre Acessibilidade Digital

| Afirmação Gerada pela IA | Classificação de Risco | Ação Recomendada |
| :--- | :---: | :--- |
| 1. Acessibilidade busca garantir uso para PCDs. | 🟢 Baixo (Conceito genérico) | Manter sem checagem urgente. |
| 2. A referência internacional mais usada é a WCAG. | 🟢 Baixo (Consenso global) | Manter sem checagem urgente. |
| 3. A WCAG organiza critérios em 3 níveis (A, AA, AAA). | 🟢 Baixo (Detalhe documentado) | Manter sem checagem urgente. |
| 4. **No Brasil, regra para órgãos públicos vence este ano.** | 🔴 **ALTO (Regra local/recente)** | 🔍 **CONFERIR OBRIGATORIAMENTE** |
| 5. **Sua universidade lançou manual interno de contraste.** | 🔴 **ALTO (Dado institucional)** | 🔍 **CONFERIR OBRIGATORIAMENTE** |

---

### Caso 2: Resumo sobre IA na Correção Acadêmica

| Afirmação Gerada pela IA | Classificação de Risco | Ação Recomendada |
| :--- | :---: | :--- |
| 1. Existem ferramentas de detecção usadas por faculdades. | 🟢 Baixo (Fato genérico) | Manter sem checagem urgente. |
| 2. Há indícios de que detectores erram com não-nativos. | 🟡 Médio (Afirmação sem dado cravado) | Buscar fonte quando for citar. |
| 3. **Estudo de 2023 mediu erro acima de 60% no grupo.** | 🔴 **ALTO (Número exato sem autor)** | 🔍 **CONFERIR OBRIGATORIAMENTE** |
| 4. **Sua faculdade adotou uma dessas ferramentas na nota.** | 🔴 **ALTO (Dado local/institucional)** | 🔍 **CONFERIR OBRIGATORIAMENTE** |
| 5. Recomenda-se combinar IA com leitura humana. | 🟢 Baixo (Recomendação comum) | Manter sem checagem urgente. |

> [!WARNING]
> ### 🚨 O Padrão Mais Perigoso de Alucinação: "O Número Solto"
> O padrão clássico de erro invisível é o **número preciso acompanhado de um ano e sem autor/artigo citado** (*ex: "estudo de 2023 apontou 60%"*).  
> A máquina preenche a lacuna com números matematicamente plausíveis para satisfazer a coesão textual. Se esse dado entrar no seu trabalho acadêmico ou relatório profissional, **é o seu nome que responde pela falsidade**.

---

## ⚖️ 7. Caso Jurídico Real: O Julgamento da Air Canada (2022)

O caso emblemático que definiu a responsabilidade jurídica sobre outputs de IA:

### O Caso
Em novembro de 2022, um passageiro consultou o chatbot de atendimento da companhia aérea **Air Canada** para verificar se existia política de desconto de luto retroativo devido ao falecimento de sua avó.  
O chatbot respondeu com total segurança afirmativa: *"Sim, você pode comprar a passagem agora e solicitar o reembolso da diferença em até 90 dias"*.

O passageiro viajou e solicitou o reembolso. A política oficial real da companhia **não permitia** reembolso retroativo.

### A Defesa da Companhia e a Decisão Judicial
- **Defesa da Air Canada:** Alegou que o chatbot de IA era *"uma entidade computacional separada, responsável por seus próprios erros e atos"*.
- **Decisão do Tribunal:** O tribunal **rejeitou integralmente** o argumento da empresa e determinou o pagamento do reembolso e indenização.
- **Fundamentação Jurídica:** O chatbot é parte integrante do sistema da empresa. **Quem publica e disponibiliza o serviço responde integralmente por tudo o que a máquina diz.**

```
 ┌────────────────────────────────────────────────────────────────────────┐
 │                      O PRINCÍPIO DA RESPONSABILIDADE                   │
 │                                                                        │
 │  1. A máquina nunca responde em tribunal, na banca ou no trabalho.    │
 │     No dia seguinte ao erro, ela continuará online respondendo prompts.│
 │                                                                        │
 │  2. Toda responsabilidade civil, acadêmica e profissional recai sobre  │
 │     quem ASSINOU e PUBLICOU a informação.                              │
 │                                                                        │
 │  3. PROCEDIMENTO EM UMA FRASE:                                         │
 │     "Localize a afirmação central da qual o resultado depende para     │
 │      ser verdadeiro, e confira essa afirmação em fontes primárias."    │
 └────────────────────────────────────────────────────────────────────────┘
```
