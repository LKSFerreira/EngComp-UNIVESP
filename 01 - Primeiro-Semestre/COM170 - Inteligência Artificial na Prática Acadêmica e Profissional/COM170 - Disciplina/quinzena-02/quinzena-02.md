# Quinzena 02 — Prompts e Escrita Acadêmica com IA

> ⚡ **MODO MÍNIMO (dia ruim de TDAH):** Assista 1 vídeo (M2) + responda P1 abaixo. Só isso. Amanhã você completa.

---

## 📌 Estrutura da Quinzena (7 Módulos)

### 🔹 Semana 1 — Base Individual (Prazo M4: Domingo às 23h59)
- **Módulo 1:** Leitura e Estudo de Fundamentos (Engenharia de Prompts)
- **Módulo 2:** Videoaulas e Aplicação Prática
- **Módulo 3:** Quizzes e Testes de Conhecimento
- **Módulo 4 (⭐ PRAZO FIXO):** Atividade Individual final (Libera o Laboratório)

### 🔹 Semana 2 — Laboratório e Fase Coletiva
- **Módulo 5:** O Problema da Quinzena (Investigação e instruções)
- **Módulo 6:** Portfólio Individual (Registro de reflexão: *O que pensava → O que mudou*)
- **Módulo 7 (🤝 GRUPO):** Trabalho em Grupo (Disponível se M4 foi entregue a tempo)

---

## 1. Active Recall (responder SEM consultar o material)

Após realizar as leituras e assistir as videoaulas, feche tudo e responda:

* **P1:** Como funciona o processo de input nas IAs Generativas?
* **R1:** Os modelos não leem o texto puro, tampouco processam strings. Usando como exemplo os inputs de texto, esses valores são convertidos em tokens; esses tokens passam por uma vetorização (embedding) na qual posteriormente é aplicado o algoritmo de self-attention. Com base nisso, é calculada a probabilidade do próximo token e a resposta é gerada.

* **P2:** Quais os nomes e a ordem dos processos?
* **R2:** 1 - Input (Ex.: texto); 2 - Tokenização (o texto é convertido em tokens por meio de um processo chamado Tokenizer usando o Tokenizer Vocabulary); 3 - Esse token vira um Embedding (vetor multidimensional no qual tokens relacionados ficam próximos no espaço vetorial, associado a um Token ID inteiro); 4 - O algoritmo de Self-Attention é aplicado usando esses valores de embedding dos tokens, calculando qual o próximo token com maior probabilidade de ser gerado.

* **P3:** Todos os modelos funcionam da mesma forma?
* **R3:** Não, modelos diferentes possuem formas diferentes de realizar a mesma tarefa, usando métodos e arquiteturas distintas. A forma como se processa texto é diferente da forma como se processa imagem, vídeo, etc.

> Dica: se não conseguir responder, é sinal de que precisa revisitar o material.

---

## 2. Resumo em Minhas Palavras (máx. 5 frases)

As respostas geradas por LLMs generativos não passam de cálculos matemáticos probabilísticos complexos. Por mais que esses cálculos sejam avançados, é perfeitamente possível manipular esses valores para validação (por exemplo: Rei - Homem + Mulher = Rainha); esses cálculos são verificáveis quando se levantam as cortinas de um modelo.
O processo se inicia com o input (por exemplo, um texto), que é quebrado por um processo de Tokenizer. Lembrando que, devido ao modelo ter sido treinado com mais de 90% dos dados em inglês, seu Tokenizer Vocabulary é mais eficiente em inglês do que em qualquer outro idioma. A frase "Senior Software Engineering" possui 27 caracteres e gera 3 tokens; no entanto, o mesmo termo em português "Programador Engenheiro Sênior" possui 29 caracteres, mas gera 8 tokens (testado no [Tokenizer Playground](https://huggingface.co/spaces/Xenova/the-tokenizer-playground)). Isso significa que as interações em inglês podem ser mais de 2,6 vezes mais eficientes do que em pt-BR.
Após o processo de tokenização, aplica-se o Embedding, que é a vetorização desses tokens em uma matriz multidimensional, na qual tokens correlacionados ficam próximos uns dos outros. Com isso, obtém-se o valor inteiro conhecido como Token ID, que será usado no algoritmo de Self-Attention determinando o quão importantes esses tokens são uns para os outros. Isso permite que o modelo entenda a frase "Saquei meu dinheiro no banco", compreendendo que a palavra "banco" aqui se refere a uma instituição financeira e não a um objeto físico, justamente porque as palavras "dinheiro" e "saquei" estão fortemente vinculadas a "banco". Esse processo é repetido diversas vezes para obter a resposta gerada pelo modelo.

---

## 3. Mapa de Conexões

| Conceito desta quinzena | Se conecta com... | Como? |
|-------------------------|--------------------|-------|
| **Tokenização (BPE)** | Custo de API e Eficiência de Prompts | O número de tokens gerados determina o uso da janela de contexto e o custo da requisição; em português a quebra gera mais subpalavras do que em inglês. |
| **Embeddings (Vetores)** | Álgebra Linear e Geometria do Significado | Representa palavras como vetores numéricos em espaço multidimensional, permitindo operações aritméticas conceituais (`Rei - Homem + Mulher = Rainha`). |
| **Self-Attention (Atenção)** | Desambiguação de Contexto | Calcula o peso de influência entre os tokens da sequência (ex.: vincula "dinheiro" e "saquei" ao token "banco" para definir o sentido de instituição financeira). |

---

## 4. Anotações dos Módulos

### 📖 Módulos 1 a 4 (Estudo Individual / Videoaulas)

* **Q2-M1 — Tokens: como a máquina lê o que você escreve:** [Videoaula VA Q2-M1 (YouTube)](https://www.youtube.com/watch?v=9qZB4G9seX4)
* **Q2-M2 — Mecanismo de atenção — como o modelo decide o que importa:** [Videoaula VA Q2-M2 (YouTube)](https://www.youtube.com/watch?v=PSnIRwliyAo)
* **Q2-M2 — Temperatura e plausibilidade estatística:** [Videoaula VA Q2-M2.2 (YouTube)](https://www.youtube.com/watch?v=w855eod3xBo)
* **Q2-M3 — Alucinação como design, não como bug:** [Videoaula VA Q2-M3 (YouTube)](https://www.youtube.com/watch?v=am4maHREyQo)
* **Q2-M4 — RLHF e ghost work — quem ensina a IA a parecer útil:** [Videoaula VA Q2-M4 (YouTube)](https://www.youtube.com/watch?v=Gsd1L--UYbs)
* **Q2-M4 — A ilusão de universalidade e a voz padronizada da máquina**

### 📝 Módulo 4 (Atividade Individual - Entrega até Domingo 23h59)
* **Resumo / Entrega:**

### 🧪 Módulos 5, 6 e 7 (Laboratório & Portfólio / Grupo)
* **M5 (Problema):**
* **M6 (Portfólio Individual):** *O que eu pensava → O que mudou → Como contribuí*
* **M7 (Trabalho em Grupo):**

---

## 5. Leituras e Material de Apoio

* (indicar capítulos, PDFs, links oficiais)

---

## 6. Exercícios e Práticas

### 🧪 Atividade Extracurricular: Laboratório Mão na Massa (Tokenização & Comparação de Modelos no PC)

Esta atividade prática permite testar diretamente no seu computador a diferença entre um **Modelo Didático** e um **Modelo Ultracompactado** rodando em CPU.

---

#### 📍 Parte 1: Experimento de Tokenização (e-Book Módulo 1)
Preencha/Revise a tabela de testes feita no tokenizador interativo:

| Categoria | Texto Testado | Previsão | Resultado Real | Aprendizado Observado |
| :--- | :--- | :---: | :---: | :--- |
| **Nome Completo** | `Lucas da Silva Ferreira` | 7 tokens | **6 tokens** | Nomes comuns entram como tokens inteiros; palavras longas/sobrenomes são divididos em subpalavras. |
| **Cidade Brasileira** | `São José do Rio Preto` | 5 tokens | **7 tokens** | Acentuações (`ã`, `é`) dividem os radicais, aumentando a quantidade de tokens. |
| **Termo em Inglês** | `Senior Software Engineering` | 3 tokens | **3 tokens** | **100% de eficiência**: Palavras inteiras em inglês existem como entradas prontas no vocabulário. |

---

#### 💻 Parte 2: Notebooks Práticos no seu PC (Laboratórios Interativos em Células)

As atividades práticas de laboratório estão estruturadas em **Jupyter Notebooks interativos (`.ipynb`)**, com explicações conceituais passo a passo e visualizações concretas:

1. 📘 **Módulo 1 — Tokenização, Embeddings e Inferência em CPU:**
   👉 [laboratorio_Q2_M1.ipynb](./laboratorio_Q2_M1.ipynb)
   - *Tópicos:* Fragmentação BPE, IDs de tokens, matriz de embeddings `wte` ($d_{model} = 768$) e inferência com Qwen 2.5 0.5B.

2. 📙 **Módulo 2 — Atenção, Temperatura e Plausibilidade:**
   👉 [laboratorio_Q2_M2.ipynb](./laboratorio_Q2_M2.ipynb)
   - *Tópicos:* Mecanismo de atenção ($Q, K, V$), desambiguação semântica de "banco", extração de matrizes reais de atenção do GPT-2, cálculo matemático da temperatura ($T$) e diagnóstico de plausibilidade estatística vs. verdade.

3. 📗 **Módulo 3 — Alucinação como Consequência Estrutural:**
   👉 [laboratorio_Q2_M3.ipynb](./laboratorio_Q2_M3.ipynb)
   - *Tópicos:* Causa raiz probabilística da alucinação, alucinação intrínseca vs. extrínseca (*Mata v. Avianca*), ancoragem de contexto (*Grounding*), taxonomia dos 5 tipos de erro e matriz de verificação acadêmica.

##### ⚙️ Como rodar (Isolamento com Ambiente Virtual via `uv`):
1. **Inicializar e instalar as dependências com `uv` na raiz do repositório:**
   ```bash
   uv add torch transformers ipykernel
   ```
2. **Abrir e executar os notebooks:**
   - Abra [laboratorio_Q2_M1.ipynb](./laboratorio_Q2_M1.ipynb), [laboratorio_Q2_M2.ipynb](./laboratorio_Q2_M2.ipynb) ou [laboratorio_Q2_M3.ipynb](./laboratorio_Q2_M3.ipynb) no VS Code.
   - No canto superior direito, clique em **Select Kernel** $\rightarrow$ **Python Environments...** $\rightarrow$ selecione o `.venv` criado pelo `uv` na raiz.
   - Execute as células sequencialmente.

---

#### 📰 Conexão com o Mundo Real: Assinatura Estatística e Watermarking em LLMs (Claude & AI Act)

> **Artigo de Referência:** [AiDrop News — Sorria, você está sendo simulado](https://www.aidrop.news/p/sorria-voce-esta-sendo-simulado)

**Claude agora assina tudo que escreve**  
A Anthropic anunciou que todos os novos modelos do Claude virão com uma marca d’água invisível e legível por máquinas.

A proposta comercial feita em 10 minutos. O TCC terminado em 1 dia. Aquele post inteligente do LinkedIn... todos os conteúdos gerados pelo Claude e postados por humanos agora virão com uma assinatura. Sim, a Anthropic decidiu que todo modelo a partir de 2/ago vai embutir uma marca d'água invisível nos textos.

* **O Motivo:** É menos virtude e mais Bruxelas: o Artigo 50(2) do AI Act europeu exige que todo conteúdo de IA seja identificável por máquina.
* **Quem assinou:** OpenAI, Meta, Microsoft e Google (que já faz desde 2024).
* **Quem não assinou:** a xAI (e os chineses, que nem foram convidados).

##### 🔬 Como funciona a engenharia por trás:
Para imagens, as marcas d’água como o SynthID do Google são mais simples de serem integradas. No caso dos textos, a Anthropic precisou de um truque estatístico: o modelo divide o vocabulário em tokens "verdes" e "vermelhos" com uma chave secreta e inclina de leve as escolhas de palavra.

* **Em textos curtos:** Fica invisível e indetectável.
* **Em textos longos (algumas centenas de palavras):** Um detector com a chave enxerga um padrão que não existe na natureza.

**Bom por um lado, ruim por outro:** Até textos escritos por humanos que passarem pelo Claude por uma edição ou revisão podem voltar com um carimbo de “passou pelo Claude”, mesmo que não tenham sido “inventados pelo Claude”.

---

## 7. Dúvidas Restantes

* (anotar o que não ficou claro para perguntar no fórum ao facilitador)

---

## 8. Revisão Espaçada (Régua de 7 Dias)

| Revisão | Data Prevista | Feito? |
|----------|---------------|--------|
| 1ª (1 dia depois) | | |
| 2ª (3 dias depois) | | |
| 3ª (7 dias depois) | | |

---

## 9. Registro de Reflexão (Portfólio / Aprendizado)

* **O que mudou na percepção:** Não se deve confiar de maneira alguma em um texto gerado por probabilidade, mesmo quando se é possível controlar a temperatura de um modelo, pois isso não significa chance de acerto, significa chances de geração do próximo token.