### Resumo do Vídeo: Mapeamento do Modelo Entidade-Relacionamento para o Modelo Relacional

O vídeo, parte da disciplina de banco de dados da UNIVESP, oferece um guia detalhado sobre como converter um Modelo Entidade-Relacionamento (MER) para um Modelo Relacional, com foco nos diferentes tipos de cardinalidade dos relacionamentos.

#### **1. Mapeamento de Relacionamento Binário Um para Um (1:1)**

O professor Eduardo Santarém apresenta três abordagens para mapear relacionamentos com cardinalidade 1:1:

* **Abordagem de Chave Estrangeira:** Esta é a abordagem mais comum [[02:42](http://www.youtube.com/watch?v=-YZrvOpPZJM&t=162)]. Consiste em escolher uma das tabelas envolvidas (S) e adicionar a chave primária da outra tabela (T) como uma chave estrangeira em S. A escolha da tabela S é crucial, sendo recomendado selecionar aquela com participação total no relacionamento para otimizar o modelo [[03:58](http://www.youtube.com/watch?v=-YZrvOpPZJM&t=238)]. Atributos do relacionamento são adicionados como novos campos na tabela S [[04:13](http://www.youtube.com/watch?v=-YZrvOpPZJM&t=253)].
* **Relação Unificada:** Uma abordagem menos frequente, onde as duas entidades e o relacionamento são combinados em uma única tabela. Isso só é aplicável quando ambas as entidades têm participação total no relacionamento [[07:15](http://www.youtube.com/watch?v=-YZrvOpPZJM&t=435)].
* **Referência Cruzada:** Nesta abordagem, cria-se uma terceira tabela que serve como uma referência cruzada, contendo as chaves primárias das duas tabelas originais. É útil para manter um histórico das relações [[08:38](http://www.youtube.com/watch?v=-YZrvOpPZJM&t=518)].

#### **2. Mapeamento de Relacionamento Binário Um para N (1:N)**

Para relacionamentos do tipo um-para-muitos (1:N), o processo é mais direto:

* **Identificação da Tabela S:** A tabela que representa a entidade do lado "N" do relacionamento é identificada como a tabela S [[10:02](http://www.youtube.com/watch?v=-YZrvOpPZJM&t=602)].
* **Chave Estrangeira:** A chave primária da tabela do lado "1" (tabela T) é adicionada como chave estrangeira na tabela S [[10:20](http://www.youtube.com/watch?v=-YZrvOpPZJM&t=620)].
* **Atributos do Relacionamento:** Quaisquer atributos do relacionamento são incluídos como atributos na tabela S [[10:39](http://www.youtube.com/watch?v=-YZrvOpPZJM&t=639)].
* **Relacionamento Recursivo:** O vídeo também aborda como mapear relacionamentos recursivos (ou auto-relacionamentos) de 1:N, como a relação de supervisão entre funcionários. Isso é feito adicionando uma chave estrangeira na própria tabela que se refere à chave primária da mesma tabela (por exemplo, um campo `id_supervisor` na tabela `Funcionario`) [[19:18](http://www.youtube.com/watch?v=-YZrvOpPZJM&t=1158)].

#### **3. Mapeamento de Relacionamento Binário Muitos para Muitos (M:N)**

Relacionamentos muitos-para-muitos (M:N) exigem a criação de uma nova estrutura:

* **Criação de Nova Tabela:** Para cada relacionamento M:N, uma nova tabela é criada para representar a associação [[21:05](http://www.youtube.com/watch?v=-YZrvOpPZJM&t=1265)].
* **Chaves Estrangeiras e Primária Composta:** As chaves primárias das duas entidades participantes são incluídas como chaves estrangeiras nesta nova tabela. A combinação dessas duas chaves estrangeiras forma a chave primária da nova tabela (chave primária composta) [[21:21](http://www.youtube.com/watch?v=-YZrvOpPZJM&t=1281)].
* **Atributos do Relacionamento:** Os atributos do relacionamento, como "horas trabalhadas" em um projeto, são adicionados como colunas na nova tabela de associação [[21:57](http://www.youtube.com/watch?v=-YZrvOpPZJM&t=1317)]. O exemplo do relacionamento "Trabalha em" entre "Funcionário" e "Projeto" ilustra claramente este processo [[22:06](http://www.youtube.com/watch?v=-YZrvOpPZJM&t=1326)].

O professor conclui a aula reforçando que a prática e o estudo são fundamentais para dominar o mapeamento do modelo conceitual para o relacional, uma habilidade essencial para o projeto de bancos de dados eficientes e que representem corretamente o mundo real [[26:44](http://www.youtube.com/watch?v=-YZrvOpPZJM&t=1604)].


Videoaula 4 - Modelo Relacional - caracterização, formalização e restrições:[http://www.youtube.com/watch?v=-YZrvOpPZJM](http://www.youtube.com/watch?v=-YZrvOpPZJM)


---

### Resumo do Vídeo: Mapeamento MER → Relacional - Parte I

Nesta videoaula, o professor Eduardo Santarém da UNIVESP introduz o processo de mapeamento de um Modelo Entidade-Relacionamento (MER) para um Modelo Relacional, um passo fundamental para a implementação de um banco de dados [[01:04](http://www.youtube.com/watch?v=7IO2hY4FZ1w&t=64)].

#### **1. A Transição do Conceitual para o Lógico**

O vídeo começa explicando a diferença entre os modelos:
* **Modelo Entidade-Relacionamento (MER):** É um modelo conceitual, de alto nível, usado para entender e documentar os requisitos de dados de um sistema.
* **Modelo Relacional:** É um modelo lógico (ou físico), mais próximo da implementação, que organiza os dados em tabelas (relações) e é diretamente utilizável por um Sistema Gerenciador de Banco de Dados (SGBD) [[00:28](http://www.youtube.com/watch?v=7IO2hY4FZ1w&t=28)].

O mapeamento é o processo de "traduzir" o diagrama MER para o esquema de um banco de dados relacional.

#### **2. Mapeamento de Entidades Fortes**

O primeiro passo do mapeamento foca nas entidades regulares ou fortes:

* **Criação da Tabela:** Para cada entidade forte no MER, uma tabela correspondente é criada no modelo relacional [[03:02](http://www.youtube.com/watch?v=7IO2hY4FZ1w&t=182)].
* **Inclusão de Atributos:**
    * Todos os atributos **simples** da entidade se tornam colunas na nova tabela.
    * Para atributos **compostos**, apenas seus componentes simples são incluídos como colunas separadas [[03:20](http://www.youtube.com/watch?v=7IO2hY4FZ1w&t=200)].
* **Definição da Chave Primária:** Um dos atributos-chave identificados no MER é escolhido para ser a chave primária (Primary Key) da tabela, garantindo a unicidade de cada registro [[03:34](http://www.youtube.com/watch?v=7IO2hY4FZ1w&t=214)].
* **Exemplos Práticos:** O professor demonstra o mapeamento com as entidades "Funcionário" [[03:43](http://www.youtube.com/watch?v=7IO2hY4FZ1w&t=223)], "Departamento" [[05:01](http://www.youtube.com/watch?v=7IO2hY4FZ1w&t=301)] e "Projeto" [[06:57](http://www.youtube.com/watch?v=7IO2hY4FZ1w&t=417)].

#### **3. Mapeamento de Atributos Multivalorados**

Atributos que podem conter múltiplos valores para uma única entidade recebem um tratamento especial:

* **Criação de Nova Tabela:** Para cada atributo multivalorado, uma nova tabela separada é criada [[10:59](http://www.youtube.com/watch?v=7IO2hY4FZ1w&t=659)].
* **Composição da Tabela:** Esta nova tabela terá duas colunas:
    1.  Uma para o próprio atributo multivalorado.
    2.  Uma chave estrangeira (Foreign Key) que referencia a chave primária da tabela original (da entidade forte) [[11:06](http://www.youtube.com/watch?v=7IO2hY4FZ1w&t=666)].
* **Chave Primária Composta:** A chave primária desta nova tabela é formada pela combinação das duas colunas (o atributo e a chave estrangeira), garantindo que não haja valores duplicados para a mesma entidade [[11:41](http://www.youtube.com/watch?v=7IO2hY4FZ1w&t=701)].
* **Exemplo:** O atributo "localizações" da entidade "Departamento" é usado para ilustrar esse processo [[11:57](http://www.youtube.com/watch?v=7IO2hY4FZ1w&t=717)].

#### **4. Mapeamento de Entidades Fracas**

Entidades fracas, que dependem de uma entidade forte para existir, são mapeadas da seguinte forma:

* **Criação de Nova Tabela:** Assim como as outras, uma nova tabela é criada para a entidade fraca [[16:01](http://www.youtube.com/watch?v=7IO2hY4FZ1w&t=961)].
* **Inclusão de Atributos:** A tabela inclui todos os atributos simples da entidade fraca.
* **Chave Estrangeira:** A chave primária da entidade forte da qual ela depende é adicionada como uma chave estrangeira na tabela da entidade fraca [[16:11](http://www.youtube.com/watch?v=7IO2hY4FZ1w&t=971)].
* **Chave Primária Composta:** A chave primária da tabela da entidade fraca é a combinação da sua chave parcial (discriminador) com a chave estrangeira da entidade forte [[16:42](http://www.youtube.com/watch?v=7IO2hY4FZ1w&t=1002)].
* **Exemplo:** O mapeamento da entidade fraca "Dependente", associada à entidade forte "Funcionário", é detalhadamente explicado [[17:01](http://www.youtube.com/watch?v=7IO2hY4FZ1w&t=1021)].

A aula termina reforçando a importância de praticar esses passos para construir esquemas de banco de dados consistentes e eficientes a partir de um modelo conceitual [[22:26](http://www.youtube.com/watch?v=7IO2hY4FZ1w&t=1346)].

Videoaula 5 - Mapeamento MER → Relacional - Parte I: entidades, atributos, chaves: [http://www.youtube.com/watch?v=7IO2hY4FZ1w](http://www.youtube.com/watch?v=7IO2hY4FZ1w)

---
### Resumo do Vídeo: Mapeamento do Modelo Entidade-Relacionamento para o Modelo Relacional (Parte II)

Nesta videoaula da UNIVESP, o professor Eduardo Santarém continua a explanação sobre a conversão do Modelo Entidade-Relacionamento (MER) para o Modelo Relacional, focando nos passos para mapear relacionamentos com diferentes cardinalidades.

#### **1. Mapeamento de Relacionamento Binário Um para Um (1:1)**

O professor detalha três abordagens distintas para mapear um relacionamento com cardinalidade 1:1 entre duas entidades, S e T.

*   **Abordagem de Chave Estrangeira:** Considerada a abordagem mais comum e, geralmente, a mais eficiente [[02:42](https://www.youtube.com/watch?v=-YZrvOpPZJM&t=162)]. Nela, a chave primária de uma das tabelas (T) é adicionada como chave estrangeira na outra tabela (S). A escolha de qual tabela receberá a chave estrangeira é importante; recomenda-se que seja a tabela da entidade com participação total no relacionamento para evitar valores nulos [[03:58](https://www.youtube.com/watch?v=-YZrvOpPZJM&t=238)]. Os atributos do próprio relacionamento também são migrados para a tabela que recebe a chave estrangeira (S) [[04:13](https://www.youtube.com/watch?v=-YZrvOpPZJM&t=253)].
*   **Abordagem de Relação Unificada:** Uma alternativa menos comum que consiste em fundir as duas entidades e o relacionamento em uma única tabela. Esta abordagem só é viável se ambas as entidades tiverem participação total no relacionamento, ou seja, se toda instância de uma entidade deve estar obrigatoriamente associada a uma instância da outra [[07:15](https://www.youtube.com/watch?v=-YZrvOpPZJM&t=435)].
*   **Abordagem de Referência Cruzada:** Nesta técnica, cria-se uma terceira tabela dedicada exclusivamente a representar o relacionamento. Essa tabela conterá as chaves primárias das duas entidades originais como chaves estrangeiras. Embora gere uma tabela a mais, é uma abordagem útil em cenários específicos, como para rastrear históricos de relacionamento [[08:38](https://www.youtube.com/watch?v=-YZrvOpPZJM&t=518)].

#### **2. Mapeamento de Relacionamento Binário Um para N (1:N)**

O mapeamento de relacionamentos um-para-muitos é mais direto e segue uma regra clara:

*   **Identificação do Lado "N":** A chave primária da tabela que representa a entidade do lado "1" do relacionamento é sempre migrada para a tabela que representa a entidade do lado "N" [[10:02](https://www.youtube.com/watch?v=-YZrvOpPZJM&t=602)].
*   **Criação da Chave Estrangeira:** A chave primária da tabela do lado "1" (T) torna-se uma chave estrangeira na tabela do lado "N" (S) [[10:20](https://www.youtube.com/watch?v=-YZrvOpPZJM&t=620)].
*   **Mapeamento de Atributos:** Quaisquer atributos pertencentes ao relacionamento são também adicionados como colunas na tabela do lado "N" (S) [[10:39](https://www.youtube.com/watch?v=-YZrvOpPZJM&t=639)].
*   **Relacionamento Recursivo (Autorelacionamento):** O vídeo também exemplifica o mapeamento de um relacionamento recursivo 1:N, como a relação de supervisão entre funcionários. A solução é adicionar uma chave estrangeira na própria tabela, que faz referência à sua chave primária. Por exemplo, na tabela `Funcionario`, cria-se uma coluna `id_supervisor` que é uma chave estrangeira referenciando a coluna `id_funcionario` da mesma tabela [[19:18](https://www.youtube.com/watch?v=-YZrvOpPZJM&t=1158)].

#### **3. Mapeamento de Relacionamento Binário Muitos para Muitos (M:N)**

Para relacionamentos do tipo muitos-para-muitos, é obrigatória a criação de uma nova estrutura para representar a associação.

*   **Criação de uma Nova Tabela:** Uma nova tabela (também chamada de tabela associativa ou de ligação) é criada especificamente para o relacionamento M:N [[21:05](https://www.youtube.com/watch?v=-YZrvOpPZJM&t=1265)].
*   **Chaves Estrangeiras e Chave Primária Composta:** As chaves primárias das duas entidades envolvidas no relacionamento são adicionadas a esta nova tabela como chaves estrangeiras. A combinação dessas duas chaves estrangeiras forma a chave primária da nova tabela, garantindo a unicidade da relação [[21:21](https://www.youtube.com/watch?v=-YZrvOpPZJM&t=1281)].
*   **Atributos do Relacionamento:** Atributos que descrevem o relacionamento (como "horas trabalhadas" de um funcionário em um projeto) são adicionados como colunas na nova tabela associativa [[21:57](https://www.youtube.com/watch?v=-YZrvOpPZJM&t=1317)]. O exemplo prático do relacionamento "Trabalha_em" entre as entidades "Funcionario" e "Projeto" é usado para ilustrar o processo [[22:06](https://www.youtube.com/watch?v=-YZrvOpPZJM&t=1326)].

O professor finaliza a aula enfatizando que a compreensão e a prática dessas regras de mapeamento são cruciais para a criação de bancos de dados relacionais bem estruturados e que representem fielmente as regras de negócio do mundo real [[26:44](https://www.youtube.com/watch?v=-YZrvOpPZJM&t=1604)].

Videoaula 6 - Mapeamento MER → Relacional - Parte II: relacionamentos: [http://www.youtube.com/watch?v=-YZrvOpPZJM](http://www.youtube.com/watch?v=-YZrvOpPZJM)
