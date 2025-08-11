# Pergunta 1

Durante o desenvolvimento de esquemas relacionais, é necessário compreender não apenas a estrutura das tabelas e seus relacionamentos, mas também aspectos que afetam a forma como os dados são armazenados, manipulados e recuperados, incluindo a ordenação das informações. Em um banco de dados relacional, o relacionamento entre entidades é representado por meio de chaves primárias e estrangeiras, estabelecendo ligações lógicas entre tuplas de diferentes tabelas.
Nesse contexto, assinale a alternativa que avalia a relação entre a ordenação das tuplas e os relacionamentos existentes entre elas.

a. **A ordenação das tuplas define o tipo de relacionamento entre tabelas, sendo essencial para caracterizar relacionamentos 1:1, 1\:N ou N\:N.**

<details><summary>Resposta</summary>**Incorreta.**  
A ordenação física ou lógica das tuplas (a forma como linhas são armazenadas/ordenadas) não determina o tipo de relacionamento entre tabelas. Tipos de relacionamento (1:1, 1:N, N:N) são definidos pela modelagem e pelas chaves (PK/FK) e não pela ordem das linhas.</details>

b. **A ordenação das tuplas ocorre de forma independente dos relacionamentos, que são estabelecidos por chaves e pela estrutura lógica do modelo relacional.**

<details><summary>Resposta</summary>**Correta.**  
Relacionamentos são conceituais e implementados via chaves primárias/estrangeiras e restrições; a ordem das tuplas (ordenação física ou resultado sem `ORDER BY`) é independente e não altera os vínculos lógicos entre registros.</details>

c. **A ordenação das tuplas deve ser manualmente definida no modelo lógico para garantir a integridade referencial entre os dados relacionados.**

<details><summary>Resposta</summary>**Incorreta.**  
Integridade referencial é garantida por chaves estrangeiras e regras do SGBD, não por definir ordem de linhas no modelo lógico. `ORDER BY` é apenas para apresentação/consulta.</details>

d. **A ordenação das tuplas deve seguir a ordem alfabética do atributo chave primária para que o relacionamento seja corretamente mantido.**

<details><summary>Resposta</summary>**Incorreta.**  
Não existe exigência de ordenar por chave primária para manter relacionamentos. Relacionamentos são independentes da ordenação; ordenar por PK é apenas uma escolha de consulta/índice possível.</details>

e. **A ordenação das tuplas é automática e sempre baseada na data de inserção, sendo usada pelo SGBD para validar os relacionamentos entre tabelas.**

<details><summary>Resposta</summary>**Incorreta.**  
SGBDs não garantem ordem implícita por data de inserção (a menos que haja coluna/índice que armazene isso); além disso, ordenação não é usada para validar relacionamentos — validação vem de restrições e chaves.</details>

---

# Pergunta 2

A modelagem conceitual de banco de dados contempla diferentes categorias de entidades e relacionamentos, cada uma com características específicas. Em determinados casos, algumas entidades não possuem elementos suficientes para serem identificadas de forma independente, o que demanda estratégias específicas durante o projeto lógico, especialmente na definição de chaves e na representação das dependências entre os dados.
Com relação a este tema e aos procedimentos avaliativos neste contexto histórico, analise as afirmativas a seguir:
I. Entidades fracas dependem da chave primária da entidade forte relacionada, pois seus atributos próprios formam  uma chave parcial para identificação.
II. A chave primária da entidade fraca é composta por atributos da própria entidade juntamente com a chave primária da entidade forte relacionada.
III. O relacionamento entre entidade forte e fraca é do tipo identificação, e a chave primária da entidade fraca inclui parcialmente a chave da entidade forte
Está correto o que se afirma em:

a. **I, apenas.**

<details><summary>Resposta</summary>**Incorreta.**  
I está correta, mas II e III também descrevem características corretas de entidades fracas/relacionamento de identificação.</details>

b. **I, II e III.**

<details><summary>Resposta</summary>**Correta.**  
Todas as três afirmações descrevem corretamente características de entidades fracas: dependência da entidade forte, chave primária composta (atributo parcial + PK da forte) e relacionamento de identificação (identifying relationship).</details>

c. **I e II, apenas.**

<details><summary>Resposta</summary>**Incorreta.**  
III também é correta; o relacionamento entre forte e fraca é de identificação e a PK da fraca inclui a chave da forte.</details>

d. **I e III, apenas.**

<details><summary>Resposta</summary>**Incorreta.**  
II também é correta — a PK da entidade fraca costuma ser a combinação da chave da forte + o identificador parcial da fraca.</details>

e. **II e III, apenas.**

<details><summary>Resposta</summary>**Incorreta.**  
I também é correta; todas as três características são típicas de entidades fracas.</details>

---

# Pergunta 3

Em ambientes computacionais, a organização dos dados é essencial para garantir integridade, eficiência e facilidade de acesso. Modelos de dados oferecem estruturas que orientam a forma como essas informações são armazenadas, manipuladas e recuperadas por diferentes sistemas. No modelo relacional de banco de dados, os dados são organizados em tabelas com linhas e colunas.
Com base nesse modelo, assinale a alternativa que identifica o que é uma tupla.

a. **Tabela – Uma tupla representa uma tabela completa contendo várias linhas e colunas, com dados agrupados segundo os relacionamentos existentes.**

<details><summary>Resposta</summary>**Incorreta.**  
Tabela (ou relação) é o conjunto de tuplas; uma tupla não é a tabela completa.</details>

b. **Coluna – A tupla representa uma coluna que agrupa todos os valores de um atributo específico armazenado em múltiplas linhas da tabela relacional.**

<details><summary>Resposta</summary>**Incorreta.**  
Coluna é atributo; tupla não é uma coluna.</details>

c. **Linha – No modelo relacional, uma tupla representa uma única linha da tabela, contendo os dados de um registro, com valores correspondentes a cada atributo.**

<details><summary>Resposta</summary>**Correta.**  
Tupla equivale a uma linha/registro da tabela, contendo valores para cada atributo (coluna) da relação.</details>

d. **Tipo – No modelo relacional, tupla é o tipo de dado atribuído a cada coluna da tabela, garantindo que os dados sejam armazenados com coerência e validação.**

<details><summary>Resposta</summary>**Incorreta.**  
Tipo de dado é outra coisa (INTEGER, VARCHAR, etc.); tupla não é um tipo de dado de coluna.</details>

e. **Chave – Tupla é o conjunto de atributos definidos como chave primária e utilizados para garantir a unicidade dos dados em uma tabela do banco relacional.**

<details><summary>Resposta</summary>**Incorreta.**  
Chave primária é um conjunto de atributos; tupla é o registro que contém esses atributos.</details>

---

# Pergunta 4

Ao modelar os dados de um sistema, é importante representar adequadamente os diferentes tipos de informações que podem ser armazenadas por uma entidade. Essa representação deve considerar a natureza dos dados e a relação entre eles, permitindo um projeto lógico eficiente e consistente. No processo de modelagem conceitual utilizando o Modelo Entidade-Relacionamento (MER), é necessário compreender as características dos atributos definidos para cada entidade.
A partir desse contexto, assinale a alternativa que identifica qual elemento representa um campo multivalorado em um MER.

a. **Relacionamento – Campos multivalorados são indicados por retângulos ligados diretamente ao relacionamento, apontando para atributos que derivam de chaves compostas.**

<details><summary>Resposta</summary>**Incorreta.**  
Relacionamentos são representados por losangos/linhas; não é a forma correta para atributos multivalorados.</details>

b. **Chaves – Atributos multivalorados aparecem no MER como elipses duplas ligadas à entidade, indicando que uma única ocorrência pode ter múltiplos valores distintos.**

<details><summary>Resposta</summary>**Correta.**  
Atributos multivalorados são representados no MER por elipses duplas ligadas à entidade (ex.: um aluno com vários telefones).</details>

c. **Cardinalidade – O atributo multivalorado é representado por uma linha com cardinalidade mínima associada, mostrando a obrigatoriedade do relacionamento com a entidade.**

<details><summary>Resposta</summary>**Incorreta.**  
Cardinalidade descreve relacionamento entre entidades, não é o símbolo gráfico de atributo multivalorado.</details>

d. **Herança – O campo multivalorado no MER está diretamente ligado à representação de herança, permitindo que os valores se propaguem por entidades especializadas.**

<details><summary>Resposta</summary>**Incorreta.**  
Herança (generalização/especialização) é diferente de atributo multivalorado; não se usa herança para marcar multivalorados.</details>

e. **Domínio – Campos multivalorados representam o domínio permitido para um atributo, utilizado para restringir os valores possíveis em um conjunto finito e ordenado.**

<details><summary>Resposta</summary>**Incorreta.**  
Domínio refere-se ao conjunto de valores válidos para um atributo, não à representação gráfica de multivalorados no MER.</details>

---

# Pergunta 5

Leia o trecho a seguir:
Na modelagem de dados, os relacionamentos entre entidades são fundamentais para garantir a integridade referencial e representar adequadamente os vínculos do domínio. No modelo lógico, tais relações devem ser corretamente representadas segundo regras específicas de transformação.
No processo de transformação de um modelo conceitual (MER) para um modelo lógico relacional, o relacionamento 1\:N entre duas entidades é geralmente implementado por meio da técnica de uso da \[preencher 1] na entidade do lado N, e não pela criação de uma \[preencher 2].
Neste contexto, identifique os termos de \[preencher 1] e \[preencher 2] que são substituídos  por:

a. **1 - chave primária; 2- chave estrangeira**

<details><summary>Resposta</summary>**Incorreta.**  
Troca invertida; numa relação 1:N normalmente adiciona-se *chave estrangeira* no lado N, não uma chave primária para implementar o vínculo (a PK já existe).</details>

b. **1 - entidade fraca; 2 – entidade forte**

<details><summary>Resposta</summary>**Incorreta.**  
Não faz sentido prático: não se transforma 1:N criando entidade fraca em vez de outra coisa — técnica clássica é adicionar FK no lado N.</details>

c. **1 - chave estrangeira; 2 - nova tabela**

<details><summary>Resposta</summary>**Correta.**  
Num 1:N, a implementação típica é adicionar a **chave estrangeira** na entidade do lado N (referenciando a PK do lado 1). Não é necessário criar uma **nova tabela** (exceto em N:N), pois a FK resolve o 1:N.</details>

d. **1 – tupla simples; 2 - relação de herança**

<details><summary>Resposta</summary>**Incorreta.**  
Termos não aplicáveis ao contexto da transformação 1:N para modelo lógico relacional.</details>

e. **1 - tabela associativa ; 2 - tupla composta**

<details><summary>Resposta</summary>**Incorreta.**  
Tabela associativa (junction table) é usada para N:N; não é a técnica usual para 1:N. Além disso, “tupla composta” não é o termo correto aqui.</details>

---

# Pergunta 6

A modelagem conceitual é fundamental para representar corretamente os elementos de um domínio. As entidades e seus relacionamentos definem como os dados se conectam. Entender a relação entre diferentes elementos é essencial para garantir integridade e consistência no projeto.
Considere as entidades Cliente, Pedido e Produto em um sistema de vendas. Um cliente pode fazer vários pedidos, e cada pedido pode conter vários produtos.
Com base nessa estrutura, assinale a a alternativa que interpreta o tipo de cardinalidade entre essas entidades.

a. **Um-para-um – A relação entre Cliente e Pedido é um-para-um, pois cada cliente só pode ter um pedido e cada pedido pertence a um único cliente.**

<details><summary>Resposta</summary>**Incorreta.**  
Na descrição, um cliente pode fazer vários pedidos → é 1:N (Cliente:Pedido), não 1:1.</details>

b. **Produto – Produto está relacionado diretamente com Cliente por cardinalidade um-para-muitos, pois cada produto é vendido para vários clientes diretamente.**

<details><summary>Resposta</summary>**Incorreta.**  
A relação direta relevante é Pedido–Produto (um pedido contém produtos). Produto pode ser vendido a muitos clientes através de pedidos, mas a afirmação está formulada de forma incorreta e não reflete o relacionamento pedido-produto descrito.</details>

c. **Cliente – Cliente tem uma cardinalidade muitos-para-muitos com Produto, pois cada cliente compra muitos produtos e cada produto pertence a um único cliente.**

<details><summary>Resposta</summary>**Incorreta.**  
Contradição interna: se cada produto pertence a um único cliente não há muitos-para-muitos. Além disso, o relacionamento natural entre Pedido e Produto é muitos-para-muitos (através de itens do pedido), não Cliente–Produto diretamente.</details>

d. **Um-para-muitos – Entre Produto e Pedido, a cardinalidade é um-para-muitos, pois cada produto está restrito a aparecer em um único pedido.**

<details><summary>Resposta</summary>**Incorreta.**  
Isso está incorreto: um produto pode aparecer em muitos pedidos (várias vendas), logo não é restrito a um único pedido.</details>

e. **Muitos-para-muitos – Entre Pedido e Produto há uma cardinalidade muitos-para-muitos, pois um pedido possui vários produtos e um produto está em vários pedidos.**

<details><summary>Resposta</summary>**Correta.**  
Um pedido pode conter vários produtos e um mesmo produto pode aparecer em vários pedidos ao longo do tempo → relacionamento lógico Pedido–Produto é N:N, geralmente materializado por uma tabela associativa (itens_pedido).</details>

---

# Pergunta 7

Durante a modelagem de dados, é comum estabelecer restrições que assegurem a integridade e a coerência das informações armazenadas. Estas podem ser decorrentes da própria lógica do domínio, das regras do sistema ou da implementação técnica escolhida. Ao projetar um banco de dados relacional para um sistema de gestão acadêmica, diversas entidades e relacionamentos são definidos com base no domínio educacional.
Com relação a este tema e os diferentes tipos de restrições que precisam ser aplicadas para garantir a integridade dos dados, compreenda as afirmativas a seguir:
I. Uma restrição implícita é imposta automaticamente pelo modelo relacional, como a exigência de que todos os valores em uma coluna pertençam ao mesmo domínio.
II. A restrição explícita é geralmente tratada pela aplicação, com menor ênfase em sua definição direta no esquema do banco de dados
III. Restrições de negócio, como "um aluno não pode se matricular em duas disciplinas com horários coincidentes", são normalmente implementadas na aplicação.
Está correto o que se afirma em:

a. **II e III, apenas.**

<details><summary>Resposta</summary>**Incorreta.**  
II está incorreta porque restrições explícitas são frequentemente definidas no próprio esquema do banco (ex.: CHECK, UNIQUE, FK); III pode ser verdadeira em muitos projetos, mas II não.</details>

b. **I e II, apenas.**

<details><summary>Resposta</summary>**Incorreta.**  
II é problemática como enunciada; restrições explícitas normalmente *podem* e *devem* ser definidas no BD, não "geralmente tratadas pela aplicação".</details>

c. **I, II e III.**

<details><summary>Resposta</summary>**Incorreta.**  
II é imprecisa/errada; portanto não é correto afirmar todas as três.</details>

d. **I e III, apenas.**

<details><summary>Resposta</summary>**Correta.**  
I está correta (restrições implícitas do modelo relacional, como domínio/tipo). III também é correta no sentido prático: muitas regras de negócio complexas são implementadas na camada de aplicação (embora possam também ser aplicadas no BD via triggers/procedures). II está equivocada ao afirmar que restrição explícita é geralmente tratada pela aplicação — pelo contrário, restrições explícitas (NOT NULL, UNIQUE, CHECK, FK) são comumente definidas no esquema do BD.</details>

e. **I, apenas.**

<details><summary>Resposta</summary>**Incorreta.**  
III também é aceitável como afirmativa prática; logo a alternativa que diz só I está incompleta.</details>

---

# Pergunta 8

Para organizar e consultar informações de forma eficiente, os bancos de dados relacionais utilizam estruturas conceituais bem definidas. Distinguir corretamente esses elementos é fundamental para garantir que o modelo represente com precisão o domínio da aplicação, pois a correta identificação de entidades, atributos, relacionamentos e restrições garante que os dados sejam armazenados de forma lógica, consistente e sem ambiguidade, refletindo fielmente a realidade que se deseja modelar e facilitando futuras consultas, atualizações e integrações no sistema .
Com base no contexto, associe conceitos fundamentais do modelo relacional com exemplos que representam sua aplicação no contexto de uma universidade.

**(Interpretação dos exemplos para associação):**
A. `(1023, "João Silva", "Engenharia", 7.5)` – representa os dados completos de um aluno (registro)
B. `Aluno` – representa um elemento real do domínio (entidade)
C. `Tabela Aluno` – armazena diversas tuplas com informações sobre alunos cadastrados (relação/tabela)
D. `Nome` – caracteriza o aluno, sendo um campo que armazena o nome completo do estudante (atributo)

Assinale a alternativa que apresenta a associação correta:

a. **I-B; II-A; III-D; IV-C.**

<details><summary>Resposta</summary>**Incorreta.**  
Confunde correspondências: por exemplo, II (atributo) não é um registro completo (A) — atributo é D (Nome).</details>

b. **I-C; II-A; III-D; IV-B.**

<details><summary>Resposta</summary>**Incorreta.**  
I (Entidade) não corresponde a uma tabela (C); além disso, mapeamentos de atributo/tupla estão trocados.</details>

c. **I-B; II-D; III-A; IV-C.**

<details><summary>Resposta</summary>**Correta.**  
Associações corretas:  
- I (Entidade) → B (`Aluno`)  
- II (Atributo) → D (`Nome`)  
- III (Tupla) → A (registro `(1023, "João Silva", ...)`)  
- IV (Relação) → C (`Tabela Aluno` como relação que contém tuplas)</details>

d. **I-D; II-B; III-C; IV-A.**

<details><summary>Resposta</summary>**Incorreta.**  
Inverte entidade/atributo/tupla/relação; por exemplo I não é `Nome`.</details>

e. **I-A; II-C; III-B; IV-D.**

<details><summary>Resposta</summary>**Incorreta.**  
Também não corresponde às definições convencionais (por exemplo, I não é um registro A).</details>
