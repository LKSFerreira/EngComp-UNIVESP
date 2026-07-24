# Quinzena 01 — Apresentação, Guia e Fundamentos da IA

> 🚨 **PRAZO DA ATIVIDADE INDIVIDUAL (MÓDULO 4):** **DOMINGO, 26 DE JULHO DE 2026 (26/07/2026) ÀS 23H59**  
> 💡 _Entregar a sua atividade individual no prazo é o que DESBLOQUEIA a sua participação no Trabalho em Grupo (Módulo 7)._  
> 🗓️ **Duração da Quinzena 1:** 20/07/2026 (Segunda) a 02/08/2026 (Domingo)  
> ⚡ **MODO MÍNIMO (dia ruim de TDAH):** Assista 1 vídeo (M2) + responda P1 abaixo. Só isso. Amanhã você completa.

---

## 📌 Estrutura da Quinzena 1 com Datas Exatas (7 Módulos)

### 🔹 Semana 1 — Base Individual (De 20/07 a 26/07/2026)
- **Módulo 1:** Leitura e Estudo de Fundamentos (Estudo Individual)
- **Módulo 2:** Videoaulas e Aplicação Prática + Quiz (Estudo Individual)
- **Módulo 3:** O Custo Invisível da IA + Quiz (Estudo Individual)
- **Módulo 4:** Vieses Algorítmicos e Naturalização + Quiz (Estudo Individual)
- **Módulo 5 (⭐ ATIVIDADE INDIVIDUAL FINAL):** **"Ele está te ouvindo?" — ENTREGA DO PORTFÓLIO INDIVIDUAL ATÉ DOMINGO, 26/07/2026 ÀS 23H59**  
  *(Concluir o Portfólio no prazo e submeter via ferramenta Laboratório M6 libera o acesso ao Fórum do Grupo M7 na semana seguinte)*

### 🔹 Semana 2 — Laboratório e Fase Coletiva (De 27/07 a 02/08/2026)
- **Módulo 6:** Tutorial da Ferramenta Laboratório & Revisão entre pares do Portfólio Individual (Abre 27/07)
- **Módulo 7 (🤝 TRABALHO EM GRUPO):** Fórum do Grupo — Ponto de Encontro & Revisão entre Pares do Trabalho de Grupo (Abre 27/07 APENAS para quem entregou o Portfólio Individual M5 no prazo)

---

## 1. Active Recall (responder SEM consultar o material)

Após realizar as leituras e assistir as videoaulas, feche tudo e responda:

### Módulo 1 - O que é e o que não é IA.
* **P1:** Qual é o objetivo do Módulo 1?
* **R1:** Fazer com que saibamos e entendamos que existem diversos tipos de Inteligência Artificial. Podemos compará-los a diversos tipos de ferramentas: cada uma possui um formato e uma finalidade. Da mesma forma que não podemos usar uma chave de fenda para fixar um prego, não podemos assumir que todas as IAs são ou servem para a mesma coisa.

* **P2:** Cite 1 tipo de aplicação de IA mencionado no M1.
* **R2:** Sistema de otimização de rotas para GPS.

* **P3:** Qual paper/artigo científico foi crucial para os modelos modernos de IA?
* **R3:** O paper do Google chamado *"Attention Is All You Need"* (em tradução livre: *"Atenção É Tudo que Você Precisa"*).


### Módulo 2.1 - Como IA aprende?
* **P1:** Cite as 3 formas de aprendizado atuais.
* **R1:** Supervisionado (*Supervised Learning*), Não Supervisionado (*Unsupervised Learning*) e Aprendizado por Reforço (*Reinforcement Learning*).

* **P2:** Explique cada um dos tipos de aprendizado da forma mais curta e simples possível.
* **R2:** Supervisionado (*Supervised Learning*) é quando o modelo aprende com base na rotulagem de dados / *data labeling* (exemplo: mostramos uma foto de capivara e dizemos para o modelo que é uma capivara, repetindo isso centenas de milhares de vezes com diversos dados). Não supervisionado (*Unsupervised Learning*) é quando o modelo tenta descobrir padrões (*clustering*) em meio a uma grande quantidade de dados não rotulados. Aprendizado por reforço (*Reinforcement Learning*) é quando o modelo é recompensado ou punido de acordo com o objetivo estabelecido (*reward function*).

* **P3:** Quais os problemas de cada um dos tipos de aprendizado?
* **R3:** No supervisionado, se os dados não forem cuidadosamente tratados, podem conter viés de treinamento (*training bias*), comprometendo o resultado final com respostas indesejáveis. No não supervisionado, o problema está nas chamadas "câmaras/bolhas de eco" (*echo chambers*), onde o modelo apresenta mais do mesmo infinitamente em um ciclo vicioso. Por fim, no aprendizado por reforço, o problema está na forma como damos as recompensas e definimos os objetivos: se não forem bem calibrados e definidos, o modelo pode agir de forma inesperada com comportamentos não desejados.

### Módulo 2.2 - Como IA aprende?
* **P1:** Quais tipos/fases de IA surgiram ao longo do tempo?
* **R1:** Simbólica (*Symbolic AI / Rule-based AI*), Conexionista (*Connectionist AI*) e Generativa (*Generative AI*).

* **P2:** Explique cada um desses tipos.
* **R2:** A IA Simbólica (*Symbolic AI*) foi idealizada como uma programação determinística (como se fossem blocos de `IF` e `ELSE` em um amplo escopo para prever nuances e comportamentos); ela se destaca quando temos controle total das regras e do ambiente (ex: jogo de xadrez, jogo da velha, precificação básica). A IA Conexionista (*Connectionist AI*) tenta simular o cérebro por meio de redes neurais artificiais (*Artificial Neural Networks*) para prever padrões complexos (ideal para reconhecimento de fotos, voz e detecção de padrões). Por último, a IA Generativa / *Generative AI* (como os LLMs - *Large Language Models*) é treinada com massivas quantidades de dados da internet; em vez de regras fixas, utiliza padrões linguísticos, matemáticos e estatísticos para prever conteúdo em determinado contexto (puramente probabilística, por isso um mesmo *input* nem sempre gera o exato mesmo *output*).

* **P3:** Quais os problemas de cada um dos tipos de IA?
* **R3:** Na Simbólica, o maior problema é lidar com a complexidade do mundo real, pois é impossível determinar de forma determinística toda a causalidade. Na Conexionista, muitas vezes nem os próprios pesquisadores sabem exatamente qual padrão interno o modelo utilizou para gerar a resposta (problema da "caixa-preta" / *black-box problem*), além de exigir alto poder computacional e massa de dados. Já na Generativa, por ser uma versão em grande escala da conexionista, o maior problema é que ela sempre responderá alguma coisa — independente de estar certa ou errada —, frequentemente afirmando erros com total convicção, o que chamamos de Alucinação (*Hallucination*).

### Módulo 3 - O custo invisível da IA
* **P1:** O que está por trás da IA?
* **R1:** O conceito de Externalização (*externalization*) ocorre quando transferimos um custo (que não é necessariamente monetário) de uma etapa física ou ambiental para outro local. Podemos chamar isso de custos invisíveis da IA, refletindo o que é exigido para treinar e utilizar um modelo: mineração de minerais raros, consumo de água para refrigeração de *data centers*, consumo elevado de eletricidade para processamento computacional e trabalho humano precarizado (*Ghost Work*).

* **P2:** Cite alguns fatos concretos dos custos invisíveis da IA.
* **R2:** Um estudo do MIT, por exemplo, quantificou que, para cada 100 palavras geradas em inglês, o consumo de água utilizada na refrigeração dos servidores é de aproximadamente 519 ml. Além disso, em 2023, investigações jornalísticas revelaram que a OpenAI contratou uma empresa terceirizada no Quênia que submetia trabalhadores a uma cultura de trabalho precarizado, pagando cerca de 2 dólares por hora para que pessoas fornecessem *feedback* e filtrassem conteúdos psicologicamente danosos, ilegais e violentos. Vários processos dessa natureza foram abertos desde então, representando apenas os casos descobertos e relatados.

* **P3:** Qual a finalidade de conhecer esses custos invisíveis?
* **R3:** Permite um uso consciente da tecnologia, orientando escolhas mais precisas sobre como e quando utilizar sistemas de IA, desenvolvendo nosso papel como usuários críticos, éticos e responsáveis.

### Módulo 4 - Naturalização e vieses algorítmicos
* **P1:** Quais problemas dados ruins podem gerar?
* **R1:** A qualidade ou o tipo dos dados usados no treinamento dos modelos podem gerar vieses algorítmicos (*algorithmic bias*), preconceitos, segregação e discriminação automatizada.

* **P2:** Cite um exemplo desses problemas.
* **R2:** Em 2018, quando a Amazon treinou um modelo de triagem de currículos baseado em 10 anos de histórico de recrutamento da empresa, o algoritmo aprendeu o padrão histórico de que a empresa priorizava a contratação de homens. Como consequência, currículos que continham termos como "feminino" (ex: "clube de xadrez feminino") sofriam penalização automática no sistema.

* **P3:** Quais impactos modelos mal treinados podem gerar na sociedade?
* **R3:** No Brasil, por exemplo, onde a privação de liberdade é o grau máximo de punição do Estado, ocorrem injustiças graves. É o caso de um homem negro que ficou preso injustamente de 2020 a 2023 após sua foto ser identificada erroneamente em mais de 62 processos por um algoritmo de reconhecimento facial — fenômeno denominado racismo algorítmico (*algorithmic racism*).


> Dica: se não conseguir responder, é sinal de que precisa revisitar o material.
---

## 2. Resumo em Minhas Palavras (máx. 5 frases)

### No Módulo 1, vimos que existem 4 paradigmas no campo da Inteligência Artificial:

* **Pensar como humano:** O problema é que nós mesmos não sabemos como o cérebro humano funciona em sua magnitude. Ou seja, para que um sistema pudesse alcançar esse estado de perfeição, deveríamos mapear e conhecer cada aspecto intrínseco de todo o raciocínio humano, o que estamos eternamente longe de descobrir. No entanto, não somos completamente leigos, e uma técnica chamada Redes Neurais Artificiais tenta replicar esse funcionamento dos neurônios.

* **Agir como humano:** Não necessariamente significa ser inteligente, pois esse paradigma apenas tenta convencer de que o sistema artificial por trás é humano e nada além disso. Caso esse método convença de que o modelo por trás agiu perfeitamente como uma pessoa, não importa o tipo de mecanismo que foi usado, seja um bloco infinito de `IF` e `ELSE` ou redes neurais artificiais profundas, contanto que ele consiga te convencer (Teste de Turing).

* **Pensar racionalmente (logicamente):** Em muitos casos pode até funcionar, mas aqui a especificidade é tão grande que, para cada situação ou evento do mundo real, teríamos que criar uma IA específica, tornando-se praticamente inviável. Afinal de contas, o mundo ao nosso redor não é binário (preto ou branco, seco ou molhado).

* **Agir racionalmente:** Chegamos ao paradigma mais comum e de maior sucesso, pois parte de uma premissa funcional clara: dado um *input* que deve ser processado de alguma forma, o modelo fornece um *output*. Ou seja, o modelo é treinado para que, ao receber um dado ou ser alimentado com texto, vídeo, cliques ou comportamento, essa informação seja processada para que o algoritmo alcance um objetivo e maximize a recompensa na sua saída. Pense, por exemplo, nos algoritmos das redes sociais. Determinamos um objetivo: reter o usuário pelo maior tempo possível na tela do celular. *Input* do usuário: cliques, engajamento, comentários e tudo o que a plataforma puder rastrear. Essas informações são enviadas a um algoritmo treinado, os dados são processados e, como *output*/resposta, a plataforma passa a exibir conteúdos cada vez mais apelativos, sensacionalistas ou extremistas, fechando um ciclo vicioso.

### No Módulo 2, abordamos os tipos de IA, como funcionam e seus treinamentos:

Desde a idealização desse campo, o desenvolvimento de IA passou por pelo menos 2 notáveis invernos (períodos pouco ou quase nada produtivos). Para focar nas partes de atenção, vamos separar basicamente em 3 tipos de IAs: Simbólica, Conexionista e Generativa, sendo essa última a evolução da conexionista.

Para a IA Simbólica (como o MYCIN, que foi um dos pioneiros), o funcionamento se dava basicamente por um conjunto de regras pré-estabelecidas pelos pesquisadores da época para tentarem prever um tipo de doença com base nos sintomas. No entanto, conforme o cenário foi ficando cada vez mais complexo, esse tipo de abordagem tornou-se limitada.

Para resolver isso, surgiu a IA Conexionista. O pioneiro para esse tipo foi o Perceptron, que ao tentar recriar o funcionamento do cérebro humano usando como base redes neurais artificiais e um grande volume de dados, obteve-se o primeiro tipo de IA realmente capaz de aprender formas complexas e dinâmicas de acordo com as regras do mundo. Esse feito notável de *Deep Learning* foi realizado de forma significativa quando o modelo AlexNet ganhou em primeiro lugar a competição ImageNet. Mas um detalhe importante é que muitas vezes não conseguimos debugar e descobrir qual padrão interno foi responsável pela resposta (mesmo que correta); essa situação é conhecida como "Caixa-Preta" (*Black Box*).

Por último e mais recente, temos as IAs Generativas, que são treinadas com uma quantidade absurda de bilhões de parâmetros, dados e informações, reunindo quase todo conhecimento produzido pela humanidade. No entanto, por se tratar de um modelo probabilístico, ele não entende ou compreende realmente o que está sendo respondido; por isso, modelos de LLM baseiam-se em calcular qual a maior probabilidade do próximo *token*. Isso gera também um efeito colateral conhecido como "Alucinação" (*Hallucination*), no qual a IA muitas vezes pode enganar o usuário fornecendo uma informação falsa com absoluta convicção de verdade. O funcionamento desses modelos se dá pela entrada de texto (*inputs*), que são quebrados em pedaços chamados *tokens*; esses *tokens* viram um vetor numérico e são processados pela arquitetura *Transformer*, que calcula o quão uma palavra é importante para outra no entendimento do contexto. Por fim, o modelo escolhe qual o próximo *token* mais provável com base no treinamento recebido (Obs: esse processo foi simplificado para entendimento do conceito).

Quanto aos treinamentos dos modelos, temos 3 tipos principais:
1. **Supervisionado (*Supervised Learning*):** Rotulamos a informação para que a IA saiba exatamente o que é.
2. **Não Supervisionado (*Unsupervised Learning*):** O modelo tenta descobrir o padrão em meio a uma quantidade massiva de dados sem rótulo.
3. **Aprendizado por Reforço (*Reinforcement Learning*):** Definimos um objetivo e o modelo recebe recompensas e punições conforme se aproxima ou se afasta da meta.

Para treinarmos modelos eficientes como ChatGPT, Claude, Gemini, aplicam-se diversas técnicas:
- **Pré-treinamento (*Pre-training*):** Fase onde são definidos os dados, parâmetros, pesos e a base de conhecimento do modelo.
- **Ajuste Fino (*Fine-Tuning*):** Ajuste de precisão, estilo e tarefas específicas que potencializam a capacidade do modelo.
- **RLHF (*Reinforcement Learning with Human Feedback* - Aprendizado por Reforço com Feedback Humano):** Humanos comparam as respostas do modelo, e a IA aprende a preferir as respostas melhor avaliadas, moldando o comportamento final.

Esse último processo, como consequência social/ética, pode gerar situações como o surgimento dos *Ghost Workers* (Trabalhadores Fantasmas) — pessoas mal remuneradas, frequentemente em situações precárias de trabalho em países emergentes, contratadas para realizar a rotulagem e moderação desse *feedback*.

### No Módulo 3, tocamos em um assunto mais delicado:

Aqui o objetivo não é causar crise ou perturbar a consciência moral, uma vez que o uso consciente serve justamente para o oposto disso. Estamos falando de ética, uso responsável e uso estrutural do que é feito com a IA. 

Existem 2 momentos distintos de consumo de recursos: durante o **treinamento** da IA e durante o **uso** da IA (no qual o recurso é gasto no exato momento em que o modelo realiza a inferência). Esse tipo de impacto pode ser medido quantitativamente, como foi feito por uma equipe de pesquisadores do MIT, que chegaram aos valores de que a cada 100 palavras em inglês um modelo utiliza cerca de 519 ml de água para sua refrigeração. 

Também precisamos lidar com os *Ghost Workers* (Trabalhadores Fantasmas) citados anteriormente, e muitas vezes a realidade é pior do que imaginamos. É o caso descoberto por investigações jornalísticas de trabalhadores no Quênia que recebiam aproximadamente 2 dólares por hora para trabalhos de classificação e *feedback* altamente sensíveis (incluindo, mas não se limitando a, conteúdos de extrema violência e muitas vezes ilegais). Essas pessoas não recebiam nenhum suporte ou amparo psicológico por parte das empresas contratantes (como a OpenAI). 

Por fim, muitas vezes esquecemos da energia elétrica consumida por esses grandes *data centers* e suas pegadas de carbono que, dependendo do país onde se encontram, geram emissões massivas de centenas de toneladas de $\text{CO}_2$ para a atmosfera, e pouco se fala sobre isso.

### No Módulo 4, voltamos nossa atenção para a Naturalização Tecnológica e os vieses algorítmicos:

Isso acontece quando uma tecnologia se torna tão presente e corriqueira na sociedade que apenas os aspectos positivos ficam visíveis para as pessoas. Quando aplicada em massa, notamos que essa naturalização pode ser implementada propositalmente com o objetivo de disseminar o uso da tecnologia; em outros aspectos, como nos vieses algorítmicos, pode não ser proposital, no entanto reflete dados históricos, culturais e estruturais. Vale ressaltar que esse processo de naturalização não é exclusivo da tecnologia: podemos observá-lo em diversas áreas, como por exemplo na indústria têxtil, na indústria de fármacos e cosméticos, e também na mais antiga delas, que é a agricultura. Alguns estudos públicos revelaram grandes preocupações, como os estudos de *Gender Shades*, *COMPAS*, *Amazon Recruiting Tool*, etc. O objetivo deste módulo não é interromper o uso da IA, mas exercitar nosso senso crítico para que possamos enxergar o que está oculto.

A naturalização acontece quando 4 conceitos começam a ficar permanentemente consolidados: Confiabilidade, Neutralidade, Gratuidade e Universalidade. Dessa forma, a tecnologia é absorvida no cotidiano, fazendo com que fiquemos cada vez mais dependentes de seu uso contínuo, em um processo retroalimentado que diz que, se não usarmos a IA, por exemplo, ficaremos cada vez mais para trás em comparação com quem usa. Mas, nesse jogo de poderes, existe apenas 1 ganhador.
---

## 3. Mapa de Conexões

| Conceito desta quinzena | Se conecta com...         | Como?                               |
|-------------------------|---------------------------|-------------------------------------|
| O que é IA              | O uso da IA no dia a dia  | Aprendendo o que é e o que não é IA através de critérios e paradigmas formais. |
| Tipos de Aprendizado (M2.1) | Engenharia e Ética em IA | Definindo a abordagem (Supervisionado, Não Supervisionado ou Reforço) e prevenindo viés, câmaras de eco e recompensas descalibradas. |
| Fases da IA (M2.2)      | Evolução Tecnológica     | Compreendendo a transição da lógica determinística (Simbólica) para a identificação de padrões (Conexionista) e modelos probabilísticos (Generativa/LLMs). |

---

## 4. Anotações dos Módulos

### 📖 Módulos 1 a 3 (Estudo Individual)

- **Videoaula M1:** [O que a IA realmente é?](https://www.youtube.com/watch?v=tEYnhnJfRe4)
  - Conceituação dos 4 paradigmas de Russell & Norvig e história da IA.

- **Videoaula M2:** [Os Tipos de Aprendizado de Máquina](https://www.youtube.com/watch?v=5VVd3_DpLjc)
  - **1. Aprendizado Supervisionado:** Treinamento de modelos com rotulagem prévia de dados (dado + etiqueta). Exemplo: mostrar fotos de cachorros e capivaras identificando cada uma. *Alerta:* Exige cuidado extremo pois pode carregar e perpetuar vieses humanos e preconceitos não intencionais (ex: IAs para filtragem de currículos).
  - **2. Aprendizado Não Supervisionado:** Treinamento alimentado com grandes volumes de dados sem rótulos, onde o modelo busca identificar padrões em meio ao caos (agrupamento/clustering). *Alerta:* Pode gerar "câmaras de eco" (sempre mais do mesmo). Utilizado em algoritmos de recomendação de plataformas de streaming.
  - **3. Aprendizado por Reforço:** O modelo interage por tentativa e erro com o ambiente a partir de regras predefinidas. Ele aproxima ou afasta suas ações do objetivo por meio de recompensas e punições. Exemplo: aplicativo de GPS otimizando rotas (menor tempo = maior recompensa).

- **Videoaula M2:** [As Três Fases da IA: Simbólica, Conexionista e Generativa](https://www.youtube.com/watch?v=nUvmG-nXd7Q)
  - **1. IA Simbólica (Anos 50-80):** Baseada em regras determinísticas e lógica formal (`IF/ELSE`). Ideal para ambientes fechados com regras conhecidas (Xadrez, Jogo da Velha, tabelas de precificação). *Limitação:* Inviável para mapear a complexidade imprevisível do mundo real.
  - **2. IA Conexionista (Anos 80-2010):** Inspirada na estrutura do cérebro via Redes Neurais Artificiais. Aprende padrões complexos diretamente dos dados. Ideal para reconhecimento de voz, visão computacional e OCR. *Limitação:* Problema da "caixa-preta" (baixa explicabilidade) e alta exigência de dados e hardware (GPUs).
  - **3. IA Generativa / LLMs (2017-Presente):** Impulsionada pela arquitetura Transformer e treinamento com imensos corpora de dados. Prevê probabilisticamente o próximo elemento/token com base no contexto. *Limitação:* Tendência à "Alucinação" (afirmar dados falsos com convicção).

- **Videoaula M3:** [O Custo Invisível da IA](https://www.youtube.com/watch?v=2nGbIV6dT50)
  - Análise dos impactos ambientais e sociais da IA: consumo de energia/água em data centers, emissão de $\text{CO}_2$ no treinamento de LLMs e a exploração de *Ghost Workers* (trabalho precarizado de moderação/rotulagem).

- **Videoaula M4:** [Naturalização e Vieses Algorítmicos](https://www.youtube.com/watch?v=aOx-YIs0Pb0)
  - Discussão sobre reprodução de preconceitos históricos por modelos treinados com dados viciados (ex: caso Amazon 2018) e o racismo algorítmico na segurança pública (reconhecimento facial e prisões injustas).

### 📝 Módulo 5 (⭐ Atividade INDIVIDUAL - PRAZO: DOMINGO 26/07 ÀS 23H59)

- **Caso em Investigação:** *"Ele está te ouvindo?"* (O caso de Marina e a coincidência do anúncio do tênis de corrida no Instagram).
- **Pergunta Central:** *Se não foi o microfone, o que explica a coincidência entre o que Marina disse — e nunca digitou — e o anúncio que viu no dia seguinte?*
- **Entregável:** **Portfólio Individual** (*O que eu pensava → O que mudou → Evidências e Hipóteses investigadas*).

### 🧪 Módulos 6 e 7 (Laboratório & Trabalho em Grupo)

- **M6 (Ferramenta Laboratório & Revisão por Pares):** Submissão e avaliação por pares do Portfólio Individual via rubrica (Clareza, Utilidade, Organização).
- **M7 (Trabalho em Grupo):** Fórum do grupo e consolidação da resposta final coletiva (Abre 27/07 apenas para quem entregou a atividade M5/M6 no prazo).

---

## 5. Leituras e Material de Apoio

- (indicar capítulos, PDFs, links oficiais)

---

## 6. Exercícios e Práticas

- (resoluções, códigos, anotações)

---

## 7. Dúvidas Restantes

- (anotar o que não ficou claro para perguntar no fórum ao facilitador)

---

## 8. Revisão Espaçada (Régua de 7 Dias)

| Revisão            | Data Prevista | Feito? |
| ------------------ | ------------- | ------ |
| 1ª (1 dia depois)  | 27/07/2026    | ☐      |
| 2ª (3 dias depois) | 29/07/2026    | ☐      |
| 3ª (7 dias depois) | 02/08/2026    | ☐      |
