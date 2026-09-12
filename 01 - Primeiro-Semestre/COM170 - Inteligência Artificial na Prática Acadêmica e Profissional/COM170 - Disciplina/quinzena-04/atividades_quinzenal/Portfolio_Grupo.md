# Protocolo de Contexto da Nexo - Quinzena 04
## Trabalho em Grupo: O Protocolo de Contexto da Nexo (Módulo 7)

> **Disciplina:** COM170 - Inteligência Artificial na Prática Acadêmica e Profissional  
> **Instituição:** UNIVESP | Primeiro Semestre  
> **Envio:** Laboratório de Revisão do Módulo 7 (Enviado pelo representante do grupo)  
> **Arquivos Exportados:** [📄 Versão Oficial em PDF](./Protocolo_Grupo_M7.pdf) │ [🌐 Versão HTML Interativa](./Protocolo_Grupo_M7.html)  
> **PDF Original de Referência:** [`../Q4_M5-template-grupo.pdf`](../Q4_M5-template-grupo.pdf)  
> **História Base (Integrante 1):** [Caso A - Sessenta Páginas Coladas (Lorena)](./Caso_A.md)

---

> [!IMPORTANT]
> **ATENÇÃO AO ANONIMATO NA ENTREGA DO GRUPO:**  
> A revisão no Moodle é anônima. **Não escrevam nomes próprios de estudantes** neste documento nem no documento final enviado: identifiquem os membros apenas como **Integrante 1**, **Integrante 2**, etc. O representante que realiza o upload já é identificado automaticamente pelo próprio Moodle.

---

### 📋 Identificação do Trabalho Coletivo

* **Eixo Temático:** Computação (Engenharia de Computação)
* **Representante da Quinzena (Responsável pelo Envio no M7):** Integrante 1
* **Integrantes Participantes na Rodada:**
  1. **Integrante 1:** Caso A · Sessenta páginas coladas (Lorena - Atendimento)
  2. **Integrante 2:** Caso do Ivan · O passo a passo da central de ajuda (Ivan - Produto)
  3. **Integrante 3:** Caso A · Sessenta páginas coladas (Lorena - Atendimento)

> [!NOTE]
> **Dinâmica do Grupo:**  
> O grupo contou com 3 integrantes ativos. Os Integrantes 1 e 3 analisaram o Caso A (Lorena), convergindo independentemente para o diagnóstico de sobrecarga da janela e falta de restrições, enquanto a Integrante 2 trouxe o Caso de Ivan, evidenciando a contaminação por histórico antigo não resetado. Essa complementaridade sustenta com excelência a generalização sistêmica da Nexo nos Blocos 2 e 3.

---

## 🧱 Bloco 1 · O Que Cada História Mostrou

*(Uma linha por integrante participante, extraída diretamente do Fecho do Portfólio Individual de cada um. O grupo não reescreve: compara as providências trazidas):*

| Integrante e História | O que faltou | Quando poderia ter sido evitado | A providência |
| :--- | :--- | :--- | :--- |
| **Integrante 1**<br>*(Caso A: Lorena - Atendimento)* | Faltou isolar o contexto relevante (recorte do tema) e explicitar a restrição sobre exceções para contas conjuntas (limite de janela). | No momento da preparação do contexto antes do envio do prompt, ao colar 60 páginas brutas do manual sem filtro prévio. | Instituir a regra de nunca colar manuais na íntegra: extrair apenas a seção temática específica e exigir checagem ativa de exceções cadastrais. |
| **Integrante 2**<br>*(Caso: Ivan - Produto)* | A política atualizada e a orientação explícita para desconsiderar a regra antiga de dez mil reais. | Antes do envio do pedido e durante a conferência da resposta, antes da publicação. | Abrir uma nova conversa ou limpar o contexto anterior, inserir a política vigente e conferir todos os valores e procedimentos com a fonte oficial antes de publicar. |
| **Integrante 3**<br>*(Caso A: Lorena - Atendimento)* | Faltou definir o componente de restrições no pedido e realizar a verificação do texto final. | Antes de enviar o texto para a IA e no momento antes de colar a resposta para o cliente. | Selecionar e enviar à IA apenas as páginas do manual que falam sobre autenticação e ler a resposta gerada linha a linha antes de enviá-la. |

---

## 🔍 Bloco 2 · O Padrão da Nexo

> **Instrução:** Este bloco é o coração do trabalho em grupo. Olhem para as histórias reunidas no Bloco 1 e respondam à pergunta norteadora. A análise foca no **processo organizacional da Nexo**, e não em falhas individuais de pessoas.

### 📍 Pergunta Norteadora:
> *O que se repete entre as histórias, e o que isso diz sobre o processo da Nexo, e não sobre as pessoas?*

#### ✍️ Resposta do Grupo:
A comparação direta entre a história de **Lorena (Atendimento)** e a de **Ivan (Produto)** revela com nitidez que as falhas não decorrem de desatenção individual, mas de um **vazio metodológico no processo corporativo da Nexo sobre a gestão da janela de contexto**:

1. **Os Dois Lados do Erro de Contexto:**  
   * **Lorena pecou pelo excesso desordenado:** Colou 60 páginas inteiras de manual na janela de uma só vez, soterrando a exceção crítica de contas conjuntas no meio de ruído informacional desnecessário (*loss in the middle*).  
   * **Ivan pecou pela poluição de histórico:** Reaproveitou uma conversa antiga da manhã sem limpar a memória da sessão, permitindo que a regra revogada (limite de dez mil reais) continuasse ativa e contaminasse a resposta da IA.
2. **A Ausência de um Protocolo de Higiene de Contexto:**  
   Em ambos os casos, a empresa exigiu velocidade e incentivou o uso de IA, mas nunca treinou suas equipes sobre o funcionamento da janela de contexto: nem como isolar recortes relevantes (o caso de Lorena), nem quando resetar uma conversa obsoleta (o caso de Ivan).
3. **Inversão da Cadeia de Responsabilidade:**  
   Tanto no chat quanto na central de ajuda, o texto gerado pela IA foi tratado como produto final pronto para consumo do cliente, pulando a etapa de auditoria contra a fonte oficial primária.

Portanto, o padrão da Nexo demonstra que **o problema reside na cultura de implantação da ferramenta**: a liderança transferiu a expectativa de produtividade para a IA sem estruturar as travas mínimas de preparação de entrada e verificação de saída.

---

## 📜 Bloco 3 · O Protocolo em Três Linhas

> **Instrução:** Partindo das providências levantadas no Bloco 1, o que vira regra mandatória para qualquer colaborador da Nexo? Generalizem as conclusões em três regras claras e acionáveis:

### 1️⃣ O que se escreve antes de enviar um pedido:
> **Regra 1 (Higiene de Contexto e Recorte Focado):**  
> *Antes de disparar o prompt, inicie sempre uma sessão limpa para novas tarefas (evitando contaminação por históricos antigos) e anexe apenas o trecho estritamente pertinente do documento (recorte de poucas páginas), definindo explicitamente no texto as restrições mandatórias e as regras de exceção vigentes.*

### 2️⃣ O que se confere depois de receber a resposta:
> **Regra 2 (Auditoria Obrigatória de Saída):**  
> *Antes de qualquer publicação externa ou envio ao cliente, execute a conferência factual linha a linha confrontando a resposta da IA diretamente contra a fonte primária oficial, checando expressamente valores numéricos, datas, limites de corte e condições de exceção.*

### 3️⃣ O que nenhuma instrução bem escrita resolve sozinha:
> **Regra 3 (O Limite Inviolável do Julgamento e da Responsabilidade Humana):**  
> *Nenhuma engenharia de prompt ou de contexto é capaz de impedir erros se o usuário não alimentar a IA com dados atualizados, e nenhuma fluência de texto substitui a responsabilidade profissional e legal indelegável de assinar e auditar as consequências do que é entregue.*

---

## 📋 Rubrica de Avaliação (Critérios do Laboratório de Revisão M7)

| Critério | Para Retomar | Em Construção | Consolidado (Meta) |
| :--- | :--- | :--- | :--- |
| **Critério 1:** O Bloco 1 traz a providência de cada história | Linhas incompletas, faltando a providência de pelo menos uma história. | As linhas estão completas, mas repetem o diagnóstico sem dizer o que fazer. | **Todas as linhas estão completas, e cada providência aponta uma ação clara.** |
| **Critério 2:** O Bloco 2 olha as histórias juntas | Descreve uma história isolada, sem comparar com as outras. | Aponta uma semelhança entre duas histórias, sem dizer o que isso indica sobre o processo. | **Nomeia o que se repete entre as histórias do grupo, ligado a algo do processo da Nexo, e não a uma pessoa.** |
| **Critério 3:** O Bloco 3 generaliza em regra aplicável | Repete uma das providências do Bloco 1 sem generalizar. | As três linhas existem, mas pelo menos uma é genérica demais para orientar alguém. | **As três linhas descrevem uma ação clara, aplicável por qualquer pessoa da Nexo, e a terceira reconhece o que nenhuma instrução resolve sozinha.** |
