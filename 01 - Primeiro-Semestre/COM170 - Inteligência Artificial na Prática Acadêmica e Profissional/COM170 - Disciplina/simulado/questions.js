/**
 * Simulado Acadêmico Oficial COM170 - Banco de Dados de Questões
 * Total: 105 questões estruturadas (Quinzenas 01 a 07 | 15 por quinzena)
 * Grounding Estrito: Q8_M1-E-book.pdf (Univesp / Vunesp)
 */

const BANCO_QUESTOES = [
  {
    "id": "Q01-F-01",
    "quinzena": 1,
    "nivel": "facil",
    "topico": "Definição de IA e Agente Racional",
    "enunciado": "De acordo com Russell e Norvig (2022) e o material didático da Quinzena 1, qual é a definição formal de um 'agente racional' no paradigma que predomina na Inteligência Artificial atual?",
    "alternativas": [
      {
        "texto": "Um sistema que percebe o ambiente, processa as informações e age para cumprir um objetivo definido.",
        "correta": true,
        "explicacao": "Correta! Conforme o material da Quinzena 1, o agente racional é exatamente o sistema que percebe o ambiente, processa as informações e escolhe a melhor ação para cumprir um objetivo definido, predominando na IA contemporânea."
      },
      {
        "texto": "Um sistema projetado exclusivamente para reproduzir os processos biológicos e a consciência humana.",
        "correta": false,
        "explicacao": "Incorreta. Reproduzir os processos da mente humana refere-se ao paradigma 'pensar como humano', e não ao conceito de agente racional (agir racionalmente)."
      },
      {
        "texto": "Um software que opera estritamente sem nenhum objetivo previamente delimitado por pessoas.",
        "correta": false,
        "explicacao": "Incorreta. Todo sistema de inteligência artificial persegue um objetivo definido por pessoas."
      },
      {
        "texto": "Um mecanismo de busca de dados que armazena fatos sem realizar inferências ou ações sobre o ambiente.",
        "correta": false,
        "explicacao": "Incorreta. O agente não é mero repositório estático; ele percebe o ambiente e executa ações voltadas ao objetivo."
      },
      {
        "texto": "Um modelo puramente simbólico baseado exclusivamente em regras estáticas de lógica formal dedutiva.",
        "correta": false,
        "explicacao": "Incorreta. Regras estáticas de lógica formal definem o paradigma 'pensar racionalmente', não a definição abrangente de agente racional."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 6 / Capítulo 1 / Seção 1",
      "citacao": "Agente racional: Sistema que percebe o ambiente, processa as informações e age para cumprir um objetivo definido. Predomina na IA atual."
    }
  },
  {
    "id": "Q01-F-02",
    "quinzena": 1,
    "nivel": "facil",
    "topico": "Paradigmas de Russell e Norvig",
    "enunciado": "Russell e Norvig (2022) organizam as definições do campo da Inteligência Artificial em quatro paradigmas, fundamentados na combinação de duas escolhas estruturais:",
    "alternativas": [
      {
        "texto": "Se o foco está no processo interno (pensar) ou no comportamento (agir), e se a referência é o desempenho humano ou o raciocínio correto (racionalmente).",
        "correta": true,
        "explicacao": "Correta! A matriz 2x2 de Russell e Norvig cruza as dimensões 'pensar vs. agir' com 'como humano vs. racionalmente'."
      },
      {
        "texto": "Se o sistema é gratuito ou pago, e se opera em nuvem ou processamento local.",
        "correta": false,
        "explicacao": "Incorreta. Custos comerciais e arquitetura de hardware não definem os quatro paradigmas clássicos da IA."
      },
      {
        "texto": "Se os dados são estruturados ou não estruturados, e se o hardware utiliza CPUs ou GPUs dedicadas.",
        "correta": false,
        "explicacao": "Incorreta. Esta é uma divisão de infraestrutura computacional e tipos de dados, alheia aos paradigmas conceituais."
      },
      {
        "texto": "Se o sistema possui consciência autônoma ou se depende integralmente de supervisão em tempo real.",
        "correta": false,
        "explicacao": "Incorreta. A classificação clássica de Russell e Norvig não aborda 'consciência autônoma', mas sim pensar/agir com referência humana/racional."
      },
      {
        "texto": "Se o modelo adota exclusivamente programação orientada a objetos ou paradigma funcional.",
        "correta": false,
        "explicacao": "Incorreta. Paradigmas de linguagem de programação de software não correspondem aos quatro paradigmas epistemológicos da IA."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 6 / Capítulo 1 / Figura 1.2",
      "citacao": "Os quatro paradigmas de Russell e Norvig (2022), a partir de duas escolhas: o sistema pensa ou age, e toma como referência o desempenho humano ou a racionalidade."
    }
  },
  {
    "id": "Q01-F-03",
    "quinzena": 1,
    "nivel": "facil",
    "topico": "Gerações de IA - IA Simbólica",
    "enunciado": "Em relação às três gerações de Inteligência Artificial apresentadas na disciplina, onde fica armazenado o conhecimento na IA Simbólica e qual é a sua principal vantagem?",
    "alternativas": [
      {
        "texto": "Fica guardado em regras do tipo 'se... então...', escritas por especialistas; sua vantagem é que cada decisão pode ser rastreada até a regra aplicada.",
        "correta": true,
        "explicacao": "Correta! Conforme o Quadro 1.1 do e-book, a geração simbólica armazena conhecimento em regras explícitas, permitindo rastrear integralmente as decisões."
      },
      {
        "texto": "Fica guardado nos pesos numéricos de redes neurais profundas; sua vantagem é aprender padrões ocultos sem regras.",
        "correta": false,
        "explicacao": "Incorreta. Pesos numéricos em redes neurais são a base da IA Conexionista, não da IA Simbólica."
      },
      {
        "texto": "Fica guardado em bancos de dados relacionais estáticos; sua vantagem é nunca falhar em cenários imprevistos.",
        "correta": false,
        "explicacao": "Incorreta. A limitação explícita da IA simbólica é justamente falhar em situações que as regras não previram."
      },
      {
        "texto": "Fica disperso em bilhões de parâmetros de modelos generativos; sua vantagem é gerar textos inéditos com fluência.",
        "correta": false,
        "explicacao": "Incorreta. Esta é a descrição da IA Generativa (terceira geração), e não da IA Simbólica."
      },
      {
        "texto": "Fica armazenado exclusivamente na memória de curto prazo do usuário, exigindo reprogramação diária.",
        "correta": false,
        "explicacao": "Incorreta. O conhecimento na IA simbólica reside na base de regras previamente construída pelos especialistas."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 7 / Capítulo 1 / Quadro 1.1",
      "citacao": "Geração Simbólica: Conhecimento em regras do tipo 'se... então...', escritas por especialistas. Vantagem: Cada decisão pode ser rastreada até a regra aplicada."
    }
  },
  {
    "id": "Q01-F-04",
    "quinzena": 1,
    "nivel": "facil",
    "topico": "Tipos de Aprendizado de Máquina",
    "enunciado": "Um sistema de inteligência artificial é alimentado durante sua fase de treinamento com milhões de mensagens previamente classificadas por seres humanos com os rótulos 'spam' e 'não-spam'. Esse sistema enquadra-se no aprendizado:",
    "alternativas": [
      {
        "texto": "Supervisionado, pois aprende a partir de exemplos previamente rotulados com a resposta correta.",
        "correta": true,
        "explicacao": "Correta! O aprendizado supervisionado caracteriza-se exatamente pela presença de dados de treino acompanhados do gabarito (rótulo) fornecido por pessoas."
      },
      {
        "texto": "Não supervisionado, pois a máquina descobre agrupamentos autônomos sem intervenção de categorias prévias.",
        "correta": false,
        "explicacao": "Incorreta. No aprendizado não supervisionado não há rótulos ou respostas certas no treino."
      },
      {
        "texto": "Por reforço, pois o sistema executa penalidades financeiras diretas a cada erro cometido.",
        "correta": false,
        "explicacao": "Incorreta. No aprendizado por reforço o agente interage com um ambiente por tentativa e erro guiado por função de recompensa, sem rótulos fixos prévios."
      },
      {
        "texto": "Determinístico simbólico, pois baseia-se unicamente em comandos lógicos compilados manualmente.",
        "correta": false,
        "explicacao": "Incorreta. Trata-se de aprendizado de máquina estatístico a partir de dados rotulados, e não compilação manual de regras."
      },
      {
        "texto": "Generativo autorregressivo puro, pois o filtro tem como finalidade criar redações inéditas sobre spam.",
        "correta": false,
        "explicacao": "Incorreta. O filtro de spam é um classificador clássico supervisionado, não um modelo de geração textual aberta."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 8 / Capítulo 1 / Figura 1.3",
      "citacao": "Supervisionado: Aprende com exemplos rotulados por pessoas, como quem estuda com gabarito. Ex.: filtro de spam treinado com mensagens marcadas."
    }
  },
  {
    "id": "Q01-F-05",
    "quinzena": 1,
    "nivel": "facil",
    "topico": "Custos Materiais - Treinamento vs. Inferência",
    "enunciado": "Em relação aos custos materiais da Inteligência Artificial abordados por Kate Crawford (2021), como se diferenciam o 'treinamento' e a 'inferência'?",
    "alternativas": [
      {
        "texto": "O treinamento é o ajuste do modelo que concentra alto consumo de energia em poucas vezes; a inferência é cada consulta ao modelo pronto, cujo consumo unitário é pequeno, mas se multiplica milhões de vezes.",
        "correta": true,
        "explicacao": "Correta! O e-book define textualmente: o treinamento ocorre uma ou poucas vezes com consumo maciço; a inferência é cada uso diário cujo impacto advém da escala de milhões de consultas."
      },
      {
        "texto": "O treinamento ocorre localmente no smartphone do usuário, enquanto a inferência ocorre exclusivamente em data centers ecológicos.",
        "correta": false,
        "explicacao": "Incorreta. O treinamento de grandes modelos exige supercomputadores em data centers industriais, e não dispositivos de usuários."
      },
      {
        "texto": "A inferência é realizada apenas uma vez na criação do modelo, enquanto o treinamento se repete a cada prompt digitado.",
        "correta": false,
        "explicacao": "Incorreta. Os papéis estão invertidos: a inferência é a execução a cada prompt/consulta; o treino foi feito previamente."
      },
      {
        "texto": "Tanto o treinamento quanto a inferência possuem consumo nulo de água e eletricidade devido à imaterialidade da computação em nuvem.",
        "correta": false,
        "explicacao": "Incorreta. A crença de imaterialidade é refutada pela disciplina como um mito: há consumo maciço de água e energia em data centers."
      },
      {
        "texto": "O treinamento depende de trabalho voluntário sem servidores, enquanto a inferência não consome energia elétrica.",
        "correta": false,
        "explicacao": "Incorreta. Ambas as fases demandam infraestrutura física pesada e eletricidade."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 8 / Capítulo 1 / Seção 3",
      "citacao": "Treinamento: Ajuste do modelo a partir de dados. Concentra alto consumo de energia. Inferência: Cada uso do modelo já treinado. O consumo de cada consulta é pequeno, mas se repete milhões de vezes por dia."
    }
  },
  {
    "id": "Q01-M-01",
    "quinzena": 1,
    "nivel": "medio",
    "topico": "Teste de Turing vs. Quarto Chinês",
    "enunciado": "Considere o debate teórico sobre compreensão em Inteligência Artificial apresentado na Quinzena 1:\nI. O Teste de Turing (1950) estabelece que uma máquina pode ser considerada inteligente se seu comportamento externo não puder ser distinguido do de um ser humano em uma conversa.\nII. O experimento mental do Quarto Chinês de John Searle (1980) demonstra que a manipulação sintática de símbolos através de regras formais não é suficiente para comprovar compreensão ou semântica.\nIII. O experimento do Quarto Chinês valida conclusivamente o Teste de Turing ao demonstrar que processar símbolos equivale ontologicamente à compreensão da mente.\n\nEstá correto o que se afirma em:",
    "alternativas": [
      {
        "texto": "I e II, apenas.",
        "correta": true,
        "explicacao": "Correta! A afirmativa I traduz com precisão o critério comportamental de Turing, e a II sintetiza a crítica de Searle. A III está incorreta porque o Quarto Chinês foi concebido justamente para refutar a premissa do Teste de Turing."
      },
      {
        "texto": "I, II e III.",
        "correta": false,
        "explicacao": "Incorreta. A proposição III é categoricamente falsa, pois Searle refuta que manipulação de símbolos equivalha à mente consciente."
      },
      {
        "texto": "II e III, apenas.",
        "correta": false,
        "explicacao": "Incorreta. A proposição I é verdadeira e a III é falsa."
      },
      {
        "texto": "I, apenas.",
        "correta": false,
        "explicacao": "Incorreta. A proposição II também é rigorosamente correta segundo o material didático."
      },
      {
        "texto": "III, apenas.",
        "correta": false,
        "explicacao": "Incorreta. A afirmativa III contraria frontalmente a tese central de Searle."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 6 / Capítulo 1 / Seção 1",
      "citacao": "Teste de Turing: avalia só o comportamento. Quarto Chinês: seguindo um manual de regras, devolve respostas corretas sem entender nenhuma delas. Manipular símbolos não prova compreensão."
    }
  },
  {
    "id": "Q01-M-02",
    "quinzena": 1,
    "nivel": "medio",
    "topico": "Trabalho Fantasma (Ghost Work)",
    "enunciado": "A respeito do conceito de 'trabalho fantasma' (ghost work), sistematizado por Gray e Suri (2019) e evidenciado em reportagens sobre a indústria de IA:\n(A) Esse trabalho refere-se às atividades automatizadas desempenhadas por agentes inteligentes autônomos sem necessidade de energia.\n(B) Esse trabalho refere-se aos esforços humanos precarizados e pouco visíveis, como rotulagem massiva de dados e moderação de conteúdos sensíveis, essenciais para que os sistemas operem.\n\nAssinale a análise correta:",
    "alternativas": [
      {
        "texto": "A afirmação B é verdadeira e a afirmação A é falsa.",
        "correta": true,
        "explicacao": "Correta! O 'trabalho fantasma' não é automação por robôs, mas o trabalho de pessoas invisibilizadas que rotulam dados brutos e filtram conteúdos nocivos (como os trabalhadores no Quênia citados no e-book)."
      },
      {
        "texto": "A afirmação A é verdadeira e a afirmação B é falsa.",
        "correta": false,
        "explicacao": "Incorreta. A afirmação A deturpa totalmente o conceito ao associá-lo a software sem energia."
      },
      {
        "texto": "Ambas as afirmações são falsas, pois a IA contemporânea é 100% autossuficiente desde a extração de dados.",
        "correta": false,
        "explicacao": "Incorreta. A IA depende criticamente de intervenção humana em larga escala para rotulagem e alinhamento."
      },
      {
        "texto": "Ambas as afirmações são verdadeiras e descrevem os mesmos processos computacionais.",
        "correta": false,
        "explicacao": "Incorreta. As afirmações são mutualmente excludentes; A está conceitualmente errada."
      },
      {
        "texto": "A afirmação B aplica-se apenas à robótica física, e não aos modelos de linguagem de grande porte.",
        "correta": false,
        "explicacao": "Incorreta. O caso emblemático citado no e-book foi exatamente a moderação de textos para filtros do ChatGPT."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 8 / Capítulo 1 / Seção 3",
      "citacao": "Ghost work (trabalho fantasma): Trabalho humano pouco visível que mantém os sistemas funcionando: rotular dados e moderar conteúdo (Gray; Suri, 2019)."
    }
  },
  {
    "id": "Q01-M-03",
    "quinzena": 1,
    "nivel": "medio",
    "topico": "As Quatro Ilusões da Naturalização",
    "enunciado": "A naturalização é o processo social pelo qual uma tecnologia passa a parecer natural, óbvia e deixa de ser questionada, produzindo quatro ilusões descritas no Quadro 1.2 do material didático. Relacione cada ilusão com a constatação apresentada pela disciplina:\n1. Neutralidade\n2. Confiabilidade\n3. Gratuidade\n4. Universalidade\n\n( ) A ferramenta consome energia, água e depende de trabalho humano não remunerado pelo usuário direto.\n( ) O sistema produz o texto mais plausível estatisticamente, o qual pode conter afirmações falsas.\n( ) O sistema herda e amplifica as desigualdades e preconceitos presentes nas bases de dados.\n( ) O sistema funciona melhor na língua inglesa e para os grupos sociais hegemônicos na internet.\n\nA sequência correta de preenchimento é:",
    "alternativas": [
      {
        "texto": "3, 2, 1, 4.",
        "correta": true,
        "explicacao": "Correta! 3 = Gratuidade (há consumo de recursos e trabalho humano); 2 = Confiabilidade (produz texto plausível, mas que pode ser falso); 1 = Neutralidade (herda desigualdades dos dados); 4 = Universalidade (funciona melhor em inglês e grupos representados)."
      },
      {
        "texto": "1, 2, 3, 4.",
        "correta": false,
        "explicacao": "Incorreta. Associa incorretamente a descrição de custo material com 'Neutralidade'."
      },
      {
        "texto": "3, 1, 2, 4.",
        "correta": false,
        "explicacao": "Incorreta. Inverte os conceitos de confiabilidade e neutralidade nas proposições centrais."
      },
      {
        "texto": "4, 3, 2, 1.",
        "correta": false,
        "explicacao": "Incorreta. Sequência inteiramente dissonante das definições do Quadro 1.2."
      },
      {
        "texto": "2, 3, 4, 1.",
        "correta": false,
        "explicacao": "Incorreta. Confiabilidade refere-se à plausibilidade do texto, e não ao consumo de recursos."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 9 / Capítulo 1 / Quadro 1.2",
      "citacao": "Quadro 1.2 – As quatro ilusões da naturalização: Confiabilidade (produz o mais plausível, que pode ser falso), Neutralidade (herda desigualdades), Gratuidade (há consumo de recursos e trabalho), Universalidade (melhor em inglês e grupos representados)."
    }
  },
  {
    "id": "Q01-M-04",
    "quinzena": 1,
    "nivel": "medio",
    "topico": "Gerações de IA - Conexionista e Caixa-Preta",
    "enunciado": "A segunda geração de Inteligência Artificial (Conexionista) trouxe a capacidade de aprender padrões complexos a partir de exemplos, sem que um programador precise escrever regras uma a uma. No entanto, sua principal limitação técnica e epistemológica é:",
    "alternativas": [
      {
        "texto": "O problema da opacidade da 'caixa-preta', pois o conhecimento fica disperso em milhares ou bilhões de pesos numéricos de uma rede neural, tornando difícil auditar ou explicar por que uma decisão específica foi tomada.",
        "correta": true,
        "explicacao": "Correta! O e-book destaca que o conhecimento na geração conexionista reside nos pesos matemáticos da rede, criando o fenômeno de caixa-preta onde se conhece a entrada e saída, mas não o caminho causal explicável."
      },
      {
        "texto": "A incapacidade matemática de processar imagens ou áudios, limitando-se unicamente a tabelas do Excel.",
        "correta": false,
        "explicacao": "Incorreta. As redes neurais conexionistas destacaram-se exatamente pelo processamento bem-sucedido de dados não-estruturados como imagens e sons."
      },
      {
        "texto": "A obrigatoriedade de que cada peso da rede neural corresponda a uma regra jurídica redigida por advogados.",
        "correta": false,
        "explicacao": "Incorreta. Redes neurais operam com parametrização estatística empírica, e não com regras jurídicas explícitas."
      },
      {
        "texto": "O alto custo de energia na fase simbólica prévia, tornando inviável o ajuste de pesos matemáticos.",
        "correta": false,
        "explicacao": "Incorreta. Confunde paradigmas históricos sem suporte conceitual no material didático."
      },
      {
        "texto": "A falha automática caso o modelo seja executado em computadores conectados à internet.",
        "correta": false,
        "explicacao": "Incorreta. Conexão de rede é padrão na computação contemporânea e não tem relação com o limite da caixa-preta."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 7 / Capítulo 1 / Quadro 1.1 e Seção 2",
      "citacao": "Conexionista: Nos valores numéricos (pesos) de uma rede neural... Limitação: É difícil explicar cada decisão. Caixa-preta: conhecem a entrada e a saída, mas não o caminho que levou de uma à outra."
    }
  },
  {
    "id": "Q01-M-05",
    "quinzena": 1,
    "nivel": "medio",
    "topico": "Viés Algorítmico e Herança de Dados",
    "enunciado": "Analise as duas asserções a seguir e a relação proposta entre elas:\nI. Sistemas de triagem de currículos ou de reconhecimento facial podem apresentar desempenhos sistematicamente desfavoráveis para mulheres ou pessoas negras,\nPORQUE\nII. os modelos de aprendizado de máquina aprendem padrões estatísticos a partir de dados históricos, herdando assimetrias, preconceitos e sub-representações presentes na sociedade e no corpus de treinamento.\n\nA respeito dessas asserções, assinale a opção correta:",
    "alternativas": [
      {
        "texto": "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.",
        "correta": true,
        "explicacao": "Correta! Os estudos de Buolamwini & Gebru (2018) e o caso da triagem da Amazon comprovam que o viés algorítmico resulta da reprodução dos dados de treino históricos que refletem desigualdades estruturais."
      },
      {
        "texto": "As asserções I e II são verdadeiras, mas a II não é uma justificativa correta da I.",
        "correta": false,
        "explicacao": "Incorreta. A asserção II é exatamente a causa material e estatística do fenômeno enunciado na asserção I."
      },
      {
        "texto": "A asserção I é verdadeira, mas a asserção II é falsa.",
        "correta": false,
        "explicacao": "Incorreta. A asserção II é rigorosamente verdadeira segundo o referencial da disciplina."
      },
      {
        "texto": "A asserção I é falsa, mas a asserção II é verdadeira.",
        "correta": false,
        "explicacao": "Incorreta. A asserção I reflete fatos amplamente documentados no material didático."
      },
      {
        "texto": "Ambas as asserções I e II são proposições falsas.",
        "correta": false,
        "explicacao": "Incorreta. Ambas são proposições verdadeiras e fundamentais no estudo de viés algorítmico."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 9 / Capítulo 1 / Seção 4",
      "citacao": "Viés algorítmico: Resultados sistematicamente mais precisos ou favoráveis para alguns grupos do que para outros, em geral herdados dos dados de treinamento. Ex.: Buolamwini; Gebru (2018) e Dastin (2018)."
    }
  },
  {
    "id": "Q01-D-01",
    "quinzena": 1,
    "nivel": "dificil",
    "topico": "Estudo de Caso - Aplicativo de Rotas e Agente Racional",
    "enunciado": "Um profissional utiliza diariamente um aplicativo de rotas urbanas como Waze ou Google Maps para deslocar-se ao trabalho. Ele acredita genuinamente que não utiliza nenhuma forma de Inteligência Artificial em seu cotidiano, pois compreende IA exclusivamente como androides pensantes de filmes de ficção científica. Sob a ótica epistemológica da disciplina COM170, a atitude desse usuário exemplifica:",
    "alternativas": [
      {
        "texto": "O fenômeno da naturalização da tecnologia, conjugado ao desconhecimento de que aplicativos de navegação operam sob o paradigma do 'agente racional' (agir racionalmente), calculando a melhor ação para atingir um objetivo prático.",
        "correta": true,
        "explicacao": "Correta! Conforme o Capítulo 1, dizer que não usa IA enquanto usa Waze é o exemplo clássico de 'naturalização'. Além disso, aplicativos de rota corporificam o paradigma de 'agir racionalmente' (agente racional)."
      },
      {
        "texto": "A prova definitiva do sucesso do Teste de Turing, pois o mapa conversa com o motorista de modo indistinguível de um navegador humano.",
        "correta": false,
        "explicacao": "Incorreta. O aplicativo de rotas calcula trajetos otimizados por grafos e heurísticas; ele não se enquadra primariamente no paradigma comportamental de conversação de Turing."
      },
      {
        "texto": "A aplicação prática do experimento do Quarto Chinês, demonstrando que o algoritmo do trânsito compreende conscientemente o sentimento de estresse do motorista engarrafado.",
        "correta": false,
        "explicacao": "Incorreta. O Quarto Chinês prova exatamente o oposto: manipulação mecânica de regras não implica em consciência ou sentimentos."
      },
      {
        "texto": "Um caso de aprendizado por reforço não supervisionado sem custos de inferência em centros de dados.",
        "correta": false,
        "explicacao": "Incorreta. Cada cálculo de trajeto é uma inferência computacional real que consome recursos materiais em servidores externos."
      },
      {
        "texto": "A transição integral da inteligência artificial generativa para a inteligência artificial puramente simbólica de primeira geração.",
        "correta": false,
        "explicacao": "Incorreta. Não houve substituição de tecnologias generativas por regras manuais dos anos 1970."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Páginas 6 e 9 / Capítulo 1 / Seções 1 e 4",
      "citacao": "Naturalização: Processo pelo qual a tecnologia passa a parecer natural e óbvia. Ex.: dizer que não usa IA e abrir todos os dias um aplicativo de rotas... Agir racionalmente: o agente racional. Ex.: aplicativos de rotas."
    }
  },
  {
    "id": "Q01-D-02",
    "quinzena": 1,
    "nivel": "dificil",
    "topico": "Aprendizado de Máquina vs. IA Simbólica",
    "enunciado": "Uma instituição bancária precisa modernizar seu sistema de detecção de fraudes. Um grupo de analistas defende manter o sistema clássico de regras manuais 'se... então...' desenvolvidas pelos peritos mais experientes. Outro grupo propõe implementar redes neurais profundas alimentadas pelo histórico de milhões de transações passadas. Com base na comparação do Quadro 1.1 da Quinzena 1, qual trade-off arquitetural descreve rigorosamente essa escolha?",
    "alternativas": [
      {
        "texto": "O sistema simbólico oferece alta auditabilidade (cada bloqueio é rastreado até a regra original), mas falha em novos padrões não previstos; já o conexionista detecta fraudes inéditas sem regras prévias, mas impõe opacidade (caixa-preta), dificultando justificar detalhadamente por que uma transação específica foi negada.",
        "correta": true,
        "explicacao": "Correta! É exatamente o trade-off fundamental exposto no Quadro 1.1: rastreabilidade e rigidez da geração Simbólica vs. generalização empírica e opacidade da geração Conexionista."
      },
      {
        "texto": "O sistema simbólico tem consumo nulo de energia no treinamento, enquanto o sistema conexionista elimina integralmente qualquer tipo de viés histórico.",
        "correta": false,
        "explicacao": "Incorreta. O sistema conexionista não elimina vieses; pelo contrário, costuma reproduzir e amplificar os vieses dos dados de treino."
      },
      {
        "texto": "O sistema conexionista permite rastrear matematicamente qual linha de código em Python originou o bloqueio, superando a opacidade simbólica.",
        "correta": false,
        "explicacao": "Incorreta. Redes neurais distribuem a representação em pesos e matrizes, não em linhas de código explicáveis individualmente."
      },
      {
        "texto": "Ambas as soluções enquadram-se na IA Generativa de terceira geração, cuja característica comum é a geração fluente de textos verossímeis.",
        "correta": false,
        "explicacao": "Incorreta. Trata-se do contraste entre IA Simbólica (1ª geração) e IA Conexionista (2ª geração); a tarefa é classificação de risco, não geração de linguagem."
      },
      {
        "texto": "O sistema simbólico aprende por reforço através de tentativa e erro autônomo, enquanto as redes neurais dependem unicamente de lógica dedutiva aristotélica.",
        "correta": false,
        "explicacao": "Incorreta. A lógica dedutiva pertence ao paradigma simbólico, não às redes neurais."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 7 / Capítulo 1 / Quadro 1.1",
      "citacao": "Simbólica: Em regras 'se... então...'. Cada decisão rastreada. Falha onde regras não previram. Conexionista: Em pesos de rede neural. Aprende padrões não escritos. Difícil explicar cada decisão."
    }
  },
  {
    "id": "Q01-D-03",
    "quinzena": 1,
    "nivel": "dificil",
    "topico": "Análise da Situação - Lista de Música e Eixos da Quinzena 1",
    "enunciado": "Considere a situação para análise do Capítulo 1: Um aplicativo de streaming de música gera diariamente uma playlist personalizada para cada usuário com base nas faixas ouvidas, puladas ou repetidas. A lista chega pronta e muitos passam a escutar apenas o que ela sugere. Ao decompor essa situação nos quatro eixos conceituais da Quinzena 1, assinale a correlação tecnicamente correta:",
    "alternativas": [
      {
        "texto": "Definir: opera como agente racional orientado ao objetivo de maximizar engajamento; Aprender: ajusta recomendações com base no histórico comportamental; Custo fora da tela: a geração diária é uma inferência que consome energia em data centers; Naturalização: o usuário consome a lista passivamente sem questionar seus critérios.",
        "correta": true,
        "explicacao": "Correta! Esta é exatamente a resposta comentada oficial do e-book da disciplina (página 10), integrando perfeitamente os quatro eixos da Quinzena 1."
      },
      {
        "texto": "Definir: o sistema pensa como humano pois sente prazer musical; Aprender: utiliza IA simbólica de regras manuais; Custo fora da tela: custo zero pois é serviço digital; Naturalização: descontinuação de todos os algoritmos.",
        "correta": false,
        "explicacao": "Incorreta. A máquina não sente prazer (antropomorfismo ingênuo), opera com modelos estatísticos em data centers e não tem custo zero."
      },
      {
        "texto": "Definir: enquadra-se no Quarto Chinês porque o servidor fala chinês; Aprender: aprendizado não supervisionado puro sem histórico do usuário; Custo fora da tela: inferência sem consumo de eletricidade; Naturalização: leitura crítica constante dos termos de uso.",
        "correta": false,
        "explicacao": "Incorreta. O Quarto Chinês é um argumento sobre compreensão sintática, e o consumo de playlists passivamente é a própria naturalização sem crítica."
      },
      {
        "texto": "Definir: inteligência geral artificial autônoma (AGI); Aprender: modelo pré-treinado estático sem capacidade de atualização; Custo fora da tela: custo apenas na instalação do app; Naturalização: escolha deliberada e manual de cada faixa.",
        "correta": false,
        "explicacao": "Incorreta. O aplicativo não é AGI, atualiza-se continuamente e a inferência diária gera consumo recorrente."
      },
      {
        "texto": "Definir: classificador de imagens supervisionado; Aprender: transferência de aprendizado sem dados de áudio; Custo fora da tela: descarte de hardware por obsolescência; Naturalização: rejeição automática do aplicativo pelos jovens.",
        "correta": false,
        "explicacao": "Incorreta. Classificador de imagens não se aplica a streaming de música e a naturalização acarreta aceitação passiva, não rejeição."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 10 / Capítulo 1 / Situação para Análise",
      "citacao": "Resposta comentada. Definir: agente racional orientado a aumentar tempo de escuta. Aprender: ajusta recomendações. Custo: inferência em centros de dados. Naturalização: ouvir passivamente sem perguntar critérios."
    }
  },
  {
    "id": "Q01-D-04",
    "quinzena": 1,
    "nivel": "dificil",
    "topico": "Externalidades e Mito da Imaterialidade",
    "enunciado": "A obra 'Atlas da IA' de Kate Crawford (2021) é mobilizada na disciplina para desconstruir a visão ingênua da tecnologia. Segundo a análise da autora sobre custos materiais e externalidades socioambientais da Inteligência Artificial:",
    "alternativas": [
      {
        "texto": "A computação não é imaterial; a IA depende de uma cadeia extrativa que inclui mineração de minerais raros, fábricas de semicondutores, centros de dados que consomem grandes volumes de água potável para resfriamento e eletricidade fóssil, cujos custos ecológicos configuram externalidades não computadas no preço final pago pelo usuário.",
        "correta": true,
        "explicacao": "Correta! Conforme sintetizado no e-book e na obra de Crawford, a inteligência artificial é uma indústria pesada e extrativa ancorada em recursos materiais finitos e trabalho humano mal remunerado, desmentindo o mito da nuvem etérea."
      },
      {
        "texto": "A inteligência artificial atingiu a imaterialidade total a partir do advento da computação quântica em 2020, operando sem dissipação térmica ou necessidade de infraestrutura.",
        "correta": false,
        "explicacao": "Incorreta. A imaterialidade é refutada pela disciplina como um mito tecnocrático."
      },
      {
        "texto": "Os impactos socioambientais da IA limitam-se ao descarte de smartphones antigos, não havendo consumo relevante de água ou eletricidade pelos data centers.",
        "correta": false,
        "explicacao": "Incorreta. O e-book pontua textualmente que data centers consomem milhões de litros de água para resfriamento e alta carga contínua de eletricidade."
      },
      {
        "texto": "O trabalho fantasma (ghost work) foi integralmente erradicado pela aplicação de aprendizado supervisionado de terceira geração.",
        "correta": false,
        "explicacao": "Incorreta. Pelo contrário: a IA generativa multiplicou a demanda por moderadores humanos para filtragem de conteúdos nocivos."
      },
      {
        "texto": "A única externalidade ambiental real da IA decorre da impressão física de relatórios acadêmicos gerados pelos modelos de linguagem.",
        "correta": false,
        "explicacao": "Incorreta. Reduzir a pegada ecológica da IA a impressões de papel desconsidera toda a infraestrutura física de data centers e redes de energia."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 8 / Capítulo 1 / Seção 3",
      "citacao": "Mito da imaterialidade: Crença de que a computação não tem consequências físicas. Kate Crawford (2021) mostra que a IA depende de mineração, fábricas e centros de dados que consomem eletricidade e água... Externalidade: Custo real que fica fora do preço pago."
    }
  },
  {
    "id": "Q01-D-05",
    "quinzena": 1,
    "nivel": "dificil",
    "topico": "Identificação de Tipos de Aprendizado de Máquina",
    "enunciado": "Considere a árvore de decisão apresentada na Figura 1.3 do material didático para identificar o tipo de aprendizado de máquina:\nCaso 1: Um algoritmo de e-commerce analisa milhões de cestas de compras de clientes sem receber nenhuma categoria pré-definida e descobre sozinho três perfis distintos de compradores com hábitos similares.\nCaso 2: Um sistema é colocado para controlar os semáforos de uma grande avenida; a cada ciclo, ele altera o tempo de verde e recebe pontos positivos (recompensa) quando a lentidão diminui ou penalidades quando o trânsito trava.\nCaso 3: Um software hospitalar recebe milhares de exames de sangue acompanhados do laudo médico definitivo indicando 'anêmico' ou 'não anêmico' para prever diagnósticos de novos pacientes.\n\nAssinale a correspondência técnica correta entre os casos e os tipos de aprendizado:",
    "alternativas": [
      {
        "texto": "Caso 1: Não supervisionado; Caso 2: Por reforço; Caso 3: Supervisionado.",
        "correta": true,
        "explicacao": "Correta! Caso 1: sem gabarito prévio, agrupando por similaridade = Não supervisionado. Caso 2: tentativa e erro guiada por recompensas/penalidades = Por reforço. Caso 3: dados de treino acompanhados do gabarito humano (rótulo) = Supervisionado."
      },
      {
        "texto": "Caso 1: Supervisionado; Caso 2: Por reforço; Caso 3: Não supervisionado.",
        "correta": false,
        "explicacao": "Incorreta. O Caso 1 não possui gabarito (é não-supervisionado) e o Caso 3 possui laudo de treino (é supervisionado)."
      },
      {
        "texto": "Caso 1: Por reforço; Caso 2: Supervisionado; Caso 3: Simbólico clássico.",
        "correta": false,
        "explicacao": "Incorreta. O Caso 2 é que adota dinâmicas de reforço através de pontuações de desempenho no trânsito."
      },
      {
        "texto": "Caso 1: Não supervisionado; Caso 2: Supervisionado; Caso 3: Por reforço.",
        "correta": false,
        "explicacao": "Incorreta. O semáforo aprende com recompensa por tentativa e erro, o que caracteriza aprendizado por reforço."
      },
      {
        "texto": "Caso 1: Heurístico determinístico; Caso 2: Algoritmo genético puro; Caso 3: Inferência sem dados.",
        "correta": false,
        "explicacao": "Incorreta. Termos desconectados da taxonomia de aprendizado de máquina estabelecida na disciplina."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 8 / Capítulo 1 / Figura 1.3",
      "citacao": "Figura 1.3: Exemplo veio com resposta certa? SIM -> Supervisionado; NÃO -> Age e recebe recompensa/penalidade? SIM -> Por Reforço; NÃO -> Não Supervisionado."
    }
  },
  {
    "id": "Q02-F-01",
    "quinzena": 2,
    "nivel": "facil",
    "topico": "Tokens e Tokenização",
    "enunciado": "O que é um 'token' na arquitetura dos Modelos de Linguagem de Grande Porte (LLMs), como GPT-4, Gemini e Claude?",
    "alternativas": [
      {
        "texto": "Um pedaço de texto (palavra curta, sílaba, sufixo ou sinal de pontuação) associado a um número em um dicionário fixo montado antes do treinamento.",
        "correta": true,
        "explicacao": "Correta! Conforme o Capítulo 2 (pág. 12), o token é exatamente o fragmento textual associado a um identificador numérico em um dicionário prévio."
      },
      {
        "texto": "Um arquivo binário criptografado contendo a senha de acesso ao modelo em nuvem.",
        "correta": false,
        "explicacao": "Incorreta. Token na arquitetura de LLMs não é credencial de autenticação de API, mas a unidade mínima de processamento textual."
      },
      {
        "texto": "Uma unidade sintática equivalente obrigatoriamente a exatamente uma frase inteira pontuada.",
        "correta": false,
        "explicacao": "Incorreta. Tokens são pedaços de palavras, sílabas ou pontuações, e não frases completas."
      },
      {
        "texto": "O código de compilação em assembly gerado pela placa gráfica durante o treinamento.",
        "correta": false,
        "explicacao": "Incorreta. O token é um elemento da representação textual no vocabulário do modelo, não código de máquina em assembly."
      },
      {
        "texto": "Um rótulo manual atribuído exclusivamente pelos moderadores humanos no Quênia.",
        "correta": false,
        "explicacao": "Incorreta. A tokenização é uma etapa algorítmica matemática automática (ex: Byte-Pair Encoding), não um rótulo manual de moderação."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 12 / Capítulo 2 / Seção 1",
      "citacao": "Token: Pedaço de texto associado a um número em um dicionário fixo, montado antes do treinamento. Pode ser uma palavra curta, uma sílaba, um sufixo ou um sinal de pontuação."
    }
  },
  {
    "id": "Q02-F-02",
    "quinzena": 2,
    "nivel": "facil",
    "topico": "Embeddings e Mapa de Significados",
    "enunciado": "Como o conceito de 'embedding' é definido no funcionamento interno dos modelos de linguagem?",
    "alternativas": [
      {
        "texto": "Uma lista de números (vetor) que confere a cada token uma coordenada em um mapa multidimensional de significados, onde tokens em contextos similares ocupam posições próximas.",
        "correta": true,
        "explicacao": "Correta! Embeddings são representações vetoriais densas onde proximidade geométrica reflete proximidade contextual estatística aprendida pelo modelo."
      },
      {
        "texto": "Uma camada de segurança que impede o modelo de gerar afirmações falsas ou preconceituosas.",
        "correta": false,
        "explicacao": "Incorreta. O embedding mapeia posições numéricas de significados textuais; filtros de moderação e alinhamento pertencem a outras etapas (como RLHF)."
      },
      {
        "texto": "Um algoritmo de busca na web em tempo real que localiza fontes primárias para cada palavra gerada.",
        "correta": false,
        "explicacao": "Incorreta. O modelo opera sobre vetores matemáticos estáticos aprendidos no treino, sem busca automática nativa na web."
      },
      {
        "texto": "A conversão reversa de números em letras maiúsculas ao final da exibição do prompt.",
        "correta": false,
        "explicacao": "Incorreta. Esta é a fase final de de-tokenização, enquanto o embedding é a projeção geométrica dos tokens no espaço vetorial."
      },
      {
        "texto": "Um protocolo de rede para transmitir pacotes TCP/IP entre o servidor de inferência e o usuário.",
        "correta": false,
        "explicacao": "Incorreta. Embedding é um conceito de álgebra linear e processamento de linguagem natural, não protocolo de infraestrutura de rede."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 12 / Capítulo 2 / Seção 1",
      "citacao": "Embedding: Lista de números que dá a cada token uma posição em um mapa de significados com centenas ou milhares de dimensões. Tokens que aparecem em contextos parecidos ocupam posições próximas."
    }
  },
  {
    "id": "Q02-F-03",
    "quinzena": 2,
    "nivel": "facil",
    "topico": "Mecanismo de Atenção",
    "enunciado": "Apresentado pelo Google no marco 'Attention Is All You Need' (Vaswani et al., 2017), o mecanismo de atenção nos modelos do tipo Transformer tem como principal papel:",
    "alternativas": [
      {
        "texto": "Calcular o peso da relação entre cada token e os demais da sequência, permitindo distinguir o sentido de palavras polissêmicas a partir do contexto.",
        "correta": true,
        "explicacao": "Correta! O e-book destaca que é a atenção que permite ao modelo distribuir pesos contextuais e, por exemplo, distinguir o 'banco da praça' do 'banco digital'."
      },
      {
        "texto": "Detectar automaticamente quando o usuário está distraído ou com sono através da webcam.",
        "correta": false,
        "explicacao": "Incorreta. Trata-se de mecanismo matemático de pesos relacionais entre tokens em redes neurais, e não biometria de atenção humana."
      },
      {
        "texto": "Apagar permanentemente do modelo os tokens que apresentarem probabilidade inferior a 1%.",
        "correta": false,
        "explicacao": "Incorreta. A atenção pondera a influência mútua entre tokens, e não faz expurgo estático do vocabulário."
      },
      {
        "texto": "Garantir a veracidade factual absoluta de todas as respostas antes da geração do primeiro caractere.",
        "correta": false,
        "explicacao": "Incorreta. A atenção confere coerência sintática e contextual, mas não garante a verdade empírica dos fatos."
      },
      {
        "texto": "Substituir o hardware de GPUs por processadores comuns de baixo consumo de energia.",
        "correta": false,
        "explicacao": "Incorreta. A arquitetura Transformer com atenção altamente paralelizável foi criada justamente para acelerar o processamento em GPUs."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 13 / Capítulo 2 / Seção 2",
      "citacao": "Mecanismo de atenção: Cálculo que mede quanto cada token se relaciona com os demais e distribui pesos entre eles. É o que dá coerência ao texto e permite distinguir o banco da praça do banco digital (Vaswani et al., 2017)."
    }
  },
  {
    "id": "Q02-F-04",
    "quinzena": 2,
    "nivel": "facil",
    "topico": "Temperatura do Modelo",
    "enunciado": "Nos modelos de linguagem generativos, o parâmetro denominado 'temperatura' atua diretamente sobre:",
    "alternativas": [
      {
        "texto": "A distribuição de probabilidade dos próximos tokens, concentrando as chances nas opções mais prováveis (temperatura baixa) ou distribuindo-as entre mais opções (temperatura alta).",
        "correta": true,
        "explicacao": "Correta! Temperatura baixa torna o modelo mais determinista e previsível; temperatura alta aumenta a variabilidade das escolhas token a token."
      },
      {
        "texto": "A refrigeração líquida física dos racks de processadores instalados nos centros de dados.",
        "correta": false,
        "explicacao": "Incorreta. Embora centros de dados precisem de água para resfriamento físico, o parâmetro 'temperatura' do modelo é um hiperparâmetro puramente estatístico."
      },
      {
        "texto": "O nível de formalidade ética imposto obrigatoriamente pelas leis de direito autoral.",
        "correta": false,
        "explicacao": "Incorreta. Temperatura atua na amostragem probabilística de tokens, não em filtros jurídicos."
      },
      {
        "texto": "O limite de tempo em segundos que o usuário tem para formular o próximo prompt.",
        "correta": false,
        "explicacao": "Incorreta. Não se relaciona a temporizadores de sessão do cliente."
      },
      {
        "texto": "O número fixo de avaliadores humanos contratados durante a etapa de RLHF.",
        "correta": false,
        "explicacao": "Incorreta. Avaliadores humanos participam do alinhamento (RLHF), alheios ao ajuste da temperatura na inferência."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 13 / Capítulo 2 / Seção 2",
      "citacao": "Temperatura: Parâmetro que ajusta a distribuição de probabilidade. Com temperatura baixa, a chance se concentra nas opções mais prováveis; com temperatura alta, se espalha entre mais opções."
    }
  },
  {
    "id": "Q02-F-05",
    "quinzena": 2,
    "nivel": "facil",
    "topico": "Alucinação Factual vs. Alucinação Extrínseca",
    "enunciado": "Qual é a distinção conceitual precisa entre 'alucinação factual' e 'alucinação extrínseca' apresentada no Capítulo 2 do e-book?",
    "alternativas": [
      {
        "texto": "A factual inventa fatos inexistentes no mundo real (como leis ou pessoas criadas do zero); a extrínseca insere informações ou dados que não constavam no documento fornecido pelo próprio usuário.",
        "correta": true,
        "explicacao": "Correta! Conforme o e-book (págs. 14 e 17), a factual inventa entidades no mundo (o blefe), enquanto a extrínseca adiciona dados alheios à fonte específica que foi colada na conversa."
      },
      {
        "texto": "A factual é provocada por vírus de computador; a extrínseca decorre do superaquecimento dos cabos submarinos.",
        "correta": false,
        "explicacao": "Incorreta. Ambas são fenômenos estatísticos inerentes à previsão de tokens em modelos conexionistas generativos."
      },
      {
        "texto": "A extrínseca ocorre apenas em modelos pagos; a factual é exclusiva dos modelos de código aberto.",
        "correta": false,
        "explicacao": "Incorreta. Todos os modelos de linguagem generativos estão sujeitos a ambos os tipos de alucinação."
      },
      {
        "texto": "A alucinação factual é corrigida automaticamente pelo teclado; a extrínseca é permanente e indelével.",
        "correta": false,
        "explicacao": "Incorreta. Trata-se de distinção entre referência ao conhecimento empírico do mundo vs. aderência a um texto de entrada específico."
      },
      {
        "texto": "A factual diz respeito exclusivamente a erros gramaticais de pontuação; a extrínseca a erros de cálculo numérico.",
        "correta": false,
        "explicacao": "Incorreta. Alucinações tratam de fabricação e distorção de conteúdo factual, não de formatação ortográfica simples."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Páginas 14 e 17 / Capítulo 2 / Seções 3 e Situação",
      "citacao": "Alucinação factual: O modelo inventa fatos, pessoas, obras ou leis que não existem... Alucinação extrínseca: O modelo acrescenta informação que não estava no texto fornecido."
    }
  },
  {
    "id": "Q02-M-01",
    "quinzena": 2,
    "nivel": "medio",
    "topico": "Assimetria de Tokens entre Línguas",
    "enunciado": "A Tabela 2.1 do material didático demonstra que a frase 'Artificial intelligence is transforming education' (em inglês) consome 6 tokens, enquanto a mesma frase em português ('A inteligência artificial está transformando a educação') consome 10 tokens. Essa diferença ocorre principalmente porque:",
    "alternativas": [
      {
        "texto": "O dicionário do tokenizador foi construído predominantemente a partir de corpora em inglês, fazendo com que palavras em línguas menos representadas (como o português) sejam fragmentadas em pedaços menores (subpalavras), encarecendo o processamento e consumindo mais rapidamente a janela de contexto.",
        "correta": true,
        "explicacao": "Correta! Conforme o e-book explica na página 12, a predominância de textos em inglês no pré-treino gera dicionários assimétricos, onde o português exige mais tokens para expressar o mesmo significado."
      },
      {
        "texto": "A gramática da língua portuguesa é matematicamente incompatível com sistemas operacionais baseados em Unix.",
        "correta": false,
        "explicacao": "Incorreta. Trata-se puramente de frequência estatística na construção do vocabulário do tokenizador, não de incompatibilidade de sistemas operacionais."
      },
      {
        "texto": "Os servidores centrais das desenvolvedoras realizam traduções automáticas para o latim antes de tokenizar qualquer texto.",
        "correta": false,
        "explicacao": "Incorreta. Modelos operam tokenização direta nos textos de entrada sem passar por etapas intermediárias em latim."
      },
      {
        "texto": "O idioma português possui menos vogais que a língua inglesa, obrigando a criação de tokens artificiais de preenchimento.",
        "correta": false,
        "explicacao": "Incorreta. Justificativa fonética sem qualquer respaldo técnico no processamento de linguagem natural."
      },
      {
        "texto": "A taxa cambial de importação do dólar duplica a cobrança de tokens gerados em servidores da América Latina.",
        "correta": false,
        "explicacao": "Incorreta. A quantidade de tokens é uma métrica algorítmica de fragmentação de texto, não taxa cambial financeira."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 12 / Capítulo 2 / Seção 1 e Tabela 2.1",
      "citacao": "Como o dicionário foi montado principalmente com textos em inglês, o português costuma ser dividido em mais tokens. Isso aumenta o custo de processamento e ocupa mais espaço da janela de contexto."
    }
  },
  {
    "id": "Q02-M-02",
    "quinzena": 2,
    "nivel": "medio",
    "topico": "Geração Estatística vs. Busca em Banco de Dados",
    "enunciado": "Analise as asserções sobre como os modelos de linguagem respondem a perguntas:\nI. Um modelo de linguagem (LLM) calcula estatisticamente a probabilidade do próximo token com base nos pesos ajustados em sua rede neural, sem realizar consultas ativas a um repositório de fatos verdadeiros em tempo real durante a inferência pura,\nPORQUE\nII. os conhecimentos do modelo estão codificados em sua memória paramétrica, o que possibilita a geração de respostas altamente coerentes e estruturadas que, no entanto, podem conter premissas inteiramente falsas.\n\nA respeito dessas asserções, assinale a opção correta:",
    "alternativas": [
      {
        "texto": "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.",
        "correta": true,
        "explicacao": "Correta! A geração é puramente probabilística sobre os pesos (memória paramétrica); o modelo 'calcula continuações prováveis', e não busca em tabelas da verdade, justificando por que fluência não equivale à veracidade factual."
      },
      {
        "texto": "As asserções I e II são verdadeiras, mas a II não é uma justificativa correta da I.",
        "correta": false,
        "explicacao": "Incorreta. A asserção II conecta-se diretamente à natureza paramétrica probabilística descrita na asserção I."
      },
      {
        "texto": "A asserção I é verdadeira, mas a asserção II é falsa.",
        "correta": false,
        "explicacao": "Incorreta. A asserção II é rigorosamente correta conforme o e-book (pág. 14)."
      },
      {
        "texto": "A asserção I é falsa, mas a asserção II é verdadeira.",
        "correta": false,
        "explicacao": "Incorreta. A asserção I reflete com fidelidade o processo de inferência token a token."
      },
      {
        "texto": "Ambas as asserções I e II são falsas.",
        "correta": false,
        "explicacao": "Incorreta. Ambas são proposições verdadeiras fundamentais da disciplina."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 14 / Capítulo 2 / Seção 2",
      "citacao": "O modelo de linguagem estima a continuação do texto. Ele não consulta uma base de dados no momento da resposta... Todo o seu conhecimento está na memória paramétrica, nos valores numéricos ajustados durante o treinamento."
    }
  },
  {
    "id": "Q02-M-03",
    "quinzena": 2,
    "nivel": "medio",
    "topico": "Os Cinco Tipos de Erro dos Modelos de Linguagem",
    "enunciado": "A Figura 2.3 do Capítulo 2 cataloga cinco tipos de erro comuns cometidos por modelos de linguagem, correlacionando-os a análogos no comportamento humano. Relacione cada tipo de erro ao seu respectivo sintoma característico:\n1. Alucinação factual\n2. Coerência sem verdade (Sofisma)\n3. Viés de corpus\n4. Ausência de contexto (A Generalização)\n5. A Evasão (Vagueza confortável)\n\n( ) O texto responde a uma versão genérica e descontextualizada da pergunta, ignorando a localidade ou o público.\n( ) O texto é fluente, elegante e bem estruturado, mas não toma partido nem resolve a dúvida do usuário.\n( ) O modelo inventa uma decisão judicial ou obra acadêmica que nunca existiu no mundo real (o blefe).\n( ) O modelo reproduz preconceitos e distorções sistemáticas consolidadas nos textos de treino.\n( ) O raciocínio soa impecavelmente lógico, mas parte de premissas técnicas falsas.\n\nA sequência correta é:",
    "alternativas": [
      {
        "texto": "4, 5, 1, 3, 2.",
        "correta": true,
        "explicacao": "Correta! 4 = Ausência de contexto (versão genérica); 5 = A Evasão (vagueza que não se compromete); 1 = Alucinação factual (invenção de obras/leis); 3 = Viés de corpus (reprodução de distorções dos dados); 2 = Sofisma (coerência sem verdade)."
      },
      {
        "texto": "1, 2, 3, 4, 5.",
        "correta": false,
        "explicacao": "Incorreta. Mapeamento direto incorreto das descrições conceituais."
      },
      {
        "texto": "4, 1, 5, 2, 3.",
        "correta": false,
        "explicacao": "Incorreta. Inverte os conceitos de evasão e alucinação factual."
      },
      {
        "texto": "3, 5, 2, 1, 4.",
        "correta": false,
        "explicacao": "Incorreta. Confunde viés de corpus com generalização sem contexto."
      },
      {
        "texto": "5, 4, 1, 3, 2.",
        "correta": false,
        "explicacao": "Incorreta. Inverte a primeira e a segunda associação."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 15 / Capítulo 2 / Figura 2.3",
      "citacao": "Figura 2.3 – Os cinco tipos de erro: Alucinação factual (O Blefe), Coerência sem verdade (O Sofisma), Viés de corpus (O Preconceito), Ausência de contexto (A Generalização), A Evasão (A Vagueza Confortável)."
    }
  },
  {
    "id": "Q02-M-04",
    "quinzena": 2,
    "nivel": "medio",
    "topico": "As Quatro Etapas do RLHF",
    "enunciado": "O ajuste de comportamento de assistentes de conversação via RLHF (Reinforcement Learning from Human Feedback), descrito por Ouyang et al. (2022), divide-se rigorosamente em quatro etapas sucessivas. Qual é a ordem cronológica correta dessas etapas?",
    "alternativas": [
      {
        "texto": "1. Geração (produção de várias respostas) -> 2. Comparação (avaliadores humanos ordenam as respostas) -> 3. Modelo de recompensa (aprendizado para imitar os julgamentos humanos) -> 4. Ajuste (reforço para otimizar as notas do modelo).",
        "correta": true,
        "explicacao": "Correta! Conforme o Quadro 2.1 (pág. 16), o RLHF segue exatamente o fluxo: Geração -> Comparação Humana -> Treinamento do Modelo de Recompensa -> Ajuste por Aprendizado por Reforço."
      },
      {
        "texto": "1. Ajuste -> 2. Comparação -> 3. Geração -> 4. Modelo de recompensa.",
        "correta": false,
        "explicacao": "Incorreta. O modelo não pode ser ajustado antes de gerar respostas e obter comparações."
      },
      {
        "texto": "1. Moderação no Quênia -> 2. Busca na web -> 3. Tokenização manual -> 4. Emissão de certificado.",
        "correta": false,
        "explicacao": "Incorreta. Mistura etapas informais com termos alheios ao protocolo formal de RLHF."
      },
      {
        "texto": "1. Comparação -> 2. Modelo de recompensa -> 3. Geração -> 4. Pré-treino de embeddings.",
        "correta": false,
        "explicacao": "Incorreta. O pré-treino de embeddings precede em meses o alinhamento com RLHF."
      },
      {
        "texto": "1. Geração -> 2. Redução de temperatura -> 3. Proibição de sinônimos -> 4. Fechamento de código.",
        "correta": false,
        "explicacao": "Incorreta. Parâmetros de inferência como temperatura não integram a sequência metodológica das etapas de RLHF."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 16 / Capítulo 2 / Quadro 2.1",
      "citacao": "Quadro 2.1 – As quatro etapas do RLHF: 1. Geração; 2. Comparação; 3. Modelo de recompensa; 4. Ajuste."
    }
  },
  {
    "id": "Q02-M-05",
    "quinzena": 2,
    "nivel": "medio",
    "topico": "Voz Padronizada e Efeito de Nivelamento",
    "enunciado": "A respeito da 'voz padronizada' característica dos assistentes de IA generativa e de suas consequências na escrita acadêmica:\nI. A voz padronizada decorre da combinação estatística dos textos médios de treino com os reforços aplicados pelos critérios corporativos de RLHF.\nII. Ensaios e relatórios produzidos ou excessivamente mediados por esses assistentes tendem a ficar estilisticamente mais homogêneos e semelhantes entre si (Padmakumar; He, 2024).\nIII. A voz padronizada garante que o texto expresse de forma fiel as particularidades culturais, regionais e biográficas singulares de cada autor humano.\n\nEstá correto o que se afirma em:",
    "alternativas": [
      {
        "texto": "I e II, apenas.",
        "correta": true,
        "explicacao": "Correta! As afirmativas I e II sintetizam o fenômeno demonstrado no e-book. A afirmativa III é falsa porque a voz padronizada gera exatamente a perda de singularidade pessoal, regional e cultural."
      },
      {
        "texto": "I, II e III.",
        "correta": false,
        "explicacao": "Incorreta. A afirmativa III contradiz diametralmente a definição de homogeneização da voz padronizada."
      },
      {
        "texto": "II e III, apenas.",
        "correta": false,
        "explicacao": "Incorreta. A proposição I é verdadeira e a III é falsa."
      },
      {
        "texto": "I, apenas.",
        "correta": false,
        "explicacao": "Incorreta. O estudo empírico de Padmakumar e He (2024) citado na afirmativa II também está plenamente correto."
      },
      {
        "texto": "III, apenas.",
        "correta": false,
        "explicacao": "Incorreta. A proposição III é categoricamente incorreta."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 16 / Capítulo 2 / Seção 4",
      "citacao": "Voz padronizada: Registro neutro, genérico e bem organizado, sem posição própria. Resulta da média dos textos de treino e das preferências reforçadas no RLHF. Ensaios escritos com modelos ajustados ficaram mais parecidos entre si (Padmakumar; He, 2024)."
    }
  },
  {
    "id": "Q02-D-01",
    "quinzena": 2,
    "nivel": "dificil",
    "topico": "Estudo de Caso - O Caso Mata v. Avianca e Alucinação Factual",
    "enunciado": "No célebre caso jurídico Mata v. Avianca (2023), citado no material da Quinzena 2, advogados apresentaram em juízo uma petição contendo precedentes jurisprudenciais com nomes de partes verossímeis, citações de votos detalhadas e números de processos formatados perfeitamente, elaborados por um modelo de linguagem generativo. Descobriu-se posteriormente que nenhuma daquelas decisões judiciais existia na realidade. Sob a taxonomia técnica da Quinzena 2, esse episódio é categorizado como:",
    "alternativas": [
      {
        "texto": "Uma alucinação factual clássica ('o blefe'), decorrente da previsão probabilística autorregressiva do próximo token, onde a ferramenta gerou a sequência textual mais convincente para uma peça jurídica sem consultar nenhuma base oficial de jurisprudência.",
        "correta": true,
        "explicacao": "Correta! O caso Mata v. Avianca é o exemplo canônico no e-book (págs. 14 e 17) de 'alucinação factual' ou 'blefe': a IA reproduz o padrão formal de uma decisão jurídica por probabilidade de tokens, mas a substância é uma ficção pura."
      },
      {
        "texto": "Uma falha de hardware de GPU que corrompeu o banco de dados SQL do tribunal de Nova York.",
        "correta": false,
        "explicacao": "Incorreta. A falha é inerente à natureza probabilística dos modelos generativos, e não erro de hardware em servidores de terceiros."
      },
      {
        "texto": "Um caso típico de ausência de contexto resolúvel unicamente pelo aumento da temperatura do modelo para 1.0.",
        "correta": false,
        "explicacao": "Incorreta. Aumentar a temperatura espalharia ainda mais as probabilidades, aumentando a chance de geração de termos aleatórios e alucinações."
      },
      {
        "texto": "Uma operação normal da IA Simbólica que aplicou deduções estritas da lógica de predicados de primeira ordem.",
        "correta": false,
        "explicacao": "Incorreta. O software envolvido era um modelo de linguagem conexionista generativo (ChatGPT), e não um motor dedutivo simbólico."
      },
      {
        "texto": "Um erro de tokenização decorrente do alfabeto cirílico não reconhecido pelo dicionário do GPT-4.",
        "correta": false,
        "explicacao": "Incorreta. O processo judicial tramitou em inglês nos EUA; o erro foi conceitual e factual de alucinação de precedentes."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Páginas 14 e 17 / Capítulo 2 / Seção 3 e Situação",
      "citacao": "Alucinação factual (O blefe): O modelo inventa fatos, pessoas, obras ou leis que não existem... Em Mata v. Avianca (2023), advogados citaram decisões judiciais inventadas pela ferramenta."
    }
  },
  {
    "id": "Q02-D-02",
    "quinzena": 2,
    "nivel": "dificil",
    "topico": "Situação para Análise - Resumo de Engenharia e Referência Inexistente",
    "enunciado": "Considere a situação para análise da Quinzena 2: Uma estudante de Engenharia envia a um assistente de IA um artigo sobre manutenção preventiva e solicita um resumo com três referências complementares. O resumo afirma que o método reduziu as paradas de máquina em 35% (dado que não consta no artigo original). Das três referências indicadas, ela localiza duas na base acadêmica; a terceira cita autores de renome, título plausível e uma revista conceituada, mas jamais foi publicada. Com base nos conceitos da Quinzena 2, analise:\n1. O acréscimo dos 35% é uma alucinação extrínseca.\n2. A referência fictícia é uma alucinação factual gerada pela estimativa da sequência mais provável de um artigo acadêmico.\n3. O procedimento rigoroso exigido antes do uso é auditar cada dado numérico contra o artigo original e consultar as fontes primárias na base bibliográfica.\n\nAssinale a conclusão correta:",
    "alternativas": [
      {
        "texto": "As três afirmações 1, 2 e 3 estão plenamente corretas e fundamentam a resposta pedagógica do material.",
        "correta": true,
        "explicacao": "Correta! A resposta comentada da página 17 do e-book confirma rigorosamente as três proposições: o percentual inexistente na fonte colada é alucinação extrínseca; a obra inventada é alucinação factual; a solução imperativa é verificação na fonte primária."
      },
      {
        "texto": "Apenas as afirmações 1 e 2 são corretas, pois a verificação na fonte primária é dispensável caso a IA confirme a veracidade em uma segunda mensagem.",
        "correta": false,
        "explicacao": "Incorreta. Reperguntar ao mesmo modelo repete os vícios probabilísticos; a verificação exige fonte independente."
      },
      {
        "texto": "Apenas a afirmação 3 é correta, pois a invenção de dados é considerada um recurso poético legítimo em engenharia.",
        "correta": false,
        "explicacao": "Incorreta. A invenção de dados técnicos (35%) e artigos é um erro grave de alucinação."
      },
      {
        "texto": "A afirmação 1 está incorreta, pois dados inventados sobre documentos fornecidos são classificados como vieses de corpus.",
        "correta": false,
        "explicacao": "Incorreta. Adicionar informação ausente em documento fornecido é a definição exata de alucinação extrínseca."
      },
      {
        "texto": "Todas as afirmações são incorretas sob a ótica dos modelos Transformer.",
        "correta": false,
        "explicacao": "Incorreta. Todas as três afirmações refletem com precisão milimétrica a doutrina do e-book."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Páginas 16-17 / Capítulo 2 / Situação para Análise",
      "citacao": "Resposta comentada. Errar: o número acrescentado ao resumo é uma alucinação extrínseca... A referência inexistente é uma alucinação factual... O que fazer: comparar cada dado com o artigo e localizar cada referência na fonte original."
    }
  },
  {
    "id": "Q02-D-03",
    "quinzena": 2,
    "nivel": "dificil",
    "topico": "Semântica Vetorial e Aritmética de Embeddings",
    "enunciado": "O artigo seminal de Mikolov et al. (2013) demonstrou que modelos de representação vetorial (embeddings) capturam relações semânticas complexas a partir da coocorrência de termos, permitindo operações como:\n$$ \\text{Vetor}(\\text{'rei'}) - \\text{Vetor}(\\text{'homem'}) + \\text{Vetor}(\\text{'mulher'}) \\approx \\text{Vetor}(\\text{'rainha'}) $$\nDe acordo com a discussão epistemológica da Quinzena 2, essa propriedade matemática comprova que:",
    "alternativas": [
      {
        "texto": "O modelo aprendeu relações geométricas a partir de padrões estatísticos observados em bilhões de frases, mas essa proximidade vetorial não equivale à compreensão consciente de conceitos no sentido humano.",
        "correta": true,
        "explicacao": "Correta! O e-book pontua textualmente: ninguém escreveu as coordenadas do mapa; a máquina aprende padrões estatísticos relacionais de uso em grandes corpora, o que não prova compreensão ontológica consciente (retomando Searle e o Quarto Chinês)."
      },
      {
        "texto": "A rede neural desenvolveu autoconsciência plena e capacidade de empatia psicológica equivalente a um filósofo.",
        "correta": false,
        "explicacao": "Incorreta. Aritmética vetorial de palavras não implica em autoconsciência biológica ou psicológica."
      },
      {
        "texto": "Todos os tokens do vocabulário foram associados manualmente por linguistas em um único arquivo de dicionário estático.",
        "correta": false,
        "explicacao": "Incorreta. O e-book frisa: 'Ninguém escreveu as posições do mapa: o modelo as aprendeu observando bilhões de frases'."
      },
      {
        "texto": "O modelo deixou de ser conexionista e tornou-se um compilador simbólico determinístico livre de alucinações.",
        "correta": false,
        "explicacao": "Incorreta. Embeddings constituem a espinha dorsal da abordagem conexionista contínua."
      },
      {
        "texto": "A computação quântica tornou desnecessário o cálculo da atenção nos Transformers modernos.",
        "correta": false,
        "explicacao": "Incorreta. O cálculo de atenção atua precisamente sobre as projeções vetoriais dos embeddings."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 12 / Capítulo 2 / Seção 1",
      "citacao": "Ninguém escreveu as posições do mapa: o modelo as aprendeu observando bilhões de frases... partindo de rei, subtraindo homem e somando mulher, chega-se perto de rainha (Mikolov et al., 2013)."
    }
  },
  {
    "id": "Q02-D-04",
    "quinzena": 2,
    "nivel": "dificil",
    "topico": "Alinhamento por RLHF e Preferência vs. Verdade",
    "enunciado": "A técnica de Aprendizado por Reforço a partir de Feedback Humano (RLHF), desenvolvida para ajustar assistentes virtuais (Christiano et al., 2017; Ouyang et al., 2022), resolveu a dificuldade de especificar por código rígido o que seria um bom diálogo. Contudo, do ponto de vista do rigor técnico e acadêmico, o material didático adverte que o RLHF introduz uma limitação crítica:",
    "alternativas": [
      {
        "texto": "O modelo é treinado para satisfazer as preferências dos avaliadores humanos contratados (o que parece convincente, polido e seguro), e essas preferências nem sempre coincidem com a verdade factual ou com a profundidade analítica.",
        "correta": true,
        "explicacao": "Correta! O e-book enfatiza: 'O modelo aprende o que os avaliadores preferiram, e a preferência nem sempre coincide com a verdade', gerando frequentemente respostas que soam elegantes, mas vazias de conteúdo comprovável."
      },
      {
        "texto": "O modelo perde a capacidade de processar caracteres em línguas latinas, restringindo-se unicamente ao mandarim.",
        "correta": false,
        "explicacao": "Incorreta. O RLHF não destrói a capacidade multilíngue do pré-treino, apenas orienta o comportamento e o estilo das respostas."
      },
      {
        "texto": "O RLHF substitui a memória paramétrica por fitas magnéticas de computador de primeira geração.",
        "correta": false,
        "explicacao": "Incorreta. O ajuste altera os próprios pesos neurais (parâmetros) via gradiente descendente por reforço."
      },
      {
        "texto": "A eliminação completa de qualquer intervenção humana no treinamento dos modelos de inteligência artificial.",
        "correta": false,
        "explicacao": "Incorreta. O RLHF baseia-se exatamente em intervenção e avaliação humana em milhares de rodadas comparativas."
      },
      {
        "texto": "A total imunidade do modelo ajustado contra o cometimento de sofismas e generalizações sem contexto.",
        "correta": false,
        "explicacao": "Incorreta. O modelo com RLHF continua plenamente vulnerável a sofismas e respostas genéricas (vagueza confortável)."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 16 / Capítulo 2 / Seção 4",
      "citacao": "O modelo aprende o que os avaliadores preferiram, e a preferência nem sempre coincide com a verdade. A técnica foi proposta para tarefas em que é difícil definir de antemão um bom resultado (Christiano et al., 2017)."
    }
  },
  {
    "id": "Q02-D-05",
    "quinzena": 2,
    "nivel": "dificil",
    "topico": "Asserção-Razão sobre Coerência vs. Veracidade",
    "enunciado": "Avalie a asserção e a razão a seguir no contexto da arquitetura Transformer:\nAsserção: Um modelo de linguagem pode gerar um texto técnico de engenharia com fluência verbal impecável, sintaxe correta e alta coerência lógica do primeiro ao último parágrafo e, simultaneamente, conter fórmulas químicas inteiramente erradas e dados factualmente inexistentes,\nPORQUE\nRazão: o mecanismo de atenção pondera as correlações contextuais entre os tokens para manter a probabilidade e a coerência estilística da sequência, operando sem nenhum validador interno que verifique a correspondência física dos enunciados com o mundo exterior.\n\nAssinale a opção correta:",
    "alternativas": [
      {
        "texto": "A asserção e a razão são proposições verdadeiras, e a razão justifica satisfatoriamente a asserção.",
        "correta": true,
        "explicacao": "Correta! É o núcleo conceitual do Capítulo 2: a atenção garante coerência interna e distribuição de probabilidade condicional; a ausência de um módulo de ancoragem ontológica no mundo permite a geração de textos perfeitamente coesos, mas inteiramente falsos."
      },
      {
        "texto": "A asserção e a razão são verdadeiras, mas a razão não é uma justificativa correta da asserção.",
        "correta": false,
        "explicacao": "Incorreta. A ausência de ancoragem externa no mecanismo de probabilidade condicional é a causa exata do descompasso entre coerência e verdade."
      },
      {
        "texto": "A asserção é verdadeira, mas a razão é uma proposição falsa.",
        "correta": false,
        "explicacao": "Incorreta. A descrição da mecânica de atenção e probabilidade dos tokens na razão é rigorosamente exata."
      },
      {
        "texto": "A asserção é falsa, pois textos com coerência gramatical em Transformers são matematicamente incapazes de veicular erros empíricos.",
        "correta": false,
        "explicacao": "Incorreta. O sofisma e a coerência sem verdade são problemas documentados em todas as plataformas de LLM."
      },
      {
        "texto": "Tanto a asserção quanto a razão são falsas.",
        "correta": false,
        "explicacao": "Incorreta. Ambas são verdadeiras e fundamentam o princípio de nunca presumir verdade a partir da fluência do texto."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Páginas 13 e 15 / Capítulo 2 / Seções 2 e 3",
      "citacao": "Coerência sem verdade (O sofisma): O texto é bem estruturado e o raciocínio parece lógico, mas o conteúdo é falso... O modelo calcula probabilidades de continuar frases, sem módulo de conferência com a realidade."
    }
  },
  {
    "id": "Q03-F-01",
    "quinzena": 3,
    "nivel": "facil",
    "topico": "Modos de Trabalho - Centauro vs. Ciborgue",
    "enunciado": "No contexto da interação humano-IA (Dell'Acqua et al., 2023; Mollick, 2024), como se define o modo 'Centauro'?",
    "alternativas": [
      {
        "texto": "A divisão do trabalho é planejada e decidida antes de começar: o profissional delimita claramente o que é tarefa sua e o que delega à ferramenta, mantendo o controle estrutural das etapas.",
        "correta": true,
        "explicacao": "Correta! Conforme o Capítulo 3 (pág. 20), no modo Centauro a divisão entre humano e máquina é demarcada previamente com base em critérios de auditabilidade e aprendizado."
      },
      {
        "texto": "O usuário funde-se completamente com a ferramenta em tempo real, alternando frases e tarefas sem qualquer divisão prévia ou consciência de autoria.",
        "correta": false,
        "explicacao": "Incorreta. Esta é a definição do modo 'Ciborgue', caracterizado pela integração contínua e sem planejamento prévio das partes."
      },
      {
        "texto": "O trabalho é realizado 100% à mão por proibição explícita de uso de computadores na empresa.",
        "correta": false,
        "explicacao": "Incorreta. O modo Centauro emprega a IA ativamente, porém com divisão e planejamento deliberados."
      },
      {
        "texto": "A automação integral sem supervisão humana, onde a máquina assina relatórios e assume a responsabilidade civil.",
        "correta": false,
        "explicacao": "Incorreta. Quem assina e responde pelo trabalho é sempre o ser humano ou a instituição."
      },
      {
        "texto": "O modelo de IA corrige automaticamente o código fonte sem necessidade de compilação em hardware.",
        "correta": false,
        "explicacao": "Incorreta. Centauro é um modelo organizacional de divisão de trabalho humano-máquina, não recurso de compilador."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 20 / Capítulo 3 / Seção 2",
      "citacao": "Modo Centauro: A divisão do trabalho é decidida antes de começar: a pessoa define o que é dela e o que delega, e conduz o processo (Dell’Acqua et al., 2023; Mollick, 2024)."
    }
  },
  {
    "id": "Q03-F-02",
    "quinzena": 3,
    "nivel": "facil",
    "topico": "Taxonomia Bailey de Competências",
    "enunciado": "A Taxonomia de Bailey McOwen (2025) classifica as competências profissionais diante da IA a partir do contraste entre o que a ferramenta faz e o que continua com o profissional. Qual é a definição de uma competência 'Duradoura' (Enduring)?",
    "alternativas": [
      {
        "texto": "Aquela que permanece estritamente com o ser humano, mesmo com o avanço da tecnologia, como responder por uma decisão técnica, raciocínio ético e defender um relatório questionado.",
        "correta": true,
        "explicacao": "Correta! Conforme a Figura 3.2 do e-book, competências duradouras são as atribuições intransferíveis do profissional (responsabilidade, julgamento ético e defesa fundamentada)."
      },
      {
        "texto": "Aquela que o ser humano deixou de entender completamente e passou a ignorar em seu cotidiano.",
        "correta": false,
        "explicacao": "Incorreta. Ignorar conceitos não é competência; delegar tarefas rotineiras que ainda se compreende refere-se a 'em declínio'."
      },
      {
        "texto": "Toda competência que envolve exclusivamente a digitação mecânica e a digitação de planilhas.",
        "correta": false,
        "explicacao": "Incorreta. Tabulação mecânica de dados é competência 'em declínio' (diminishing), e não duradoura."
      },
      {
        "texto": "Habilidades que surgiram exclusivamente após a invenção da IA generativa, como engenharia de prompts.",
        "correta": false,
        "explicacao": "Incorreta. Habilidades novas geradas pela existência da IA são 'emergentes' (emerging), não duradouras."
      },
      {
        "texto": "Qualquer tarefa que foi totalmente terceirizada para o robô sem necessidade de revisão por humanos.",
        "correta": false,
        "explicacao": "Incorreta. Responsabilidade e validação nunca podem ser terceirizadas sem supervisão em tarefas críticas."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 19 / Capítulo 3 / Figura 3.2",
      "citacao": "Duradoura (Enduring): O que continua sendo meu, mesmo com a máquina no trabalho? Exemplos: responder por uma decisão técnica; raciocínio ético; defender um relatório quando alguém questiona um número (Bailey McOwen, 2025)."
    }
  },
  {
    "id": "Q03-F-03",
    "quinzena": 3,
    "nivel": "facil",
    "topico": "Conceito de Fronteira Irregular",
    "enunciado": "O conceito de 'fronteira irregular' (jagged frontier), demonstrado no estudo de Harvard com consultores (Dell'Acqua et al., 2023), significa que:",
    "alternativas": [
      {
        "texto": "A capacidade da inteligência artificial não acompanha a percepção humana de dificuldade aparente: tarefas aparentemente complexas podem ser resolvidas com facilidade, enquanto tarefas aparentemente simples podem induzir o modelo a erros graves.",
        "correta": true,
        "explicacao": "Correta! O e-book destaca que a fronteira de competência da IA é irregular e não obedece à intuição humana de facilidade/dificuldade."
      },
      {
        "texto": "A borda gráfica da tela do monitor apresenta defeitos visuais na renderização de linhas de código.",
        "correta": false,
        "explicacao": "Incorreta. Trata-se de um conceito sociotécnico de limites de competência algorítmica, e não defeito físico de display."
      },
      {
        "texto": "O modelo só funciona em países cuja fronteira geopolítica coincida com a linha do Equador.",
        "correta": false,
        "explicacao": "Incorreta. Metáfora teórica sem qualquer relação com cartografia física."
      },
      {
        "texto": "A linha de código precisa ser recortada manualmente pelo desenvolvedor com tesouras especiais.",
        "correta": false,
        "explicacao": "Incorreta. Conotação literal absurda em relação ao termo de gestão e design instrucional."
      },
      {
        "texto": "O consumo de energia diminui à medida que o texto digitado aumenta de tamanho.",
        "correta": false,
        "explicacao": "Incorreta. O consumo cresce com o tamanho dos contextos e tarefas de geração."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 21 / Capítulo 3 / Seção 3",
      "citacao": "Fronteira irregular: Limite de competência da IA que não acompanha a dificuldade aparente da tarefa (Dell’Acqua et al., 2023)."
    }
  },
  {
    "id": "Q03-F-04",
    "quinzena": 3,
    "nivel": "facil",
    "topico": "Auditabilidade vs. Verificabilidade",
    "enunciado": "Qual é a diferença precisa entre 'auditabilidade' e 'verificabilidade' estabelecida nas decisões de uso da IA (Capítulo 3)?",
    "alternativas": [
      {
        "texto": "Auditabilidade é a capacidade de documentar e demonstrar de onde veio cada parte da informação e quem tomou cada decisão; verificabilidade é a base de conhecimento que o profissional possui para perceber um erro no resultado, se ele estiver presente.",
        "correta": true,
        "explicacao": "Correta! Conforme o e-book (págs. 20-21), auditabilidade diz respeito à rastreabilidade da origem/processo; verificabilidade refere-se à competência do avaliador para diagnosticar o erro."
      },
      {
        "texto": "Auditabilidade aplica-se apenas a cálculos de contabilidade; verificabilidade aplica-se apenas a exames de sangue.",
        "correta": false,
        "explicacao": "Incorreta. São conceitos transversais de epistemologia prática aplicáveis a qualquer campo do conhecimento."
      },
      {
        "texto": "Ambas significam exatamente o mesmo processo mecânico de pressionar o botão 'Regenerar resposta' no chat.",
        "correta": false,
        "explicacao": "Incorreta. São momentos e capacidades totalmente distintas e complementares."
      },
      {
        "texto": "A auditabilidade é feita exclusivamente pela máquina; a verificabilidade não pode envolver fontes humanas.",
        "correta": false,
        "explicacao": "Incorreta. A auditabilidade é mantida pelo profissional que registra os dados; a verificabilidade depende do conhecimento do profissional."
      },
      {
        "texto": "Verificabilidade é conferir se a conta de energia do data center foi paga pelo fornecedor de nuvem.",
        "correta": false,
        "explicacao": "Incorreta. Verificabilidade é o domínio conceitual para checar a exatidão do conteúdo produzido."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Páginas 20-21 / Capítulo 3 / Figura 3.3 e Seção 3",
      "citacao": "Auditabilidade: capacidade de mostrar, para cada parte do resultado, de onde veio a informação e quem tomou a decisão. Verificabilidade: base que você tem para perceber um erro no resultado, se ele estiver ali."
    }
  },
  {
    "id": "Q03-F-05",
    "quinzena": 3,
    "nivel": "facil",
    "topico": "Consumo de Energia por Tipo de Tarefa",
    "enunciado": "Com base nas medições de laboratório em modelos abertos apresentadas na Tabela 3.1 (Luccioni, Jernite e Strubell, 2024), qual tipo de tarefa consome significativamente mais energia elétrica a cada mil usos?",
    "alternativas": [
      {
        "texto": "Gerar imagens (cerca de 2,907 kWh a cada mil usos, o equivalente a cerca de 130 cargas completas de smartphone).",
        "correta": true,
        "explicacao": "Correta! A Tabela 3.1 demonstra que gerar imagem consome 2,907 kWh (130 cargas de celular), contra 0,047 kWh para gerar texto e 0,002 kWh para classificar texto."
      },
      {
        "texto": "Classificar textos curtos em categorias como spam ou não-spam.",
        "correta": false,
        "explicacao": "Incorreta. Classificação é a tarefa mais leve listada na tabela (0,002 kWh a cada mil usos)."
      },
      {
        "texto": "Gerar texto em parágrafos simples em modelos abertos (cerca de duas cargas de celular).",
        "correta": false,
        "explicacao": "Incorreta. Geração de texto consome cerca de 0,047 kWh, ordens de grandeza abaixo da geração de imagens."
      },
      {
        "texto": "Salvar um arquivo de texto no bloco de notas local do computador.",
        "correta": false,
        "explicacao": "Incorreta. Operação local de I/O em disco que consome energia microscópica frente à inferência de IA."
      },
      {
        "texto": "O consumo de energia é rigorosamente idêntico em todas as tarefas computacionais existentes.",
        "correta": false,
        "explicacao": "Incorreta. A pesquisa empírica comprova variação de mais de 1000 vezes entre tarefas."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 21 / Capítulo 3 / Tabela 3.1",
      "citacao": "Tabela 3.1: Classificar texto: 0,002 kWh (1/10 de carga de celular); Gerar texto: 0,047 kWh (2 cargas); Gerar imagem: 2,907 kWh (130 cargas de celular) (Luccioni; Jernite; Strubell, 2024)."
    }
  },
  {
    "id": "Q03-M-01",
    "quinzena": 3,
    "nivel": "medio",
    "topico": "Responsabilidade Civil e Profissional",
    "enunciado": "No caso emblemático Moffatt v. Air Canada (2024), a companhia aérea argumentou em juízo que o chatbot de atendimento em seu portal eletrônico era uma entidade legalmente separada e que a empresa não respondia pela promessa de reembolso feita pelo robô aos passageiros. A decisão judicial proferida assentou que:",
    "alternativas": [
      {
        "texto": "A empresa responde integralmente pelas informações prestadas em seus canais oficiais; a ferramenta tecnológica executa tarefas, mas quem publica e entrega o resultado assume a responsabilidade pelas consequências perante terceiros.",
        "correta": true,
        "explicacao": "Correta! Conforme sintetizado no e-book (pág. 19), o tribunal rejeitou a tese de personificação da IA: o humano/instituição responde pelo que a ferramenta produz e publica."
      },
      {
        "texto": "O passageiro é o único culpado por não ter lido o código binário de compilação da rede neural da companhia aérea.",
        "correta": false,
        "explicacao": "Incorreta. O tribunal rechaçou atribuir a culpa ao consumidor diante de orientações fornecidas pelo canal corporativo oficial."
      },
      {
        "texto": "A responsabilidade civil deve ser imputada criminalmente aos desenvolvedores terceirizados da Califórnia.",
        "correta": false,
        "explicacao": "Incorreta. A companhia aérea que colocou o sistema em operação comercial é a titular da responsabilidade perante seus clientes."
      },
      {
        "texto": "Sistemas de inteligência artificial generativa são dotados de personalidade jurídica própria equiparada a cidadãos.",
        "correta": false,
        "explicacao": "Incorreta. IA não possui personalidade jurídica nem patrimônio próprio para responder por danos civis."
      },
      {
        "texto": "Nenhuma empresa de aviação é obrigada a manter canais de atendimento abertos ao consumidor.",
        "correta": false,
        "explicacao": "Incorreta. A legislação impõe deveres de atendimento e veracidade aos fornecedores."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 19 / Capítulo 3 / Seção 1",
      "citacao": "Responsabilidade: A ferramenta pode executar a tarefa; quem entrega o resultado responde por ele. Em Moffatt v. Air Canada (2024), o tribunal decidiu que a empresa responde pelo que publica."
    }
  },
  {
    "id": "Q03-M-02",
    "quinzena": 3,
    "nivel": "medio",
    "topico": "As Três Perguntas de Cada Momento",
    "enunciado": "A Figura 3.3 do Capítulo 3 estrutura o processo deliberativo em dois momentos distintos: 'Antes de começar' e 'Depois que o resultado chega'. Qual pergunta, segundo a figura, possui o papel especial de **valer nos dois momentos simultaneamente**?",
    "alternativas": [
      {
        "texto": "Ganho de aprendizado ('Fazer isso sozinho ensina algo que você precisa dominar neste semestre?').",
        "correta": true,
        "explicacao": "Correta! Conforme o mapa da Figura 3.3, a pergunta sobre 'Ganho de aprendizado' conecta o momento inicial (divisão do trabalho) e o momento final (avaliação do que se aprendeu ao verificar)."
      },
      {
        "texto": "Velocidade de banda larga ('A conexão de fibra óptica está com ping abaixo de 10ms?').",
        "correta": false,
        "explicacao": "Incorreta. Critério de infraestrutura técnica de rede sem relevância para a pedagogia de divisão do trabalho."
      },
      {
        "texto": "Custo de publicidade ('Quantos anúncios de banners serão exibidos no cabeçalho?').",
        "correta": false,
        "explicacao": "Incorreta. Não integra os instrumentos da Figura 3.3."
      },
      {
        "texto": "Número de tokens do alfabeto hebraico presente no vocabulário.",
        "correta": false,
        "explicacao": "Incorreta. Questão de engenharia de tokenização, não de postura instrucional do profissional."
      },
      {
        "texto": "Presença de licença de software livre aprovada pela Free Software Foundation.",
        "correta": false,
        "explicacao": "Incorreta. Critério jurídico de licenciamento, não a pergunta-chave de valor instrucional duplo."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 20 / Capítulo 3 / Figura 3.3",
      "citacao": "Ganho de aprendizado (vale nos dois momentos): Fazer isso sozinho ensina algo que você precisa dominar neste semestre?"
    }
  },
  {
    "id": "Q03-M-03",
    "quinzena": 3,
    "nivel": "medio",
    "topico": "Medida de Exposição da OIT vs. Determinismo",
    "enunciado": "A Organização Internacional do Trabalho (OIT, 2025) mede a 'exposição à IA generativa' com base na sobreposição entre as tarefas executadas em uma ocupação e o que os modelos atuais conseguem gerar. Em relação a essa métrica, o material didático adverte que:",
    "alternativas": [
      {
        "texto": "A exposição mede o potencial técnico de automação das tarefas, mas não equivale à destruição mecânica de empregos: a forma como o trabalho será reorganizado depende de regulações, escolhas institucionais e do modo crítico de adoção (superando a visão determinista).",
        "correta": true,
        "explicacao": "Correta! O e-book pontua que tanto a leitura determinista (destino fatal) quanto a negacionista (nada muda) erram; a leitura crítica analisa tarefas expostas e exige deliberação profissional consciente."
      },
      {
        "texto": "A exposição de 3,3% prova conclusivamente que 96,7% das profissões humanas deixarão de existir até o final do ano.",
        "correta": false,
        "explicacao": "Incorreta. 3,3% é a faixa global de alta exposição de ocupações segundo a OIT, e não percentual de extinção de empregos."
      },
      {
        "texto": "A métrica da OIT afere apenas o número de computadores pessoais comprados por empresas do setor agrícola.",
        "correta": false,
        "explicacao": "Incorreta. A métrica afere sobreposição de tarefas cognitivas descritas em bases ocupacionais com capacidades de modelos generativos."
      },
      {
        "texto": "Profissões com alta exposição estão proibidas por tratados internacionais de utilizar navegadores web.",
        "correta": false,
        "explicacao": "Incorreta. Não existe tal proibição em tratados internacionais."
      },
      {
        "texto": "A leitura negacionista é a única comprovada pela ciência por afirmar que a IA é apenas modismo passageiro.",
        "correta": false,
        "explicacao": "Incorreta. A disciplina refuta categoricamente a leitura negacionista por ignorar as transformações reais de produtividade."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Páginas 19 e 20 / Capítulo 3 / Seção 1",
      "citacao": "Exposição à IA generativa: tamanho da sobreposição entre as tarefas de uma ocupação e o que a IA generativa consegue executar... A leitura crítica aceita que existe mudança e pergunta onde, exatamente, ela incide (OIT, 2025)."
    }
  },
  {
    "id": "Q03-M-04",
    "quinzena": 3,
    "nivel": "medio",
    "topico": "O Tom Confiante e o Chute do Modelo",
    "enunciado": "Por que o 'tom confiante' e polido demonstrado pelos modelos de linguagem generativos **não serve** como indicador confiável de que a resposta gerada está tecnicamente correta?",
    "alternativas": [
      {
        "texto": "Porque os modelos foram treinados e medidos sob parâmetros similares a uma prova em que 'chutar' pontua e responder 'não sei' é penalizado com nota zero (Kalai et al., 2025), gerando afirmações com a mesma segurança verbal quando acertam e quando inventam.",
        "correta": true,
        "explicacao": "Correta! Conforme o estudo de Kalai et al. (2025) citado na página 21, o modelo aprendeu a nunca demonstrar dúvida ou hesitação natural humana, expressando alucinações graves em tom solene e seguro."
      },
      {
        "texto": "Porque os modelos são programados para tentar enganar deliberadamente os engenheiros com ironia.",
        "correta": false,
        "explicacao": "Incorreta. O modelo não possui intenção, consciência, malícia ou ironia psicológica autônoma."
      },
      {
        "texto": "Porque o tom confiante decorre unicamente de erros na placa de som do usuário.",
        "correta": false,
        "explicacao": "Incorreta. Justificativa absurda sem vínculo com arquiteturas de redes neurais generativas."
      },
      {
        "texto": "Porque o tom só pode ser alterado se o usuário pagar a versão corporativa enterprise em dólares.",
        "correta": false,
        "explicacao": "Incorreta. A assertividade confiante é um comportamento comum em praticamente todos os LLMs ajustados por alinhamento."
      },
      {
        "texto": "Porque o vocabulário das línguas latinas não possui verbos condicionais ou de incerteza.",
        "correta": false,
        "explicacao": "Incorreta. O vocabulário possui todas as flexões de modo verbal; a postura decorre da função de perda e alinhamento dos modelos."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 21 / Capítulo 3 / Seção 3",
      "citacao": "Tom confiante: Modelos são treinados e medidos como em uma prova em que chutar pontua e responder 'não sei' vale zero (Kalai et al., 2025). Por isso o tom da resposta não indica se ela está certa."
    }
  },
  {
    "id": "Q03-M-05",
    "quinzena": 3,
    "nivel": "medio",
    "topico": "Competências em Declínio vs. Emergentes",
    "enunciado": "Na transição profissional provocada pela IA, erros conceituais recorrentes ocorrem ao classificar competências de forma binária ou exagerada. De acordo com o material didático (Bailey McOwen, 2025):\nI. Tabulação mecânica de dados em planilhas e formatação repetitiva são classificadas como competências 'em declínio' (diminishing), pois o profissional as delega à máquina embora continue compreendendo sua lógica.\nII. Engenharia de contexto, auditoria crítica de outputs da IA e detecção de viés algorítmico constituem competências 'emergentes' (emerging), necessárias justamente pela existência dos novos sistemas.\nIII. Toda e qualquer habilidade intelectual humana tornou-se 'em declínio' irreversível a partir de 2024.\n\nEstá correto o que se afirma em:",
    "alternativas": [
      {
        "texto": "I e II, apenas.",
        "correta": true,
        "explicacao": "Correta! As proposições I e II estão alinhadas à taxonomia de Bailey. A proposição III é um exemplo clássico do erro comum de classificar tudo como 'em declínio' por ansiedade desmedida, refutado textualmente na página 19."
      },
      {
        "texto": "I, II e III.",
        "correta": false,
        "explicacao": "Incorreta. A assertiva III é um reducionismo catastrófico expressamente desaconselhado no material didático."
      },
      {
        "texto": "II e III, apenas.",
        "correta": false,
        "explicacao": "Incorreta. A afirmativa I é rigorosamente correta e a III é falsa."
      },
      {
        "texto": "I, apenas.",
        "correta": false,
        "explicacao": "Incorreta. A afirmativa II também é plenamente correta segundo o Quadro de Bailey."
      },
      {
        "texto": "III, apenas.",
        "correta": false,
        "explicacao": "Incorreta. A proposição III é categoricamente rejeitada pelo design pedagógico da disciplina."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 19 / Capítulo 3 / Figura 3.2",
      "citacao": "Figura 3.2: Emergente: o que passei a precisar saber porque a IA existe (letramento, auditoria, contexto); Em declínio: o que entendo e passei a delegar. Dois erros comuns: classificar tudo como Em declínio por ansiedade ou tudo como Duradoura por negação."
    }
  },
  {
    "id": "Q03-D-01",
    "quinzena": 3,
    "nivel": "dificil",
    "topico": "Estudo de Caso da Harvard Business School - Consultores e a Borda Irregular",
    "enunciado": "No experimento de campo conduzido pela Harvard Business School com 758 consultores profissionais (Dell'Acqua et al., 2023), os participantes foram divididos em grupos para executar tarefas com e sem suporte de IA generativa. Os dados revelaram que:\n- Para tarefas localizadas dentro da fronteira de capacidade da IA, os consultores que a utilizaram alcançaram desempenho qualitativo superior a 40% em relação aos demais.\n- Porém, para uma tarefa ligeiramente fora da fronteira de capacidade da IA (que demandava síntese e julgamento contextual não linear), os profissionais que usaram a ferramenta apresentaram:",
    "alternativas": [
      {
        "texto": "19 pontos percentuais a menos de chance de acertar a solução correta em comparação ao grupo que trabalhou sem a ferramenta, demonstrando o risco da confiança cega fora da fronteira irregular.",
        "correta": true,
        "explicacao": "Correta! Conforme documentado no e-book (pág. 21), fora da fronteira os usuários da ferramenta tiveram uma queda de 19 pontos percentuais de acerto, pois confiaram nas respostas incorretas emitidas com autoridade pelo modelo."
      },
      {
        "texto": "Desempenho 100% perfeito devido à correção quântica dos prompts fornecidos pela Harvard.",
        "correta": false,
        "explicacao": "Incorreta. Os resultados reais evidenciaram severas falhas cognitivas induzidas pelo uso acrítico da máquina."
      },
      {
        "texto": "Aumento simultâneo de 80% na auditoria manual dos dados.",
        "correta": false,
        "explicacao": "Incorreta. O grupo relaxou os critérios de auditoria por excesso de confiança no tom do assistente."
      },
      {
        "texto": "Bloqueio permanente das contas corporativas de acesso ao GPT-4 por quebra de segurança.",
        "correta": false,
        "explicacao": "Incorreta. Não houve bloqueio técnico; o experimento focou no rendimento humano-máquina."
      },
      {
        "texto": "Nenhuma alteração mensurável, provando a tese negacionista de que a IA não afeta tarefas intelectuais.",
        "correta": false,
        "explicacao": "Incorreta. O impacto foi expressivo e assimétrico (vantagem massiva dentro da fronteira e prejuízo severo fora dela)."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 21 / Capítulo 3 / Seção 3",
      "citacao": "Fronteira irregular: No experimento com 758 consultores, dentro da fronteira a qualidade do trabalho foi mais de 40% superior; fora dela, quem usou a ferramenta teve 19 pontos percentuais a menos de chance de acertar (Dell’Acqua et al., 2023)."
    }
  },
  {
    "id": "Q03-D-02",
    "quinzena": 3,
    "nivel": "dificil",
    "topico": "Situação para Análise - Joana e a Reunião de Segurança na Obra",
    "enunciado": "Considere a situação para análise do Capítulo 3: Joana é técnica de segurança do trabalho em uma construtora. Uma ferramenta de IA generativa passou a transcrever e resumir as gravações das reuniões semanais de segurança da obra. Joana aprendeu a formular instruções padronizadas para obter os resumos nas normas da empresa. Como ela própria participa das reuniões, ela lê o resumo, corrige eventuais discrepâncias e o assina. A decisão de interditar um setor de risco da obra permanece exclusivamente sob sua autoridade. Em uma das atas, a IA atribuiu a um encarregado uma declaração de risco que ele jamais pronunciou. Ao analisar a prática profissional de Joana com base nos instrumentos da Quinzena 3:",
    "alternativas": [
      {
        "texto": "Formular instruções eficazes é uma competência emergente; decidir a interdição e assinar a ata são competências duradouras pelas quais Joana responde legalmente; sua presença na reunião confere verificabilidade direta para diagnosticar a alucinação factual antes de assinar.",
        "correta": true,
        "explicacao": "Correta! É a solução pedagógica oficial do e-book (pág. 22): engenharia de instrução é emergente; julgamento e responsabilidade civil são duradouros; e participar do evento confere a base epistêmica (verificabilidade) para barrar o erro."
      },
      {
        "texto": "Joana cometeu negligência profissional grave, pois a construtora deveria ter demitido todos os técnicos e deixado a interdição da obra a cargo de um modelo de linguagem em modo Ciborgue puro.",
        "correta": false,
        "explicacao": "Incorreta. Decisões de risco físico e legal exigem a responsabilidade indelegável do profissional humano (competência duradoura)."
      },
      {
        "texto": "A situação retrata uma competência em declínio irreversível, cabendo à máquina responder penalmente por eventuais acidentes de trabalho.",
        "correta": false,
        "explicacao": "Incorreta. Conforme consolidado na jurisprudência (Moffatt v. Air Canada), robôs não respondem penal nem civilmente."
      },
      {
        "texto": "Joana não possui verificabilidade, já que a gravação em áudio possui mais tokens do que a capacidade da memória RAM de seu computador.",
        "correta": false,
        "explicacao": "Incorreta. Como participou presencialmente da reunião, ela tem verificabilidade plena para checar a veracidade das falas."
      },
      {
        "texto": "O encarregado deveria ser punido, visto que os modelos de inteligência artificial são infalíveis em transcrições acústicas.",
        "correta": false,
        "explicacao": "Incorreta. O modelo cometeu alucinação de transcrição/atribuição, cabendo a conferência humana."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 22 / Capítulo 3 / Situação para Análise",
      "citacao": "Resposta comentada. Classificar: escrever instruções é competência emergente; decidir a interdição é duradoura, porque o julgamento e a resposta pelas consequências ficam com Joana, que responde pelo resumo que assina. Verificar: como participou, tem verificabilidade."
    }
  },
  {
    "id": "Q03-D-03",
    "quinzena": 3,
    "nivel": "dificil",
    "topico": "Asserção-Razão sobre Raridade e Frequência de Dados",
    "enunciado": "Analise a asserção e a razão a seguir relativas à precisão dos modelos de linguagem:\nAsserção: Consultas a ferramentas de IA sobre o regimento acadêmico específico da UNIVESP, sobre normas internas de uma prefeitura paulista ou sobre diretrizes recém-publicadas em portarias ministeriais possuem um risco intrinsecamente elevado de incorreção e alucinação,\nPORQUE\nRazão: o desempenho e a precisão do modelo de linguagem acompanham a frequência e a densidade de ocorrência de documentos sobre aquele assunto específico nos dados de pré-treinamento (Kandpal et al., 2023), tornando tópicos hiperlocais, institucionais e recentes vulneráveis à ausência de dados.\n\nA respeito dessas proposições, assinale a opção correta:",
    "alternativas": [
      {
        "texto": "A asserção e a razão são proposições verdadeiras, e a razão é uma justificativa correta da asserção.",
        "correta": true,
        "explicacao": "Correta! Conforme Kandpal et al. (2023) e o e-book (pág. 21), a 'frequência nos dados de treino' determina a taxa de acerto; assuntos locais, estatutos internos e fatos recentes são raros ou inexistentes na base de treino do LLM, elevando o risco de alucinação confiante."
      },
      {
        "texto": "A asserção e a razão são verdadeiras, mas a razão não é uma justificativa correta da asserção.",
        "correta": false,
        "explicacao": "Incorreta. A carência de frequência estatística na base de treino é precisamente o motivo causal das falhas em dados institucionais locais."
      },
      {
        "texto": "A asserção é verdadeira, mas a razão é uma proposição falsa.",
        "correta": false,
        "explicacao": "Incorreta. A razão fundamenta-se em constatações empíricas clássicas de processamento de linguagem natural."
      },
      {
        "texto": "A asserção é falsa, pois sistemas de IA possuem conexão telepática com todos os arquivos de universidades públicas brasileiras.",
        "correta": false,
        "explicacao": "Incorreta. Afirmação fantasiosa desprovida de lastro científico."
      },
      {
        "texto": "Ambas as proposições são falsas.",
        "correta": false,
        "explicacao": "Incorreta. Ambas são proposições verdadeiras e estruturantes da Quinzena 3."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 21 / Capítulo 3 / Seção 3",
      "citacao": "Frequência nos dados: O acerto do modelo acompanha a quantidade de documentos sobre o assunto nos dados de pré-treino (Kandpal et al., 2023). Regras de uma instituição, normas recentes e terminologia interna são raras nesses dados."
    }
  },
  {
    "id": "Q03-D-04",
    "quinzena": 3,
    "nivel": "dificil",
    "topico": "Dinâmica Energética: Centauro vs. Ciborgue",
    "enunciado": "Sob o ponto de vista da sustentabilidade ambiental e do consumo energético computacional (Luccioni et al., 2024), por que uma sessão de trabalho conduzida no modo 'Ciborgue' desestruturado tende a gerar uma pegada de carbono significativamente maior do que uma sessão planejada no modo 'Centauro'?",
    "alternativas": [
      {
        "texto": "Porque o consumo total de energia é o produto do custo unitário da inferência pelo número de requisições: no modo Ciborgue ocorrem dezenas de trocas rápidas de mensagens e regenerações impulsivas de texto sem planejamento, multiplicando as chamadas ao servidor, enquanto no modo Centauro a demanda é delimitada e concentrada em poucas iterações estruturadas.",
        "correta": true,
        "explicacao": "Correta! Conforme o e-book (pág. 22), cada ida e volta ao modelo constitui uma nova inferência pesada; sessões Ciborgue com muitas iterações improvisadas disparam o consumo energético total."
      },
      {
        "texto": "Porque o modo Ciborgue exige que o monitor do computador seja substituído por um modelo de plasma de alta voltagem.",
        "correta": false,
        "explicacao": "Incorreta. O consumo refere-se ao processamento nos servidores de inferência (GPUs), não ao tipo de monitor doméstico."
      },
      {
        "texto": "Porque o modo Centauro roda inteiramente desconectado de fontes de eletricidade através de energia eólica própria.",
        "correta": false,
        "explicacao": "Incorreta. O modo Centauro é uma estratégia de divisão de tarefas humanas e de máquina, não uma fonte de geração renovável isolada."
      },
      {
        "texto": "Porque os modelos abertos de classificação de texto são desativados permanentemente durante o modo Centauro.",
        "correta": false,
        "explicacao": "Incorreta. Classificadores podem ser usados em qualquer abordagem; o problema é a multiplicação descontrolada de requisições generativas."
      },
      {
        "texto": "Não há nenhuma diferença no consumo de energia, uma vez que a nuvem computacional é imaterial e desprovida de dissipação de calor.",
        "correta": false,
        "explicacao": "Incorreta. O mito da imaterialidade já foi superado; centros de dados dissipam calor massivo e exigem eletricidade contínua."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 22 / Capítulo 3 / Seção 4",
      "citacao": "O consumo total é o custo de cada uso multiplicado pelo número de vezes que ele se repete. Cada ida e volta é um novo pedido processado pela ferramenta; sessões com muitas trocas, comuns no modo Ciborgue, consomem mais do que sessões planejadas."
    }
  },
  {
    "id": "Q03-D-05",
    "quinzena": 3,
    "nivel": "dificil",
    "topico": "Estudo de Caso - Cenário de Autoria e Auditabilidade",
    "enunciado": "Um grupo de estudantes de graduação elaborou um artigo científico em regime de colaboração contínua com uma ferramenta generativa em modo Ciborgue, mesclando trechos próprios e gerados em tempo real sem qualquer apontamento das origens. Na banca avaliadora, um dos professores identificou uma inconsistência grave em um gráfico e indagou de onde haviam surgido aqueles dados e quem havia formulado a interpretação. Os alunos, embora conhecessem o tema geral da disciplina, não conseguiram demonstrar a proveniência daquela seção. À luz da Figura 3.3 e dos conceitos do Capítulo 3, essa situação demonstra que o grupo:",
    "alternativas": [
      {
        "texto": "Possuía verificabilidade geral (conhecimento teórico do tema), mas carecia de auditabilidade (incapacidade de rastrear e provar documentalmente de onde veio a informação e quem tomou a decisão por trás de cada linha do trabalho).",
        "correta": true,
        "explicacao": "Correta! É exatamente a distinção elucidada na página 21: saber o tema permite até notar erros conceituais (verificabilidade), mas trabalhar em modo Ciborgue sem registro anula a capacidade de auditar as origens do texto (auditabilidade)."
      },
      {
        "texto": "Demonstrou a excelência do modo Centauro ao recusar qualquer controle sobre as etapas de produção.",
        "correta": false,
        "explicacao": "Incorreta. O modo Centauro prima justamente pelo controle prévio das etapas e pela auditabilidade estrita."
      },
      {
        "texto": "Eliminou a necessidade de autoria acadêmica, já que o modelo generativo passa a responder perante o conselho universitário como coautor.",
        "correta": false,
        "explicacao": "Incorreta. Modelos de IA não podem figurar como autores de artigos (diretrizes do COPE, CNPq e UNIVESP)."
      },
      {
        "texto": "Cometeu erro de inferência exclusivamente por ter selecionado uma temperatura inferior a 0.2 no software.",
        "correta": false,
        "explicacao": "Incorreta. O problema é de governança metodológica e falta de registro de autoria, e não de hiperparâmetros de software."
      },
      {
        "texto": "Transformou todas as suas competências intelectuais em competências duradouras de forma instantânea.",
        "correta": false,
        "explicacao": "Incorreta. O trabalho desestruturado comprometeu a auditabilidade e fragilizou a defesa do projeto."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 21 / Capítulo 3 / Seção 3",
      "citacao": "Auditabilidade e verificabilidade são diferentes: um texto escrito em modo Ciborgue, sem registro da origem de cada parte, sobre um assunto que você domina permite perceber um erro (verificabilidade), mas não mostrar de onde veio cada frase (auditabilidade)."
    }
  },
  {
    "id": "Q04-F-01",
    "quinzena": 4,
    "nivel": "facil",
    "topico": "A Janela de Contexto e seus Elementos",
    "enunciado": "De acordo com o Capítulo 4 do e-book didático, o que constitui exatamente a 'janela de contexto' quando o usuário realiza uma requisição a um modelo de linguagem?",
    "alternativas": [
      {
        "texto": "O texto único consolidado que o modelo lê antes de responder, formado pelas ordens fixas da ferramenta, pelo histórico da conversa, pelas fontes e anexos colados, pelos exemplos e pela instrução enviada.",
        "correta": true,
        "explicacao": "Correta! Conforme a Figura 4.2 do e-book (pág. 24), a janela de contexto é o pacote textual unificado que alimenta o modelo naquele instante preciso."
      },
      {
        "texto": "A memória permanente do servidor onde ficam gravados os pensamentos e opiniões do usuário para sempre.",
        "correta": false,
        "explicacao": "Incorreta. Uma conversa nova começa do zero; o modelo não possui memória mística do que não está na janela ativa."
      },
      {
        "texto": "A moldura de vidro acrílico que protege o monitor contra reflexos de luz solar.",
        "correta": false,
        "explicacao": "Incorreta. Conotação física disparatada em relação ao conceito de processamento computacional de linguagem."
      },
      {
        "texto": "O histórico de navegação salvo no cache do navegador Chrome nos últimos dez anos.",
        "correta": false,
        "explicacao": "Incorreta. A janela de contexto é delimitada pelos tokens da sessão ativa da ferramenta, e não pelo histórico geral do navegador."
      },
      {
        "texto": "O número de abas abertas simultaneamente na barra de tarefas do Windows.",
        "correta": false,
        "explicacao": "Incorreta. Não se refere a abas de aplicativos, mas ao limite de tokens de entrada do modelo de linguagem."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 24 / Capítulo 4 / Seção 1 e Figura 4.2",
      "citacao": "Janela de contexto: o texto único que o modelo lê antes de responder. É formada por: ordens fixas da ferramenta, histórico da conversa, fontes fornecidas, exemplos e instrução."
    }
  },
  {
    "id": "Q04-F-02",
    "quinzena": 4,
    "nivel": "facil",
    "topico": "Engenharia de Prompt vs. Engenharia de Contexto",
    "enunciado": "Qual é a relação hierárquica e conceitual entre 'Engenharia de Prompt' e 'Engenharia de Contexto' apresentada no material da disciplina?",
    "alternativas": [
      {
        "texto": "A engenharia de prompt consiste em construir bem a instrução enviada, enquanto a engenharia de contexto é o ato mais amplo de decidir tudo o que entra na janela e o que fica de fora; logo, a primeira está contida dentro da segunda.",
        "correta": true,
        "explicacao": "Correta! O e-book define expressamente na página 24: 'Engenharia de prompt é construir bem a instrução. Engenharia de contexto é decidir o que entra na janela e o que fica de fora. A primeira está dentro da segunda'."
      },
      {
        "texto": "Engenharia de prompt aplica-se apenas a computadores quânticos; engenharia de contexto é exclusiva de calculadoras.",
        "correta": false,
        "explicacao": "Incorreta. Ambas são técnicas de operação de modelos de linguagem generativos clássicos."
      },
      {
        "texto": "São sinônimos perfeitos e intercambiáveis que dispensam qualquer distinção metodológica.",
        "correta": false,
        "explicacao": "Incorreta. Há uma hierarquia clara: o contexto engloba instrução, histórico, anexos, exemplos e diretrizes do sistema."
      },
      {
        "texto": "A engenharia de contexto cuida exclusivamente da substituição física de discos rígidos em data centers.",
        "correta": false,
        "explicacao": "Incorreta. Refere-se à curadoria informacional dos tokens submetidos ao LLM, não à manutenção mecânica de hardware."
      },
      {
        "texto": "A engenharia de prompt elimina integralmente a necessidade da janela de contexto existir.",
        "correta": false,
        "explicacao": "Incorreta. A instrução (prompt) é processada exatamente dentro da janela de contexto."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 24 / Capítulo 4 / Seção 1",
      "citacao": "Engenharia de prompt é construir bem a instrução. Engenharia de contexto é decidir o que entra na janela e o que fica de fora. A primeira está dentro da segunda."
    }
  },
  {
    "id": "Q04-F-03",
    "quinzena": 4,
    "nivel": "facil",
    "topico": "Os Quatro Componentes da Instrução",
    "enunciado": "O método de decomposição de instruções estruturadas apresentado na Quinzena 4 divide a instrução em quatro componentes fundamentais. Quais são eles?",
    "alternativas": [
      {
        "texto": "Papel, Objetivo, Restrições e Formato.",
        "correta": true,
        "explicacao": "Correta! Conforme o Quadro 4.1 e a Seção 2 do e-book (pág. 25), a instrução decompõe-se na tétrade funcional: Papel, Objetivo, Restrições e Formato."
      },
      {
        "texto": "Título, Resumo, Palavras-chave e Conclusão.",
        "correta": false,
        "explicacao": "Incorreta. Esta é a estrutura formal de um artigo científico acadêmico, e não os componentes de uma instrução de prompt."
      },
      {
        "texto": "Hardware, Software, Firmware e Peopleware.",
        "correta": false,
        "explicacao": "Incorreta. Divisão clássica da introdução à informática, sem vínculo com engenharia de prompts."
      },
      {
        "texto": "Treinamento, Inferência, Token e Embedding.",
        "correta": false,
        "explicacao": "Incorreta. São conceitos de arquitetura interna de IA estudados nas Quinzenas 1 e 2."
      },
      {
        "texto": "Introdução, Desenvolvimento, Clímax e Desfecho.",
        "correta": false,
        "explicacao": "Incorreta. Estrutura de narrativa literária, não de engenharia de instruções."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 25 / Capítulo 4 / Seção 2 e Quadro 4.1",
      "citacao": "Quadro 4.1 – Os quatro componentes da instrução: Papel (quem escreve e para quem), Objetivo (para que serve o texto), Restrições (o que o texto não pode fazer) e Formato (como se apresenta)."
    }
  },
  {
    "id": "Q04-F-04",
    "quinzena": 4,
    "nivel": "facil",
    "topico": "Instrução Verificável",
    "enunciado": "O que caracteriza uma 'instrução verificável' na formulação de restrições em um prompt eficaz?",
    "alternativas": [
      {
        "texto": "É uma exigência objetiva que qualquer pessoa pode conferir diretamente no texto resultante sem ambiguidade ou subjetividade, como 'no máximo cinco linhas' ou 'sem citar marcas comerciais'.",
        "correta": true,
        "explicacao": "Correta! Conforme o e-book (pág. 25), instruções verificáveis substituem adjetivos vagos ('seja breve', 'não exagere') por parâmetros mensuráveis conferíveis de forma direta."
      },
      {
        "texto": "É uma instrução autenticada por um cartório civil antes de ser digitada no chat.",
        "correta": false,
        "explicacao": "Incorreta. O termo diz respeito à clareza objetiva de checagem do texto gerado, sem envolver cartórios."
      },
      {
        "texto": "É um comando redigido obrigatoriamente na linguagem binária dos microprocessadores.",
        "correta": false,
        "explicacao": "Incorreta. Trata-se de texto em linguagem natural bem estruturado com critérios objetivos."
      },
      {
        "texto": "Uma ordem que garante que o modelo nunca consumirá eletricidade ao responder.",
        "correta": false,
        "explicacao": "Incorreta. O consumo de energia decorre da execução física da inferência em servidores."
      },
      {
        "texto": "Um pedido exclusivo para que o robô declare sentimentos poéticos em relação à ciência.",
        "correta": false,
        "explicacao": "Incorreta. Subjetividade poética é o oposto de um critério objetivo verificável."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 25 / Capítulo 4 / Seção 2",
      "citacao": "Instrução verificável: Exigência que qualquer pessoa confere olhando o resultado, sem discussão: 'no máximo cinco linhas' em lugar de 'seja breve'; uma lista de palavras proibidas em lugar de 'sem alarmismo'."
    }
  },
  {
    "id": "Q04-F-05",
    "quinzena": 4,
    "nivel": "facil",
    "topico": "Os Três Passos do Ciclo de Iteração",
    "enunciado": "A Figura 4.4 do Capítulo 4 apresenta o ciclo metódico de iteração com a ferramenta de IA para superar o mero palpite intuitivo. Quais são as três etapas sucessivas desse ciclo?",
    "alternativas": [
      {
        "texto": "1. Produzir (montar o contexto e obter o resultado); 2. Avaliar (comparar o resultado com critérios prévios); 3. Diagnosticar e Revisar (localizar o componente que falhou e mudar um por vez).",
        "correta": true,
        "explicacao": "Correta! Conforme o fluxograma da Figura 4.4 (pág. 27), o ciclo estrutura-se em Produzir -> Avaliar -> Diagnosticar e Revisar."
      },
      {
        "texto": "1. Digitar; 2. Copiar; 3. Colar no trabalho final sem ler.",
        "correta": false,
        "explicacao": "Incorreta. Esta é a postura acrítica e negligente condenada por toda a disciplina."
      },
      {
        "texto": "1. Treinar; 2. Tokenizar; 3. Apagar o banco de dados.",
        "correta": false,
        "explicacao": "Incorreta. Mistura etapas técnicas do desenvolvedor de infraestrutura com a operação de prompts."
      },
      {
        "texto": "1. Reclamar com o suporte; 2. Trocar de navegador; 3. Formatar o computador.",
        "correta": false,
        "explicacao": "Incorreta. Não compõe a metodologia instrucional de iteração proposta no curso."
      },
      {
        "texto": "1. Traduzir para o inglês; 2. Pedir desculpas à IA; 3. Imprimir a resposta em papel.",
        "correta": false,
        "explicacao": "Incorreta. Sequência arbitrária e sem qualquer fundamento pedagógico."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 27 / Capítulo 4 / Figura 4.4 e Seção 4",
      "citacao": "Figura 4.4. O ciclo de iteração: 1. Produzir (montar contexto e receber resultado); 2. Avaliar (comparar com critérios escritos antes); 3. Diagnosticar e Revisar (achar o componente que explica a falha e mudar um por vez)."
    }
  },
  {
    "id": "Q04-M-01",
    "quinzena": 4,
    "nivel": "medio",
    "topico": "Hierarquia de Componentes: Objetivo e Restrições vs. Papel e Formato",
    "enunciado": "No design de instruções, a literatura e a pesquisa empírica da disciplina demonstram que nem todos os componentes têm o mesmo peso na qualidade técnica do resultado gerado. Por que **Objetivo e Restrições** pesam mais do que **Papel e Formato**?",
    "alternativas": [
      {
        "texto": "Porque Objetivo e Restrições geram critérios objetivos de verificação e delimitam a utilidade do conteúdo retornado, enquanto Papel e Formato apenas estilizam e ajustam a aparência da resposta (além de estudos provarem que atribuir um 'papel' não eleva a taxa de acerto do modelo).",
        "correta": true,
        "explicacao": "Correta! Conforme o e-book (págs. 25-26), Objetivo e Restrições definem a função e os limites checáveis. Já o teste com 162 papéis e 2.410 perguntas (Zheng et al., 2024) comprovou que simular personas não aumenta o acerto factual do modelo."
      },
      {
        "texto": "Porque o Papel e o Formato são bloqueados automaticamente pelas diretrizes de privacidade da LGPD.",
        "correta": false,
        "explicacao": "Incorreta. Papel e formato são comandos textuais comuns que não violam leis de privacidade."
      },
      {
        "texto": "Porque modelos de linguagem são programados para ignorar todas as restrições negativas.",
        "correta": false,
        "explicacao": "Incorreta. Restrições bem elaboradas e verificáveis orientam com precisão o espaço de geração de respostas."
      },
      {
        "texto": "Porque definir um Papel reduz a velocidade da internet em conexões residenciais.",
        "correta": false,
        "explicacao": "Incorreta. Afirmação desconexa sobre infraestrutura de rede doméstica."
      },
      {
        "texto": "Porque o Formato consome cem vezes mais energia elétrica do que as Restrições nos servidores.",
        "correta": false,
        "explicacao": "Incorreta. O consumo energético decorre do total de tokens processados e gerados, e não de uma categoria de comando."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 25 / Capítulo 4 / Seção 2",
      "citacao": "Objetivo e Restrições pesam mais no resultado, porque geram critério para conferir o que voltou. Papel e Formato ajustam o que já está de pé. Num teste com 162 papéis e 2.410 perguntas, acrescentar um papel não aumentou o acerto (Zheng et al., 2024)."
    }
  },
  {
    "id": "Q04-M-02",
    "quinzena": 4,
    "nivel": "medio",
    "topico": "Os Três Limites da IA (Janela, Domínio, Verificação)",
    "enunciado": "A Figura 4.3 sistematiza os 'Três Limites' que nenhum prompt bem escrito consegue resolver por si só. Associe cada limite à sua respectiva providência corretiva indicada no material:\n1. Limite de Janela\n2. Limite de Domínio\n3. Limite de Verificação\n\n( ) Tratar referências, datas e normas como hipóteses e conferir rigorosamente em fontes primárias independentes.\n( ) Fornecer na conversa as informações essenciais faltantes, cortar dados redundantes e posicionar o trecho decisivo no início ou final.\n( ) Utilizar critérios objetivos mensuráveis e buscar apoio de outra fonte confiável ou de um especialista humano na área.\n\nA sequência correta é:",
    "alternativas": [
      {
        "texto": "2, 1, 3.",
        "correta": true,
        "explicacao": "Correta! 2 (Limite de Domínio -> conferir em fontes primárias); 1 (Limite de Janela -> suprir dados faltantes ou limpar excessos na janela); 3 (Limite de Verificação -> buscar especialista ou fontes alternativas por falta de repertório próprio)."
      },
      {
        "texto": "1, 2, 3.",
        "correta": false,
        "explicacao": "Incorreta. Inverte as providências de domínio e janela."
      },
      {
        "texto": "3, 1, 2.",
        "correta": false,
        "explicacao": "Incorreta. Mapeamento equivocado das ações prescritas na Figura 4.3."
      },
      {
        "texto": "2, 3, 1.",
        "correta": false,
        "explicacao": "Incorreta. Confunde a providência de verificação com a de janela."
      },
      {
        "texto": "1, 3, 2.",
        "correta": false,
        "explicacao": "Incorreta. Inversão dos remédios instrucionais de cada limite."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 26 / Capítulo 4 / Figura 4.3",
      "citacao": "Figura 4.3 – Os três limites: Limite de Janela (providência: fornecer o que falta, cortar sobras); Limite de Domínio (providência: tratar referências e dados como hipótese e conferir na fonte primária); Limite de Verificação (providência: buscar outra fonte ou quem entenda do assunto)."
    }
  },
  {
    "id": "Q04-M-03",
    "quinzena": 4,
    "nivel": "medio",
    "topico": "Tentar de Novo vs. Iterar",
    "enunciado": "Qual é a distinção conceitual e prática fundamental entre 'tentar de novo' e 'iterar' ao trabalhar com um assistente de inteligência artificial?",
    "alternativas": [
      {
        "texto": "'Tentar de novo' é reescrever o pedido por intuição ou clicar impulsivamente em 'Regenerar' sem saber o que falhou; 'Iterar' é avaliar o resultado contra critérios prévios, diagnosticar qual componente falhou e alterar cirurgicamente uma variável por vez.",
        "correta": true,
        "explicacao": "Correta! Conforme o e-book (pág. 27), iterar aplica o modo Centauro e método científico: diagnóstico do erro antes da intervenção, em oposição à repetição caótica por tentativa e erro."
      },
      {
        "texto": "'Tentar de novo' consome menos energia que iterar, pois reaproveita os tokens sem nova inferência.",
        "correta": false,
        "explicacao": "Incorreta. Toda regeneração dispara uma inferência completa e consome energia idêntica ou superior."
      },
      {
        "texto": "'Iterar' significa apagar toda a janela de contexto e abrir uma nova conta em nome de outra pessoa.",
        "correta": false,
        "explicacao": "Incorreta. Iterar é o refinamento controlado dentro do ciclo de aprendizado."
      },
      {
        "texto": "Não há nenhuma diferença metodológica, tratando-se de palavras sinônimas em língua inglesa.",
        "correta": false,
        "explicacao": "Incorreta. A disciplina estabelece uma distinção pedagógica basilar entre ambas as atitudes."
      },
      {
        "texto": "'Tentar de novo' é obrigatório por lei para pesquisas de mestrado e doutorado.",
        "correta": false,
        "explicacao": "Incorreta. A pesquisa acadêmica rigorosa preconiza o ciclo de iteração estruturado e auditável."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 27 / Capítulo 4 / Seção 4",
      "citacao": "Tentar de novo é reescrever o pedido por intuição, sem saber o que falhou. Iterar é conferir com critério e localizar a falha antes de mudar o pedido."
    }
  },
  {
    "id": "Q04-M-04",
    "quinzena": 4,
    "nivel": "medio",
    "topico": "Queda de Desempenho na Autocorreção Cega",
    "enunciado": "O estudo empírico de Huang et al. (2024), analisado na Quinzena 4, investigou o que acontece quando se pede a um modelo de linguagem que 'revise e corrija sua própria resposta' sem fornecer nenhum critério externo ou gabarito independente. O resultado do experimento em 1.319 problemas de matemática comprovou que:",
    "alternativas": [
      {
        "texto": "O índice de acerto do modelo caiu de 95,5% para 89,0% após duas rodadas de autorrevisão, demonstrando que a IA não se corrige sozinha de forma autônoma sem critérios de validação vindos de fora.",
        "correta": true,
        "explicacao": "Correta! Conforme o e-book (pág. 27), quando a máquina revisa a si mesma em loop fechado, a incerteza e o viés podem se acumular; o ganho de qualidade real só surge quando o critério ou julgamento vem de fora (humano ou fonte primária)."
      },
      {
        "texto": "O índice de acerto subiu para 100% imediatos, provando a infalibilidade dos algoritmos Transformer.",
        "correta": false,
        "explicacao": "Incorreta. Pelo contrário, o estudo comprovou degradação estatística da precisão."
      },
      {
        "texto": "O modelo recusou-se a responder por entender que resolver matemática viola leis de direitos humanos.",
        "correta": false,
        "explicacao": "Incorreta. Não houve recusa ética; o modelo simplesmente errou mais ao tentar se corrigir sem parâmetros externos."
      },
      {
        "texto": "A memória paramétrica converteu todos os números arábicos em numerais romanos.",
        "correta": false,
        "explicacao": "Incorreta. Trata-se de uma constatação rigorosa sobre os limites da autoavaliação pura de LLMs."
      },
      {
        "texto": "A temperatura do processador aumentou 40 graus Celsius, forçando a desativação da internet.",
        "correta": false,
        "explicacao": "Incorreta. Deturpação fantasiosa de conceitos de computação."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 27 / Capítulo 4 / Seção 4",
      "citacao": "A IA não corrige sozinha: Quando o modelo revisa a própria resposta sem nenhum critério de fora, o acerto pode cair: em 1.319 problemas de matemática, um modelo foi de 95,5% para 89,0% depois de duas revisões (Huang et al., 2024)."
    }
  },
  {
    "id": "Q04-M-05",
    "quinzena": 4,
    "nivel": "medio",
    "topico": "Diagnóstico de Sintomas por Componente",
    "enunciado": "Durante a etapa de diagnóstico do ciclo de iteração (Figura 4.4), o usuário examina o sintoma da resposta inadequada para descobrir qual componente da instrução precisa ser modificado. Relacione o sintoma ao componente causador correspondente:\n1. O texto veio com dez parágrafos prolixos e incluiu dados sigilosos que haviam sido expressamente proibidos.\n2. O texto está impecavelmente escrito e gramaticalmente perfeito, mas discorreu sobre um assunto totalmente diferente do pretendido.\n3. O texto trouxe o conteúdo factual perfeito, mas redigido em um único bloco contínuo sem os marcadores ou tópicos solicitados.\n\nA correlação correta entre o sintoma e o componente a ser revisado é:",
    "alternativas": [
      {
        "texto": "1: Restrições; 2: Objetivo; 3: Formato.",
        "correta": true,
        "explicacao": "Correta! Conforme o quadro da Figura 4.4: texto longo demais ou que traz o proibido -> revisar Restrições; texto bem escrito que responde a outra coisa -> revisar Objetivo; conteúdo certo na forma errada -> revisar Formato."
      },
      {
        "texto": "1: Papel; 2: Formato; 3: Restrições.",
        "correta": false,
        "explicacao": "Incorreta. Confunde restrições de extensão com papel discursivo."
      },
      {
        "texto": "1: Objetivo; 2: Restrições; 3: Papel.",
        "correta": false,
        "explicacao": "Incorreta. Quando o texto responde à pergunta errada, o erro reside no Objetivo, e não nas restrições."
      },
      {
        "texto": "1: Formato; 2: Papel; 3: Objetivo.",
        "correta": false,
        "explicacao": "Incorreta. Mapeamento desordenado dos sintomas do ciclo de iteração."
      },
      {
        "texto": "1: Hardware; 2: Janela; 3: Tokenizador.",
        "correta": false,
        "explicacao": "Incorreta. Os sintomas descritos pertencem aos componentes da instrução."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 27 / Capítulo 4 / Figura 4.4",
      "citacao": "Figura 4.4: Quando o resultado... veio longo demais ou trouxe algo proibido -> Procure em Restrições; está bem escrito, mas responde a outra pergunta -> Procure em Objetivo; traz conteúdo certo na forma errada -> Procure em Formato."
    }
  },
  {
    "id": "Q04-D-01",
    "quinzena": 4,
    "nivel": "dificil",
    "topico": "Situação para Análise - Rita e o Comunicado de Feriados",
    "enunciado": "Considere a situação para análise do Capítulo 4: Rita é estagiária de recursos humanos em uma rede farmacêutica e envia ao assistente de IA a instrução: 'Faça um comunicado sobre a escala de feriados de dezembro'. O modelo retorna um comunicado longo em quatro parágrafos, redigido em tom cerimonioso de diretoria, trazendo datas de folga fictícias que não conferem com a escala real da farmácia (a qual Rita possui em uma planilha em seu computador e não colou na conversa). Ao diagnosticar essa falha à luz da Engenharia de Contexto:",
    "alternativas": [
      {
        "texto": "A instrução de Rita falhou por indicar apenas a forma genérica ('faça um comunicado'), omitindo o Papel, o Objetivo claro e Restrições verificáveis (como limite de linhas); ademais, o erro de datas decorreu de um clássico Limite de Janela (as datas da escala não constavam na janela de contexto, levando a IA a preencher a lacuna com datas prováveis).",
        "correta": true,
        "explicacao": "Correta! Esta é exatamente a resposta comentada oficial do e-book (pág. 28): falha de instrução nos quatro componentes combinada a um limite de janela, pois a IA não lê a planilha local que não foi anexada."
      },
      {
        "texto": "O erro ocorreu porque os servidores da rede de farmácias sofreram um ataque de negação de serviço (DDoS) no momento da inferência.",
        "correta": false,
        "explicacao": "Incorreta. O erro decorreu de falha na formulação do prompt e falta de dados essenciais na janela de contexto."
      },
      {
        "texto": "Rita deveria ter aumentado a temperatura do modelo para 1.5 a fim de que o algoritmo adivinhasse as datas corretas por telepatia quântica.",
        "correta": false,
        "explicacao": "Incorreta. Aumentar a temperatura geraria ainda mais alucinações e dispersão probabilística."
      },
      {
        "texto": "Trata-se de um Limite de Verificação insolúvel, pois estagiários não possuem autoridade cognitiva para ler escalas de plantão.",
        "correta": false,
        "explicacao": "Incorreta. Como possui a planilha original, Rita tem verificabilidade total para checar os dados; bastava colá-la na janela."
      },
      {
        "texto": "A resposta da IA está perfeita segundo o padrão Vunesp, cabendo à diretoria alterar a escala da empresa para coincidir com o texto do robô.",
        "correta": false,
        "explicacao": "Incorreta. Subordinar a realidade material da empresa às alucinações do modelo é o ápice da naturalização e negligência profissional."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 28 / Capítulo 4 / Situação para Análise",
      "citacao": "Resposta comentada. Quatro componentes: 'faça um comunicado' diz a forma, falta efeito esperado, Papel e Restrições. Janela de contexto: as datas da escala não estavam na janela, e a ferramenta preencheu a lacuna com o que é provável."
    }
  },
  {
    "id": "Q04-D-02",
    "quinzena": 4,
    "nivel": "dificil",
    "topico": "Asserção-Razão sobre Perda no Meio (Lost in the Middle)",
    "enunciado": "Analise a asserção e a razão a seguir sobre a dinâmica de atenção na janela de contexto:\nAsserção: Em documentos extensos com dezenas de páginas inseridos na janela de contexto de um modelo de linguagem, a inserção de instruções e fatos críticos nas primeiras ou nas últimas linhas do contexto proporciona maior precisão do que colocá-los no meio da massa de texto,\nPORQUE\nRazão: os mecanismos de atenção dos modelos Transformer exibem empiricamente um viés posicional (efeito de 'perda no meio'), no qual tokens localizados no centro de janelas longas de contexto recebem menor peso relacional e tendem a ser ignorados ou esquecidos durante a geração da resposta.\n\nAssinale a opção correta:",
    "alternativas": [
      {
        "texto": "A asserção e a razão são proposições verdadeiras, e a razão é uma justificativa correta da asserção.",
        "correta": true,
        "explicacao": "Correta! Conforme o e-book orienta na Figura 4.3 (pág. 26), diante do excesso de contexto a providência técnica recomendada é 'pôr o que é decisivo no começo ou no fim', mitigando a dispersão de atenção nos tokens centrais."
      },
      {
        "texto": "A asserção e a razão são verdadeiras, mas a razão não é uma justificativa correta da asserção.",
        "correta": false,
        "explicacao": "Incorreta. O fenômeno de dispersão e menor peso relacional nos tokens do centro é a causa direta da asserção."
      },
      {
        "texto": "A asserção é verdadeira, mas a razão é uma proposição falsa.",
        "correta": false,
        "explicacao": "Incorreta. A explicação do viés de atenção é comprovada pela literatura de processamento de linguagem natural."
      },
      {
        "texto": "A asserção é falsa, pois modelos de linguagem leem textos de baixo para cima com atenção homogênea perfeita.",
        "correta": false,
        "explicacao": "Incorreta. A asserção é verdadeira e a distribuição de atenção sofre assimetrias conhecidas."
      },
      {
        "texto": "Ambas as proposições são falsas.",
        "correta": false,
        "explicacao": "Incorreta. Ambas são verdadeiras e representam uma boa prática de engenharia de contexto."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 26 / Capítulo 4 / Figura 4.3",
      "citacao": "Limite de janela: a informação não foi enviada, ou se perdeu no excesso ou no meio de uma pilha de documentos. Providência: Fornecer o que falta, cortar o que sobra e pôr o que é decisivo no começo ou no fim."
    }
  },
  {
    "id": "Q04-D-03",
    "quinzena": 4,
    "nivel": "dificil",
    "topico": "Ficha de Quatro Linhas e Rastreabilidade do Erro",
    "enunciado": "A ferramenta metodológica da 'Ficha de Quatro Linhas', proposta no Capítulo 4 para sistematizar o ciclo de iteração, organiza o registro documental das tentativas do profissional com a IA. As quatro linhas dessa ficha são compostas por:",
    "alternativas": [
      {
        "texto": "Contexto inicial, Resultado obtido, Diagnóstico da falha e Contexto revisado.",
        "correta": true,
        "explicacao": "Correta! Conforme o e-book (pág. 27), a ficha de quatro linhas registra: Contexto inicial, resultado, diagnóstico e contexto revisado, permitindo enxergar padrões de omissão do próprio profissional."
      },
      {
        "texto": "Nome do usuário, E-mail institucional, Senha do AVA e Número do CPF.",
        "correta": false,
        "explicacao": "Incorreta. São dados pessoais de autenticação do estudante, alheios ao protocolo de engenharia de contexto."
      },
      {
        "texto": "Endereço IP, Porta de conexão, Latência de ping e Sistema operacional.",
        "correta": false,
        "explicacao": "Incorreta. Trata-se de dados de telemetria de redes de computadores."
      },
      {
        "texto": "Prompt em português, Tradução em latim, Código em C++ e Imagem binária.",
        "correta": false,
        "explicacao": "Incorreta. Estrutura inexistente no método instrucional da Quinzena 4."
      },
      {
        "texto": "Nota da Vunesp, Presença na aula presencial, Horário da live e Assinatura do tutor.",
        "correta": false,
        "explicacao": "Incorreta. Mistura termos administrativos da vida acadêmica sem relação com a técnica de iteração de prompts."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 27 / Capítulo 4 / Seção 4",
      "citacao": "Ficha de quatro linhas: Contexto inicial, resultado, diagnóstico e contexto revisado. Lidas em conjunto, as fichas mostram o componente que você costuma deixar de fora."
    }
  },
  {
    "id": "Q04-D-04",
    "quinzena": 4,
    "nivel": "dificil",
    "topico": "Teste de Diagnóstico entre Limite de Janela e Limite de Domínio",
    "enunciado": "Quando um assistente de IA comete um erro ao responder sobre um assunto complexo, como o usuário pode diagnosticar conclusivamente se a falha decorreu de um **Limite de Janela** ou de um **Limite de Domínio**?",
    "alternativas": [
      {
        "texto": "Aplicando a pergunta-teste: 'Se eu fornecer agora, nesta conversa, a informação ou o documento que falta, isso resolve o problema?'. Se sim, o limite é de janela; se o assunto for raro e ausente do treinamento geral e exigir fontes externas independentes que o modelo não domina, o limite é de domínio.",
        "correta": true,
        "explicacao": "Correta! Conforme a regra de ouro da Figura 4.3 (pág. 26), a pergunta-teste separa de imediato o problema de contexto imediato (janela) da falta de repertório intrínseco de treino (domínio)."
      },
      {
        "texto": "Avaliando se o erro foi cometido antes ou depois das 18h no fuso horário de Brasília.",
        "correta": false,
        "explicacao": "Incorreta. Fuso horário de acesso não diferencia causas epistêmicas de erros de modelos."
      },
      {
        "texto": "Consultando o preço das ações da empresa fornecedora da IA na bolsa de valores Nasdaq.",
        "correta": false,
        "explicacao": "Incorreta. Cotação do mercado acionário é alheia à engenharia de prompts."
      },
      {
        "texto": "Se a resposta tiver menos de 50 tokens é limite de domínio; se tiver mais de 50 tokens é limite de janela.",
        "correta": false,
        "explicacao": "Incorreta. O tamanho da resposta gerada não é o critério delimitador dos limites estruturais."
      },
      {
        "texto": "Não é possível diagnosticar, pois a IA é uma caixa-preta que impede qualquer raciocínio metodológico humano.",
        "correta": false,
        "explicacao": "Incorreta. A disciplina instrumentaliza o profissional exatamente para discernir causas através do teste da janela."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 26 / Capítulo 4 / Figura 4.3",
      "citacao": "Pergunta-teste para os dois primeiros: se eu fornecesse agora, na conversa, a informação que falta, isso resolveria? Se sim, o limite é de janela. Se o assunto aparece pouco nos textos com que o modelo foi treinado, o limite é de domínio."
    }
  },
  {
    "id": "Q04-D-05",
    "quinzena": 4,
    "nivel": "dificil",
    "topico": "Estudo de Caso - O Papel e a Efetividade de Respostas de Conhecimento",
    "enunciado": "Um usuário gasta 15 linhas de seu prompt descrevendo detalhadamente uma persona: 'Aja como um renomado físico quântico ganhador do prêmio Nobel, pós-doutor por Cambridge, com 40 anos de docência, extremamente rigoroso e brilhante'. Em seguida, faz uma pergunta direta de física teórica. Com base no experimento científico conduzido por Zheng et al. (2024) com 162 papéis distintos e 2.410 questões de conhecimento:",
    "alternativas": [
      {
        "texto": "A atribuição de personas pomposas altera o tom, a formalidade e o estilo das frases, mas não aumenta estatisticamente a acurácia factual da resposta; gastar esforço em Objetivo claro e Restrições verificáveis teria gerado muito mais critério de qualidade e assertividade.",
        "correta": true,
        "explicacao": "Correta! Conforme o e-book (pág. 25), o estudo rigoroso de Zheng et al. (2024) desmistificou o mito da persona: atribuir papéis ajusta o estilo superficial, mas não confere conhecimento factual mágico que o modelo não possua."
      },
      {
        "texto": "A persona garantiu 100% de precisão porque ativou circuitos matemáticos secretos reservados para prêmios Nobel dentro da rede neural.",
        "correta": false,
        "explicacao": "Incorreta. Visão mágica e antropomórfica sem qualquer respaldo na arquitetura de transformadores estatísticos."
      },
      {
        "texto": "O modelo trava e entra em curto-circuito caso a pessoa descrita na persona não esteja viva.",
        "correta": false,
        "explicacao": "Incorreta. O modelo apenas gera previsões estatísticas de tokens condicionados ao texto de entrada."
      },
      {
        "texto": "Descrever o papel é a única parte do prompt que realmente importa para a avaliação formativa da Vunesp.",
        "correta": false,
        "explicacao": "Incorreta. A disciplina enfatiza que Objetivo e Restrições são os componentes decisivos."
      },
      {
        "texto": "A persona fez o consumo de água do servidor diminuir pela metade.",
        "correta": false,
        "explicacao": "Incorreta. Tokens adicionais no prompt aumentam o processamento na janela, nunca o diminuem."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 25 / Capítulo 4 / Seção 2",
      "citacao": "O que o Papel faz: Define vocabulário, formalidade e tipo de texto. Num teste com 162 papéis e 2.410 perguntas de conhecimento, acrescentar um papel não aumentou o acerto das respostas (Zheng et al., 2024)."
    }
  },
  {
    "id": "Q05-F-01",
    "quinzena": 5,
    "nivel": "facil",
    "topico": "Bases Acadêmicas vs. Referências Geradas por IA",
    "enunciado": "Qual é a diferença fundamental entre buscar fontes em bases acadêmicas indexadas (como SciELO, Google Acadêmico e Semantic Scholar) e solicitar referências bibliográficas diretamente a um modelo de linguagem generativo?",
    "alternativas": [
      {
        "texto": "Bases acadêmicas buscam em um índice estruturado de publicações reais e devolvem apenas o que existe (inclusive lista vazia é informação); já os modelos de linguagem geram continuações de texto verossímeis, produzindo formatos perfeitos de citação que podem não corresponder a obras reais.",
        "correta": true,
        "explicacao": "Correta! Conforme a Seção 1 do Capítulo 5 (pág. 29), bases científicas operam por indexação determinística factual, enquanto o LLM prediz tokens plausíveis, podendo fabricar títulos e periódicos inexistentes com formato impecável."
      },
      {
        "texto": "Bases acadêmicas cobram em dólares a cada busca realizada, enquanto modelos generativos são sempre gratuitos e infalíveis.",
        "correta": false,
        "explicacao": "Incorreta. SciELO e Google Acadêmico são gratuitos; modelos de linguagem cometem alucinações e não garantem veracidade bibliográfica."
      },
      {
        "texto": "Modelos de linguagem realizam ligações telefônicas aos autores dos artigos para confirmar se a obra foi de fato publicada.",
        "correta": false,
        "explicacao": "Incorreta. Os modelos operam por álgebra matricial sobre parâmetros estáticos, sem conexão humana ativa."
      },
      {
        "texto": "Bases acadêmicas indexam exclusivamente teses de graduação da própria universidade do estudante.",
        "correta": false,
        "explicacao": "Incorreta. Bases indexam a literatura científica global nacional e internacional."
      },
      {
        "texto": "Não existe nenhuma diferença técnica, já que ambos os sistemas consultam exatamente o mesmo banco SQL em tempo real.",
        "correta": false,
        "explicacao": "Incorreta. Modelos de inferência pura operam sobre memória paramétrica probabilística, e não consultas SQL determinísticas."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 29 / Capítulo 5 / Seção 1",
      "citacao": "Base acadêmica: SciELO, Google Acadêmico e Semantic Scholar procuram em um índice e devolvem o que existe. A lista vazia também é informação. Referência gerada: Um modelo de linguagem reproduz o formato de uma referência com facilidade. O formato não prova que o artigo existe."
    }
  },
  {
    "id": "Q05-F-02",
    "quinzena": 5,
    "nivel": "facil",
    "topico": "Rastrear até o Trecho",
    "enunciado": "No contexto da metodologia de pesquisa acadêmica, o que significa 'rastrear' uma informação ou citação?",
    "alternativas": [
      {
        "texto": "Percorrer o caminho de volta, a partir da afirmação feita no trabalho até o trecho exato e a página da fonte original que lhe dá sustentação.",
        "correta": true,
        "explicacao": "Correta! Conforme o e-book (pág. 29), rastrear é o procedimento de ancoragem de volta até o parágrafo original na fonte primária."
      },
      {
        "texto": "Instalar um software de geolocalização no computador para descobrir a cidade do servidor de IA.",
        "correta": false,
        "explicacao": "Incorreta. Rastrear no âmbito epistemológico é a verificação da linhagem textual e documental da afirmação."
      },
      {
        "texto": "Submeter o artigo científico a uma perícia policial de impressões digitais.",
        "correta": false,
        "explicacao": "Incorreta. Conotação forense disparatada em relação ao método de estudo acadêmico."
      },
      {
        "texto": "Contratar um detetive particular para vigiar a banca de avaliação da disciplina.",
        "correta": false,
        "explicacao": "Incorreta. Totalmente desprovida de fundamento acadêmico."
      },
      {
        "texto": "Converter todas as citações bibliográficas do formato ABNT para o padrão de notas de rodapé de Harvard.",
        "correta": false,
        "explicacao": "Incorreta. Formatação estilística de referências não é o conceito de rastreabilidade factual."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 29 / Capítulo 5 / Seção 1",
      "citacao": "Rastrear: Percorrer o caminho de volta, da afirmação do seu trabalho até o trecho do texto que a sustenta. Uma resposta que indica a página facilita esse caminho; o trecho ainda precisa ser conferido."
    }
  },
  {
    "id": "Q05-F-03",
    "quinzena": 5,
    "nivel": "facil",
    "topico": "Protocolo Manual antes de IA",
    "enunciado": "A Figura 5.2 do material didático apresenta o protocolo metodológico 'Manual antes de IA', estruturado em três etapas consecutivas que aplicam a lógica do modo Centauro à leitura acadêmica. Quais são essas etapas?",
    "alternativas": [
      {
        "texto": "1. Ler e registrar (escrever três ideias principais e duas dúvidas antes da ferramenta); 2. Auditar o registro (entregar à IA só o registro para ela apontar fragilidades); 3. Comparar leituras (confrontar seu registro com o de colegas).",
        "correta": true,
        "explicacao": "Correta! Conforme o e-book (pág. 30), a ordem das etapas constitui o método: ler por conta própria primeiro, usar a ferramenta para auditar o próprio resumo e depois comparar com pares humanos."
      },
      {
        "texto": "1. Gerar o resumo pela IA; 2. Copiar sem ler; 3. Publicar no fórum de discussão.",
        "correta": false,
        "explicacao": "Incorreta. Isto caracteriza terceirização nociva da leitura, que anula o aprendizado."
      },
      {
        "texto": "1. Comprar o livro físico; 2. Escanear a capa; 3. Descartar as páginas internas.",
        "correta": false,
        "explicacao": "Incorreta. Proposição sem nexo didático."
      },
      {
        "texto": "1. Ler o resumo da IA; 2. Reescrever com sinônimos; 3. Fingir que leu a fonte primária.",
        "correta": false,
        "explicacao": "Incorreta. Prática desonesta que mascara a terceirização acrítica da leitura."
      },
      {
        "texto": "1. Desligar a internet; 2. Fazer a prova presencial; 3. Enviar mensagem ao orientador.",
        "correta": false,
        "explicacao": "Incorreta. Não corresponde às três etapas do protocolo da Figura 5.2."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 30 / Capítulo 5 / Figura 5.2",
      "citacao": "Figura 5.2. O protocolo Manual antes de IA, em três etapas: 1. Ler e registrar; 2. Auditar o registro; 3. Comparar leituras. A ordem das etapas é o método: é o modo Centauro aplicado à leitura."
    }
  },
  {
    "id": "Q05-F-04",
    "quinzena": 5,
    "nivel": "facil",
    "topico": "Os Quatro Erros nas Citações",
    "enunciado": "O Quadro 5.1 do e-book sistematiza a forma como os erros dos modelos de linguagem se manifestam nas citações acadêmicas. O que caracteriza o 'Erro Substantivo' em uma citação?",
    "alternativas": [
      {
        "texto": "A obra citada existe na vida real e os dados bibliográficos conferem, mas o texto original do autor não diz aquilo que a citação gerada pela IA afirma.",
        "correta": true,
        "explicacao": "Correta! Conforme o Quadro 5.1 (pág. 30), o erro substantivo decorre da coerência sem verdade: o livro/artigo é real, mas o conteúdo atribuído a ele foi deturpado pelo modelo."
      },
      {
        "texto": "O artigo não existe em nenhuma base de dados do planeta (referência inventada do nada).",
        "correta": false,
        "explicacao": "Incorreta. A referência inventada do zero é classificada como 'Referência fabricada' (alucinação factual)."
      },
      {
        "texto": "A citação é impressa com tinta vermelha em papel reciclado.",
        "correta": false,
        "explicacao": "Incorreta. Conotação tipográfica sem relação com a categorização de erros da disciplina."
      },
      {
        "texto": "O nome do autor do artigo está grafado todo em letras minúsculas por erro de teclado.",
        "correta": false,
        "explicacao": "Incorreta. Erro de digitação superficial não caracteriza erro substantivo de conteúdo."
      },
      {
        "texto": "O autor do texto original concorda com a citação e a valida formalmente em cartório.",
        "correta": false,
        "explicacao": "Incorreta. Se o texto original corrobora a afirmação, não há erro substantivo."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 30 / Capítulo 5 / Quadro 5.1",
      "citacao": "Quadro 5.1 – Os quatro erros nas citações: Erro substantivo (Vem de: Coerência sem verdade. Como aparece: A obra existe e os dados conferem, mas o texto não diz o que a citação afirma)."
    }
  },
  {
    "id": "Q05-F-05",
    "quinzena": 5,
    "nivel": "facil",
    "topico": "As Três Verificações de uma Síntese",
    "enunciado": "Ao julgar uma síntese técnica ou acadêmica produzida por uma ferramenta de IA, a Seção 3 da Quinzena 5 orienta a realização de 'Três Verificações'. Quais são elas?",
    "alternativas": [
      {
        "texto": "Factual (os dados conferem com a fonte?), De Raciocínio (a conclusão se sustenta logicamente?) e De Adequação (o resultado responde exatamente à pergunta que você fez?).",
        "correta": true,
        "explicacao": "Correta! Conforme o e-book (pág. 31), essas são as três verificações epistemológicas essenciais para homologar qualquer resumo técnico gerado por IA."
      },
      {
        "texto": "Ortográfica, Gramatical e de Tamanho de Fonte.",
        "correta": false,
        "explicacao": "Incorreta. Checagens cosméticas e de estilo não esgotam a auditoria substantiva factual e de adequação."
      },
      {
        "texto": "Biológica, Química e Astrológica.",
        "correta": false,
        "explicacao": "Incorreta. Proposição estapafúrdia sem qualquer vínculo instrucional."
      },
      {
        "texto": "Velocidade de internet, Consumo de RAM e Marca do processador.",
        "correta": false,
        "explicacao": "Incorreta. Telemetria de hardware não afere a validade de uma síntese textual."
      },
      {
        "texto": "Se a resposta é curta, se tem emojis e se parece simpática.",
        "correta": false,
        "explicacao": "Incorreta. Aparência amigável pode esconder graves erros e alucinações (vagueza confortável)."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 31 / Capítulo 5 / Seção 3",
      "citacao": "Três verificações: Factual: os dados conferem com a fonte? De raciocínio: a conclusão se sustenta? De adequação: o resultado responde à pergunta que você fez?"
    }
  },
  {
    "id": "Q05-M-01",
    "quinzena": 5,
    "nivel": "medio",
    "topico": "Leitura Mediada vs. Leitura Terceirizada",
    "enunciado": "A disciplina COM170 estabelece uma distinção pedagógica crucial entre a **leitura mediada** e a **leitura terceirizada** com IA:\nI. Na leitura mediada, o estudante lê o texto acadêmico por si mesmo, registra suas próprias compreensões e dúvidas e só depois utiliza o assistente para auditar o registro ou apoiar o aprofundamento.\nII. Na leitura terceirizada, a síntese superficial entregue pelo modelo ocupa o lugar da leitura do estudante, eliminando o atrito cognitivo e aniquilando a oportunidade de aprendizado real.\nIII. A leitura terceirizada é recomendada formalmente pela UNIVESP por economizar tempo e tokens de computação dos estudantes.\n\nEstá correto o que se afirma em:",
    "alternativas": [
      {
        "texto": "I e II, apenas.",
        "correta": true,
        "explicacao": "Correta! As proposições I e II sintetizam com precisão o princípio instrucional da Quinzena 5. A III é inteiramente falsa, pois a universidade condena a terceirização da leitura por esvaziar a formação crítica."
      },
      {
        "texto": "I, II e III.",
        "correta": false,
        "explicacao": "Incorreta. A afirmativa III deturpa as diretrizes acadêmicas da UNIVESP."
      },
      {
        "texto": "II e III, apenas.",
        "correta": false,
        "explicacao": "Incorreta. A afirmativa I é verdadeira e a III é falsa."
      },
      {
        "texto": "I, apenas.",
        "correta": false,
        "explicacao": "Incorreta. A afirmativa II também é plenamente correta segundo o referencial da disciplina."
      },
      {
        "texto": "III, apenas.",
        "correta": false,
        "explicacao": "Incorreta. A assertiva III é flagrantemente incorreta."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 29 / Capítulo 5 / Seção 1",
      "citacao": "Leitura mediada × terceirizada: Na leitura mediada, você lê, registra o que entendeu e só depois usa a ferramenta. Na terceirizada, a síntese da ferramenta ocupa o lugar da sua leitura."
    }
  },
  {
    "id": "Q05-M-02",
    "quinzena": 5,
    "nivel": "medio",
    "topico": "O Fenômeno da Conclusão Esticada",
    "enunciado": "A respeito do rigor nas sínteses de textos científicos, o estudo de Peters e Chin-Yee (2025) analisou 4.900 resumos produzidos por modelos de linguagem e concluiu que:",
    "alternativas": [
      {
        "texto": "A chance de os modelos gerarem uma 'conclusão esticada' (generalizando as conclusões de forma muito mais ampla do que os dados do artigo sustentavam) foi quase cinco vezes superior à de especialistas humanos, e pedir explicitamente 'sem imprecisões' quase dobrou essa distorção.",
        "correta": true,
        "explicacao": "Correta! O e-book relata textualmente na página 31 os achados de Peters e Chin-Yee (2025): o modelo tende a extrapolar e exagerar conclusões para soar assertivo, e proibições genéricas ('sem imprecisões') não resolvem."
      },
      {
        "texto": "Os modelos de linguagem recusaram-se a resumir artigos científicos por temer processos judiciais de plágio.",
        "correta": false,
        "explicacao": "Incorreta. Os modelos processaram os 4.900 textos; o problema constatado foi a distorção epistêmica de escopo."
      },
      {
        "texto": "A taxa de alucinação caiu a zero quando o prompt foi redigido exclusivamente em letras minúsculas.",
        "correta": false,
        "explicacao": "Incorreta. Caixa alta ou baixa não imuniza modelos contra extrapolações de resultados científicos."
      },
      {
        "texto": "Especialistas humanos erraram cinco vezes mais do que a máquina em todas as análises estatísticas.",
        "correta": false,
        "explicacao": "Incorreta. Os resultados foram exatamente o oposto: a máquina errou quase cinco vezes mais que os humanos."
      },
      {
        "texto": "Resumos de textos científicos são imunes a erros de inferência devido à complexidade da linguagem acadêmica.",
        "correta": false,
        "explicacao": "Incorreta. Os resumos apresentaram expressivo percentual de conclusões esticadas e descontextualizadas."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 31 / Capítulo 5 / Seção 3",
      "citacao": "Conclusão esticada: Em 4.900 resumos de textos científicos feitos por modelos de linguagem, a chance de trazer uma conclusão mais ampla do que o estudo permite foi quase cinco vezes maior que nos resumos de especialistas; pedir 'sem imprecisões' quase dobrou essa chance (Peters; Chin-Yee, 2025)."
    }
  },
  {
    "id": "Q05-M-03",
    "quinzena": 5,
    "nivel": "medio",
    "topico": "Inversão da Posição do Autor e Viés de Corpus",
    "enunciado": "No Quadro 5.1 da Quinzena 5, a falha denominada 'Inversão da posição do autor' é descrita como originária do 'Viés de corpus'. Em que consiste essa armadilha na prática da leitura acadêmica assistida por IA?",
    "alternativas": [
      {
        "texto": "O autor do artigo apresenta detalhadamente uma teoria ou argumento contrário unicamente para refutá-lo e discordar dele; porém, o modelo de linguagem, por correlação estatística de proximidade dos termos, atribui aquela ideia errônea como sendo a opinião do próprio autor.",
        "correta": true,
        "explicacao": "Correta! O e-book elucida: o autor traz a tese adversária para dialogar e contestar, mas a IA faz a síntese atribuindo a tese refutada ao autor do artigo, gerando erro crasso de compreensão."
      },
      {
        "texto": "O modelo inverte o nome e o sobrenome do autor na folha de rosto da ABNT por defeito no teclado.",
        "correta": false,
        "explicacao": "Incorreta. Inversão da posição do autor refere-se à tese epistemológica defendida, não à ordem de sobrenome."
      },
      {
        "texto": "O artigo científico é traduzido do japonês para o português com leitura vertical invertida.",
        "correta": false,
        "explicacao": "Incorreta. Proposição disparatada que ignora o conteúdo teórico do Quadro 5.1."
      },
      {
        "texto": "O autor falece durante a redação do artigo e o orientador assume a autoria legalmente.",
        "correta": false,
        "explicacao": "Incorreta. Não se refere a eventos biográficos de sucessão, mas a erro de interpretação textual pela IA."
      },
      {
        "texto": "O modelo cita artigos de autores medievais no lugar de pesquisadores do século XXI.",
        "correta": false,
        "explicacao": "Incorreta. Refere-se especificamente à atribuição da contraposição ao próprio autor que a refutou."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 30 / Capítulo 5 / Quadro 5.1",
      "citacao": "Inversão da posição do autor: Vem de: Viés de corpus. Como aparece: O autor apresenta a ideia para discordar dela, e a citação atribui a ideia a ele."
    }
  },
  {
    "id": "Q05-M-04",
    "quinzena": 5,
    "nivel": "medio",
    "topico": "Generalização sem Ressalva",
    "enunciado": "Analise as asserções sobre a conferência de fontes e o erro de 'Generalização sem ressalva':\nI. Uma citação gerada por IA pode conter o erro de generalização sem ressalva quando elimina o recorte metodológico do estudo original (quem foi investigado, onde, em que ano e sob quais restrições),\nPORQUE\nII. a verificação exclusiva do título e dos metadados da revista em um buscador é suficiente para detectar a generalização sem ressalva sem necessidade de abrir e ler o texto original.\n\nA respeito dessas afirmativas, assinale a opção correta:",
    "alternativas": [
      {
        "texto": "A asserção I é uma proposição verdadeira, e a asserção II é uma proposição falsa.",
        "correta": true,
        "explicacao": "Correta! A asserção I define perfeitamente a generalização sem ressalva. A asserção II é falsa porque o e-book pontua textualmente: 'Conferir só o título revela a referência fabricada. Os outros três erros [substantivo, generalização e inversão] só aparecem quando você abre o texto citado e lê o trecho e o parágrafo em volta'."
      },
      {
        "texto": "As asserções I e II são verdadeiras, e a II justifica a I.",
        "correta": false,
        "explicacao": "Incorreta. A asserção II é frontalmente contrária ao ensinado no material didático."
      },
      {
        "texto": "As asserções I e II são proposições verdadeiras, mas a II não justifica a I.",
        "correta": false,
        "explicacao": "Incorreta. A asserção II é categoricamente falsa."
      },
      {
        "texto": "A asserção I é falsa, mas a asserção II é verdadeira.",
        "correta": false,
        "explicacao": "Incorreta. A asserção I é rigorosamente verdadeira."
      },
      {
        "texto": "Ambas as asserções I e II são proposições falsas.",
        "correta": false,
        "explicacao": "Incorreta. A primeira proposição expressa o conceito exato do Quadro 5.1."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 30 / Capítulo 5 / Quadro 5.1 e Seção 2",
      "citacao": "Generalização sem ressalva: Some o recorte do estudo: quem foi estudado, onde e quando. Conferir só o título revela a referência fabricada. Os outros três erros só aparecem quando você abre o texto citado e lê o trecho."
    }
  },
  {
    "id": "Q05-M-05",
    "quinzena": 5,
    "nivel": "medio",
    "topico": "Ordem de Prioridade na Conferência de Sínteses",
    "enunciado": "Ao receber uma síntese longa elaborada por IA contendo múltiplas afirmações técnicas, mas dispondo de tempo escasso para conferir todas as citações antes da entrega do trabalho, quais critérios o estudante deve mobilizar para ordenar sua fila de conferência prioritária (Capítulo 5)?",
    "alternativas": [
      {
        "texto": "A verificabilidade prática (conseguir acessar e abrir o texto da fonte original de imediato) e a criticidade das consequências (o impacto grave para a validade do trabalho caso aquela afirmação específica esteja incorreta).",
        "correta": true,
        "explicacao": "Correta! Conforme a Seção 3 (pág. 31), com pouco tempo aplicam-se os critérios do Capítulo 3: condição prática de abrir a fonte hoje e severidade da consequência do erro."
      },
      {
        "texto": "Conferir primeiro as citações que possuírem autores estrangeiros com nomes iniciados pela letra Z.",
        "correta": false,
        "explicacao": "Incorreta. Critério alfabético arbitrário sem fundamento metodológico."
      },
      {
        "texto": "Conferir apenas as frases que contiverem menos de 10 palavras por linha.",
        "correta": false,
        "explicacao": "Incorreta. A extensão da frase não determina a gravidade epistemológica do erro."
      },
      {
        "texto": "Repetir a mesma pergunta cinco vezes no chat da IA e aceitar a versão que se repetir por maioria.",
        "correta": false,
        "explicacao": "Incorreta. O e-book adverte expressamente: 'Repetir o pedido à mesma ferramenta não substitui a conferência na fonte'."
      },
      {
        "texto": "Deixar de conferir qualquer citação e solicitar que o orientador faça a validação manual de cada página.",
        "correta": false,
        "explicacao": "Incorreta. A responsabilidade acadêmica pelo trabalho é indelegável do autor da pesquisa."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 31 / Capítulo 5 / Seção 3",
      "citacao": "Ordem da conferência: Com pouco tempo, os critérios do Capítulo 3 passam a ordenar a fila. A verificabilidade passa a incluir uma condição prática, conseguir abrir a fonte hoje, e a raridade dá lugar à consequência: o que acontece se estiver errada?"
    }
  },
  {
    "id": "Q05-D-01",
    "quinzena": 5,
    "nivel": "dificil",
    "topico": "Situação para Análise - Paulo e o Artigo sobre Evasão Escolar",
    "enunciado": "Considere a situação para análise da Quinzena 5: Paulo anexou um artigo científico a uma ferramenta de IA generativa e formulou a seguinte instrução: 'O que o texto conclui sobre o efeito específico das aulas gravadas na evasão escolar?'. A ferramenta gerou uma síntese elegante e bem articulada de seis parágrafos abordando a história da educação a distância e as tecnologias educacionais, sem conter uma única frase sobre o impacto das aulas gravadas na taxa de evasão. Ao avaliar a resposta sob as Três Verificações do Capítulo 5, Paulo diagnostica que:",
    "alternativas": [
      {
        "texto": "A síntese falhou na Verificação de Adequação: embora os dados e o raciocínio histórico estejam corretos (conferência factual e lógica), o texto é um caso de vagueza confortável que não responde à pergunta específica formulada; a providência eficaz é abrir o artigo original e localizar o trecho sobre evasão, em vez de insistir em novos resumos cegos.",
        "correta": true,
        "explicacao": "Correta! É a solução comentada oficial da página 31 do e-book: falha na adequação (não responde ao pedido); abrir o documento original e conferir a seção pertinente é muito mais produtivo do que regenerar infinitamente o prompt."
      },
      {
        "texto": "A resposta passou em todas as verificações, pois a ausência de resposta direta prova que o conceito de evasão escolar não existe na pedagogia.",
        "correta": false,
        "explicacao": "Incorreta. O modelo cometeu evasão de contexto; evasão escolar é um problema pedagógico real."
      },
      {
        "texto": "A síntese falhou apenas na Verificação Factual porque a IA utilizou a grafia pré-reforma ortográfica.",
        "correta": false,
        "explicacao": "Incorreta. O texto histórico estava correto factualmente; a falha foi de adequação ao escopo da pergunta."
      },
      {
        "texto": "Paulo deve processar civilmente o tribunal de Hong Kong por danos morais na conexão de rede.",
        "correta": false,
        "explicacao": "Incorreta. Mistura confusa de casos jurídicos sem nexo causal com a questão."
      },
      {
        "texto": "O erro prova que artigos científicos anexados em PDF são automaticamente criptografados contra leitura computacional.",
        "correta": false,
        "explicacao": "Incorreta. O modelo processou o texto, mas desviou do foco central (vagueza confortável)."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 31 / Capítulo 5 / Situação para Análise",
      "citacao": "Resposta comentada. A de adequação: os dados e o raciocínio podem estar certos, e a síntese não responde à pergunta. É a vagueza confortável do Capítulo 2 dentro de uma síntese. Abrir o artigo no trecho sobre evasão resolve mais."
    }
  },
  {
    "id": "Q05-D-02",
    "quinzena": 5,
    "nivel": "dificil",
    "topico": "Estudo de Caso - O Caso Acadêmico de Hong Kong e Retratação Científica",
    "enunciado": "No caso acadêmico ocorrido em Hong Kong, citado nas Quinzenas 5 e 7 do material didático, um artigo científico foi formalmente retirado de circulação (retratação/despublicação) por um periódico conceituado, acarretando penalidades graves inclusive para o professor sênior orientador. O motivo central da retratação foi:",
    "alternativas": [
      {
        "texto": "A presença de referências bibliográficas fabricadas pela ferramenta de IA generativa (inexistentes na realidade) incluídas no manuscrito sem terem sido conferidas nas fontes primárias e sem qualquer declaração transparente de uso da ferramenta.",
        "correta": true,
        "explicacao": "Correta! Conforme o e-book (págs. 30 e 39), referências inexistentes geradas pela IA e aceitas acriticamente comprometeram a integridade científica e levaram à anulação da publicação, alcançando orientador e discente."
      },
      {
        "texto": "O uso de papel com gramatura inferior a 75g/m² na impressão dos exemplares de arquivo da biblioteca.",
        "correta": false,
        "explicacao": "Incorreta. A causa foi quebra ética grave de integridade científica por alucinação de citações não auditadas."
      },
      {
        "texto": "A recusa dos autores em assinar um contrato comercial exclusivo com uma grande empresa multinacional de software.",
        "correta": false,
        "explicacao": "Incorreta. A punição decorreu de infração de integridade acadêmica julgada pela comissão editorial do periódico."
      },
      {
        "texto": "A citação de artigos em língua portuguesa em um periódico publicado na Ásia.",
        "correta": false,
        "explicacao": "Incorreta. Publicações internacionais aceitam citações globais desde que autênticas e pertinentes."
      },
      {
        "texto": "A comprovação de que o servidor da universidade havia sofrido superaquecimento térmico no verão.",
        "correta": false,
        "explicacao": "Incorreta. Trata-se de responsabilidade humana pelo conteúdo e rigor da verificação de fontes."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 39 / Capítulo 7 (retomando Quinzena 5) / Seção 4",
      "citacao": "No caso de Hong Kong (Quinzena 5), referências geradas pela ferramenta e não declaradas levaram à retirada do artigo, e a consequência alcançou também o professor que o assinava."
    }
  },
  {
    "id": "Q05-D-03",
    "quinzena": 5,
    "nivel": "dificil",
    "topico": "Asserção-Razão sobre o Protocolo Manual Antes de IA na Etapa 2",
    "enunciado": "Analise a asserção e a razão a seguir sobre a Etapa 2 do protocolo 'Manual antes de IA' (Figura 5.2):\nAsserção: Na segunda etapa do protocolo, ao pedir que a ferramenta aponte lacunas de raciocínio, o estudante deve submeter ao chat exclusivamente o seu próprio registro interpretativo, mantendo o artigo científico original fora da janela de contexto,\nPORQUE\nRazão: mantendo o artigo original de fora, a ferramenta de IA avalia a coerência interna e a solidez lógica do que o estudante escreveu, impedindo que o modelo produza uma síntese autônoma direta do artigo para mascarar as fragilidades da compreensão discente.\n\nA respeito dessas proposições, assinale a opção correta:",
    "alternativas": [
      {
        "texto": "A asserção e a razão são proposições verdadeiras, e a razão é uma justificativa correta da asserção.",
        "correta": true,
        "explicacao": "Correta! Conforme o e-book detalha na página 30 (Etapa 2: Auditar o registro), entrega-se apenas o registro do estudante sem o artigo; assim, a IA analisa a solidez da argumentação do próprio aluno, sem atalhos ou terceirização da leitura."
      },
      {
        "texto": "A asserção e a razão são verdadeiras, mas a razão não é uma justificativa correta da asserção.",
        "correta": false,
        "explicacao": "Incorreta. A razão explica exatamente a finalidade pedagógica da restrição de contexto na etapa 2."
      },
      {
        "texto": "A asserção é verdadeira, mas a razão é uma proposição falsa.",
        "correta": false,
        "explicacao": "Incorreta. A razão está em perfeita sintonia com a metodologia didática do curso."
      },
      {
        "texto": "A asserção é falsa, pois é obrigatório colar o livro inteiro na conversa em todas as etapas.",
        "correta": false,
        "explicacao": "Incorreta. Colar o artigo violaria o desenho intencional da etapa de auditoria do registro."
      },
      {
        "texto": "Ambas as proposições são falsas.",
        "correta": false,
        "explicacao": "Incorreta. Ambas são verdadeiras e materializam o modo Centauro na leitura acadêmica."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 30 / Capítulo 5 / Figura 5.2 e Seção 1",
      "citacao": "2. Auditar o registro: Entregar à ferramenta só o seu registro, sem o artigo, para ela apontar o que ficou frágil. Cada apontamento é conferido no texto. A ordem das etapas é o método: é o modo Centauro aplicado à leitura."
    }
  },
  {
    "id": "Q05-D-04",
    "quinzena": 5,
    "nivel": "dificil",
    "topico": "Estudo de Caso - Citação Perfeita com Erro Substantivo Oculto",
    "enunciado": "Um estudante de graduação recebe de uma IA a seguinte citação para o seu TCC: 'Conforme demonstrado por Silva (2022, p. 45), a aplicação do método ágil aumentou em 80% o estresse das equipes de TI'. O estudante consulta a base SciELO e constata: o pesquisador Silva existe, publicou em 2022 na renomada revista de computação indicada e o artigo possui a página 45 citada. Confiando na autenticidade dos metadados, o estudante insere a citação direta no trabalho. Ao ser avaliado na banca, o examinador abre a página 45 e constata que Silva concluiu que o método ágil *reduziu em 80%* o estresse das equipes. À luz do Quadro 5.1 da Quinzena 5, analise a falha metodológica do estudante:",
    "alternativas": [
      {
        "texto": "O estudante foi vítima de um erro substantivo originado por coerência sem verdade; sua conferência foi insuficiente porque checar apenas a existência do autor, do ano e do periódico só revela referências fabricadas, exigindo imperativamente a abertura do texto na página indicada para conferir o sentido da afirmação.",
        "correta": true,
        "explicacao": "Correta! É exatamente o alerta didático da página 30: 'Conferir só o título revela a referência fabricada. Os outros três erros só aparecem quando você abre o texto citado e lê o trecho e o parágrafo em volta'."
      },
      {
        "texto": "O estudante agiu com perfeito rigor acadêmico, sendo a banca injusta por exigir que ele lesse os artigos que citou.",
        "correta": false,
        "explicacao": "Incorreta. Ler o que se cita e garantir a fidelidade do pensamento do autor é obrigação elementar de quem assina uma pesquisa."
      },
      {
        "texto": "Trata-se de uma falha de tokenização decorrente de um limite de domínio no servidor do SciELO.",
        "correta": false,
        "explicacao": "Incorreta. A falha decorre da natureza do modelo probabilístico que gerou sofisma sem conferência de conteúdo."
      },
      {
        "texto": "O caso enquadra-se como referência fabricada pura, pois o autor deveria ter sido desindexado da base internacional.",
        "correta": false,
        "explicacao": "Incorreta. A obra e o autor existem; logo, não é referência fabricada, mas sim erro substantivo grave de atribuição."
      },
      {
        "texto": "A culpa é exclusiva da revista científica que permitiu que o artigo tivesse a página 45.",
        "correta": false,
        "explicacao": "Incorreta. Proposição ilógica que isenta a falta de conferência do pesquisador."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 30 / Capítulo 5 / Quadro 5.1 e Seção 2",
      "citacao": "Erro substantivo: A obra existe e os dados conferem, mas o texto não diz o que a citação afirma. Conferir só o título revela a referência fabricada. Os outros três erros só aparecem quando você abre o texto citado e lê o trecho."
    }
  },
  {
    "id": "Q05-D-05",
    "quinzena": 5,
    "nivel": "dificil",
    "topico": "Conferência em Loop Fechado vs. Fonte Externa Independente",
    "enunciado": "Um pesquisador desconfia de um dado numérico fornecido em uma síntese de IA. Para tirar a dúvida, ele digita na mesma conversa: 'Você tem certeza absoluta desse dado? Confira se não está errando'. A IA responde imediatamente com polidez: 'Sim, peço desculpas pela aparente confusão anterior, confirmo com 100% de certeza que o dado está correto e referendado na literatura'. Sob a ótica epistemológica consolidada nos Capítulos 2, 4 e 5 da disciplina COM170, a atitude desse pesquisador:",
    "alternativas": [
      {
        "texto": "É metodologicamente estéril e ilusória, pois o modelo de linguagem não possui agência ontológica ou ancoragem externa para auditar a si mesmo; reperguntar à mesma ferramenta em loop fechado mantém o processamento confinado à memória paramétrica probabilística, exigindo que a checagem seja feita obrigatoriamente fora do modelo, em uma fonte independente.",
        "correta": true,
        "explicacao": "Correta! Conforme demonstrado nos Capítulos 4 (Huang et al., 2024) e 5 (pág. 31), insistir com a própria ferramenta não substitui a fonte primária; a IA apenas reproduz o tom confiante sem verificar a realidade factual."
      },
      {
        "texto": "Constitui o protocolo padrão internacional de auditoria quântica de referências científicas.",
        "correta": false,
        "explicacao": "Incorreta. A auditoria científica exige comprovação documental em fontes primárias independentes, e não perguntas repetidas ao robô."
      },
      {
        "texto": "Comprova a tese de que a máquina adquire autoconsciência reflexiva quando pressionada psicologicamente pelo usuário.",
        "correta": false,
        "explicacao": "Incorreta. Antropomorfismo descabido: o modelo calcula sequências estatísticas prováveis sem reflexão psicológica."
      },
      {
        "texto": "Elimina a responsabilidade do pesquisador perante o comitê de ética em caso de fraude científica.",
        "correta": false,
        "explicacao": "Incorreta. A responsabilidade por qualquer dado assinado recai inteiramente sobre o ser humano que assina o artigo."
      },
      {
        "texto": "Substitui a necessidade de leitura das 4.900 páginas do acervo histórico da biblioteca.",
        "correta": false,
        "explicacao": "Incorreta. Reperguntar no chat reforça a armadilha da vagueza confortável."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 31 / Capítulo 5 / Seção 3 (retomando Capítulos 2 e 4)",
      "citacao": "Repetir o pedido à mesma ferramenta não substitui a conferência na fonte (Capítulo 4)... A IA não corrige sozinha... O ganho aparece quando o julgamento vem de fora do modelo."
    }
  },
  {
    "id": "Q06-F-01",
    "quinzena": 6,
    "nivel": "facil",
    "topico": "Conceito de Medida Indireta (Proxy)",
    "enunciado": "No contexto da ética em sistemas de Inteligência Artificial que decidem sobre pessoas (Capítulo 6), o que é uma 'medida indireta' (proxy)?",
    "alternativas": [
      {
        "texto": "Aquilo que o sistema mede concretamente quando a variável que realmente interessa não pode ser medida diretamente (como medir gasto hospitalar em vez de necessidade clínica de saúde).",
        "correta": true,
        "explicacao": "Correta! Conforme o e-book (pág. 33), a medida indireta (proxy) é a métrica substituta adotada por estar facilmente disponível nos bancos de dados, frequentemente introduzindo distorções sistemáticas."
      },
      {
        "texto": "Um servidor de rede intermediário utilizado para mascarar o endereço IP do usuário na navegação anônima.",
        "correta": false,
        "explicacao": "Incorreta. Em ética e aprendizado de máquina, proxy refere-se a uma variável substituta estatística, e não a um servidor de rede proxy."
      },
      {
        "texto": "A fita métrica utilizada pelos operários de construção civil nos polos da UNIVESP.",
        "correta": false,
        "explicacao": "Incorreta. Conotação física literal equivocada em relação à teoria de mensuração algorítmica."
      },
      {
        "texto": "Um algoritmo que converte automaticamente valores em reais para moedas estrangeiras.",
        "correta": false,
        "explicacao": "Incorreta. Não se relaciona a câmbio financeiro, mas à modelagem matemática de fenômenos sociais complexos."
      },
      {
        "texto": "Uma sanção penal aplicada a robôs que violam direitos de propriedade intelectual.",
        "correta": false,
        "explicacao": "Incorreta. Robôs não sofrem sanções penais por não terem personalidade jurídica."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 33 / Capítulo 6 / Seção 1",
      "citacao": "Medida indireta: Aquilo que o sistema mede quando o que interessa não pode ser medido diretamente; em inglês, proxy. Um sistema de hospitais dos EUA deveria apontar quem precisava de cuidado e foi treinado para prever o gasto com saúde (Obermeyer et al., 2019)."
    }
  },
  {
    "id": "Q06-F-02",
    "quinzena": 6,
    "nivel": "facil",
    "topico": "Distinção entre Usuário e Afetado",
    "enunciado": "Qual é a distinção basilar entre o 'Usuário' e o 'Afetado' por um sistema automatizado de IA, apresentada na Quinzena 6?",
    "alternativas": [
      {
        "texto": "Usuário é quem opera o sistema, escolhe os comandos e decide o que fazer com os resultados; Afetado é quem recebe o impacto da decisão (como o candidato a emprego ou paciente), o qual quase nunca escolheu estar ali ou teve controle sobre o algoritmo.",
        "correta": true,
        "explicacao": "Correta! Conforme o e-book (pág. 33), separar analiticamente quem opera o software de quem sofre suas consequências é o primeiro passo da avaliação ética."
      },
      {
        "texto": "Usuário é a pessoa física; Afetado é a pessoa jurídica que vende o software.",
        "correta": false,
        "explicacao": "Incorreta. Afetados são os indivíduos cujas vidas e direitos são impactados pelas decisões do sistema."
      },
      {
        "texto": "Usuário é quem paga a assinatura mensal; Afetado é quem utiliza a versão gratuita do aplicativo.",
        "correta": false,
        "explicacao": "Incorreta. Planos de monetização de software não definem a categoria sociotécnica de afetado."
      },
      {
        "texto": "São termos perfeitamente equivalentes na legislação brasileira, aplicando-se indistintamente a qualquer cidadão.",
        "correta": false,
        "explicacao": "Incorreta. A assimetria de poder entre quem opera e quem sofre a decisão é o núcleo da distinção."
      },
      {
        "texto": "O Afetado é o programador que desenvolve o código; o Usuário é o computador onde o código roda.",
        "correta": false,
        "explicacao": "Incorreta. O computador é infraestrutura inanimada; usuário e afetado são posições humanas."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 33 / Capítulo 6 / Seção 1",
      "citacao": "Usuário e afetado: Usuário é quem opera o sistema e decide o que fazer com o resultado. Afetado é quem recebe a decisão, e quase nunca escolheu estar ali."
    }
  },
  {
    "id": "Q06-F-03",
    "quinzena": 6,
    "nivel": "facil",
    "topico": "As Quatro Perguntas da Bússola de Decisão Ética",
    "enunciado": "A Bússola de Decisão Ética (Figura 6.2) organiza a análise de um sistema que decide sobre seres humanos em quatro perguntas fundamentais de exame crítico. Quais são essas quatro perguntas?",
    "alternativas": [
      {
        "texto": "Quem (é afetado?), Sabe (que há algoritmo decidindo?), Responde (quando o sistema erra?) e Custa (quanto custa manter e quem paga?).",
        "correta": true,
        "explicacao": "Correta! Conforme a Figura 6.2 (pág. 33), a bússola estrutura-se exatamente pelos nomes curtos: Quem, Sabe, Responde e Custa."
      },
      {
        "texto": "Onde, Quando, Por que e Quanto custa em Bitcoins.",
        "correta": false,
        "explicacao": "Incorreta. A metodologia da bússola não trata de criptomoedas, mas de governança ética e social."
      },
      {
        "texto": "Qual o modelo da GPU, Qual o sistema operacional, Quantos gigabytes de RAM e Qual a taxa de clock.",
        "correta": false,
        "explicacao": "Incorreta. Parâmetros de benchmark de hardware de TI, alheios à bússola ética."
      },
      {
        "texto": "Nome do autor, Título do artigo, Ano de publicação e Editora responsável.",
        "correta": false,
        "explicacao": "Incorreta. Elementos de ficha catalográfica bibliográfica, não da bússola de deliberação ética."
      },
      {
        "texto": "Login, Senha, E-mail de recuperação e Autenticação de dois fatores.",
        "correta": false,
        "explicacao": "Incorreta. Rotinas de controle de acesso de contas digitais."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 33 / Capítulo 6 / Figura 6.2",
      "citacao": "Figura 6.2 – As quatro perguntas da Bússola de Decisão Ética: 1. QUEM (é afetado?), 2. SABE (que há algoritmo decidindo?), 3. RESPONDE (quando o sistema erra?), 4. CUSTA (quanto custa manter e quem paga?)."
    }
  },
  {
    "id": "Q06-F-04",
    "quinzena": 6,
    "nivel": "facil",
    "topico": "As Duas Metades da Declaração de Uso",
    "enunciado": "A respeito da integridade na redação acadêmica, o Capítulo 6 estabelece que uma Declaração de Uso de IA legítima deve conter obrigatoriamente 'duas metades'. O que cada metade deve explicitar?",
    "alternativas": [
      {
        "texto": "A primeira metade nomeia qual ferramenta participou e para que tarefa específica foi usada; a segunda metade detalha o que o autor conferiu, em qual parte do trabalho e por qual método de validação.",
        "correta": true,
        "explicacao": "Correta! Conforme o e-book (pág. 34), escrever apenas 'usei IA para revisar tudo' é nulo; a declaração exige nomear o papel da ferramenta e comprovar o protocolo de conferência humana."
      },
      {
        "texto": "A primeira metade é redigida em português arcaico; a segunda metade traduzida para o inglês britânico.",
        "correta": false,
        "explicacao": "Incorreta. Idiomas formais não definem a estrutura metodológica de prestação de contas da declaração."
      },
      {
        "texto": "A primeira metade traz o valor em reais pago na assinatura; a segunda metade o número do cartão de crédito.",
        "correta": false,
        "explicacao": "Incorreta. Não se relaciona a faturas comerciais financeiras."
      },
      {
        "texto": "A primeira metade elogia a universidade; a segunda metade agradece aos facilitadores de polo.",
        "correta": false,
        "explicacao": "Incorreta. Confunde agradecimentos formais (acknowledgments) com declaração metodológica de uso de IA."
      },
      {
        "texto": "A primeira metade declara que o robô é o autor oficial; a segunda isenta o estudante de qualquer responsabilidade.",
        "correta": false,
        "explicacao": "Incorreta. A IA nunca pode figurar como autora (COPE, CNPq), e o estudante responde integralmente pelo trabalho."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 34 / Capítulo 6 / Seção 3",
      "citacao": "Declaração de uso: Tem duas metades: a primeira diz qual ferramenta, nomeada, e para quê; a segunda diz o que você conferiu, em que parte do trabalho e como. 'Revisei tudo' não cumpre a segunda metade."
    }
  },
  {
    "id": "Q06-F-05",
    "quinzena": 6,
    "nivel": "facil",
    "topico": "Definição de Tensão Ética",
    "enunciado": "De acordo com o material didático da Quinzena 6, como se define uma 'tensão ética' em tomadas de decisão profissionais mediadas por sistemas algorítmicos?",
    "alternativas": [
      {
        "texto": "Uma situação concreta em que dois valores legítimos e desejáveis entram em conflito e não cabem inteiros na mesma decisão, de modo que priorizar um inevitavelmente exige abrir mão de parte do outro.",
        "correta": true,
        "explicacao": "Correta! O e-book define textualmente na página 35: tensão ética é como a água de uma jarra que não enche dois copos; não há solução perfeita indolor, mas escolhas fundamentadas com custos assumidos."
      },
      {
        "texto": "Uma falha elétrica na rede de energia provocada por raios que danifica os servidores do polo.",
        "correta": false,
        "explicacao": "Incorreta. Conotação física de voltagem elétrica, alheia ao debate da ética filosófica."
      },
      {
        "texto": "Uma briga corporal entre dois engenheiros de software na recepção da empresa.",
        "correta": false,
        "explicacao": "Incorreta. Não se refere a conflito interpessoal físico violento."
      },
      {
        "texto": "A certeza absoluta de que um crime doloso foi praticado com má intenção premeditada.",
        "correta": false,
        "explicacao": "Incorreta. Se há crime evidente e culpado inequívoco, trata-se de infração legal, e não de tensão ética entre valores legítimos concorrentes."
      },
      {
        "texto": "A proibição do uso de fones de ouvido durante a realização de provas da Vunesp.",
        "correta": false,
        "explicacao": "Incorreta. Regra de edital de prova, e não conceito de deliberação ética sob incerteza."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 35 / Capítulo 6 / Seção 4",
      "citacao": "Tensão ética é a situação em que dois valores legítimos não cabem inteiros na mesma decisão: preservar um custa parte do outro, como a água da jarra que não enche os dois copos."
    }
  },
  {
    "id": "Q06-M-01",
    "quinzena": 6,
    "nivel": "medio",
    "topico": "Dano sem Má Intenção e Responsabilidade",
    "enunciado": "O estudo de Obermeyer et al. (2019) evidenciou que um sistema preditivo utilizado em hospitais norte-americanos gerava recomendações com forte viés racial desfavorável a pacientes negros, exigindo que estivessem mais gravemente doentes para receber os mesmos cuidados clínicos que pacientes brancos. A análise desse caso demonstrou que:",
    "alternativas": [
      {
        "texto": "O dano ocorreu sem má intenção dos desenvolvedores, pois o sistema utilizou 'gasto financeiro histórico com saúde' como medida indireta (proxy) da gravidade clínica da doença; como a população negra historicamente gastava menos por barreiras de renda, o algoritmo codificou a desigualdade social como ausência de doença, mantendo responsáveis: quem escolheu a medida indireta e quem operou o sistema.",
        "correta": true,
        "explicacao": "Correta! Conforme o e-book (pág. 33), trata-se do caso emblemático de 'dano sem má intenção': a proxy de gastos produziu discriminação algorítmica grave sem necessidade de qualquer animosidade explícita dos programadores."
      },
      {
        "texto": "O erro foi causado por hackers russos que invadiram a rede do hospital e reprogramaram os pesos dos modelos.",
        "correta": false,
        "explicacao": "Incorreta. Não houve invasão externa; a distorção derivou da escolha inadequada de métrica proxy pelos criadores."
      },
      {
        "texto": "Sistemas de saúde são legalmente considerados imunes a qualquer consideração ética por salvarem vidas.",
        "correta": false,
        "explicacao": "Incorreta. A tomada de decisão clínica é um dos campos onde a ética e a auditoria algorítmica são mais críticas."
      },
      {
        "texto": "O modelo aprendeu por reforço através de jogos de videogame hospitalares em servidores da Europa.",
        "correta": false,
        "explicacao": "Incorreta. O modelo foi treinado em bases comerciais de planos de saúde nos EUA."
      },
      {
        "texto": "A discriminação foi resolvida de forma definitiva proibindo-se o uso de prontuários médicos em computadores.",
        "correta": false,
        "explicacao": "Incorreta. A mitigação exige rever métricas de entrada, dados de treino e instituir governança sobre os afetados."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 33 / Capítulo 6 / Seção 1",
      "citacao": "Medida indireta: Um sistema de hospitais dos EUA foi treinado para prever o gasto com saúde; pacientes negros precisavam estar mais doentes para receber a mesma pontuação (Obermeyer et al., 2019). Dano sem má intenção: A medida costuma ser escolhida por estar disponível."
    }
  },
  {
    "id": "Q06-M-02",
    "quinzena": 6,
    "nivel": "medio",
    "topico": "Resposta Genérica vs. Resposta Situada",
    "enunciado": "Ao utilizar a Bússola de Decisão Ética (Figura 6.2) para auditar um sistema inteligente em um ambiente corporativo ou acadêmico, o material adverte que 'a Bússola não dá veredito: ela organiza o que olhar antes de julgar'. Qual é a diferença metodológica entre uma **resposta genérica** e uma **resposta situada**?",
    "alternativas": [
      {
        "texto": "A genérica formularia afirmações abstratas que serviriam para qualquer sistema indistintamente ('os usuários são os clientes da empresa'); a situada descreve as particularidades e as assimetrias daquele sistema concreto ('quem ficou na base do ranking e não sabe que a lista automatizada existe').",
        "correta": true,
        "explicacao": "Correta! Conforme o e-book (págs. 33-34), se uma resposta ética serve para qualquer algoritmo genérico, ela ainda não descreveu nada útil sobre o sistema real analisado."
      },
      {
        "texto": "A resposta situada é redigida em inglês e a genérica em latim.",
        "correta": false,
        "explicacao": "Incorreta. O critério diz respeito ao grau de concretude empírica e localização institucional da análise."
      },
      {
        "texto": "A resposta genérica é calculada diretamente pelo ChatGPT sem o operador digitar nenhum comando.",
        "correta": false,
        "explicacao": "Incorreta. Refere-se à formulação da análise pelo próprio profissional ou auditor."
      },
      {
        "texto": "Respostas situadas exigem obrigatoriamente a presença de coordenadas de latitude e longitude do GPS.",
        "correta": false,
        "explicacao": "Incorreta. 'Situada' na sociotécnica refere-se às relações de poder, contexto social e institucional, não a coordenadas de satélite."
      },
      {
        "texto": "Não existe distinção, pois a ética computacional é universal e imutável para todas as máquinas.",
        "correta": false,
        "explicacao": "Incorreta. A universalidade abstrata oculta as desigualdades práticas dos sistemas reais."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 34 / Capítulo 6 / Seção 2",
      "citacao": "Resposta genérica × situada: A genérica serviria para qualquer sistema ('os candidatos à vaga'); a situada só vale para aquele ('quem ficou no fim da lista e não sabe que a lista existe'). Se a sua resposta serviria para qualquer sistema, ela ainda não descreve este."
    }
  },
  {
    "id": "Q06-M-03",
    "quinzena": 6,
    "nivel": "medio",
    "topico": "Diretrizes Internacionais de Autoria (COPE e CNPq)",
    "enunciado": "Em relação à autoria e à responsabilização em produções acadêmicas e técnicas que utilizam IA generativa, órgãos internacionais e nacionais como o Committee on Publication Ethics (COPE, 2024) e o Conselho Nacional de Desenvolvimento Científico e Tecnológico (CNPq, 2026) determinam categoricamente que:",
    "alternativas": [
      {
        "texto": "Ferramentas de IA generativa não podem figurar como autoras ou coautoras de trabalhos acadêmicos, pois não possuem agência jurídica ou moral para responder legalmente pelo conteúdo ou por eventuais infrações e plágios; os pesquisadores humanos devem declarar com transparência o uso e responder integralmente pelo texto final.",
        "correta": true,
        "explicacao": "Correta! Conforme o e-book (pág. 34), a autoria pressupõe prestação de contas (accountability) e responsabilidade perante a sociedade, atributos exclusivos de pessoas humanas e entidades jurídicas."
      },
      {
        "texto": "Modelos de IA com mais de 100 bilhões de parâmetros devem assinar artigos como autores principais por direito adquirido.",
        "correta": false,
        "explicacao": "Incorreta. Tamanho de parâmetros não confere personalidade jurídica nem responsabilidade ética."
      },
      {
        "texto": "Pesquisadores que utilizarem IA estão dispensados de declarar o uso se a ferramenta estiver sob licença de código aberto.",
        "correta": false,
        "explicacao": "Incorreta. A obrigação ética de declaração transparente e prestação de contas vigora independentemente da licença do software."
      },
      {
        "texto": "O CNPq proíbe expressamente a utilização de computadores por cientistas em todo o território nacional.",
        "correta": false,
        "explicacao": "Incorreta. Afirmação anacrônica e absurda."
      },
      {
        "texto": "A declaração de uso é facultativa apenas quando a IA fabrica citações bibliográficas falsas.",
        "correta": false,
        "explicacao": "Incorreta. Citações fabricadas configuram erro grave de integridade acadêmica."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 34 / Capítulo 6 / Seção 3",
      "citacao": "Declarar e responder: As regras publicadas pedem declarar o uso e responder pelo conteúdo final, inclusive pelos erros da ferramenta, que não pode ser autora porque não responde pelo trabalho (COPE, 2024; CNPq, 2026)."
    }
  },
  {
    "id": "Q06-M-04",
    "quinzena": 6,
    "nivel": "medio",
    "topico": "Diferença entre Três Problemas Parecidos (Quadro 6.1)",
    "enunciado": "O Quadro 6.1 do material didático estabelece que três problemas comumente chegam com aparência idêntica ao profissional, mas demandam respostas de naturezas inteiramente diferentes:\n1. Falha de implementação\n2. Problema estrutural\n3. Tensão ética\n\nAssocie cada problema à sua respectiva origem demonstrada no e-book:\n( ) Uma escolha técnica pontual feita por quem configurou ou montou o sistema em código.\n( ) Dois valores legítimos em disputa pelo mesmo tempo ou orçamento financeiro.\n( ) As desigualdades históricas embutidas na base de treino (viés algorítmico sistêmico).\n\nA ordem correta de preenchimento é:",
    "alternativas": [
      {
        "texto": "1, 3, 2.",
        "correta": true,
        "explicacao": "Correta! Conforme o Quadro 6.1: 1 (Falha de implementação: escolha técnica de quem montou); 3 (Tensão ética: dois valores legítimos disputando); 2 (Problema estrutural: dados de treino e viés algorítmico)."
      },
      {
        "texto": "1, 2, 3.",
        "correta": false,
        "explicacao": "Incorreta. Inverte a tensão ética com o problema estrutural."
      },
      {
        "texto": "2, 3, 1.",
        "correta": false,
        "explicacao": "Incorreta. Associa a falha de implementação aos dados históricos de treino."
      },
      {
        "texto": "3, 1, 2.",
        "correta": false,
        "explicacao": "Incorreta. Mapeamento desordenado do Quadro 6.1."
      },
      {
        "texto": "2, 1, 3.",
        "correta": false,
        "explicacao": "Incorreta. Confunde problemas estruturais com escolhas operacionais pontuais."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 34 / Capítulo 6 / Quadro 6.1",
      "citacao": "Quadro 6.1 – Três problemas: Falha de implementação (De onde vem: Uma escolha de quem montou o sistema); Problema estrutural (Os dados do treino); Tensão ética (Dois valores legítimos disputando o mesmo tempo ou dinheiro)."
    }
  },
  {
    "id": "Q06-M-05",
    "quinzena": 6,
    "nivel": "medio",
    "topico": "As Três Lentes Éticas e a Recomendação Forte",
    "enunciado": "Ao deliberar sobre dilemas éticos na adoção da IA, o profissional mobiliza as 'Três Lentes Éticas' clássicas (Consequências, Deveres e Caráter). Conforme o Capítulo 6, uma **recomendação forte** caracteriza-se por:",
    "alternativas": [
      {
        "texto": "Seguir três passos claros: dar nome aos dois valores concorrentes em jogo, explicitar qual deles foi forçado a ceder e apontar o que faria o profissional mudar de ideia (sua força reside na justificação pública acompanhável por terceiros, e não na agressividade do tom).",
        "correta": true,
        "explicacao": "Correta! Conforme a Seção 4 (pág. 35), recomendação forte não é falar alto ou com arrogância moral; é ter uma deliberação transparente que assume custos e indica as condições de refutabilidade."
      },
      {
        "texto": "Impor uma única solução dogmática sem permitir perguntas ou contestações de colegas de trabalho.",
        "correta": false,
        "explicacao": "Incorreta. Autoritarismo inflexível é o oposto da deliberação ética instrucional da disciplina."
      },
      {
        "texto": "Consultar o signo astrológico dos fundadores da startup desenvolvedora do software.",
        "correta": false,
        "explicacao": "Incorreta. Raciocínio pseudocientífico totalmente desprovido de seriedade acadêmica."
      },
      {
        "texto": "Afirmar que a ética foi totalmente terceirizada para o departamento financeiro da empresa.",
        "correta": false,
        "explicacao": "Incorreta. A deliberação ética é prerrogativa indelegável do profissional técnico responsável."
      },
      {
        "texto": "Garantir que nenhum custo ou sacrifício de valores ocorrerá sob nenhuma hipótese.",
        "correta": false,
        "explicacao": "Incorreta. Na tensão ética legítima, um valor sempre precisa ceder parcialmente."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 35 / Capítulo 6 / Seção 4",
      "citacao": "Recomendação forte: Segue três passos: dar nome aos dois lados, dizer qual deles cedeu e dizer o que faria você mudar de ideia. A força está na justificativa que outra pessoa consegue acompanhar e conferir; a firmeza do tom não entra nessa conta."
    }
  },
  {
    "id": "Q06-D-01",
    "quinzena": 6,
    "nivel": "dificil",
    "topico": "Situação para Análise - Distribuição de Vagas de Tutoria Extra",
    "enunciado": "Considere a situação para análise do Capítulo 6: A coordenação de um curso técnico resolveu automatizar a seleção de estudantes para vagas limitadas de tutoria acadêmica extra. Para isso, implantou um sistema que afere quantas horas cada estudante permanece logado no Ambiente Virtual de Aprendizagem (AVA), atribuindo prioridade máxima de matrícula a quem registra o menor número de horas de conexão. Ao analisar essa política educacional à luz da Quinzena 6:",
    "alternativas": [
      {
        "texto": "Houve o emprego de uma medida indireta (proxy) inadequada, pois horas de conexão medem também a qualidade do acesso domiciliar à internet e o método individual de estudo (quem baixa PDFs e estuda offline ganha vaga sem demandar tutoria, enquanto quem tem imensas dificuldades e gasta horas conectado na tela é excluído), configurando um caso típico de dano sem má intenção.",
        "correta": true,
        "explicacao": "Correta! Esta é exatamente a resposta comentada oficial do e-book (pág. 35): horas conectadas são proxy frágil da 'necessidade de apoio pedagógico', penalizando gravemente quem precisa de ajuda e beneficiando acidentalmente quem estuda desconectado."
      },
      {
        "texto": "A coordenação agiu com perfeição matemática, visto que dados digitais de log são imunes a qualquer interpretação sociotécnica.",
        "correta": false,
        "explicacao": "Incorreta. Métricas de log nunca são neutras; elas refletem infraestruturas desiguais e modos de estudo heterogêneos."
      },
      {
        "texto": "Trata-se de uma falha de hardware nas portas USB dos servidores de banco de dados do AVA.",
        "correta": false,
        "explicacao": "Incorreta. O erro é de formulação de governança ética e modelagem de variáveis (proxy), e não de hardware de portas USB."
      },
      {
        "texto": "O sistema deveria expulsar sumariamente os alunos que acessam o AVA fora do horário comercial bancário.",
        "correta": false,
        "explicacao": "Incorreta. Sugestão descabida que aprofundaria ainda mais as exclusões socioeconômicas."
      },
      {
        "texto": "A situação retrata uma quebra de sigilo fiscal passível de prisão imediata do programador em regime fechado.",
        "correta": false,
        "explicacao": "Incorreta. Não houve quebra de sigilo tributário; trata-se de auditoria de justiça algorítmica e política pedagógica."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 35 / Capítulo 6 / Situação para Análise",
      "citacao": "Resposta comentada. Medir: horas conectadas são uma medida indireta da necessidade de apoio... quem estuda sem conexão ganha prioridade sem precisar, e quem passa horas conectado porque tem dificuldade fica de fora... Dano sem má intenção: ninguém quis prejudicar quem ficou de fora."
    }
  },
  {
    "id": "Q06-D-02",
    "quinzena": 6,
    "nivel": "dificil",
    "topico": "Asserção-Razão sobre Piso Regulatório e Deliberação",
    "enunciado": "Analise a asserção e a razão a seguir relativas à regulação do atendimento ao consumidor (Decreto nº 11.034/2022):\nAsserção: A obrigatoriedade legal de manter um canal aberto 24 horas por dia combinada ao dever de oferecer atendimento humano direto por pelo menos oito horas diárias estabelece um piso regulatório indiscutível, mas não esgota a deliberação ética da gestão,\nPORQUE\nRazão: o piso legal define os parâmetros mínimos não negociáveis da operação, cabendo à deliberação ética profissional decidir e justificar publicamente como balancear a eficiência dos chatbots automatizados com o direito das pessoas vulneráveis ao suporte humano de qualidade além do mínimo legal.\n\nA respeito dessas proposições, assinale a opção correta:",
    "alternativas": [
      {
        "texto": "A asserção e a razão são proposições verdadeiras, e a razão é uma justificativa correta da asserção.",
        "correta": true,
        "explicacao": "Correta! Conforme o e-book (pág. 35), o piso legal estabelecido em decretos e normas é o ponto de partida compulsório; a ética começa exatamente onde a lei não detalha, exigindo deliberação pública justificada."
      },
      {
        "texto": "A asserção e a razão são verdadeiras, mas a razão não é uma justificativa correta da asserção.",
        "correta": false,
        "explicacao": "Incorreta. A razão justifica de modo irrepreensível por que o cumprimento da lei é piso e não o teto da ética."
      },
      {
        "texto": "A asserção é verdadeira, mas a razão é uma proposição falsa.",
        "correta": false,
        "explicacao": "Incorreta. O papel do piso legal e da deliberação ética na razão está plenamente correto."
      },
      {
        "texto": "A asserção é falsa, pois decretos governamentais não possuem validade jurídica para empresas de comércio eletrônico.",
        "correta": false,
        "explicacao": "Incorreta. O Decreto 11.034/2022 regulamenta o SAC e é plenamente aplicável e vinculante no Brasil."
      },
      {
        "texto": "Ambas as proposições são falsas.",
        "correta": false,
        "explicacao": "Incorreta. Ambas são proposições verdadeiras e fundamentais da Quinzena 6."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 35 / Capítulo 6 / Seção 4",
      "citacao": "Piso e deliberação: O Decreto nº 11.034/2022 exige do atendimento ao consumidor canal aberto 24 horas e atendimento por uma pessoa por pelo menos oito horas diárias: um mínimo para cada lado, o piso. Deliberação é a decisão com as razões apresentadas."
    }
  },
  {
    "id": "Q06-D-03",
    "quinzena": 6,
    "nivel": "dificil",
    "topico": "Estudo de Confiança e Revelação de Uso de IA",
    "enunciado": "A pesquisa empírica de Schilke e Reimann (2025), debatida na Quinzena 6 a respeito da psicologia da transparência e da confiança nas relações de trabalho mediadas por IA, comprovou que:",
    "alternativas": [
      {
        "texto": "Declarar abertamente o uso de uma ferramenta de IA pode acarretar alguma perda inicial de confiança por parte de quem lê, mas ter o uso oculto descoberto e revelado por terceiros acarreta um custo de reputação e perda de confiança incomensuravelmente maior.",
        "correta": true,
        "explicacao": "Correta! Conforme o e-book (pág. 34), a honestidade metodológica pode gerar ceticismo momentâneo, mas a quebra de confiança ao ser desmascarado em omissão é letal para a credibilidade profissional."
      },
      {
        "texto": "Ocultar o uso de IA é a estratégia recomendada por todos os conselhos de engenharia para evitar debates desnecessários.",
        "correta": false,
        "explicacao": "Incorreta. A ocultação deliberada de uso de IA é infração deontológica grave."
      },
      {
        "texto": "A confiança de quem lê sobe 300% caso o profissional afirme que a IA redigiu o artigo inteiro sem revisão.",
        "correta": false,
        "explicacao": "Incorreta. Terceirizar a autoria para o modelo destrói a credibilidade acadêmica do autor."
      },
      {
        "texto": "Nenhum ser humano é capaz de notar o estilo padronizado de um modelo generativo na leitura.",
        "correta": false,
        "explicacao": "Incorreta. Conforme a Quinzena 7, a voz padronizada possui sinais evidentes detectáveis na leitura atenta."
      },
      {
        "texto": "O estudo demonstrou que apenas robôs confiam em outros robôs no mercado corporativo.",
        "correta": false,
        "explicacao": "Incorreta. A pesquisa analisou dinâmicas de confiança entre profissionais e clientes humanos."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 34 / Capítulo 6 / Seção 3",
      "citacao": "Confiança: Declarar custa alguma confiança de quem lê; ter o uso revelado por outra pessoa custa mais (Schilke; Reimann, 2025)."
    }
  },
  {
    "id": "Q06-D-04",
    "quinzena": 6,
    "nivel": "dificil",
    "topico": "Assimetria Geopolítica e Territorial dos Custos da IA (Bússola - Pergunta Custa)",
    "enunciado": "Ao detalhar a pergunta **'Custa'** da Bússola de Decisão Ética (Figura 6.2), o material didático expande os custos materiais abordados no Capítulo 1 e exige que o analista examine a distribuição desigual desses custos. Essa dimensão geopolítica e social investiga:",
    "alternativas": [
      {
        "texto": "A assimetria entre os territórios que abrigam os centros de dados com pesado consumo de eletricidade e água, as populações periféricas recrutadas para o trabalho fantasma mal pago de alinhamento e os países do Sul Global que figuram majoritariamente apenas como consumidores e pagadores de licenças de modelos treinados externamente.",
        "correta": true,
        "explicacao": "Correta! Conforme a Figura 6.2 (pág. 33), a pergunta Custa não é só a mensalidade em reais, mas a divisão geopolítica do trabalho, pegada ecológica territorial e dependência tecnológica Norte-Sul."
      },
      {
        "texto": "A taxa de transferência de arquivos FTP entre servidores Linux e máquinas Windows.",
        "correta": false,
        "explicacao": "Incorreta. Parâmetro técnico de protocolos de arquivos de computador sem vínculo com a questão geopolítica."
      },
      {
        "texto": "A quantidade de cabos de fibra óptica submarinos fabricados exclusivamente com plástico reciclável.",
        "correta": false,
        "explicacao": "Incorreta. Desvia o foco sociopolítico para detalhes secundários de materiais."
      },
      {
        "texto": "A isenção total de impostos concedida pelas Nações Unidas para empresas de IA em todo o mundo.",
        "correta": false,
        "explicacao": "Incorreta. Não existe tal isenção tributária global."
      },
      {
        "texto": "A comprovação de que modelos abertos geram poluição nula ao serem baixados via torrent.",
        "correta": false,
        "explicacao": "Incorreta. Modelos abertos também consomem eletricidade e água na inferência e no treino."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 33 / Capítulo 6 / Figura 6.2",
      "citacao": "4. CUSTA: Quanto custa manter isso em operação, e quem paga? Olha para a distribuição: o território do centro de dados, quem prepara os dados e os países que só usam modelos treinados em outro lugar."
    }
  },
  {
    "id": "Q06-D-05",
    "quinzena": 6,
    "nivel": "dificil",
    "topico": "Estudo de Caso - O Teste da Tensão Ética Genuína",
    "enunciado": "Uma comissão universitária foi designada para avaliar a implementação de reconhecimento facial e monitoramento por IA dos olhares dos discentes durante as avaliações online. Um dos membros da comissão afirmou taxativamente: 'O problema é simples: os estudantes são desonestos e querem colar, e a empresa de software é gananciosa; basta punir os estudantes e multar a empresa que tudo estará resolvido'. De acordo com o critério metodológico da Quinzena 6 para reconhecer se uma análise alcançou ou não uma **tensão ética genuína**:",
    "alternativas": [
      {
        "texto": "A análise desse membro ainda não alcançou a tensão ética real; o teste da quinzena estabelece que, se a análise já encontrou um culpado simples e uma solução fácil, ela permanece na superficialidade, pois a tensão ética real decorre do choque irredutível entre dois valores legítimos (por exemplo, garantir a integridade e segurança da avaliação acadêmica versus respeitar o direito à privacidade e a dignidade humana no ambiente íntimo discente).",
        "correta": true,
        "explicacao": "Correta! Conforme o e-book pontua textualmente na página 35: 'O teste da quinzena: se a análise já tem um culpado e uma solução simples, ela ainda não chegou à tensão. Tensão ética é a situação em que dois valores legítimos não cabem inteiros na mesma decisão'."
      },
      {
        "texto": "A afirmação do membro é a síntese perfeita do modo Centauro e deve ser homologada sumariamente.",
        "correta": false,
        "explicacao": "Incorreta. Apontar culpados caricatos e ignorar dilemas de privacidade revela total carência de maturidade ética."
      },
      {
        "texto": "Não existe nenhuma tensão ética em monitorar alunos com câmeras, sendo obrigação dos estudantes aceitar qualquer tecnologia.",
        "correta": false,
        "explicacao": "Incorreta. Monitoramento biométrico intrusivo suscita severos debates de direitos fundamentais e privacidade."
      },
      {
        "texto": "O problema deve ser classificado como falha de implementação decorrente de bugs no driver de vídeo.",
        "correta": false,
        "explicacao": "Incorreta. Trata-se de uma questão política, jurídica e axiológica de governança da avaliação, e não de driver de vídeo."
      },
      {
        "texto": "A recomendação atende aos critérios de recomendação forte por demonstrar firmeza agressiva de tom.",
        "correta": false,
        "explicacao": "Incorreta. A disciplina enfatiza que 'a firmeza do tom não entra nessa conta'; a recomendação forte exige analisar valores e custos."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 35 / Capítulo 6 / Seção 4",
      "citacao": "O teste da quinzena: se a análise já tem um culpado e uma solução simples, ela ainda não chegou à tensão... Tensão ética: dois valores legítimos disputando o mesmo tempo ou dinheiro."
    }
  },
  {
    "id": "Q07-F-01",
    "quinzena": 7,
    "nivel": "facil",
    "topico": "Os Quatro Gestos de Autoria",
    "enunciado": "A Quinzena 7 organiza as práticas que mantêm o texto sob o controle e a identidade do autor em 'Quatro Gestos de Autoria' (Figura 7.1). Quais são esses quatro gestos?",
    "alternativas": [
      {
        "texto": "1. Apontar o padrão; 2. Defender a ideia; 3. Conferir a revisão; 4. Localizar em qual parágrafo.",
        "correta": true,
        "explicacao": "Correta! Conforme o mapa da Figura 7.1 (pág. 36), os quatro gestos fundamentam a autoria assistida consciente e rigorosa."
      },
      {
        "texto": "1. Copiar; 2. Colar; 3. Traduzir; 4. Imprimir.",
        "correta": false,
        "explicacao": "Incorreta. Rotinas mecânicas que não representam gestos críticos de autoria intelectual."
      },
      {
        "texto": "1. Programar; 2. Compilar; 3. Executar; 4. Depurar.",
        "correta": false,
        "explicacao": "Incorreta. Ciclo de engenharia de software tradicional, e não os gestos de autoria textual assistida."
      },
      {
        "texto": "1. Assinar; 2. Pagar; 3. Baixar; 4. Deletar.",
        "correta": false,
        "explicacao": "Incorreta. Proposição dissociada do modelo conceitual da disciplina."
      },
      {
        "texto": "1. Iniciar; 2. Pausar; 3. Reiniciar; 4. Encerrar.",
        "correta": false,
        "explicacao": "Incorreta. Comandos de reprodutor de mídia sem relação com a metodologia didática."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 36 / Capítulo 7 / Figura 7.1",
      "citacao": "Figura 7.1 – Os quatro gestos de autoria: 1. Apontar o padrão; 2. Defender a ideia; 3. Conferir a revisão; 4. Localizar: em qual parágrafo a ferramenta entrou?"
    }
  },
  {
    "id": "Q07-F-02",
    "quinzena": 7,
    "nivel": "facil",
    "topico": "Os Três Sinais do Texto Padrão",
    "enunciado": "De acordo com o Capítulo 7 (pág. 37), o 'padrão' é o texto pronto antes de existir o caso concreto, feito para servir a qualquer pessoa. Quais são os **três sinais característicos** que evidenciam a presença da voz padronizada no texto?",
    "alternativas": [
      {
        "texto": "A palavra de estilo que se repete sem necessidade (ex: delves), o elogio vazio sem razão ou destinatário (ex: 'excelente em quê?') e a lista de três itens abstratos no lugar de uma frase direta.",
        "correta": true,
        "explicacao": "Correta! Conforme a Seção 1 (pág. 37), os três sinais identificam o texto pasteurizado e impessoal gerado pela média estatística dos modelos."
      },
      {
        "texto": "O uso de fonte Arial, margens de 3 centímetros e espaçamento 1,5 entre linhas.",
        "correta": false,
        "explicacao": "Incorreta. Normas de formatação visual da ABNT, não os sintomas estilísticos do texto padrão de IA."
      },
      {
        "texto": "A presença de erros de concordância verbal, erros de digitação e falta de pontuação final.",
        "correta": false,
        "explicacao": "Incorreta. Modelos generativos geralmente produzem textos gramaticalmente corretos; o padrão manifesta-se no estilo vazio e fórmulas prontas."
      },
      {
        "texto": "O emprego exclusivo de gírias regionais brasileiras e expressões futebolísticas.",
        "correta": false,
        "explicacao": "Incorreta. O modelo padronizado tende a ser genérico, neutro e asséptico, evitando regionalismos espontâneos."
      },
      {
        "texto": "A impressão em cores vivas e a inclusão de fotografias coloridas de robôs.",
        "correta": false,
        "explicacao": "Incorreta. Elementos gráficos visuais que não compõem a análise linguística do texto padrão."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 37 / Capítulo 7 / Seção 1",
      "citacao": "Três sinais: A palavra de estilo que se repete sem que o assunto exija (ex: delves); o elogio vazio, sem razão nem destinatário; a lista de três itens abstratos no lugar de uma frase."
    }
  },
  {
    "id": "Q07-F-03",
    "quinzena": 7,
    "nivel": "facil",
    "topico": "Ideia Emprestada vs. Ideia Defendida",
    "enunciado": "Qual é a distinção conceitual precisa entre uma **ideia emprestada** e uma **ideia defendida** estabelecida na Quinzena 7?",
    "alternativas": [
      {
        "texto": "Ideia emprestada é aquela que o profissional só consegue explicar repetindo a frase com outras palavras; Ideia defendida é aquela que ele fundamenta com uma razão ou dado que está fora da frase, sustentando a escolha mesmo quando alguém discorda.",
        "correta": true,
        "explicacao": "Correta! Conforme a Seção 2 (pág. 37), a ideia defendida sobrevive ao Teste da Defesa, enquanto a emprestada é uma repetição vazia que reflete a ilusão de profundidade explicativa."
      },
      {
        "texto": "Ideia emprestada é obtida mediante empréstimo bancário com juros; ideia defendida é gratuita.",
        "correta": false,
        "explicacao": "Incorreta. Conotação financeira literal absurda em relação à epistemologia da autoria."
      },
      {
        "texto": "Ideia defendida é exclusiva de advogados em tribunais de júri popular.",
        "correta": false,
        "explicacao": "Incorreta. O teste da defesa aplica-se a qualquer texto técnico, acadêmico ou relatório profissional."
      },
      {
        "texto": "Ideia emprestada refere-se a livros retirados fisicamente na biblioteca municipal de polo.",
        "correta": false,
        "explicacao": "Incorreta. Não se relaciona a empréstimo de acervos bibliotecários físicos."
      },
      {
        "texto": "Não há diferença prática, pois todas as ideias digitadas pertencem legalmente à empresa que criou a IA.",
        "correta": false,
        "explicacao": "Incorreta. O autor humano detém os direitos e responsabilidades sobre suas posições intelectuais."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 37 / Capítulo 7 / Seção 2",
      "citacao": "Emprestada × defendida: Ideia emprestada é a que você só explica repetindo a frase com outras palavras. Ideia defendida é a que você explica com uma razão que está fora da frase, e que você mantém quando alguém discorda."
    }
  },
  {
    "id": "Q07-F-04",
    "quinzena": 7,
    "nivel": "facil",
    "topico": "As Quatro Palavras do Registro por Parágrafo",
    "enunciado": "No protocolo de transparência detalhada de autoria assistida (Quadro 7.1), o autor anota ao lado de cada parágrafo de seu manuscrito uma de **quatro palavras padronizadas**. Quais são essas quatro palavras?",
    "alternativas": [
      {
        "texto": "Meu, Aceito, Modificado e Recusado.",
        "correta": true,
        "explicacao": "Correta! Conforme o Quadro 7.1 (pág. 38), essas são as quatro categorias analíticas de intervenção textual: 'Meu' (escrito sem IA), 'Aceito' (adotado como veio), 'Modificado' (ajustado pelo autor) e 'Recusado' (sugerido pela IA e descartado)."
      },
      {
        "texto": "Certo, Errado, Talvez e Nulo.",
        "correta": false,
        "explicacao": "Incorreta. Categorias de julgamento binário genéricas que não informam o tipo de gesto autoral."
      },
      {
        "texto": "Aprovado, Reprovado, Em Recuperação e Dispensado.",
        "correta": false,
        "explicacao": "Incorreta. Menções de histórico escolar universitário, e não do registro por parágrafo."
      },
      {
        "texto": "Original, Plagiado, Criptografado e Excluído.",
        "correta": false,
        "explicacao": "Incorreta. Não corresponde à taxonomia instrucional de gestão de autoria do Quadro 7.1."
      },
      {
        "texto": "Introdução, Argumento, Contra-argumento e Epílogo.",
        "correta": false,
        "explicacao": "Incorreta. Nomenclatura de partes de retórica clássica, não de registro metodológico de ferramentas."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 38 / Capítulo 7 / Quadro 7.1",
      "citacao": "Quadro 7.1 – As quatro palavras do registro por parágrafo: Meu (a ferramenta não entrou); Aceito (ela escreveu/revisou e ficou como veio); Modificado (ela escreveu/revisou e você mudou); Recusado (ela sugeriu e você tirou)."
    }
  },
  {
    "id": "Q07-F-05",
    "quinzena": 7,
    "nivel": "facil",
    "topico": "As Duas Perguntas do Teste da Defesa",
    "enunciado": "O 'Teste da Defesa' (Seção 2, pág. 37) avalia se uma ideia incorporada ao texto pelo autor é genuína ou apenas emprestada. Quais são as **duas perguntas** que estruturam esse teste?",
    "alternativas": [
      {
        "texto": "1. 'Por que isso funciona?' (exige dado, fonte, observação ou mecanismo concreto); e 2. 'Se alguém discordar, o que você responde?' (mostra por que a explicação contrária é insuficiente).",
        "correta": true,
        "explicacao": "Correta! Conforme o e-book (pág. 37), o teste da defesa desmascara a ilusão de profundidade explicativa exigindo ancoragem empírica e capacidade dialética de sustentação."
      },
      {
        "texto": "1. 'Quanto custou a ferramenta?' e 2. 'Quantos tokens foram gastos?'.",
        "correta": false,
        "explicacao": "Incorreta. Perguntas de contabilidade e custo de inferência, alheias à sustentação epistemológica da ideia."
      },
      {
        "texto": "1. 'Qual a velocidade do processador?' e 2. 'Qual o sistema operacional?'.",
        "correta": false,
        "explicacao": "Incorreta. Questões de arquitetura computacional física."
      },
      {
        "texto": "1. 'O corretor ortográfico aprovou?' e 2. 'A fonte está no tamanho 12?'.",
        "correta": false,
        "explicacao": "Incorreta. Formatação estética que não afere a compreensão de mérito da tese."
      },
      {
        "texto": "1. 'Quem é o presidente da empresa?' e 2. 'Onde fica a sede corporativa?'.",
        "correta": false,
        "explicacao": "Incorreta. Proposição dissociada da pedagogia de autoria intelectual."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 37 / Capítulo 7 / Seção 2",
      "citacao": "Teste da defesa: Primeira pergunta: por que isso funciona? A resposta traz um dado, uma observação, uma fonte, um exemplo ou o mecanismo. Segunda pergunta: se alguém discordar, o que você responde? A resposta mostra por que a outra explicação explica menos."
    }
  },
  {
    "id": "Q07-M-01",
    "quinzena": 7,
    "nivel": "medio",
    "topico": "Assimetria e Injustiça nos Detectores de IA",
    "enunciado": "O estudo empírico de Liang et al. (2023), analisado na Quinzena 7, testou sete programas comerciais desenvolvidos para 'detectar textos gerados por inteligência artificial'. A pesquisa revelou que esses detectores:",
    "alternativas": [
      {
        "texto": "Apresentam severo viés contra quem escreve em inglês como segunda língua: classificaram erroneamente como 'texto de máquina' mais de 61% das redações humanas de estudantes não nativos, contra apenas cerca de 5% das redações de falantes nativos, pois esses softwares medem previsibilidade léxica (perplexidade), confundindo vocabulário acessível com autoria algorítmica.",
        "correta": true,
        "explicacao": "Correta! Conforme o e-book (pág. 37), detectores de IA são falhos e geram discriminação estrutural contra falantes não nativos, não devendo ser adotados como prova conclusiva de fraude acadêmica."
      },
      {
        "texto": "Atingiram 100% de acerto infalível em todos os idiomas e dialetos do mundo sem nenhum falso positivo.",
        "correta": false,
        "explicacao": "Incorreta. O estudo comprovou que as ferramentas falham massivamente e induzem acusações injustas."
      },
      {
        "texto": "Identificam a autoria por meio de escaneamento das impressões digitais deixadas no teclado do notebook.",
        "correta": false,
        "explicacao": "Incorreta. Softwares detectores analisam entropia e perplexidade estatística de texto, sem acesso biométrico."
      },
      {
        "texto": "Funcionam exclusivamente em redações redigidas à mão com caneta esferográfica preta.",
        "correta": false,
        "explicacao": "Incorreta. São ferramentas para análise de arquivos de texto digital."
      },
      {
        "texto": "Foram banidos de toda a internet por decisão unânime do Conselho de Segurança da ONU.",
        "correta": false,
        "explicacao": "Incorreta. As ferramentas continuam no mercado, mas a literatura acadêmica alerta contra sua confiabilidade cega."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 37 / Capítulo 7 / Seção 1",
      "citacao": "Programas detectores: Muitos medem o quanto a escolha de palavras é previsível. Sete programas apontaram como texto de máquina, em média, mais de 61% das redações de quem escreve em inglês como segunda língua, contra cerca de 5% das de nativos (Liang et al., 2023)."
    }
  },
  {
    "id": "Q07-M-02",
    "quinzena": 7,
    "nivel": "medio",
    "topico": "Alteração do Grau de Certeza na Revisão",
    "enunciado": "Ao solicitar a uma ferramenta de IA que revise a redação de um trabalho científico ou relatório técnico, o autor corre o risco sutil da **alteração do grau de certeza** das afirmações. Em que consiste essa alteração apontada na Seção 3 da Quinzena 7?",
    "alternativas": [
      {
        "texto": "A ferramenta substitui verbos modais e condicionais de prudência científica (como 'os dados sugerem que pode reduzir') por afirmações categóricas e absolutistas (como 'os dados comprovam que reduz'), distorcendo o que os dados empíricos realmente sustentam.",
        "correta": true,
        "explicacao": "Correta! Conforme o e-book (págs. 38-39), a IA tende a inflar a certeza retórica trocando palavras de ressalva ('indica', 'pode') por termos definitivos ('prova', 'sempre', 'todos'), violando a parcimônia científica."
      },
      {
        "texto": "O corretor automático desliga o monitor sempre que encontra uma incerteza ortográfica no documento.",
        "correta": false,
        "explicacao": "Incorreta. Conotação técnica absurda e fantasiosa."
      },
      {
        "texto": "O software transforma automaticamente parágrafos em equações matemáticas integrais de segundo grau.",
        "correta": false,
        "explicacao": "Incorreta. A alteração atua sobre a modalização de verbos e quantificadores universais."
      },
      {
        "texto": "A ferramenta recusa-se a revisar frases que contenham números pares por restrição algorítmica.",
        "correta": false,
        "explicacao": "Incorreta. Não existe tal restrição matemática em modelos de linguagem."
      },
      {
        "texto": "O grau de certeza só é alterado se o usuário solicitar a revisão no modo Ciborgue às sextas-feiras.",
        "correta": false,
        "explicacao": "Incorreta. A assertividade excessiva é um viés estilístico generalizado do alinhamento da IA."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 38 / Capítulo 7 / Seção 3",
      "citacao": "Grau de certeza: Uma correção de grafia pode trocar 'os resultados sugerem que pode reduzir' por 'os resultados provam que reduz'. Verbos como sugerir e provar, e palavras como todos e nenhum, mudam o que o texto afirma."
    }
  },
  {
    "id": "Q07-M-03",
    "quinzena": 7,
    "nivel": "medio",
    "topico": "Efeito Ghostwriter da IA e Responsabilidade",
    "enunciado": "A pesquisa empírica de Draxler et al. (2024), apresentada no Capítulo 7, investigou o chamado **efeito ghostwriter** provocado pela IA generativa na percepção psicológica de autoria. Os autores demonstraram que:",
    "alternativas": [
      {
        "texto": "Participantes que utilizaram a ferramenta para redigir seus textos, ao perceberem intimamente que não haviam sido os verdadeiros autores daquelas linhas, tenderam psicologicamente a omitir e ocultar a declaração de uso no momento de assinar o trabalho, agindo como quem assina o texto de um 'ghostwriter' anônimo.",
        "correta": true,
        "explicacao": "Correta! Conforme o e-book (pág. 39), o efeito ghostwriter revela o descolamento moral: por vergonha ou desconexão subjetiva com o texto gerado pela máquina, o sujeito deixa de ser transparente e não declara a ferramenta."
      },
      {
        "texto": "Modelos de IA contratam legalmente seres humanos para redigir poemas medievais em seus servidores.",
        "correta": false,
        "explicacao": "Incorreta. O conceito trata da alienação de autoria do usuário humano diante do texto produzido pela máquina."
      },
      {
        "texto": "O efeito ghostwriter foi totalmente erradicado após o lançamento de telas de computadores OLED.",
        "correta": false,
        "explicacao": "Incorreta. O fenômeno é comportamental e ético, não de tecnologia de displays."
      },
      {
        "texto": "Ghostwriters digitais possuem registro profissional obrigatório no Ministério do Trabalho brasileiro.",
        "correta": false,
        "explicacao": "Incorreta. IA não possui personalidade jurídica nem registro profissional de classe."
      },
      {
        "texto": "O estudo comprovou que assinar trabalhos sem ler aumenta a capacidade crítica de estudantes em 90%.",
        "correta": false,
        "explicacao": "Incorreta. Assinar sem ler é negligência profissional que destrói a integridade acadêmica."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 39 / Capítulo 7 / Seção 4",
      "citacao": "Efeito ghostwriter da IA: Ghostwriter é quem escreve um texto para outra pessoa assinar. Participantes que não consideravam seus os textos gerados pela ferramenta deixaram de declará-la ao assinar (Draxler et al., 2024)."
    }
  },
  {
    "id": "Q07-M-04",
    "quinzena": 7,
    "nivel": "medio",
    "topico": "Plágio Involuntário e Criptomnésia",
    "enunciado": "Analise as asserções a respeito do registro tempestivo de autoria:\nI. O registro de autoria por parágrafo deve ser preenchido preferencialmente no mesmo dia em que o profissional utiliza o assistente de IA,\nPORQUE\nII. a memória humana está sujeita ao plágio involuntário decorrente da criptomnésia (McCabe, Smith e Parks, 2007), fenômeno cognitivo pelo qual a pessoa retém uma ideia na mente, mas esquece que sua origem foi sugerida pela ferramenta, passando a acreditar sinceramente que foi uma criação original sua.\n\nA respeito dessas afirmativas, assinale a opção correta:",
    "alternativas": [
      {
        "texto": "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.",
        "correta": true,
        "explicacao": "Correta! Conforme o e-book (pág. 39), a criptomnésia cognitiva faz o cérebro se apropriar de frases lidas na IA esquecendo a fonte original; por isso o registro no mesmo dia é essencial para a fidelidade ética."
      },
      {
        "texto": "As asserções I e II são verdadeiras, mas a II não é uma justificativa correta da I.",
        "correta": false,
        "explicacao": "Incorreta. A criptomnésia é exatamente a fundamentação psicológica que justifica a urgência do registro imediato."
      },
      {
        "texto": "A asserção I é verdadeira, mas a asserção II é falsa.",
        "correta": false,
        "explicacao": "Incorreta. O conceito de criptomnésia (McCabe et al., 2007) está rigorosamente fundamentado no e-book."
      },
      {
        "texto": "A asserção I é falsa, mas a asserção II é verdadeira.",
        "correta": false,
        "explicacao": "Incorreta. O preenchimento tempestivo da autoria é regra basilar da Quinzena 7."
      },
      {
        "texto": "Ambas as asserções são proposições falsas.",
        "correta": false,
        "explicacao": "Incorreta. Ambas são proposições verdadeiras e estruturantes da integridade acadêmica."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 39 / Capítulo 7 / Seção 4",
      "citacao": "O registro vale quando é escrito no mesmo dia em que você usou a ferramenta... Plágio involuntário: A pessoa lembra a ideia e esquece de onde ela veio, sem intenção de copiar; na psicologia, criptomnésia (McCabe; Smith; Parks, 2007)."
    }
  },
  {
    "id": "Q07-M-05",
    "quinzena": 7,
    "nivel": "medio",
    "topico": "Efetividade da Instrução de Revisão",
    "enunciado": "O experimento de Luo et al. (2026), citado na Seção 3 da Quinzena 7, testou a capacidade de ferramentas de IA na detecção e correção de erros em redações sob três tipos de prompts. Os resultados apontaram que:\n- O pedido simples e genérico encontrou apenas 10% dos erros;\n- O pedido que forneceu uma lista específica dos tipos de erro a procurar alcançou 33% dos erros;\n- O pedido que combinou a lista de erros com **exemplos concretos** alcançou:",
    "alternativas": [
      {
        "texto": "55% dos erros, comprovando a regra de engenharia de contexto de 'pedir dizendo onde olhar' através de restrições verificáveis e exemplos claros.",
        "correta": true,
        "explicacao": "Correta! Conforme o e-book (pág. 38), orientar a atenção da máquina com categorias e exemplos prévios mais que quintuplica a eficácia da revisão (de 10% para 55%)."
      },
      {
        "texto": "100% dos erros instantaneamente, dispensando qualquer leitura humana posterior.",
        "correta": false,
        "explicacao": "Incorreta. Mesmo com exemplos, o acerto foi de 55%, provando que conferir continua sendo tarefa indispensável do autor."
      },
      {
        "texto": "0% de acerto por colapso catastrófico do vocabulário da língua inglesa.",
        "correta": false,
        "explicacao": "Incorreta. Não houve colapso do modelo; houve melhoria consistente conforme a precisão da instrução."
      },
      {
        "texto": "Aumento do consumo de eletricidade em 400 megawatts por redação examinada.",
        "correta": false,
        "explicacao": "Incorreta. Afirmação exagerada e sem vínculo com os dados da pesquisa de Luo et al."
      },
      {
        "texto": "Desativação permanente das contas dos alunos por tentativa de fraude educacional.",
        "correta": false,
        "explicacao": "Incorreta. O estudo foi um ensaio controlado de processamento de texto linguístico."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 38 / Capítulo 7 / Seção 3",
      "citacao": "Pedir dizendo onde olhar: Na correção de 30 redações em inglês, o pedido simples encontrou 10% dos erros; com uma lista de tipos de erro, 33%; com a lista e exemplos, 55% (Luo et al., 2026). As Restrições são o lugar de dizer onde olhar. Conferir continua sendo tarefa sua."
    }
  },
  {
    "id": "Q07-D-01",
    "quinzena": 7,
    "nivel": "dificil",
    "topico": "Situação para Análise - Beatriz e o Relatório de Eficiência Energética",
    "enunciado": "Considere a situação para análise do Capítulo 7: Beatriz realizou medições experimentais do consumo de eletricidade da biblioteca de seu polo da UNIVESP durante um mês inteiro. Ao concluir o relatório, solicitou que uma ferramenta de IA generativa fizesse uma revisão gramatical e estilística. A frase original de Beatriz ('Os dados indicam que desligar os monitores no intervalo pode reduzir o consumo de eletricidade') foi alterada pela ferramenta para: 'Os dados comprovam que desligar os monitores reduz o consumo de eletricidade'. Além disso, a IA sugeriu um novo parágrafo introdutório: 'A sustentabilidade é um tema de enorme relevância contemporânea, que exige profunda consciência, responsabilidade institucional e contínua inovação'. Ao aplicar os Gestos de Autoria da Quinzena 7, qual decisão Beatriz deve tomar?",
    "alternativas": [
      {
        "texto": "No gesto 'Conferir a revisão', Beatriz identifica a adulteração indevida do grau de certeza (um mês de dados numa única biblioteca autoriza 'indicam' e 'pode reduzir', mas não 'comprovam'), restaurando sua frase original; no gesto 'Apontar o padrão', constata que a introdução sugerida contém elogio vazio e lista de três substantivos abstratos sem dados de seu polo, recusando-a; e no 'Registro por parágrafo', anota 'Modificado' para a conclusão e 'Recusado' para a introdução sugerida.",
        "correta": true,
        "explicacao": "Correta! É exatamente a resolução oficial comentada da página 39 do e-book: restaurar o grau de certeza honesto, extirpar o texto padrão impessoal e registrar minuciosamente as intervenções no protocolo de autoria."
      },
      {
        "texto": "Beatriz deve aceitar a introdução e o termo 'comprovam', pois a linguagem do robô soa muito mais convincente e aumentará sua nota final.",
        "correta": false,
        "explicacao": "Incorreta. Isto seria sucumbir à voz padronizada e falsificar a certeza científica do experimento."
      },
      {
        "texto": "Beatriz deve processar a UNIVESP por permitir que existam computadores na biblioteca do polo.",
        "correta": false,
        "explicacao": "Incorreta. Conclusão despropositada alheia à responsabilidade profissional do autor."
      },
      {
        "texto": "Ela deve colocar a ferramenta de IA como autora principal e retirar seu próprio nome do relatório da biblioteca.",
        "correta": false,
        "explicacao": "Incorreta. A ferramenta não é autora; quem mediu os dados e responde pelo estudo é Beatriz."
      },
      {
        "texto": "A situação dispensa qualquer registro por parágrafo, bastando declarar que usou a versão gratuita do software.",
        "correta": false,
        "explicacao": "Incorreta. Declaração genérica não cumpre o dever de prestação de contas por parágrafo."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 39 / Capítulo 7 / Situação para Análise",
      "citacao": "Resposta comentada. Conferir: a correção mudou o grau de certeza, e um mês de medição sustenta 'indicam' e 'pode reduzir'; Beatriz devolve a frase original. Apontar: a abertura tem elogio vazio e lista de três itens abstratos; lugar dela é do dado que só Beatriz mediu. Localizar: conclusão recebe Modificado e abertura, Recusado."
    }
  },
  {
    "id": "Q07-D-02",
    "quinzena": 7,
    "nivel": "dificil",
    "topico": "Asserção-Razão sobre o Sinal do Padrão e Autoria Humana",
    "enunciado": "Analise a asserção e a razão a seguir relativas à identificação da voz padronizada:\nAsserção: A presença dos três sinais do texto padrão (palavras de estilo repetitivas como 'delves', elogios vazios sem objeto e listas de três substantivos abstratos) não comprova categoricamente que o texto foi escrito por uma máquina,\nPORQUE\nRazão: seres humanos frequentemente escrevem utilizando chavões, frases feitas, fórmulas padronizadas e generalizações abstratas por pressa, vício estilístico ou falta de repertório próprio, de modo que os sinais descrevem apenas as características estilísticas da superfície textual, exigindo outras evidências para determinar quem de fato produziu o texto.\n\nAssinale a opção correta:",
    "alternativas": [
      {
        "texto": "A asserção e a razão são proposições verdadeiras, e a razão é uma justificativa correta da asserção.",
        "correta": true,
        "explicacao": "Correta! Conforme o e-book adverte textualmente na página 37: 'O sinal descreve o texto. Uma pessoa também escreve com o padrão, por hábito ou por pressa. O sinal mostra o padrão; para saber quem escreveu, é preciso outra informação'."
      },
      {
        "texto": "A asserção e a razão são verdadeiras, mas a razão não é uma justificativa correta da asserção.",
        "correta": false,
        "explicacao": "Incorreta. A tendência humana de repetir clichês é a justificativa exata de por que o sinal descreve o texto, e não o autor."
      },
      {
        "texto": "A asserção é verdadeira, mas a razão é uma proposição falsa.",
        "correta": false,
        "explicacao": "Incorreta. A razão fundamenta-se estritamente na literatura de análise do discurso apresentada."
      },
      {
        "texto": "A asserção é falsa, pois qualquer texto contendo três adjetivos é gerado por inteligência artificial.",
        "correta": false,
        "explicacao": "Incorreta. Proposição simplista que ignora a riqueza e os vícios da linguagem humana."
      },
      {
        "texto": "Ambas as proposições são falsas.",
        "correta": false,
        "explicacao": "Incorreta. Ambas são verdadeiras e desmontam a ilusão punitivista de acusar autores apenas por estilo genérico."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 37 / Capítulo 7 / Seção 1",
      "citacao": "O sinal descreve o texto: Uma pessoa também escreve com o padrão, por hábito ou por pressa. O sinal mostra o padrão; para saber quem escreveu, é preciso outra informação."
    }
  },
  {
    "id": "Q07-D-03",
    "quinzena": 7,
    "nivel": "dificil",
    "topico": "O que só o Autor pode Escrever vs. Voz Padronizada",
    "enunciado": "No debate da Quinzena 7 sobre a preservação da autoria singular contra a pasteurização algorítmica, o material didático conceitua 'o que é genuinamente seu no texto'. Qual conjunto de elementos caracteriza essa contribuição humana autêntica e insubstituível que nenhum modelo de linguagem pré-treinado pode gerar por conta própria?",
    "alternativas": [
      {
        "texto": "O exemplo concreto derivado da sua própria experiência profissional no polo, o dado empírico medido no seu contexto local, a objeção específica que você rebateu na comunidade e a justificativa fundamentada da escolha teórica assumida.",
        "correta": true,
        "explicacao": "Correta! Conforme o e-book (pág. 37), o que é seu no texto é o elemento situado: a evidência empírica viva, o território real e a deliberação que a máquina não viveu."
      },
      {
        "texto": "A lista de sinônimos complexos em inglês extraída de um dicionário online de 1910.",
        "correta": false,
        "explicacao": "Incorreta. Erudição vazia ou arcaísmos de dicionário não conferem ancoragem contextual nem autoria autêntica."
      },
      {
        "texto": "A inclusão de logotipos coloridos de grandes corporações de tecnologia no rodapé do trabalho.",
        "correta": false,
        "explicacao": "Incorreta. Marcas comerciais não substituem o pensamento do autor."
      },
      {
        "texto": "A cópia integral de resumos científicos da SciELO com tradução reversa em três idiomas.",
        "correta": false,
        "explicacao": "Incorreta. Prática desonesta de camuflagem de plágio acadêmico."
      },
      {
        "texto": "A afirmação genérica de que a inteligência artificial é uma revolução sem precedentes na humanidade.",
        "correta": false,
        "explicacao": "Incorreta. Este é o arquétipo exato da voz padronizada e do clichê desprovido de substância própria."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 37 / Capítulo 7 / Seção 1",
      "citacao": "O que é seu no texto: O que só você poderia ter escrito: o exemplo da sua experiência, o dado do seu lugar, a objeção que você respondeu e a escolha que você explica."
    }
  },
  {
    "id": "Q07-D-04",
    "quinzena": 7,
    "nivel": "dificil",
    "topico": "Sem Razão no Teste da Defesa: Os Três Caminhos Honestos",
    "enunciado": "Ao submeter uma proposta de solução formulada por um assistente de IA ao 'Teste da Defesa' (perguntas 'Por que isso funciona?' e 'O que respondo a quem discorda?'), um profissional percebe que não possui dados, fontes ou evidências fora da frase para fundamentar aquela sugestão. De acordo com a Seção 2 da Quinzena 7, diante dessa constatação, existem **três caminhos honestos e éticos** a seguir. Quais são eles?",
    "alternativas": [
      {
        "texto": "Apresentar a ideia explicitamente como hipótese ainda a ser testada; restringir o escopo da afirmação estritamente àquilo que ele é capaz de defender; ou retirar a ideia do trabalho.",
        "correta": true,
        "explicacao": "Correta! Conforme o e-book (pág. 37), quando falta a razão externa, a honestidade intelectual exige: formular como hipótese, restringir a abrangência ou excluir a sugestão."
      },
      {
        "texto": "Fingir que a ideia foi dita por Aristóteles; inventar uma citação em latim; ou pagar um facilitador para validá-la.",
        "correta": false,
        "explicacao": "Incorreta. Fraude científica intolerável no ambiente acadêmico e profissional."
      },
      {
        "texto": "Aumentar a agressividade do tom na apresentação; falar mais alto que os colegas; ou interromper a banca.",
        "correta": false,
        "explicacao": "Incorreta. Falácia ad baculum e agressividade retórica não substituem a prova empírica."
      },
      {
        "texto": "Reiniciar o computador; apagar o disco rígido; e trancar a matrícula na universidade.",
        "correta": false,
        "explicacao": "Incorreta. Conduta desproporcional sem sentido metodológico."
      },
      {
        "texto": "Transferir a culpa para a Vunesp por ter formulado uma questão difícil no semestre.",
        "correta": false,
        "explicacao": "Incorreta. Transferência evasiva de responsabilidade acadêmica."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 37 / Capítulo 7 / Seção 2",
      "citacao": "Sem razão: Quando a razão não aparece, há três caminhos honestos: apresentar a ideia como hipótese, restringir a afirmação ao que você defende ou retirar a ideia."
    }
  },
  {
    "id": "Q07-D-05",
    "quinzena": 7,
    "nivel": "dificil",
    "topico": "Declaração Geral vs. Registro por Parágrafo",
    "enunciado": "Por que a 'Declaração de Uso' geral apresentada no Capítulo 6 (que informa quais ferramentas participaram da pesquisa de modo global) **não responde** de forma suficiente à indagação crítica: 'Em qual parágrafo a ferramenta entrou?' (Capítulo 7)?",
    "alternativas": [
      {
        "texto": "Porque a declaração geral atesta a governança do trabalho como um todo, mas mantém oculta a fronteira exata entre a autoria discente e a redação da máquina; já o registro por parágrafo (Meu, Aceito, Modificado, Recusado) confere auditabilidade microscópica, permitindo ao leitor verificar onde o autor formulou o pensamento original e onde houve mera assistência de estilo.",
        "correta": true,
        "explicacao": "Correta! Conforme o e-book (págs. 36 e 38), a declaração geral informa a existência do uso, mas é o registro por parágrafo que localiza a linhagem e o gesto de autoria em cada trecho concreto da obra."
      },
      {
        "texto": "Porque declarações gerais são proibidas por lei federal em monografias de cursos de engenharia.",
        "correta": false,
        "explicacao": "Incorreta. A declaração geral é exigida pelas normas (COPE, CNPq), mas é complementada pela auditoria por parágrafo."
      },
      {
        "texto": "Porque modelos generativos são incapazes de contar quantos parágrafos existem em um arquivo PDF.",
        "correta": false,
        "explicacao": "Incorreta. Não diz respeito à contagem algorítmica de texto, mas à integridade documental do pesquisador humano."
      },
      {
        "texto": "Porque o registro por parágrafo é cobrado financeiramente pela UNIVESP em taxas de matrícula.",
        "correta": false,
        "explicacao": "Incorreta. A UNIVESP é universidade pública estadual e gratuita."
      },
      {
        "texto": "Porque a declaração geral só possui validade quando assinada digitalmente por um robô certificado.",
        "correta": false,
        "explicacao": "Incorreta. Robôs não assinam declarações acadêmicas."
      }
    ],
    "referencia": {
      "arquivo": "quinzena-08/Q8_M1-E-book.pdf",
      "localizacao": "Página 38 / Capítulo 7 / Seção 4",
      "citacao": "A declaração de uso do Capítulo 6 vale para o trabalho inteiro. A pergunta 'em qual parágrafo a ferramenta entrou?' pede o registro por parágrafo: ao lado de cada parágrafo, uma das quatro palavras, o pedido feito com a data e o motivo da decisão."
    }
  }
];
