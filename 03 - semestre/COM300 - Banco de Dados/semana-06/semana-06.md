### Resumo do Vídeo: **Linguagem SQL - Consultas Combinadas - SELECT - JOIN (UNIVESP, Prof. José Eduardo Santarém)**

[cite\_start]Nesta videoaula, o professor José Eduardo Santarém aborda as **consultas combinadas** em SQL, explicando a importância e o funcionamento da cláusula **`JOIN`** para unificar dados de múltiplas tabelas. [cite: 104] [cite\_start]São detalhados os diferentes tipos de `JOIN` (`INNER`, `LEFT`, `RIGHT`, `FULL OUTER` e `SELF JOIN`), demonstrando como eles são essenciais para reconstruir informações que foram decompostas durante a modelagem de um banco de dados relacional. [cite: 105, 106, 107]

  * **[0:02:13](https://www.youtube.com/watch?v=fr3emgI1RsY&t=133s)** – **`NATURAL JOIN` (Produto Cartesiano)**

      * [cite\_start]O `JOIN` sem uma condição `ON` gera um **produto cartesiano**, que é o cruzamento de todos os registros entre as tabelas. [cite: 112]
      * [cite\_start]Este resultado tem pouca utilidade prática, pois combina linhas sem critério de correspondência. [cite: 112, 120]

  * **[0:05:53](https://www.youtube.com/watch?v=fr3emgI1RsY&t=353s)** – **`INNER JOIN`**

      * [cite\_start]É a forma mais comum de `JOIN` e retorna apenas os registros que possuem **correspondência em ambas as tabelas**. [cite: 125, 126]
      * [cite\_start]A cláusula **`ON` é obrigatória** e especifica a condição de junção, geralmente comparando a chave primária de uma tabela com a chave estrangeira da outra. [cite: 127, 129]
      * [cite\_start]**Exemplo**: `...FROM funcionario F INNER JOIN departamento D ON F.dnumero = D.numero;` lista apenas funcionários que estão associados a um departamento existente. [cite: 127]

  * **[0:09:10](https://www.youtube.com/watch?v=fr3emgI1RsY&t=550s)** – **`LEFT JOIN` e `RIGHT JOIN`**

      * [cite\_start]São `JOINs` externos que incluem registros mesmo que não haja correspondência na outra tabela. [cite: 136]
      * **`LEFT JOIN`**: Retorna **todos os registros da tabela à esquerda** e os correspondentes da tabela à direita. [cite\_start]Se não houver correspondência, os campos da tabela direita ficam com valor `NULL`. [cite: 139, 142]
      * [cite\_start]**`RIGHT JOIN`**: Funciona de forma inversa, retornando **todos os registros da tabela à direita**. [cite: 139, 147]

  * **[0:12:57](https://www.youtube.com/watch?v=fr3emgI1RsY&t=777s)** – **`FULL OUTER JOIN`**

      * [cite\_start]Combina os resultados do `LEFT JOIN` e do `RIGHT JOIN`, retornando **todos os registros de ambas as tabelas**. [cite: 140, 151]
      * [cite\_start]Lista tanto os funcionários sem departamento quanto os departamentos sem funcionários. [cite: 149, 150]

  * **[0:14:08](https://www.youtube.com/watch?v=fr3emgI1RsY&t=848s)** – **Simulando `FULL OUTER JOIN` no MySQL**

      * [cite\_start]O MySQL não implementa o `FULL OUTER JOIN` diretamente. [cite: 152]
      * [cite\_start]A solução é unir os resultados de um `LEFT JOIN` com um `RIGHT JOIN` usando a cláusula **`UNION`**, que também elimina os registros duplicados. [cite: 152, 153, 154]

  * **[0:15:36](https://www.youtube.com/watch?v=fr3emgI1RsY&t=936s)** – **`JOIN` com Múltiplas Tabelas**

      * [cite\_start]É possível encadear múltiplos `JOINs` em uma única consulta para buscar dados em três ou mais tabelas relacionadas. [cite: 156, 158]
      * [cite\_start]**Exemplo**: Unir as tabelas `trabalha_em`, `projeto` e `funcionario` para listar o nome do funcionário, o nome do projeto em que ele trabalha e as horas dedicadas. [cite: 160, 161, 162, 168]

  * **[0:19:22](https://www.youtube.com/watch?v=fr3emgI1RsY&t=1162s)** – **`SELF JOIN`**

      * [cite\_start]É um `JOIN` de uma tabela com ela mesma, usado para consultar relações hierárquicas ou reflexivas. [cite: 171]
      * [cite\_start]É obrigatório o uso de **aliases** para diferenciar as "duas cópias" da tabela na consulta. [cite: 173, 174, 178]
      * [cite\_start]**Exemplo**: Listar o nome de cada funcionário e o nome do seu respectivo supervisor, ambos contidos na mesma tabela `funcionario`. [cite: 180]

### Resumo Final

  * **`INNER JOIN`**: Retorna apenas a **interseção** dos dados, ou seja, registros que têm correspondência em ambas as tabelas.
  * **`OUTER JOIN` (`LEFT`/`RIGHT`)**: Retorna a interseção **mais os registros sem correspondência** de uma das tabelas (a da esquerda ou a da direita).
  * **`FULL OUTER JOIN`**: Retorna a **união completa** dos dados, incluindo registros sem correspondência de ambas as tabelas.
  * **`SELF JOIN`**: Permite relacionar registros **dentro da mesma tabela**, tratando-a como se fossem duas tabelas distintas através de aliases.
  * **Cláusula `ON`**: É o pilar do `JOIN`, definindo a **regra de cruzamento** entre as tabelas, geralmente ligando chaves primárias e estrangeiras.

📌 Linguagem SQL - Consultas Combinadas - SELECT - JOIN: [https://www.youtube.com/watch?v=fr3emgI1RsY](https://www.youtube.com/watch?v=fr3emgI1RsY)

---

### Resumo do Vídeo: **SELECT - Exemplos de Consultas Variadas (UNIVESP, Prof. José Eduardo Santarém)**

Nesta videoaula, o professor José Eduardo Santarém apresenta uma série de **exemplos práticos de consultas em SQL**, demonstrando a aplicação de diversos conceitos para solucionar problemas reais. As consultas abordam desde a filtragem e ordenação básicas até cenários mais complexos envolvendo **agregação**, **múltiplos `JOINs`**, **subconsultas** e o operador **`UNION`**.

  * **[0:02:13](https://www.youtube.com/watch?v=5gNStz9xWEQ&t=133s)** – **Consulta 1: Filtragem e Ordenação**

      * Mostra uma consulta básica para listar nome e salário de funcionários de um departamento específico.
      * **Exemplo**: `...WHERE dnumero = 4 ORDER BY salario DESC;` filtra pelo departamento 4 e ordena o resultado pelo salário em ordem decrescente.

  * **[0:03:02](https://www.youtube.com/watch?v=5gNStz9xWEQ&t=182s)** – **Consulta 2: Agregação com `GROUP BY`**

      * Demonstra o uso de funções de agregação (`COUNT` e `AVG`) para consolidar dados por categoria.
      * **Exemplo**: `...GROUP BY dnumero;` agrupa os funcionários por departamento para calcular o número de funcionários e a média salarial de cada um.

  * **[0:05:01](https://www.youtube.com/watch?v=5gNStz9xWEQ&t=301s)** – **Consulta 3: Filtro de Agregação com `HAVING`**

      * Apresenta como filtrar resultados depois do agrupamento, usando a cláusula `HAVING`.
      * **Exemplo**: `...GROUP BY pnome HAVING COUNT(*) > 2;` lista apenas os projetos que possuem mais de dois funcionários alocados.

  * **[0:08:00](https://www.youtube.com/watch?v=5gNStz9xWEQ&t=480s)** – **Consulta 4: Subconsulta com `IN`**

      * Explica como usar uma consulta aninhada (subconsulta) para criar um conjunto de valores para a cláusula `WHERE`.
      * **Exemplo**: `...WHERE dnumero IN (SELECT numero FROM departamento WHERE dnomer = 'Informática');` busca funcionários que trabalham em projetos gerenciados pelo departamento de 'Informática'.

  * **[0:10:47](https://www.youtube.com/watch?v=5gNStz9xWEQ&t=647s)** – **Consulta 5: `LEFT JOIN` com Filtro `IS NULL`**

      * Demonstra como encontrar registros que não possuem correspondência em outra tabela.
      * **Exemplo**: Um `LEFT JOIN` da tabela `funcionario` com ela mesma (`SELF JOIN`) para listar funcionários cujo campo de supervisor (`sup_ident`) é nulo.

  * **[0:12:47](https://www.youtube.com/watch?v=5gNStz9xWEQ&t=767s)** – **Consulta 6: Subconsulta Correlacionada com `EXISTS`**

      * Apresenta um tipo de subconsulta que depende da consulta externa para ser executada, verificando a existência de registros que satisfaçam uma condição.
      * **Exemplo**: Buscar funcionários que possuem um dependente com o mesmo nome e sexo.

  * **[0:15:36](https://www.youtube.com/watch?v=5gNStz9xWEQ&t=936s)** – **Consulta 7: Múltiplos `JOINs`**

      * Mostra como combinar múltiplas tabelas para obter uma informação específica.
      * **Exemplo**: Unir a tabela `departamento` com a tabela `funcionario` para descobrir e listar o nome do gerente de cada departamento.

  * **[0:17:15](https://www.youtube.com/watch?v=5gNStz9xWEQ&t=1035s)** – **Consulta 8: Combinando Resultados com `UNION`**

      * Explica como o operador `UNION` combina o resultado de duas ou more `SELECTs` em um único conjunto, removendo duplicatas.
      * **Exemplo**: `(SELECT nome FROM funcionario) UNION (SELECT nome_dependente FROM dependente);` cria uma lista única com os nomes de todos os funcionários e dependentes.

### Resumo Final

  * **Consultas Básicas**: Utilizam `WHERE` para filtrar registros e `ORDER BY` para classificar o resultado.
  * **Consultas de Agregação**: Usam `GROUP BY` para categorizar dados e funções como `COUNT`, `AVG`, e `SUM` para resumi-los. A cláusula `HAVING` filtra os grupos já agregados.
  * **Consultas com `JOIN`**: Combinam dados de múltiplas tabelas. `INNER JOIN` para correspondências, `LEFT JOIN` para incluir registros sem correspondência de uma tabela.
  * **Subconsultas**: Permitem criar filtros complexos, onde o resultado de uma consulta (`IN`) ou a verificação de existência (`EXISTS`) é usado como condição para outra.
  * **Operador `UNION`**: Une os resultados de diferentes consultas em um único conjunto de dados, sendo útil para combinar informações de fontes distintas.

📌 SELECT - Exemplos de Consultas Variadas: [https://www.youtube.com/watch?v=5gNStz9xWEQ](https://www.youtube.com/watch?v=5gNStz9xWEQ)

---

### Resumo do Vídeo: **Introdução a Views e conceitos básicos sobre Data Warehouse e Data Lake (UNIVESP, Prof. José Eduardo Santarém)**

Nesta videoaula, o professor José Eduardo Santarém introduz o conceito de **Views** em bancos de dados, explicando sua função como tabelas virtuais para simplificar consultas e controlar o acesso a dados. Além disso, são apresentados os conceitos fundamentais de **Data Warehouse** e **Data Lake**, destacando suas arquiteturas, características e principais diferenças no contexto de Business Intelligence e Big Data.

  * **[0:01:13](https://www.youtube.com/watch?v=2l9CXYdk7BQ73s)** – **O que é uma View?**

      * É uma **tabela virtual** que serve como um caminho alternativo para visualizar dados de uma ou mais tabelas.
      * Usada para apresentar informações calculadas, simplificar consultas complexas ou restringir o acesso a dados sensíveis, como salários.

  * **[0:02:58](https://www.youtube.com/watch?v=2l9CXYdk7BQ178s)** – **Operações em Views**

      * É possível executar comandos como `INSERT`, `DELETE` e `UPDATE` em uma View.
      * Se a View for baseada em uma única tabela, essas operações são **replicadas na tabela original**, exigindo cuidado na gestão de permissões.

  * **[0:04:50](https://www.youtube.com/watch?v=2l9CXYdk7BQ290s)** – **Como Criar uma View**

      * Uma View é sempre criada a partir de um comando **`SELECT`**.
      * Pode ser uma representação de uma tabela inteira, um filtro de registros e colunas, ou uma combinação de múltiplas tabelas através de `JOINs`.

  * **[0:07:01](https://www.youtube.com/watch?v=2l9CXYdk7BQ421s)** – **Exemplo de Criação de View**

      * Mostra como criar uma View que filtra registros com base em uma condição.
      * **Exemplo**: `CREATE VIEW V_PRODUTO AS SELECT id_produto, nome FROM produto WHERE valor <= 10;` cria uma visão apenas com produtos que custam 10 ou menos.

  * **[0:11:14](https://www.youtube.com/watch?v=2l9CXYdk7BQ674s)** – **Data Warehouse (DW)**

      * É uma estrutura de banco de dados otimizada para **análise de dados** e **Business Intelligence (BI)**.
      * Armazena grandes volumes de dados históricos de diversas fontes (sistemas, planilhas, arquivos).

  * **[0:13:32](https://www.youtube.com/watch?v=2l9CXYdk7BQ812s)** – **Características do Data Warehouse**

      * Os dados são **estruturados** e tratados antes de entrarem no DW.
      * É **não-volátil** (dados não são alterados após a inserção) e **variável com o tempo**, permitindo análises históricas.

  * **[0:19:12](https://www.youtube.com/watch?v=2l9CXYdk7BQ1152s)** – **Data Lake**

      * É um repositório que armazena um grande volume de dados em seu **formato nativo e bruto**.
      * Ao contrário do DW, os dados não precisam ser tratados ou estruturados antes do armazenamento.

  * **[0:20:38](https://www.youtube.com/watch?v=2l9CXYdk7BQ1238s)** – **Data Warehouse vs. Data Lake**

      * **DW**: Armazena dados **limpos e estruturados** para análises predefinidas (BI). O processo de carga é mais lento e caro.
      * **Data Lake**: Armazena dados **brutos e não processados** para exploração e descoberta de novas informações (ciência de dados). A acumulação de dados é rápida e mais barata.

### Resumo Final

  * **View**: Uma **tabela virtual** baseada em um `SELECT`. É usada para simplificar a complexidade, reutilizar consultas e fornecer uma camada de segurança, controlando quais dados os usuários podem ver.
  * **Data Warehouse**: Um repositório central de dados **integrados, tratados e estruturados**, provenientes de diversas fontes. É otimizado para consultas e análises de negócio (BI), focando em dados históricos e organizados por assunto.
  * **Data Lake**: Um repositório centralizado que armazena todos os tipos de dados (estruturados, semiestruturados e não estruturados) em seu **estado bruto**. É ideal para cientistas de dados que precisam explorar e descobrir novos padrões sem um esquema predefinido.

📌 Introdução a Views e conceitos básicos sobre Data Warehouse e Data Lake: [https://www.youtube.com/watch?v=2l9CXYdk7BQ](https://www.youtube.com/watch?v=2l9CXYdk7BQ)