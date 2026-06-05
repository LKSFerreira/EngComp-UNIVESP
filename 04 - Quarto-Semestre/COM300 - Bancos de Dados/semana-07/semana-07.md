### Resumo do Vídeo: **Transações (UNIVESP, Prof. José Eduardo Santarém)**

[cite\_start]Nesta videoaula, o professor José Eduardo Santarém introduz o conceito fundamental de **transações** em bancos de dados, explicando como um conjunto de operações é tratado como uma **única unidade lógica de trabalho** para garantir a integridade dos dados[cite: 203]. A aula detalha os comandos de controle, os estados de uma transação e as quatro propriedades essenciais conhecidas pelo acrônimo **ACID** (Atomicidade, Consistência, Isolamento e Durabilidade).

  * **[0:00:52](https://www.youtube.com/watch?v=dhuaJsvgIso&t=52s)** – **O que é uma Transação?**

      * [cite\_start]É um conjunto de operações executadas sobre o banco de dados que devem ser vistas como uma **única unidade de processamento**[cite: 203].
      * [cite\_start]O objetivo é garantir que todas as operações sejam concluídas com sucesso ou, em caso de falha, que nenhuma delas tenha efeito[cite: 204, 205].
      * [cite\_start]**Exemplo**: Uma transferência bancária, que envolve debitar de uma conta e creditar em outra, deve ser tratada como uma única transação[cite: 203, 204].

  * **[0:06:43](https://www.youtube.com/watch?v=dhuaJsvgIso&t=403s)** – **Comandos de Controle de Transação**

      * [cite\_start]**`BEGIN TRANSACTION`**: Marca o **início** de um bloco de transação[cite: 210, 211].
      * [cite\_start]**`COMMIT`**: Sinaliza o **término com sucesso**, gravando permanentemente todas as alterações no banco de dados[cite: 211, 212].
      * [cite\_start]**`ROLLBACK` (ou `ABORT`)**: Indica que ocorreu um problema e a transação deve ser **desfeita**, revertendo o banco de dados ao estado inicial[cite: 212].

  * **[0:08:15](https://www.youtube.com/watch?v=dhuaJsvgIso&t=495s)** – **Estados de uma Transação**

      * [cite\_start]Uma transação passa por vários estados: **Ativa** (em execução), **Em Efetivação Parcial** (operações finalizadas, aguardando `COMMIT`), **Efetivada** (após o `COMMIT`), **Em Falha** (após um erro ou `ROLLBACK`) e **Encerrada**[cite: 213, 214, 215, 216].

  * **[0:14:33](https://www.youtube.com/watch?v=dhuaJsvgIso&t=873s)** – **Propriedade: Atomicidade (A)**

      * [cite\_start]Garante o princípio do **"tudo ou nada"**[cite: 222].
      * [cite\_start]Ou todas as operações da transação são refletidas corretamente no banco de dados, ou nenhuma delas é[cite: 222].

  * **[0:16:11](https://www.youtube.com/watch?v=dhuaJsvgIso&t=971s)** – **Propriedade: Consistência (C)**

      * [cite\_start]Uma transação deve levar o banco de dados de um **estado consistente para outro**[cite: 224].
      * [cite\_start]Garante que todas as regras de integridade e de negócio sejam preservadas ao final da transação[cite: 224, 225].

  * **[0:17:10](https://www.youtube.com/watch?v=dhuaJsvgIso&t=1030s)** – **Propriedade: Isolamento (I)**

      * [cite\_start]Garante que transações concorrentes (executadas simultaneamente) **não interfiram umas nas outras**[cite: 225].
      * [cite\_start]O resultado final deve ser o mesmo como se as transações tivessem sido executadas em sequência (serialmente)[cite: 225, 236].

  * **[0:18:51](https://www.youtube.com/watch?v=dhuaJsvgIso&t=1131s)** – **Propriedade: Durabilidade (D)**

      * [cite\_start]Uma vez que uma transação é **efetivada (`COMMIT`)**, suas alterações se tornam **permanentes**[cite: 227].
      * [cite\_start]As alterações devem persistir mesmo em caso de falhas no sistema, como quedas de energia ou travamentos[cite: 227, 228].

  * **[0:25:21](https://www.youtube.com/watch?v=dhuaJsvgIso&t=1521s)** – **Transações no MySQL**

      * [cite\_start]O MySQL possui a variável **`autocommit`** que, quando ativa (`1`), grava cada comando individualmente[cite: 237, 238].
      * [cite\_start]Para controlar uma transação manualmente, utiliza-se o comando **`START TRANSACTION`**, seguido pelas operações e finalizado com **`COMMIT`** ou **`ROLLBACK`**[cite: 239].

### Resumo Final

As propriedades **ACID** são os pilares que garantem a confiabilidade das transações em um SGBD:

  * **Atomicidade**: Assegura que a transação seja uma operação indivisível: ou acontece por completo, ou não acontece.
  * **Consistência**: Mantém a integridade do banco de dados, garantindo que apenas dados válidos sejam escritos.
  * **Isolamento**: Protege as transações concorrentes de interferências, evitando inconsistências.
  * **Durabilidade**: Garante que os dados de uma transação concluída com sucesso sejam permanentes.

📌 Transações: [https://www.youtube.com/watch?v=dhuaJsvgIso](https://www.youtube.com/watch?v=dhuaJsvgIso)

---

### Resumo do Vídeo: **Introdução a Bancos de Dados Não Relacionais - NoSQL (UNIVESP, Prof. Eduardo Santarém)**

Nesta videoaula, o professor Eduardo Santarém introduz o conceito de **bancos de dados não relacionais (NoSQL)**, abordando sua história, as limitações dos bancos relacionais que impulsionaram seu desenvolvimento e suas principais características. São apresentados os quatro principais modelos NoSQL: **Chave-Valor**, **Colunas**, **Grafos** e **Documentos**, com exemplos e critérios para a escolha do modelo mais adequado para cada tipo de projeto.

  * **[0:00:46](https://www.youtube.com/watch?v=WD_2JCPOsAM&t=46s)** – **O que é NoSQL?**

      * Significa "**Não SQL**" ou, mais atualmente, "**Not Only SQL**" (Não Apenas SQL).
      * Surgiu como uma alternativa para lidar com **Big Data** e para cenários onde o modelo relacional apresenta limitações.

  * **[0:02:08](https://www.youtube.com/watch?v=WD_2JCPOsAM&t=128s)** – **Limitações dos Bancos Relacionais**

      * Dificuldade de **escala** para volumes de dados massivos (petabytes).
      * Perda de **performance** em relacionamentos complexos (`JOINs`) com grandes volumes de dados.
      * Dificuldade para lidar com **esquemas complexos e flexíveis**.

  * **[0:03:56](https://www.youtube.com/watch?v=WD_2JCPOsAM&t=236s)** – **Características dos Bancos NoSQL**

      * Geralmente são **Open Source** e não utilizam SQL como linguagem principal.
      * Possuem **esquemas flexíveis**, permitindo formatos diferentes para os registros.
      * São projetados para **escala horizontal** (distribuição em múltiplos servidores) e **replicação nativa**.

  * **[0:06:25](https://www.youtube.com/watch?v=WD_2JCPOsAM&t=385s)** – **Modelo Chave-Valor**

      * Armazena dados em um formato de dicionário, onde cada **chave única** está associada a um **único valor**.
      * É uma estrutura simples e flexível, ideal para alta performance em leitura e escrita.
      * **Exemplo**: Redis, Amazon DynamoDB.

  * **[0:09:44](https://www.youtube.com/watch?v=WD_2JCPOsAM&t=584s)** – **Modelo de Colunas**

      * Armazena dados em **famílias de colunas**, em vez de linhas, o que otimiza a leitura de grandes volumes de dados.
      * Cada linha pode ter um número variável de colunas, agrupadas por famílias.
      * **Exemplo**: Cassandra, HBase.

  * **[0:12:54](https://www.youtube.com/watch?v=WD_2JCPOsAM&t=774s)** – **Modelo de Grafos**

      * Projetado para armazenar dados e seus **relacionamentos** de forma eficiente.
      * Utiliza **vértices** (nós) para representar entidades e **arestas** para representar as conexões entre elas.
      * **Exemplo**: Neo4j, Amazon Neptune.

  * **[0:15:54](https://www.youtube.com/watch?v=WD_2JCPOsAM&t=954s)** – **Modelo de Documentos**

      * Armazena dados em **documentos**, geralmente em formatos como **JSON** ou BSON.
      * Cada documento pode ter uma estrutura diferente, o que oferece grande flexibilidade.
      * **Exemplo**: MongoDB, Couchbase.

  * **[0:19:18](https://www.youtube.com/watch?v=WD_2JCPOsAM&t=1158s)** – **Quando Usar NoSQL?**

      * Quando há dificuldade em modelar esquemas complexos com muitos `JOINs`.
      * Quando a necessidade de **escalonamento horizontal** e **alta disponibilidade** é crítica.
      * Quando se trabalha com grandes volumes de dados não estruturados ou semiestruturados.

  * **[0:21:30](https://www.youtube.com/watch?v=WD_2JCPOsAM&t=1290s)** – **Relacional vs. NoSQL**

      * Bancos **NoSQL não vieram para substituir** os bancos relacionais, mas para resolver problemas que eles não conseguem.
      * A escolha depende da necessidade do projeto: **consistência** (relacional) vs. **escalabilidade e flexibilidade** (NoSQL).
      * É comum o uso de **persistência poliglota**, onde ambos os tipos de bancos coexistem em uma mesma aplicação.

### Resumo Final

  * **Bancos Relacionais (SQL)**: Priorizam a **consistência** e a **integridade** dos dados através de um esquema rígido (tabelas, linhas e colunas). São ideais para sistemas transacionais (OLTP) onde a precisão dos dados é crítica.
  * **Bancos Não Relacionais (NoSQL)**: Priorizam a **escalabilidade**, a **performance** e a **flexibilidade**. São projetados para grandes volumes de dados (Big Data) e esquemas dinâmicos, sendo adequados para aplicações web em larga escala, redes sociais e IoT.
  * **Modelos NoSQL**:
      * **Chave-Valor**: Simplicidade e velocidade.
      * **Colunas**: Otimizado para consultas analíticas em massa.
      * **Grafos**: Ideal para dados altamente conectados e relacionamentos complexos.
      * **Documentos**: Flexibilidade para dados semiestruturados e hierárquicos.

📌 Introdução a Bancos de Dados Não Relacionais - NoSQL: [https://www.youtube.com/watch?v=WD\_2JCPOsAM](https://www.youtube.com/watch?v=WD_2JCPOsAM)

---
### Resumo do Vídeo: **MongoDB – Parte 1 (UNIVESP, Prof. José Eduardo Santarém)**

[cite\_start]Nesta primeira parte da aula sobre MongoDB, o professor José Eduardo Santarém apresenta este popular banco de dados **NoSQL orientado a documentos**[cite: 190, 192]. [cite\_start]A aula cobre as características fundamentais do MongoDB, seu formato de dados **BSON/JSON**, a terminologia em comparação com bancos relacionais e um guia prático para criar uma conta gratuita e um cluster na nuvem usando o **MongoDB Atlas**[cite: 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218].

  * **[0:00:36](https://www.youtube.com/watch?v=WD_2JCPOsAM&t=36s)** – **O que é o MongoDB?**

      * [cite\_start]É um banco de dados NoSQL de código aberto, cujo nome deriva da palavra "humongous" (imenso), projetado para grandes volumes de dados[cite: 191].
      * [cite\_start]Foi criado em 2009 e é orientado a documentos, não exigindo a definição de um esquema prévio[cite: 192].

  * **[0:01:52](https://www.youtube.com/watch?v=WD_2JCPOsAM&t=112s)** – **Principais Características**

      * [cite\_start]Suporta **escalonamento horizontal** através de *replica sets* e *sharding*[cite: 192].
      * [cite\_start]O objetivo principal é **reduzir os relacionamentos** (`JOINs`), que podem comprometer o desempenho em grandes volumes de dados[cite: 193].

  * **[0:03:16](https://www.youtube.com/watch?v=WD_2JCPOsAM&t=196s)** – **Formato de Dados (BSON/JSON)**

      * [cite\_start]Utiliza o formato **BSON** (Binary JSON), uma representação binária do padrão **JSON**[cite: 195].
      * [cite\_start]Suporta tipos de dados como string, numérico, booleano, nulo, **array (lista)** e **objeto (documento aninhado)**[cite: 195, 196].

  * **[0:07:47](https://www.youtube.com/watch?v=WD_2JCPOsAM&t=467s)** – **Terminologia: Relacional vs. MongoDB**

      * [cite\_start]**Tabela** em um banco relacional equivale a uma **Coleção** no MongoDB[cite: 201].
      * [cite\_start]**Linha/Registro** equivale a um **Documento**[cite: 201].
      * [cite\_start]**Coluna** equivale a um **Campo**[cite: 201].

  * **[0:08:38](https://www.youtube.com/watch?v=WD_2JCPOsAM&t=518s)** – **Anatomia de um Documento MongoDB**

      * [cite\_start]Cada documento possui um **`_id` único** gerado automaticamente[cite: 202, 203].
      * [cite\_start]A estrutura pode conter campos com valores simples, listas (arrays) e objetos inteiros aninhados dentro de outros campos[cite: 203, 204].

  * **[0:11:41](https://www.youtube.com/watch?v=WD_2JCPOsAM&t=701s)** – **MongoDB Atlas: Conta na Nuvem**

      * [cite\_start]O **MongoDB Atlas** é a plataforma de nuvem oficial do MongoDB, que oferece um nível gratuito para aprendizado e desenvolvimento[cite: 206].
      * [cite\_start]O professor incentiva a criação de uma conta para experimentar a ferramenta na prática[cite: 206].

  * **[0:13:23](https://www.youtube.com/watch?v=WD_2JCPOsAM&t=803s)** – **Passo a Passo: Criando um Cluster no Atlas**

      * [cite\_start]Demonstração de como criar uma conta, uma organização e um projeto[cite: 208, 209, 210].
      * [cite\_start]O guia mostra como construir um **cluster gratuito**, escolher um provedor de nuvem (como Google Cloud) e carregar um conjunto de dados de exemplo[cite: 211, 212, 213, 216].

  * **[0:21:50](https://www.youtube.com/watch?v=WD_2JCPOsAM&t=1310s)** – **Esquemas Flexíveis**

      * [cite\_start]Uma das principais vantagens do MongoDB é o **esquema flexível**[cite: 219].
      * [cite\_start]Documentos dentro da mesma coleção **não precisam ter os mesmos campos**, permitindo que a estrutura dos dados evolua sem migrações complexas[cite: 221, 222].

  * **[0:24:12](https://www.youtube.com/watch?v=WD_2JCPOsAM&t=1452s)** – **Operações Básicas no Atlas (CRUD)**

      * A interface do Atlas permite realizar operações básicas de forma visual.
      * [cite\_start]É possível **inserir**, **clonar**, **editar** e **excluir** documentos diretamente pela plataforma[cite: 222, 224, 225, 226, 227].

### Resumo Final

  * [cite\_start]**Orientado a Documentos**: O MongoDB armazena dados em documentos flexíveis do tipo BSON/JSON, em vez de tabelas com linhas e colunas rígidas[cite: 192, 195].
  * [cite\_start]**Esquema Flexível**: Documentos em uma mesma coleção podem ter estruturas diferentes, facilitando a evolução de aplicações[cite: 221, 222].
  * [cite\_start]**Escalabilidade**: Projetado para escalar horizontalmente, distribuindo dados entre múltiplos servidores para lidar com grandes volumes de tráfego e dados[cite: 192].
  * [cite\_start]**Terminologia Chave**: O que é *tabela*, *linha* e *coluna* em bancos relacionais é chamado de **Coleção**, **Documento** e **Campo** no MongoDB[cite: 201].
  * [cite\_start]**MongoDB Atlas**: É a forma mais prática de começar a usar o MongoDB, oferecendo uma plataforma de nuvem gerenciada com um nível gratuito robusto para aprendizado[cite: 206].

📌 MongoDB – Parte 1: [https://www.youtube.com/watch?v=WD\_2JCPOsAM](https://www.youtube.com/watch?v=WD_2JCPOsAM)

---

### Resumo do Vídeo: **MongoDB – Parte 2 (UNIVESP, Prof. José Eduardo Santarém)**

Nesta segunda parte da aula sobre MongoDB, o professor José Eduardo Santarém foca nas **consultas e manipulação de dados** utilizando a interface do MongoDB Atlas. A aula explora desde filtros básicos até o poderoso **Aggregation Framework**, detalhando o conceito de **pipeline** e seus estágios (`$match`, `$group`, `$sort`, `$project`, `$out`) para realizar transformações e análises complexas nos documentos.

  * **[0:02:06](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3Db8K1G0uE2Nk%26t%3D126s)** – **Seleção de Dados (Filtros)**

      * As consultas no MongoDB são feitas de forma diferente dos bancos relacionais, utilizando filtros em formato JSON.
      * **Exemplo**: `{ "runtime": 33 }` filtra todos os documentos (filmes) cujo campo `runtime` seja igual a 33.

  * **[0:04:55](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3Db8K1G0uE2Nk%26t%3D295s)** – **Busca em Campos do Tipo Array**

      * É possível filtrar documentos buscando por um valor específico dentro de um campo do tipo lista (array).
      * **Exemplo**: `{ "languages": "Spanish" }` retorna todos os filmes que possuem "Spanish" em sua lista de idiomas.

  * **[0:06:28](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3Db8K1G0uE2Nk%26t%3D388s)** – **Aggregation Framework e Pipeline**

      * É a principal ferramenta para realizar consultas e análises complexas no MongoDB.
      * Funciona com o conceito de **pipeline (esteira)**, onde os documentos de uma coleção passam por uma sequência de **estágios**, e cada estágio transforma os dados e passa o resultado para o próximo.

  * **[0:10:22](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3Db8K1G0uE2Nk%26t%3D622s)** – **Estágio `$match`**

      * Funciona como um **filtro** inicial no pipeline, selecionando os documentos que atendem a uma determinada condição.
      * **Exemplo**: `{ "$match": { "cast": "Brad Pitt", "languages": "Spanish" } }` seleciona apenas os filmes que têm "Brad Pitt" no elenco e "Spanish" na lista de idiomas.

  * **[0:12:24](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3Db8K1G0uE2Nk%26t%3D744s)** – **Estágio `$group`**

      * **Agrupa** os documentos com base em um campo (`_id`) e permite aplicar operadores de agregação (`$sum`, `$avg`, `$max`, `$min`).
      * A estrutura do documento de saída é completamente nova, contendo apenas o campo de agrupamento e os resultados da agregação.
      * **Exemplo**: Agrupar filmes por ano e calcular a quantidade de filmes e a média de duração para cada ano.

  * **[0:19:55](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3Db8K1G0uE2Nk%26t%3D1195s)** – **Estágio `$sort`**

      * **Ordena** os documentos com base em um ou mais campos.
      * **Exemplo**: `{ "$sort": { "_id": 1 } }` ordena os documentos resultantes do estágio anterior pelo campo `_id` (neste caso, o ano) em ordem crescente.

  * **[0:20:21](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3Db8K1G0uE2Nk%26t%3D1221s)** – **Exportando o Pipeline**

      * O MongoDB Atlas permite **exportar o código do pipeline** gerado para diversas linguagens de programação, como Python, facilitando a integração com aplicações.

  * **[0:21:58](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3Db8K1G0uE2Nk%26t%3D1318s)** – **Estágios `$project` e `$out`**

      * **`$project`**: **Remodela** a estrutura dos documentos. Permite renomear, adicionar, remover ou reestruturar campos.
      * **`$out`**: **Salva o resultado** do pipeline em uma **nova coleção**. É sempre o último estágio de um pipeline.

### Resumo Final

  * **Consultas Simples**: São feitas com a operação **`find`** e um documento de filtro que especifica as condições de busca.
  * **Aggregation Pipeline**: É o método mais poderoso para consultas, permitindo uma sequência de transformações nos dados através de estágios.
  * **Principais Estágios do Pipeline**:
      * **`$match`**: Filtra os documentos de entrada.
      * **`$group`**: Agrupa os documentos e aplica funções de agregação.
      * **`$sort`**: Ordena o resultado.
      * **`$project`**: Altera a estrutura dos documentos de saída.
      * **`$out`**: Escreve o resultado em uma nova coleção.
  * **Transformação de Dados**: O pipeline não apenas filtra, mas pode **transformar completamente** a estrutura dos documentos, criando novas informações consolidadas a partir dos dados originais.

📌 MongoDB – Parte 2: [https://www.youtube.com/watch?v=b8K1G0uE2Nk](https://www.youtube.com/watch?v=b8K1G0uE2Nk)