
### Resumo do Vídeo:: Sistemas Gerenciadores de Bancos de Dados no Mercado

Este vídeo da UNIVESP, apresentado pelo professor José Eduardo Santarem Segundo, aborda os principais Sistemas Gerenciadores de Bancos de Dados (SGBDs) disponíveis no mercado, a importância da escolha correta de um SGBD e os critérios que influenciam essa decisão.

*   **[0:00:08](https://www.youtube.com/watch?v=sI9_s2k0h7w&t=8s)** - **Introdução**: O professor José Eduardo Santarem Segundo introduz o tema da aula, destacando a importância de discutir os SGBDs disponíveis no mercado, algo que vai além da teoria e da implementação.

*   **[0:01:05](https://www.youtube.com/watch?v=sI9_s2k0h7w&t=65s)** - **Conceito de SGBD**: É revisado o conceito de SGBD como um pacote de soluções que engloba não apenas o armazenamento de dados, mas também a gestão de acesso, persistência, manipulação e ferramentas de backup, formando um conjunto de funcionalidades essenciais para o gerenciamento de dados.

*   **[0:01:51](https://www.youtube.com/watch?v=sI9_s2k0h7w&t=111s)** - **Ranking de Market Share**: O professor apresenta um ranking do site DB-Engines que classifica os SGBDs por popularidade. A tabela mostra os 10 principais sistemas, com destaque para a estabilidade dos cinco primeiros colocados: Oracle, MySQL, Microsoft SQL Server, PostgreSQL e MongoDB.

*   **[0:05:30](https://www.youtube.com/watch?v=sI9_s2k0h7w&t=330s)** - **Critérios do Ranking (Score)**: É explicado como a pontuação do ranking é calculada, levando em consideração diversos fatores, como:
    *   Número de menções em websites (Google, Bing).
    *   Interesse geral no sistema (Google Trends).
    *   Frequência de discussões em fóruns relevantes (Stack Overflow, DBA Stack Exchange).
    *   Número de ofertas de emprego (Indeed, Simply Hired).
    *   Menções em perfis profissionais (LinkedIn).
    *   Menções em redes sociais (Twitter).

*   **[0:07:28](https://www.youtube.com/watch?v=sI9_s2k0h7w&t=448s)** - **Tipos de Bancos de Dados**: Com base no ranking, o professor classifica os tipos de bancos de dados mais populares. Sete dos dez listados são primariamente relacionais. MongoDB é um banco de dados de documentos, Redis é do tipo chave-valor e Elasticsearch é um mecanismo de busca.

*   **[0:15:35](https://www.youtube.com/watch?v=sI9_s2k0h7w&t=935s)** - **Como Escolher um SGBD?**: São apresentados os critérios para a escolha de um SGBD, que incluem:
    *   Custo (open source vs. pago).
    *   Plataforma (sistema operacional).
    *   Implementação em nuvem (DBaaS).
    *   Compatibilidade com conectores e linguagens.
    *   Modelo de dados (relacional, grafos, etc.).
    *   Tecnologias suportadas (controle de transações, triggers, etc.).

*   **[0:17:27](https://www.youtube.com/watch?v=sI9_s2k0h7w&t=1047s)** - **O que Muda com a Escolha?**: O professor explica que, embora muitos SGBDs compartilhem um padrão SQL, existem especificações e funções exclusivas de cada produto. Uma escolha inadequada pode gerar retrabalho em caso de uma futura migração.

*   **[0:18:51](https://www.youtube.com/watch?v=sI9_s2k0h7w&t=1131s)** - **Foco da Disciplina**: É explicado que a disciplina tratará os conceitos de forma generalizada, mas usará o MySQL para exemplos práticos, pois é o banco de dados escolhido para a disciplina de Projeto Integrador.

Videoaula 7 - Sistemas Gerenciadores de Bancos de Dados no Mercado: [http://www.youtube.com/watch?v=sI9_s2k0h7w](http://www.youtube.com/watch?v=sI9_s2k0h7w)

---

### Resumo do Vídeo: Normalização - Parte 1

Nesta aula da disciplina de Banco de Dados da UNIVESP, o professor José Eduardo Santarem Segundo introduz o conceito de normalização como um processo para qualificar e melhorar o projeto de um banco de dados, com foco inicial nas dependências funcionais e na Primeira Forma Normal (1FN).

#### **1. Dependências Funcionais (DF)**

A normalização baseia-se no conceito de dependências funcionais, que são restrições entre atributos.

*   **Definição**: Uma dependência funcional é uma restrição imposta a um conjunto de atributos, estabelecida pelo projetista a partir das regras do mundo real que estão sendo modeladas [[00:43](http://www.youtube.com/watch?v=0_2522q2Lg8&t=43)]. Ela serve como uma formalização para avaliar a qualidade do projeto.
*   **Exemplo Prático**: O professor ilustra como identificar DFs em esquemas de baixa qualidade. Por exemplo, em uma tabela `FUNC_DEPTO`, o identificador do funcionário (`func_ident`) determina funcionalmente o nome, a data de nascimento e o endereço do funcionário (`func_ident` → {`func_nome`, `func_dt_nasc`, `endereco`}) [[07:51](http://www.youtube.com/watch?v=0_2522q2Lg8&t=471)]. Da mesma forma, o número do departamento (`depto_numero`) determina o nome e o gerente do departamento [[08:40](http://www.youtube.com/watch?v=0_2522q2Lg8&t=520)].
*   **Garantia de Conformidade**: É crucial garantir que as dependências funcionais não sejam violadas. Isso pode ser feito de duas maneiras: preferencialmente, através de um bom projeto de banco de dados, ou, como alternativa, implementando funções no sistema para forçar as regras [[12:16](http://www.youtube.com/watch?v=0_2522q2Lg8&t=736)].

#### **2. Formas Normais**

As formas normais são um conjunto de regras que medem a qualidade de um projeto de banco de dados.

*   **Objetivo**: O processo de normalização visa analisar e adequar os esquemas de tabelas para minimizar redundâncias e anomalias de inserção, exclusão e alteração [[14:17](http://www.youtube.com/watch?v=0_2522q2Lg8&t=857)].
*   **Níveis de Normalização**: A aula foca nas quatro formas normais principais: Primeira Forma Normal (1FN), Segunda Forma Normal (2FN), Terceira Forma Normal (3FN) e a Forma Normal de Boyce-Codd (BCNF) [[13:14](http://www.youtube.com/watch?v=0_2522q2Lg8&t=794)]. Atingir a 3FN já indica um bom nível de qualidade no projeto.

#### **3. Primeira Forma Normal (1FN)**

A 1FN é a regra mais básica da normalização e estabelece que os valores dos atributos devem ser atômicos.

*   **Regra Principal**: A 1FN não permite tabelas aninhadas (tabelas dentro de tabelas) ou atributos multivalorados (um campo que armazena múltiplos valores, como uma lista) [[17:08](http://www.youtube.com/watch?v=0_2522q2Lg8&t=1028)]. O único valor permitido para um atributo na 1FN é o **valor atômico**.
*   **Exemplo de Atributo Multivalorado**: Uma tabela `DEPTO` com um campo "localizacoes" que armazena múltiplas cidades viola a 1FN. A solução é decompor a tabela em duas: uma `DEPTO_B` (com os dados principais do departamento) e outra `DEPTO_LOCS` (associando o número do departamento a cada localização individualmente) [[19:26](http://www.youtube.com/watch?v=0_2522q2Lg8&t=1166)].
*   **Exemplo de Relação Aninhada**: Uma tabela `FUNC_PROJ` que armazena múltiplos projetos para um mesmo funcionário no mesmo registro também viola a 1FN. A solução, novamente, é a decomposição em duas novas tabelas: `FUNC_PROJ1` (com os dados do funcionário) e `FUNC_PROJ2` (com os dados de cada projeto em que o funcionário trabalha) [[22:35](http://www.youtube.com/watch?v=0_2522q2Lg8&t=1355)].

O professor conclui reforçando que a aplicação das formas normais, começando pela 1FN, é fundamental para criar um banco de dados robusto, livre de redundâncias e anomalias [[29:48](http://www.youtube.com/watch?v=0_2522q2Lg8&t=1788)].

Videoaula 8 - Normalização - Parte 1: [http://www.youtube.com/watch?v=0_2522q2Lg8](http://www.youtube.com/watch?v=0_2522q2Lg8)

---

### Resumo do Vídeo: **Videoaula 9 – Normalização – Parte 2 (UNIVESP, Prof. José Eduardo Santarém Segundo)**

Nesta videoaula, o professor José Eduardo Santarém Segundo continua a explicação sobre **normalização de bancos de dados**, aprofundando os conceitos da **Segunda Forma Normal (2FN)**, **Terceira Forma Normal (3FN)** e **Forma Normal de Boyce-Codd (FNBC/BCNF)**. São apresentados exemplos práticos, dependências funcionais e os impactos de cada forma normal no projeto de bancos de dados.

* **[0:00:10](https://www.youtube.com/watch?v=hWqzE2_hcE0&t=10s)** – **Revisão da 1ª Forma Normal (1FN)**

  * Tabelas devem ter valores atômicos (sem grupos repetidos).
  * Cada célula armazena apenas um valor.

* **[0:01:40](https://www.youtube.com/watch?v=hWqzE2_hcE0&t=100s)** – **Segunda Forma Normal (2FN)**

  * Exige que a tabela esteja na 1FN.
  * Todos os atributos não-chave devem depender **totalmente** da chave primária (elimina dependências parciais).
  * **Exemplo**: Em uma tabela de pedidos com chave composta (`cod_pedido`, `cod_produto`), atributos como `nome_cliente` dependem apenas de `cod_pedido`, e não da chave completa → precisa ser removido para outra tabela.

* **[0:06:50](https://www.youtube.com/watch?v=hWqzE2_hcE0&t=410s)** – **Terceira Forma Normal (3FN)**

  * Exige que a tabela esteja na 2FN.
  * Elimina **dependências transitivas** (atributo não-chave não pode depender de outro atributo não-chave).
  * **Exemplo**: se `cod_cliente` determina `cidade_cliente`, e `cidade_cliente` determina `estado`, há uma dependência transitiva → deve ser quebrada.

* **[0:11:40](https://www.youtube.com/watch?v=hWqzE2_hcE0&t=700s)** – **Forma Normal de Boyce-Codd (FNBC/BCNF)**

  * É uma extensão mais rigorosa da 3FN.
  * Para cada dependência funcional X → Y, o conjunto X deve ser uma chave candidata.
  * Resolve casos em que a 3FN ainda permite anomalias.

* **[0:15:30](https://www.youtube.com/watch?v=hWqzE2_hcE0&t=930s)** – **Exemplo de Decomposição**

  * Mostra como decompor uma tabela mal estruturada em múltiplas tabelas normalizadas.
  * Garante eliminação de redundância e consistência dos dados.

* **[0:20:00](https://www.youtube.com/watch?v=hWqzE2_hcE0&t=1200s)** – **Trade-offs da Normalização**

  * Nem sempre a normalização máxima é a melhor escolha.
  * Em alguns casos, bancos desnormalizados oferecem mais desempenho (especialmente em consultas frequentes).
  * O ideal é equilibrar normalização e performance, considerando o caso de uso.

* **[0:23:10](https://www.youtube.com/watch?v=hWqzE2_hcE0&t=1390s)** – **Resumo Final**

  * **1FN**: elimina valores não atômicos.
  * **2FN**: elimina dependências parciais.
  * **3FN**: elimina dependências transitivas.
  * **BCNF**: garante que cada determinante é uma chave.
  * Objetivo: reduzir redundância, evitar anomalias e melhorar integridade.

📌 Videoaula 9 – Normalização – Parte 2: [http://www.youtube.com/watch?v=hWqzE2\_hcE0](http://www.youtube.com/watch?v=hWqzE2_hcE0)
