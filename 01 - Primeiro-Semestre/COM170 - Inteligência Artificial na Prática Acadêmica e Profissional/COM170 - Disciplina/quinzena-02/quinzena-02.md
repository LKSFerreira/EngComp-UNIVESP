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

* **P1:** (escreva uma pergunta sobre o conceito principal da quinzena)
* **R1:**

* **P2:** (escreva uma segunda pergunta)
* **R2:**

* **P3:** (pergunta sobre a aplicação prática)
* **R3:**

> Dica: se não conseguir responder, é sinal de que precisa revisitar o material.

---

## 2. Resumo em Minhas Palavras (máx. 5 frases)

(explique o conteúdo desta quinzena como se estivesse ensinando a alguém)

---

## 3. Mapa de Conexões

| Conceito desta quinzena | Se conecta com... | Como? |
|-------------------------|--------------------|-------|
| | | |

---

## 4. Anotações dos Módulos

### 📖 Módulos 1 a 3 (Estudo Individual)
* **Videoaulas e Leituras:**

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
