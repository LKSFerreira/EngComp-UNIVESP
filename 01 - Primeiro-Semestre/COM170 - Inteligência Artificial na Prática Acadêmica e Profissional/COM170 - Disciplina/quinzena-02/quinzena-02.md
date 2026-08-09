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

### 📖 Módulos 1 a 3 (Estudo Individual)
* **Tokens: como a máquina lê o que você escreve:** [Videoaula VA Q2-M1 (YouTube)](https://www.youtube.com/watch?v=9qZB4G9seX4)

Q2-M2
Mecanismo de Atenção: como o modelo... https://www.youtube.com/watch?v=PSnIRwliyAo

Temperatura e plausibilidade... https://www.youtube.com/watch?v=w855eod3xBo

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

#### 💻 Parte 2: Executar no seu PC (Modelo Didático vs. Modelo Ultracompactado em CPU)

O código prático em Python foi separado no arquivo dedicado:
👉 [laboratorio_modelos.py](./laboratorio_modelos.py)

##### Como rodar:
1. Instale as dependências no terminal (se ainda não tiver instalado):
   ```bash
   pip install transformers torch
   ```
2. Execute o arquivo diretamente no terminal a partir desta pasta:
   ```bash
   python laboratorio_modelos.py
   ```

---

#### ❓ Roteiro de Reflexão (Para registrar após rodar o código)
1. **Inspeção de Embeddings**: No modelo didático (`GPT-2`), confirme se a saída mostrou a matriz de formato `[1, 3, 768]`. O que o número `768` representa?
2. **Desempenho em CPU**: Quanto tempo o modelo ultracompactado (`Qwen2.5-0.5B-Instruct`) levou para responder na CPU do seu PC? 
3. **Qualidade vs. Tamanho**: O modelo de ~350MB conseguiu formular uma resposta com sentido sobre tokens?

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
