# Portfólio de Grupo - Quinzena 02
## Por Dentro dos LLMs: A Metacognição da Alucinação (Módulo 7)

* **Grupo:** Grupo 05
* **Integrantes:** Caroline, Lucas, Thales
* **Disciplina:** COM170 - Inteligência Artificial na Prática Acadêmica e Profissional
* **Instituição:** UNIVESP

---

### 📋 Guia de Referência: Os Cinco Tipos de Alucinação

| Tipo | Comportamento Humano (*Análogo*) | Como Reconhecer |
| :--- | :--- | :--- |
| **Alucinação factual** | *O blefe* | Uma afirmação falsa com estrutura correta. Um dado, um nome, um número ou uma referência inventados, com aparência confiável. |
| **Coerência sem verdade** | *O sofisma* | Uma explicação que flui com lógica aparente, mas está conceitualmente errada. O erro está no raciocínio inteiro, não em um dado isolado. |
| **Viés de corpus** | *O preconceito automático* | O modelo reproduz padrões e desigualdades dos textos de treino, como se fossem um retrato completo da realidade. |
| **Vagueza confortável** | *A evasão* | O modelo evita uma posição clara mesmo quando ela era possível e necessária. Fala muito e não se compromete. |
| **Ausência de contexto** | *A generalização* | O modelo responde ao geral quando a pergunta era específica, por não saber seu país, sua norma, seu nível ou sua finalidade. |

---

### 📍 Pergunta 1 · Partilha dos Casos Individuais
> **Pergunta:** Que casos cada integrante recebeu e o que cada um descobriu na sua verificação?
> 
> *Orientação:* Cada pessoa resume em poucas linhas o caso que analisou, se a IA acertou ou errou, e o que a checagem revelou.

#### ✍️ Resposta do Grupo:
* **Lucas (Caso A · Santos Dumont):** Analisou o caso de Santos Dumont. A IA acertou a maior parte dos dados históricos e pioneirismos (Fazenda Cabangu, Prêmio Deutsch de 1901, voo de Bagatelle e Demoiselle), porém alucinou categoricamente ao afirmar que Santos Dumont patenteou o 14-Bis e recebeu royalties. A checagem documental revelou que Santos Dumont colocou todos os seus projetos em domínio público por convicção humanitária. Lucas classificou o erro como **Viés de Corpus** (*O preconceito automático*), pois o modelo reproduziu a premissa de que a imensa maioria dos inventores patenteia suas criações para obter retorno financeiro.
* **Thales (Caso A · Santos Dumont):** Também analisou o caso de Santos Dumont e desconfiou imediatamente do trecho sobre patentes devido ao seu conhecimento prévio sobre o idealismo de Dumont. Na averiguação em fontes de referência (Wikipedia/artigos históricos), confirmou que Santos Dumont fazia testes públicos e abertos, ao contrário dos irmãos Wright. Thales classificou o erro como **Alucinação Factual** (*O blefe*), apontando que o modelo pode ter feito uma contaminação/comparação indevida com os irmãos Wright (que patentearam e lucraram), gerando uma falsidade com tom extremamente convincente.
* **Caroline (Caso D · A Confeiteira / Tomada de Decisão):** Analisou a situação de uma confeiteira sobrecarregada de encomendas que consultou a IA para saber se deveria ou não contratar uma assistente. A IA respondeu de forma evasiva e superficial, apenas listando prós e contras genéricos ("se contratar tem custo fixo, se não contratar economiza mas se desgasta"), sem solicitar dados concretos do negócio (faturamento, margem de lucro, custo local ou demanda real). O caso foi classificado como **Vagueza Confortável** (*A evasão*) combinada a **Ausência de Contexto** (*A generalização*), pois o modelo simulou uma consultoria sem se comprometer com uma análise real e aplicável.

---

### 📍 Pergunta 2 · Comparação entre os Casos e Níveis de Risco
> **Pergunta:** Comparando os casos de todos, qual o grupo considera o mais difícil de perceber e qual o mais perigoso na vida real?
> 
> *Orientação:* Esta pergunta não tem resposta certa. Discutam, defendam pontos de vista diferentes e cheguem juntos a uma posição, explicando o motivo da escolha.

#### ✍️ Resposta do Grupo:
* **O mais difícil de perceber:** O grupo observou que os erros mais difíceis de detectar são de duas naturezas complementares: a **alucinação camuflada em fatos verdadeiros** (como no caso de Santos Dumont, em que a IA acertou 90% das datas e detalhes biográficos, fazendo a mentira sobre a patente soar plenamente verossímil) e a **vagueza confortável** (no caso da confeiteira, onde a resposta parece prudente e equilibrada por listar dois lados, mas mascara uma completa ausência de profundidade técnica).
* **O mais perigoso na vida real:** Conforme debatido no grupo, a **Alucinação Factual / Blefe alimentada por Viés** é a mais perigosa na vida prática, pois gera e dissemina desinformação (*fake news*) e distorções históricas que são aceitas como verdade quando o usuário não possui conhecimento prévio. Paralelamente, a **Vagueza Confortável e a Ausência de Contexto** são altamente nocivas no ambiente profissional e de negócios, pois dão uma falsa sensação de segurança e consultoria estratégica, podendo levar microempreendedores a decisões financeiras e operacionais equivocadas por falta de dados reais.

---

### 📍 Pergunta 3 · A Causa Estrutural
> **Pergunta:** O que os casos têm em comum na forma como o erro nasce? Por que dá para dizer que a alucinação é estrutural, e não um defeito que a próxima versão vai corrigir?
> 
> *Orientação:* Pensem na mecânica: probabilidade, predição da próxima palavra, dados de treino. Por que esses erros acontecem mesmo em modelos avançados?

#### ✍️ Resposta do Grupo:
A alucinação é um fenômeno **estrutural e intrínseco à própria arquitetura dos LLMs**, e não um mero defeito de software passageiro. 

Em todos os casos analisados pelo grupo, a causa raiz é a mesma: os modelos de linguagem são sistemas probabilísticos cujo objetivo matemático é prever o próximo *token* mais estatisticamente plausível a partir do contexto anterior, e **não consultar uma base ontológica de fatos reais ou raciocinar sobre o mundo concreto**. 

Quando o modelo fala de Santos Dumont, associa por pura proximidade estatística "inventor famoso" a "patente e lucros". Quando responde à confeiteira, gera um texto com o formato padrão de "prós e contras" comum na internet para evitar conflitos retóricos. A alucinação decorre do mesmo mecanismo que concede flexibilidade criativa e poder de síntese ao modelo; eliminar completamente a geração estatística significaria descaracterizar a natureza generativa dos LLMs.

---

### 📍 Pergunta 4 · Comportamento Humano e Confiança
> **Pergunta:** Os erros têm nome de comportamento humano. O que significa a máquina errar como a gente erra, e o que isso muda no jeito de vocês confiarem na IA?
> 
> *Orientação:* Conversem sobre o que muda, na prática de vocês, saber que a máquina repete jeitos humanos de errar.

#### ✍️ Resposta do Grupo:
O fato de a máquina errar de formas análogas aos comportamentos humanos (*o blefe*, *o preconceito automático*, *a evasão*, *a generalização*) acontece porque o seu material de treino é composto integralmente pela linguagem e produção textual humana. Os LLMs não inventam vieses do nada; eles refletem em escala ampliada nossos próprios padrões culturais, contradições e a tendência retórica de parecer confiante mesmo sem certeza.

**O que muda na nossa confiança (Nossa Regra Prática):**
Conforme consolidado pelo grupo, nossa postura muda de passiva para **ativamente crítica**:
1. **Para ideação, estruturação, revisão estilística e sintaxe de código:** Podemos confiar como um acelerador e parceiro de produtividade.
2. **Para fatos históricos, dados numéricos, citações bibliográficas e decisões de negócios:** A desconfiança é obrigatória e a checagem em fontes primárias/contexto real é inegociável. A IA deve ser tratada como um interlocutor persuasivo, mas que fala por estatística e não por conhecimento empírico. A responsabilidade final e a curadoria da verdade são sempre do ser humano.
