# Quinzena 03 — Módulo 4: Cada Mensagem Tem um Custo & Síntese da Q3

> **Disciplina:** COM170 — Inteligência Artificial na Prática Acadêmica e Profissional  
> **Docente Responsável:** Prof. José Avelino Placca  
> **Foco do Módulo 4:** O **custo energético e hídrico invisível da IA**, a análise crítica de métricas (**As Três Perguntas para Ler um Número**), o laboratório **Um Semestre de Mensagens** e o **Miniquiz de Síntese da Quinzena 03** (com todas as questões e justificativas comentadas).

---

## 🧭 1. Visão Geral do Módulo

Do ponto de vista do usuário, interagir com uma IA é apenas digitar numa caixa de texto e ler uma resposta na tela. Do outro lado da infraestrutura, existe um **data center físico**, com milhares de servidores, processadores gráficos especializados (GPUs/TPUs), memória e potentes sistemas de refrigeração funcionando ininterruptamente.

> [!IMPORTANT]
> **Premissas Fundamentais deste Módulo:**
> 1. **Sem Cultivar Culpa:** Uma mensagem isolada custa muito pouco em termos absolutos. O objetivo não é criar constrangimento ou abstinência de uso.
> 2. **O Impacto Reside no Padrão e no Volume:** O custo agregado varia drasticamente conforme o **tipo de tarefa solicitada** (texto vs. imagem) e o **modo de trabalho adotado** (delimitação prévia vs. dezenas de trocas contínuas sem planejamento).

---

## 🎥 2. Videoaula: O Custo Invisível de Cada Conversa com a IA

- 📺 **Vídeo Oficial UNIVESP:** [Assistir no YouTube (O Custo Invisível de Cada Conversa com a IA)](https://www.youtube.com/watch?v=ZHlHULBahpQ)
- **Conceito-Chave:** A aula desmistifica o funcionamento físico dos data centers, ensina a separar consumo pontual de consumo acumulado em escala, e prepara a base para a discussão ambiental no trabalho em grupo.

---

## ⚡ 3. As Três Réguas de Consumo Energético

Para estimar e comparar o impacto físico do uso de inteligência artificial, utilizamos três grandezas de referência:

```
                            ┌─────────────────────────────────┐
                            │    RÉGUAS DE CONSUMO DE ENERGIA │
                            └────────────────┬────────────────┘
                                             │
             ┌───────────────────────────────┼───────────────────────────────┐
             ▼                               ▼                               ▼
    💬 MENSAGEM DE TEXTO            🖼️ GERAÇÃO DE IMAGEM           📱 CARGA DE CELULAR
        ~0,24 Wh / pedido               ~2,90 Wh / imagem              22 Wh / carga completa
    (Google / Gemini, Ago/2025)     (Luccioni et al., FAccT 2024)   (Referência de escala)
    Equivale a 9 segundos de TV     ~12x mais cara que texto        1 carga ≈ 91 mensagens de texto
```

### 📌 Detalhamento das Réguas Oficiais

1. **💬 Mensagem de Texto (Google Gemini, Relatório Técnico de Ago/2025):**
   - **0,10 Wh:** Consumo estrito do chip acelerador (TPU/GPU) executando o cálculo da inferência.
   - **0,24 Wh:** Custo sistêmico global (chip + CPU auxiliar + memória + servidores em prontidão + refrigeração do data center).
2. **🖼️ Geração de Imagem (Luccioni, Jernite e Strubell, Conferência FAccT 2024):**
   - **2,907 Wh por imagem** ($2,907\text{ kWh}$ por 1.000 imagens). Medição de laboratório em modelos abertos (*Stable Diffusion*).
3. **📱 Unidade de Referência:**
   - **22 Wh ($0,022\text{ kWh}$):** Energia consumida para carregar 100% da bateria de um smartphone moderno.

---

### 📊 Hierarquia de Custo Computacional por Tipo de Operação

Pesquisas empíricas de *Luccioni et al. (2024)* comprovam que a demanda energética é intrínseca à complexidade matemática da tarefa:

$$\text{Classificação / Análise de Texto } (0,002\text{ kWh/mil}) < \text{Geração de Texto } (0,047\text{ kWh/mil}) < \text{Geração de Imagem } (2,907\text{ kWh/mil})$$

---

## 🔬 4. Laboratório "Um Semestre de Mensagens" (18 Semanas)

Simulação comparativa entre dois perfis de estudantes ao longo de um semestre letivo padrão:

### 📐 Parâmetros Comparados

| Decisão de Uso | 🧑 Perfil Delimitado (Centauro) | 🤖 Perfil Trocas Contínuas (Ciborgue Intenso) |
| :--- | :--- | :--- |
| **1. Abertura da Sessão** | Delimita antes (média de **6 requisições/sessão**). | Constrói junto sem plano (**40 requisições/sessão**). |
| **2. Frequência Semanal** | 15 sessões/semana (3 por dia útil). | 5 sessões/semana (1 por dia útil). |
| **3. Geração de Imagens** | Planeja antes e gera **2 imagens/semana**. | Gera variações para ver e escolhe (**8 imagens/semana**). |

---

### 🧮 Conta de Energia Consolidada no Semestre

```
  ┌─────────────────────────────────┬──────────────────────────────────┬──────────────────────────────────┐
  │ Métrica no Semestre (18 sem.)   │ 🧑 Padrão Delimitado             │ 🤖 Padrão Trocas Contínuas       │
  ├─────────────────────────────────┼──────────────────────────────────┼──────────────────────────────────┤
  │ Requisições de Texto            │ 1.620 req  ───►  388,8 Wh        │ 3.600 req  ───►  864,0 Wh        │
  │ Imagens Geradas                 │ 36 img     ───►  104,7 Wh        │ 144 img    ───►  418,6 Wh        │
  ├─────────────────────────────────┼──────────────────────────────────┼──────────────────────────────────┤
  │ TOTAL POR ESTUDANTE             │ 493,5 Wh  (≈ 22,4 cargas cel.)   │ 1.282,6 Wh (≈ 58,3 cargas cel.)  │
  │ TURMA DE 100 ALUNOS             │ 49,3 kWh                         │ 128,3 kWh (Distância de 2,6x)    │
  └─────────────────────────────────┴──────────────────────────────────┴──────────────────────────────────┘
```

> [!TIP]
> ### 💡 A Fórmula Estrutural do Impacto:
> $$\text{Impacto Total} = \text{Custo Unitário da Tarefa} \times \text{Volume de Requisições}$$
> - O custo de uma mensagem isolada é desprezível ($0,24\text{ Wh}$). O que faz a conta disparar é o **número de iterações e idas e vindas desnecessárias**.
> - Esta estimativa serve para demonstrar a **ordem de grandeza e comparar padrões de uso**, e não para fiscalizar ou medir individualmente o consumo de alunos.

---

### 📝 Questões de Análise do Laboratório "Um Semestre de Mensagens"

#### Questão 1: Volume vs. Custo Unitário
**Enunciado:** Considere o padrão mais intenso desta conta: 40 requisições por sessão, 15 sessões por semana e 8 imagens por semana, ao longo de 18 semanas. Ele soma cerca de 2.592 Wh em mensagens de texto e cerca de 419 Wh em imagens, mesmo com cada imagem custando por volta de doze vezes o que custa uma mensagem de texto. O que explica a diferença entre esses dois totais?

- (A) O custo do texto acumula porque cada nova requisição reprocessa a conversa inteira desde a primeira mensagem. *(Incorreta: A conta usou valor médio fixo de 0,24 Wh sem acréscimo).*
- (B) A régua do texto vem de serviço comercial e a de imagem de laboratório, criando o descompasso. *(Incorreta: Mesmo na mesma medição, a contagem de mensagens superaria as imagens).*
- **(C) O volume de cada tipo de pedido, porque foram 144 imagens contra 10.800 requisições de texto no semestre.**  
  *(Correta / Se sustenta: Cada imagem custa 12x mais, mas o texto apareceu 75x mais vezes. A multiplicação pelo volume é o que decide).*
- (D) A régua usada para imagem foi estimada por baixo neste material. *(Incorreta: A régua de imagem é a mais alta).*
- (E) As imagens são processadas em equipamentos mais eficientes do que os usados para texto. *(Incorreta: Imagem exige muito mais cálculo e energia).*

---

#### Questão 2: O Alcance da Estimativa
**Enunciado:** Você mostra a estimativa que acabou de montar para um colega. Ele olha o total, pensa um pouco e responde: *"Ótimo, agora eu sei quanto consumi no semestre passado."* Qual resposta descreve o alcance desta estimativa?

- (A) Ela mede o consumo com precisão, porque todos os números vêm de fontes publicadas. *(Incorreta: Publicado não significa preciso para medir uma pessoa real).*
- (B) Ela tem pouca utilidade prática, porque os fornecedores não divulgam o contador na tela. *(Incorreta: Dá ordem de grandeza sólida para tomada de decisão).*
- (C) Ela só vale para quem usa o serviço da régua e perde a validade com qualquer outra ferramenta. *(Incorreta: A hierarquia e a proporção aritmética se mantêm).*
- (D) Ela vale como medida exata para uma turma, porque os erros individuais se compensam. *(Incorreta: O desvio é sistemático e multiplica com a turma).*
- **(E) Ela mostra ordem de grandeza e a direção da diferença entre dois padrões de uso, sem medir pessoa nenhuma.**  
  *(Correta / Se sustenta: A estimativa autoriza comparar o impacto relativo de dois hábitos de trabalho; ela não autoriza fiscalizar ou medir o consumo passado de alguém).*

---

## 🧐 5. As Três Perguntas para Ler um Número de Consumo

Números de consumo de IA variam com frequência entre artigos e postagens na internet (às vezes por fatores de $10\times$ a $100\times$). Para não ser enganado por estatísticas soltas, aplique as 3 perguntas:

```
                            ┌─────────────────────────────────┐
                            │    COMO LER QUALQUER NÚMERO     │
                            └────────────────┬────────────────┘
                                             │
             ┌───────────────────────────────┼───────────────────────────────┐
             ▼                               ▼                               ▼
    ❓ 1. QUEM MEDIU?               ❓ 2. O QUE ENTROU NA CONTA?    ❓ 3. QUAL MODELO E ANO?
    Fornecedor tem acesso total     Fronteira do sistema medido.    Modelos e data centers
    mas tem interesse comercial.    Chip isolado vs. Galpão         mudam a cada versão.
    Laboratórios medem por fora.    completo com refrigeração.      Dado velho perde validade.
```

1. **Quem mediu?**  
   A medição veio da empresa fornecedora ou de um laboratório acadêmico independente? A fonte e a declaração de metodologia fazem parte do dado.
2. **O que entrou na conta? (Fronteira do Escopo):**  
   - Mediu apenas o chip de IA ou incluiu CPUs, memória e climatização?
   - *Exemplo de Água:* Mediu apenas a água evaporada na torre do data center ($0,26\text{ mL}$ - *Google*) ou somou a água consumida na usina para gerar a eletricidade (*Li et al., ACM 2025*)? Ambos estão corretos, mas respondem a **perguntas diferentes**.
3. **De qual modelo e de qual ano?**  
   A eficiência dos chips de IA evolui em ritmo acelerado. Um dado de 2023 mede uma arquitetura que já não reflete o modelo atual.

---

### 📝 Casos Práticos de Aplicação das Três Perguntas

#### Caso 1: Dois Valores no Mesmo Relatório (0,10 Wh vs. 0,24 Wh)
- **Cenário:** Relatório do Google publica 0,10 Wh e 0,24 Wh para o mesmo pedido no Gemini. Um estudante alega que uma das medições precisa estar errada.
- **Resposta Correta:** **Os dois valores estão corretos, e a diferença está no conjunto de equipamentos que cada conta incluiu.**  
  *(0,10 Wh mede apenas o chip de inferência; 0,24 Wh inclui CPU, memória, servidores em standby e refrigeração).*

#### Caso 2: Consumo de Água (0,26 mL no Google vs. Artigo Li et al. na ACM)
- **Cenário:** Reportagem diz que "estudos divergem e não há como saber nada sobre água gasta por IA".
- **Resposta Correta:** **Os dois trabalhos medem coisas diferentes, cada um responde à própria pergunta, e por isso pedem leitura separada.**  
  *(Google mede evaporação local no data center; Li et al. incluem a água gasta na geração da energia da rede elétrica).*

#### Caso 3: Citar Dado do Fornecedor em Trabalho Acadêmico
- **Cenário:** Você vai citar o valor de 0,24 Wh do relatório do Google em um trabalho acadêmico.
- **Resposta Correta:** **O dado entra no texto com a origem declarada ao lado dele, porque a origem faz parte da informação.**  
  *(Ex: "segundo relatório da própria empresa em agosto/2025, ainda sem verificação independente").*

#### Caso 4: Notícia Sensacionalista em Rede Social ("Uma garrafa de água por prompt")
- **Cenário:** Postagem viral com gráfico bonito afirma que cada pergunta gasta uma garrafa de água, sem citar modelo, ano ou escopo.
- **Resposta Correta:** **Procurar as três informações que faltam antes de repassar, e tratar o número como não verificado até que apareçam.**  
  *(Sem Quem mediu, O que entrou na conta e Qual modelo/ano, o dado é ilegível e não pode ser repassado).*

---

## 🏆 6. Miniquiz Final da Quinzena 03 (Questões Completas Comentadas)

O Miniquiz final integra os quatro instrumentos trabalhados na quinzena em questões completas no formato da prova presencial:

---

### 📌 Questão 1 (Módulo 1 · Taxonomia de Competências)

> **Enunciado:**  
> Uma profissional de um laboratório de análises descreve como o trabalho dela mudou em dois anos. Antes, boa parte do turno era ocupada transferindo resultados de exames de um sistema para outro, campo por campo. Um programa passou a fazer essa transferência sozinho.  
> Ela sempre explicou resultados a pacientes e a médicos quando eles perguntavam. Agora faz isso várias vezes por dia, porque o sistema assinala automaticamente os valores fora do padrão e as pessoas querem entender o que aquilo significa no caso delas.  
> Considerando a taxonomia que separa o que permanece (*Enduring*), o que muda de forma (*Evolving*), o que surge (*Emerging*) e o que perde espaço (*Diminishing*), identifique a leitura que corresponde às duas competências descritas.

- (A) As duas competências descritas são *Evolving*, porque as duas continuam sendo realizadas por um outro caminho.  
  *❌ Se desfaz:* A transferência foi totalmente assumida pelo programa (a profissional deixou de fazer), o que a torna *Diminishing*, e não *Evolving*.
- (B) Transferir resultados é *Evolving*, e explicar um resultado é *Diminishing*, porque o sistema já assinala o padrão.  
  *❌ Se desfaz:* Assinalar um número fora do padrão é execução mecânica de regra; explicar o significado clínico a uma pessoa exige julgamento e contexto, e sua demanda cresceu.
- (C) Transferir resultados é *Enduring*, porque alguém confere a transferência, e explicar um resultado é *Evolving*.  
  *❌ Se desfaz:* Conferência pontual não devolve o tempo de digitação. *Enduring* é reservada ao julgamento com responsabilidade.
- **(D) Transferir resultados entre sistemas é *Diminishing*, e explicar um resultado a quem depende dele é *Enduring*.**  
  *✅ CORRESPONDE (Gabarito Oficial):* Transferir ocupa cada vez menos tempo porque a máquina executa (*Diminishing*). Explicar a um paciente exige julgamento sobre consequências e responsabilidade humana indelegável (*Enduring*).
- (E) Transferir resultados é *Diminishing*, e explicar um resultado é *Emerging*, porque a demanda cresceu com o programa.  
  *❌ Se desfaz:* *Emerging* é o que passou a existir apenas por causa da IA (ex: engenharia de prompt). Explicar exames já existia antes e é competência perene (*Enduring*).

---

### 📌 Questão 2 (Módulo 2 · Modos de Colaboração)

> **Enunciado:**  
> Duas pessoas precisam entregar o mesmo tipo de relatório de estágio.  
> A primeira define antes o que vai pedir, envia uma solicitação com o contexto completo, recebe um rascunho, confere os dados contra o relatório da empresa e reescreve as partes que dependem da experiência dela.  
> A segunda abre a conversa sem um plano e vai construindo o texto junto com a ferramenta, ao longo de umas quarenta trocas, até chegar a algo que lhe agrade.  
> Identifique o que distingue os dois modos de trabalho apresentados.

- (A) A diferença está na qualidade do texto final, que tende a ser maior quando a divisão é feita antes.  
  *❌ Se desfaz:* A qualidade depende do encaixe da tarefa: tarefas exploratórias podem render mais na construção conjunta; tarefas estruturadas rendem mais em divisão prévia.
- **(B) A primeira dividiu a tarefa antes de começar e delegou uma parte delimitada, e a segunda construiu junto.**  
  *✅ CORRESPONDE (Gabarito Oficial):* Distinção fundamental do estudo de Dell'Acqua, McFowland III, Mollick et al. O modo **Centauro** delimita e separa os papéis antes de abrir a ferramenta (preservando a auditabilidade). O modo **Ciborgue** integra e co-constrói o processo em fluxo contínuo.
- (C) A diferença está no número de consultas feitas à ferramenta, que é o que define cada um dos dois modos.  
  *❌ Se desfaz:* O número de trocas é consequência, não a definição conceitual.
- (D) A diferença está na verificação do resultado ao final do trabalho, que é o que define cada um dos modos.  
  *❌ Se desfaz:* Verificar o resultado é um dever que cabe em ambos os modos (Módulo 3).
- (E) A diferença está no tempo gasto até a entrega, que é o que separa um modo de trabalho do outro modo.  
  *❌ Se desfaz:* O ganho de tempo varia com a complexidade da tarefa, e não define os modelos.

---

### 📌 Questão 3 (Módulo 3 · Quando Conferir um Resultado)

> **Enunciado:**  
> Um estudante faz dois pedidos a uma ferramenta de IA na mesma conversa. Primeiro, uma explicação sobre o que são juros compostos. Depois, o prazo de recurso previsto no regulamento acadêmico da própria universidade, aprovado neste semestre.  
> As duas respostas chegam bem escritas, no mesmo tom seguro, sem qualquer sinal de dúvida.  
> Identifique a leitura dessas duas respostas que corresponde ao que a quinzena apresentou.

- (A) As duas respostas pedem a mesma desconfiança, porque a chance de erro se distribui de modo uniforme.  
  *❌ Se desfaz:* A fronteira da IA é serrilhada. Tratar tudo com a mesma desconfiança dissipa energia; o esforço deve focar onde o risco mora.
- (B) A primeira resposta pede mais conferência, porque envolve cálculo, e o cálculo é onde esses sistemas falham.  
  *❌ Se desfaz:* A pergunta foi conceitual e juros compostos é um tema com altíssima frequência no pré-treinamento global.
- (C) As duas respostas dispensam conferência, porque a redação cuidadosa indica que a ferramenta encontrou base.  
  *❌ Se desfaz:* Forma não é garantia de conteúdo. O caso *Air Canada* ilustra como erros graves vêm vestidos com linguagem perfeita.
- (D) A segunda resposta dispensa conferência, porque regulamentos são textos e esses sistemas lidam bem com texto.  
  *❌ Se desfaz:* Ser texto não torna o documento público ou indexado. Um regulamento aprovado neste semestre quase certamente ficou fora do treino.
- **(E) A segunda resposta pede conferência antes do uso, porque trata de norma local e recente, e o tom pesa pouco.**  
  *✅ CORRESPONDE (Gabarito Oficial):* Conforme o estudo de Kandpal et al., o acerto acompanha a frequência com que o dado apareceu no treinamento. Dados locais e recentes caem na zona de raridade e alto risco de erro invisível.

---

### 📌 Questão 4 (Módulo 4 · Custo e Escopo da Conta)

> **Enunciado:**  
> Em uma reunião de equipe, alguém apresenta dois valores encontrados em fontes diferentes. Um relatório técnico publicado por um fornecedor informa 0,24 watt-hora por pedido de texto. Um estudo acadêmico mediu 2,907 quilowatt-hora a cada mil imagens geradas, usando modelos de código aberto instalados em laboratório.  
> A partir desses dois valores, a pessoa conclui que gerar uma imagem custa cerca de doze vezes o que custa um pedido de texto.  
> Identifique a observação que corresponde ao alcance dessa conclusão.

- (A) Os dois valores ficam de lado, porque as medições de consumo de IA divergem bastante de um estudo para outro.  
  *❌ Se desfaz:* Descartar medições publicadas anula a capacidade de tomar decisões informadas e devolve a escolha ao piloto automático.
- (B) A conclusão se aplica ao serviço comercial citado, porque os dois valores tratam de ferramentas do mesmo tipo.  
  *❌ Se desfaz:* Modelos abertos em laboratório e data centers comerciais têm arquiteturas e escopos físicos distintos.
- **(C) A hierarquia entre as duas tarefas se sustenta, e a razão exata entre os números depende do escopo de cada um.**  
  *✅ CORRESPONDE (Gabarito Oficial):* A hierarquia operacional ($Imagem \gg Texto$) reflete o custo computacional intrínseco e atravessa fornecedores. A proporção exata de $12\times$ é uma ordem de grandeza útil para decisão, mas a razão exata depende do que cada estudo incluiu.
- (D) A conclusão pode ser usada como está, porque as duas fontes são publicadas e descrevem os métodos usados.  
  *❌ Se desfaz:* Ser publicado torna o dado conferível, mas não torna diretamente comparáveis duas medições com fronteiras e modelos diferentes.
- (E) A conclusão se inverte, porque gerar uma imagem consome menos energia do que gerar um texto longo em conversa.  
  *❌ Se desfaz:* Imagens exigem matrizes de difusão e tensores multidimensionais com ordens de magnitude a mais de cálculo.

---

### 📌 Questão 5 (Síntese Geral · Os Quatro Instrumentos Juntos)

> **Enunciado:**  
> Uma coordenadora de curso tem três dias para entregar um parecer sobre a adoção de uma nova ferramenta na secretaria. Ela considera abrir uma conversa com a IA e ir construindo o texto junto, em muitas trocas, até chegar a uma versão pronta.  
> O parecer será assinado por ela, citado em reunião do conselho, e precisa informar o prazo previsto em uma norma interna aprovada no mês passado.  
> Identifique o encaminhamento que reúne os instrumentos trabalhados na quinzena para esse caso.

- **(A) Delimitar antes o que será pedido, conferir o prazo da norma na fonte oficial e responder pelo texto assinado.**  
  *✅ CORRESPONDE (Gabarito Oficial):* **A síntese perfeita da Quinzena 03:**  
  1. *Módulo 2 (Centauro):* Delimitar antes preserva a auditabilidade perante o conselho.  
  2. *Módulo 3 (Fronteira):* Norma interna do mês passado é local e recente $\rightarrow$ exige checagem na fonte primária.  
  3. *Módulo 4 (Custo):* Pedido estruturado em poucas etapas consome menos requisições e energia.  
  4. *Módulo 1 a 4 (Autonomia & Responsabilidade):* A responsabilidade sobre o parecer assinado é integralmente humana.
- (B) Construir o parecer em muitas trocas com a ferramenta e conferir o texto inteiro quando ele estiver pronto.  
  *❌ Se desfaz:* Perde a auditabilidade, gera dezenas de requisições e a checagem ao final pode deixar passar alucinações já enraizadas.
- (C) Escrever o parecer inteiro sem apoio da ferramenta, porque documento assinado pede autoria toda humana.  
  *❌ Se desfaz:* Transforma precaução em proibição cega. A disciplina ensina apropriação com critérios claros, e não abstinência tecnológica.
- (D) Delimitar o pedido e usar o prazo informado pela ferramenta, porque normas internas são documentos de texto.  
  *❌ Se desfaz:* Ser texto não torna o documento disponível para a IA. Norma interna recente é o lugar clássico do erro invisível.
- (E) Pedir o parecer completo em uma solicitação bem escrita e revisar a redação, porque o conteúdo vem do pedido.  
  *❌ Se desfaz:* Delega por inteiro uma decisão de julgamento que exige responsabilidade profissional da coordenadora.

---

## 🧭 7. Resumo Estrutural da Quinzena 03 (O Processo de Apropriação)

```
 ┌────────────────────────────────────────────────────────────────────────┐
 │                   O PROCESSO DE APROPRIAÇÃO DA IA                      │
 │                                                                        │
 │  1. Módulo 1 (Taxonomia Bailey):                                       │
 │     Distingue o que vale a pena aprofundar na sua carreira técnica.    │
 │                                                                        │
 │  2. Módulo 2 (Centauro & Ciborgue):                                    │
 │     Define com critério claro como estruturar e dividir o trabalho.    │
 │                                                                        │
 │  3. Módulo 3 (Fronteira Serrilhada & Erros Invisíveis):                │
 │     Ensina onde o risco se concentra e como triar a checagem.          │
 │                                                                        │
 │  4. Módulo 4 (Custo Invisível & Análise de Métricas):                  │
 │     Mostra que a intensidade do uso é uma escolha técnica sua.        │
 │                                                                        │
 │  APROPRIAÇÃO: O momento em que a ferramenta deixa de ser usada no     │
 │  piloto automático e passa a ser CONDUZIDA por você com critério       │
 │  explícito e sustentável.                                              │
 └────────────────────────────────────────────────────────────────────────┘
```