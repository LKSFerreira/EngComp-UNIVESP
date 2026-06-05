### Resumo do Vídeo: **Linguagem SQL - Introdução à consulta - SELECT (UNIVESP, Prof. José Eduardo Santarém)**

Nesta videoaula, o professor José Eduardo Santarém introduz o **comando `SELECT`**, a principal ferramenta da linguagem SQL para **recuperar e consultar dados** de um banco de dados. A aula detalha a estrutura básica do comando, explicando o propósito e o funcionamento das cláusulas **`SELECT`**, **`FROM`**, **`WHERE`** e **`ORDER BY`**, além de apresentar operadores e cláusulas adicionais para refinar as consultas.

  * **[0:01:59](https://www.youtube.com/watch?v=puCgO9vD82g&t=119s)** – **Estrutura Básica do `SELECT`**

      * **`SELECT`**: especifica a **lista de atributos** (colunas) que serão retornados.
      * **`FROM`**: indica a **lista de tabelas** de onde os dados serão extraídos.
      * **`WHERE`**: aplica uma **condição (filtro)** para selecionar apenas os registros desejados.
      * **`ORDER BY`**: define a **ordem de classificação** do resultado final.

  * **[0:04:15](https://www.youtube.com/watch?v=puCgO9vD82g&t=255s)** – **A Cláusula `SELECT`**

      * [cite\_start]Permite selecionar colunas específicas ou todas as colunas usando o asterisco (`*`). [cite: 39]
      * [cite\_start]É uma boa prática **evitar o uso do `*`** e listar apenas as colunas necessárias para otimizar a performance e não sobrecarregar a rede. [cite: 40, 41]

  * **[0:09:31](https://www.youtube.com/watch?v=puCgO9vD82g&t=571s)** – **A Cláusula `WHERE`**

      * [cite\_start]Cria um **filtro vertical** para retornar apenas os registros que satisfazem uma condição lógica (booleana). [cite: 46]
      * [cite\_start]Os campos usados na cláusula `WHERE` **não precisam estar listados** na cláusula `SELECT`. [cite: 48]
      * [cite\_start]**Exemplo**: `WHERE sexo = 'F'` retorna apenas funcionários do sexo feminino. [cite: 49]

  * **[0:15:22](https://www.youtube.com/watch?v=puCgO9vD82g&t=922s)** – **A Cláusula `ORDER BY`**

      * **Ordena o resultado** da consulta com base em uma ou mais colunas.
      * A ordenação padrão é **ascendente (`ASC`)**. [cite\_start]Para inverter a ordem, usa-se a palavra-chave **`DESC`**. [cite: 55]
      * **Exemplo**: `ORDER BY salario DESC` lista os funcionários do maior para o menor salário.

  * **[0:19:51](https://www.youtube.com/watch?v=puCgO9vD82g&t=1191s)** – **A Cláusula `DISTINCT`**

      * [cite\_start]Utilizada junto ao `SELECT`, **elimina registros duplicados** do resultado final. [cite: 61]
      * [cite\_start]**Exemplo**: `SELECT DISTINCT de_numero FROM funcionario` retorna uma lista única dos departamentos que possuem funcionários. [cite: 63]

  * **[0:21:31](https://www.youtube.com/watch?v=puCgO9vD82g&t=1291s)** – **Alterando Nomes de Colunas com `AS`**

      * [cite\_start]A cláusula `AS` permite **renomear uma coluna** (criar um alias) no resultado da consulta, sem alterar o nome na tabela original. [cite: 64]
      * [cite\_start]**Exemplo**: `SELECT de_numero AS Departamento FROM funcionario` exibe a coluna `de_numero` com o título "Departamento". [cite: 65]

  * **[0:23:45](https://www.youtube.com/watch?v=puCgO9vD82g&t=1425s)** – **Filtrando Textos com `LIKE`**

      * [cite\_start]O operador `LIKE`, usado na cláusula `WHERE`, permite **buscar por padrões em campos de texto** (strings). [cite: 67, 68]
      * Utiliza o caractere coringa `%` para representar qualquer sequência de caracteres.
      * [cite\_start]**Exemplo**: `WHERE nome LIKE 'José%'` encontra todos os nomes que começam com "José". [cite: 68]

  * **[0:26:01](https://www.youtube.com/watch?v=puCgO9vD82g&t=1561s)** – **Realizando Cálculos na Consulta**

      * É possível realizar **operações matemáticas** diretamente na cláusula `SELECT`.
      * [cite\_start]Os cálculos são feitos sobre os valores originais, e o resultado é exibido na consulta **sem alterar os dados** na tabela. [cite: 72]
      * [cite\_start]**Exemplo**: `SELECT nome, salario * 1.15 AS novo_salario FROM funcionario` exibe o salário atual e uma projeção de aumento de 15%. [cite: 74]

### Resumo Final

  * **`SELECT` e `FROM`**: A base de toda consulta, definindo **o que** buscar (colunas) e **de onde** buscar (tabelas).
  * **`WHERE`**: O principal mecanismo de **filtragem**, permitindo selecionar registros com base em condições lógicas (`=`, `>`, `<`, `LIKE`).
  * **`ORDER BY`**: A ferramenta para **classificação** do resultado, essencial para organizar a visualização dos dados.
  * **Cláusulas Auxiliares**:
      * **`DISTINCT`**: Garante resultados **sem duplicatas**.
      * **`AS`**: Melhora a legibilidade do resultado ao **renomear colunas**.
      * **Cálculos**: Permitem transformar e projetar dados diretamente na consulta.

📌 Videoaula 13 - Linguagem SQL - Introdução à consulta - SELECT: [https://www.youtube.com/watch?v=puCgO9vD82g](https://www.youtube.com/watch?v=puCgO9vD82g)

----

### Resumo do Vídeo: **Linguagem SQL - Consultas com funções - SELECT (UNIVESP, Prof. José Eduardo Santarém)**

Nesta videoaula, o professor José Eduardo Santarém aprofunda o uso do comando `SELECT`, focando em **funções escalares** (numéricas, de string e de data) e **funções de agregação**. A aula demonstra como manipular e transformar dados diretamente na consulta e como consolidar informações de múltiplos registros usando agrupamentos para gerar relatórios e análises.

  * **[0:01:03](https://www.youtube.com/watch?v=7vS42iluirw&t=63s)** – **Introdução às Funções SQL**

      * [cite\_start]A linguagem SQL implementa uma variedade de funções para manipulação de dados. [cite: 81]
      * [cite\_start]A sintaxe e o nome das funções podem variar entre diferentes sistemas de banco de dados (MySQL, Oracle, etc.), mas o conceito geralmente é o mesmo. [cite: 81, 82]

  * **[0:02:46](https://www.youtube.com/watch?v=7vS42iluirw&t=166s)** – **Funções Numéricas**

      * Permitem realizar operações matemáticas e formatação de números.
      * [cite\_start]**Exemplo `TRUNCATE`**: `TRUNCATE(1.999, 1)` corta o número para uma casa decimal, resultando em `1.9`, sem arredondamento. [cite: 84, 85, 86]
      * [cite\_start]**Exemplo `ROUND`**: `ROUND(1.58)` arredonda o valor para o inteiro mais próximo, resultando em `2`. [cite: 87, 88]

  * **[0:07:01](https://www.youtube.com/watch?v=7vS42iluirw&t=421s)** – **Funções de String (Texto)**

      * Utilizadas para manipular e transformar dados textuais.
      * **`CONCAT`**: Junta múltiplas strings em uma só. [cite\_start]Se um dos valores for nulo, o resultado será nulo. [cite: 90]
      * [cite\_start]**`LOWER` / `UPPER`**: Convertem o texto para minúsculas ou maiúsculas, respectivamente. [cite: 93]
      * [cite\_start]**`SUBSTRING`**: Extrai uma parte de uma string a partir de uma posição e com um tamanho definido. [cite: 94, 95]
      * [cite\_start]**`REPLACE`**: Substitui todas as ocorrências de uma substring por outra. [cite: 99, 101]

  * **[0:16:07](https://www.youtube.com/watch?v=7vS42iluirw&t=967s)** – **Funções de Data**

      * Permitem extrair informações e realizar cálculos com datas e horas.
      * [cite\_start]**`NOW()`**: Retorna a data e hora atuais do sistema. [cite: 102]
      * [cite\_start]**`MONTH()` / `MONTHNAME()`**: Extraem o número do mês ou o nome do mês de uma data. [cite: 103, 104]
      * [cite\_start]**`DAYNAME()` / `DAYOFWEEK()`**: Retornam o nome do dia da semana ou seu número. [cite: 104, 105]
      * [cite\_start]**`DATEDIFF()`**: Calcula a diferença em dias entre duas datas. [cite: 107]

  * **[0:25:38](https://www.youtube.com/watch?v=7vS42iluirw&t=1538s)** – **Funções de Agregação**

      * Executam operações matemáticas sobre um conjunto de registros, retornando um único valor consolidado.
      * [cite\_start]**`AVG()`**: Calcula a **média** dos valores. [cite: 114]
      * [cite\_start]**`SUM()`**: Calcula a **soma** total dos valores. [cite: 114]
      * [cite\_start]**`MAX()` / `MIN()`**: Retornam o **maior** e o **menor** valor, respectivamente. [cite: 114]
      * **`COUNT()`**: **Conta** o número de registros. [cite\_start]`COUNT(*)` conta todas as linhas, enquanto `COUNT(coluna)` ignora valores nulos. [cite: 114, 125]

  * **[0:35:25](hhttps://www.youtube.com/watch?v=7vS42iluirw&t=2125s)** – **Agrupando Dados com `GROUP BY`**

      * A cláusula `GROUP BY` agrupa registros que têm os mesmos valores em colunas especificadas.
      * É usada em conjunto com funções de agregação para calcular métricas por categoria.
      * [cite\_start]**Exemplo**: `SELECT de_numero, AVG(salario) FROM funcionario GROUP BY de_numero;` calcula a média salarial para cada departamento. [cite: 128]

  * **[0:38:53](https://www.youtube.com/watch?v=7vS42iluirw&t=2333s)** – **Filtrando Grupos com `HAVING`**

      * A cláusula `HAVING` é usada para **filtrar os resultados depois** que os dados já foram agrupados pelo `GROUP BY`.
      * Diferente do `WHERE`, que filtra registros *antes* do agrupamento, o `HAVING` atua sobre os resultados das funções de agregação.
      * [cite\_start]**Exemplo**: `...GROUP BY de_numero HAVING SUM(salario) < 5000;` mostra apenas os departamentos cuja soma salarial total é menor que 5000. [cite: 115, 116, 132]

### Resumo Final

  * **Funções Escalares**: Atuam em cada registro individualmente, transformando valores numéricos, de texto ou de data (`ROUND`, `CONCAT`, `MONTH`).
  * **Funções de Agregação**: Atuam sobre um conjunto de registros para retornar um único valor consolidado (`SUM`, `AVG`, `COUNT`).
  * **`GROUP BY`**: Essencial para usar funções de agregação por categoria, agrupando os dados antes de aplicar os cálculos.
  * **`WHERE` vs. `HAVING`**:
      * `WHERE` filtra os dados **antes** do agrupamento e não pode ser usado com funções de agregação.
      * `HAVING` filtra os dados **depois** do agrupamento e é usado para aplicar condições sobre os resultados das funções de agregação.

📌 Linguagem SQL - Consultas com funções - SELECT: [https://www.youtube.com/watch?v=7vS42iluirw](https://www.youtube.com/watch?v=7vS42iluirw)

----

