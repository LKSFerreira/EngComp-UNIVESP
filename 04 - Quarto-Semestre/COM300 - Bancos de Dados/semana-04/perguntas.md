Pergunta 1
0 em 0 pontos

Correta	
Quando é criado um índice para um campo não ordenado de uma tabela, esse índice é de qual tipo?

Resposta Selecionada:	
Correta 
Secundário.

Respostas:	
Primário.

Correta 
Secundário.

De agrupamento.

Esparso.

Unique.

Comentário da resposta:	
Você acertou! Essa é a alternativa correta. Um índice para um campo não ordenado de uma tabela é do tipo secundário.


Pergunta 1
0 em 0 pontos

Correta	
Questão referente ao texto-base Sistemas de banco de dados (seções 6 até 6.2, 6.4, 17 até 17.2 e 13.17), de Ramez Elmasri e Shamkant B. Navathe.



Qual é o tipo de índice em que o campo de índice é chave, ele é do tipo não denso e o número de entradas de índice é o número de blocos no arquivo de dados?

Resposta Selecionada:	
Correta 
Primário.

Respostas:	
Correta 
Primário.

Agrupamento.

Secundário (Chave).

Multinível.

Secundário (Não chave).

Comentário da resposta:	
Você acertou! Essa é a alternativa correta. O índice primário é aquele em que o campo de índice é chave, ele é do tipo não denso e o número de entradas de índice é o número de blocos no arquivo de dados.

Pergunta 2
0 em 0 pontos

Correta	
Questão referente ao texto-base Banco de dados - implementação em SQL, PL/SQL e Oracle 11g (seções 7 até 7.5.9 e 8 até 8.3), de Sandra Puga, Edson França e Milton Goya. 



Qual é a restrição de integridade que impõe que cada valor em uma coluna ou conjunto de colunas (chave) seja exclusivo?

Resposta Selecionada:	
Correta 
Unique Key

Respostas:	
Check

Foreign Key

Not NULL

Null

Correta 
Unique Key

Comentário da resposta:	
Você acertou! Essa é a alternativa correta. Unique Key é a restrição de integridade que impõe que cada valor em uma coluna ou conjunto de colunas (chave) seja exclusivo.

Pergunta 1
1,25 em 1,25 pontos

Correta	
Durante o processo de otimização do desempenho de consultas em bancos relacionais, a escolha de índices adequados se mostra fundamental. É preciso compreender como diferentes tipos de índices afetam a organização física dos dados e a eficiência no acesso às informações.
Com relação a este tema e aos índices aplicado nas entidade de banco de dados, interprete as afirmativas a seguir:
I. Um índice de agrupamento pode ser criado livremente em qualquer campo, mesmo se a tabela já possuir um índice de agrupamento ativo.
II. O índice de agrupamento define a ordenação física dos dados em disco e é geralmente associado à chave primária da tabela.
III. A chave primária costuma ser usada como índice de agrupamento por garantir unicidade e auxiliar na organização eficiente dos registros.
Está correto o que se afirma em:




Resposta Selecionada:	
Corretab. 
II e III, apenas.

Respostas:	
a. 
I e III, apenas.

Corretab. 
II e III, apenas.

c. 
I, apenas.

d. 
I e II, apenas.

e. 
I, II e III.

Comentário da resposta:	
A afirmativa I é incorreta, pois uma tabela só pode ter um único índice de agrupamento, pois ele define a ordem física dos dados em disco. Criar outro índice de agrupamento implicaria em conflito de ordenação. Para outros campos, usa-se índice secundário, que não altera essa ordem.
A afirmativa II é correta, pois o índice de agrupamento define a ordem física dos registros no disco e, por padrão, é aplicado à chave primária, pois ela identifica unicamente cada tupla. Essa associação facilita a organização do armazenamento e otimiza o acesso sequencial aos dados.
A afirmativa III é correta, pois a chave primária é comumente utilizada como base para o índice de agrupamento, pois além de garantir unicidade, sua estrutura sequencial colabora com a ordenação física eficiente, o que melhora o desempenho de operações de leitura em colunas indexadas.


Pergunta 2
1,25 em 1,25 pontos

Correta	
Ao projetar entidades em bancos relacionais, é necessário definir a estrutura de dados considerando critérios de integridade, espaço em disco e desempenho. A escolha dos tipos de dados influencia diretamente na forma como o banco será acessado e mantido ao longo do tempo, pois impacta na eficiência das consultas, na integridade das informações armazenadas e na escalabilidade do sistema. Tipos de dados mal escolhidos podem levar ao desperdício de espaço, lentidão em operações e dificuldades na aplicação de restrições de integridade, como chaves primárias e estrangeiras.
Com relação a este tema e a escolha do tipo de data da estruturação da entidade, compreenda as afirmativas a seguir:
I. Utilizar o tipo VARCHAR em vez de CHAR para atributos de tamanho variável pode economizar espaço em disco, especialmente em colunas de texto.
II. Campos utilizados em operações de data, como aniversários, devem ser declarados com o tipo DATE para garantir consistência e suporte a funções específicas.
III. Declarar todos os campos como VARCHAR maximiza a flexibilidade do banco, evita conversões de tipos e melhora o desempenho de leitura em geral.
Está correto o que se afirma em:




Resposta Selecionada:	
Corretaa. 
I e II, apenas.

Respostas:	
Corretaa. 
I e II, apenas.

b. 
I e III, apenas.

c. 
I, II e III.

d. 
II e III, apenas.

e. 
I, apenas.

Comentário da resposta:	
A afirmativa I é correta, pois VARCHAR armazena apenas os caracteres utilizados, enquanto CHAR reserva espaço fixo. Para dados de tamanho variável, como nomes, VARCHAR é mais eficiente em termos de armazenamento e flexibilidade, reduzindo o espaço ocupado em disco.
A afirmativa II é correta, pois usar DATE é a prática ideal para armazenar datas, pois esse tipo é reconhecido nativamente pelo SGBD e permite o uso de funções como DATEDIFF, NOW e YEAR, garantindo integridade sem necessidade de validação externa.
A afirmativa III é incorreta, pois declarar todos os campos como VARCHAR pode comprometer integridade e desempenho. Tipos específicos como INT e DATE permitem validação automática, economia de espaço e otimização de operações como filtros e ordenações.


Pergunta 3
1,25 em 1,25 pontos

Correta	
Durante a administração de bancos de dados relacionais, é comum a utilização de comandos SQL específicos para controlar permissões, gerenciar transações e garantir a integridade das operações. O uso adequado desses comandos depende do contexto de aplicação.
Com base contexto e nos comandos DCL, associe os comandos as situações descritivas.

Comandos

Situações decritivas

I. GRANT
A.Durante uma transação, o usuário marca um ponto de retorno para restaurar parte das alterações, se necessário.

II. ROLLBACK
B.Um administrador concede a um usuário permissão para realizar consultas em uma tabela específica.

III. SAVEPOINT
C.O usuário finaliza uma transação bem-sucedida e confirma permanentemente as alterações no banco de dados

IV. COMMIT
D.Após detectar um erro em uma transação, o sistema desfaz todas as operações realizadas.

Assinale a alternativa que apresenta a associação correta:


Resposta Selecionada:	
Corretaa. 
I-B; II-D; III-A; IV-C.

Respostas:	
Corretaa. 
I-B; II-D; III-A; IV-C.

b. 
I-A; II-C; III-B; IV-D.

c. 
I-C; II-A; III-D; IV-B.

d. 
I-D; II-B; III-C; IV-A.

e. 
I-B; II-A; III-D; IV-C.

Comentário da resposta:	
A sentença A se enquadra no conceito III, pois SAVEPOINT cria um marcador dentro de uma transação que permite reverter apenas parte das operações realizadas. Ele é útil em transações longas, pois permite controle mais refinado e evita o cancelamento completo de todas as ações.
A sentença B se enquadra no conceito I , pois o comando GRANT é utilizado para conceder privilégios a usuários em um banco de dados, como a permissão para executar consultas, inserções ou alterações em tabelas. É essencial na administração de segurança e controle de acesso aos dados.
A sentença C se enquadra no conceito IV, pois COMMIT é usado para finalizar uma transação, gravando de forma definitiva todas as alterações feitas no banco. Após seu uso, as mudanças tornam-se permanentes e visíveis a outros usuários e sessões do sistema de banco de dados.
A sentença D se enquadra no conceito II, pois ROLLBACK é um comando utilizado para desfazer todas as alterações feitas desde o início de uma transação, retornando o banco ao estado anterior. Ele é usado quando ocorre erro ou inconsistência durante a execução de comandos SQL.



Pergunta 4
1,25 em 1,25 pontos

Correta	
Durante a fase de manutenção e documentação de um sistema legado, o analista de banco de dados precisa compreender a estrutura já existente. Para isso, utiliza-se uma ferramenta case que permite a visualização do modelo entidade-relacionamento com base em um banco real previamente construído.
A partir do contexto, assinale a alternativa que reconhece a função da engenharia reversa no MySQL Workbench no processo de construção do modelo entidade-relacionamento a partir de uma base existente:
Resposta Selecionada:	
Corretac. 
Permitir que o modelo entidade-relacionamento seja gerado automaticamente com base em um banco de dados físico existente.

Respostas:	
a. 
Substituir a criação manual de diagramas ao importar dados diretamente de planilhas para o modelo relacional.

b. 
Gerar códigos SQL otimizados para inserção de dados em tabelas por meio de comandos visuais arrastáveis.

Corretac. 
Permitir que o modelo entidade-relacionamento seja gerado automaticamente com base em um banco de dados físico existente.

d. 
Criar automaticamente um banco de dados físico a partir de um diagrama entidade-relacionamento previamente desenhado.

e. 
Excluir as dependências entre tabelas e exibir as entidades fracas e fortes com relacionamento no modelo visual.

Comentário da resposta:	
A alternativa "Permitir que o modelo entidade-relacionamento seja gerado automaticamente com base em um banco de dados físico existente" é correta, pois a engenharia reversa permite que o MySQL Workbench conecte-se a um banco já existente e gere automaticamente seu modelo entidade-relacionamento, facilitando a compreensão e documentação da estrutura
As demais alternativas são incorretas:
A alternativa "Excluir as dependências entre tabelas e exibir as entidades fracas e fortes com relacionamento no modelo visual" é incorreta, pois o recurso de engenharia reversa mantém os relacionamentos definidos no banco físico. Excluir as dependências entre tabelas vai contra o objetivo da engenharia reversa, que é representar fielmente a estrutura já existente.
A alternativa "Criar automaticamente um banco de dados físico a partir de um diagrama entidade-relacionamento previamente desenhado" é incorreta, pois refere-se à engenharia direta, que consiste em criar um banco físico a partir de um modelo lógico. A engenharia reversa faz o caminho oposto da engenharia reversa, ou seja, cria o banco a partir de um MER
A alternativa "Gerar códigos SQL otimizados para inserção de dados em tabelas por meio de comandos visuais arrastáveis" é incorreta, pois gerar comandos de inserção ou uso de drag and drop para isso não é o foco da engenharia reversa. Essa funcionalidade está mais ligada à manipulação visual de dados, não à modelagem estrutural
A alternativa "Substituir a criação manual de diagramas ao importar dados diretamente de planilhas para o modelo relacional" é incorreta, pois importar planilhas para modelagem é uma operação diferente, usada em outros contextos. A engenharia reversa trabalha com esquemas prontos de bancos relacionais, não com dados brutos de planilhas





Pergunta 5
1,25 em 1,25 pontos

Correta	
Leia o trecho a seguir:
Durante a construção de consultas em um banco de dados, é possível otimizar o desempenho da recuperação de dados por meio da criação de estruturas auxiliares. Essas estruturas devem ser aplicadas conforme a estratégia de organização dos dados definida pelo projeto do banco.
Em um banco de dados relacional, o índice [preencher 1] define a ordenação física dos dados em disco, enquanto o índice [preencher 2] é utilizado para acesso eficiente a colunas que não participam dessa ordenação.
Nesse contexto, reconheça os termos de [preencher 1] e [preencher 2] que são substituídos por:


Resposta Selecionada:	
Corretac. 
1 - de agrupamento; 2 - secundário

Respostas:	
a. 
1 - de unicidade; 2 - estrangeiro

b. 
1 - de densidade; 2 - disperso

Corretac. 
1 - de agrupamento; 2 - secundário

d. 
1 - de primária; 2 - lógico

e. 
1 – de lógica; 2 - composto

Comentário da resposta:	
A alternativa "1 - de agrupamento; 2 - secundário" é correta, pois o índice de agrupamento determina a ordenação física dos registros na tabela e está associado normalmente à chave primária. O índice secundário não interfere na ordenação física e serve para acelerar o acesso a outras colunas. Ambos são estruturas fundamentais de indexação
As demais alternativas são incorretas:
A alternativa "1 - de unicidade; 2 - estrangeiro" é incorreta, pois "Índice de unicidade " diz respeito à unicidade de valores, mas não necessariamente à ordenação física dos dados. Já “índice estrangeiro” não é uma classificação formal de índice, mas uma referência entre tabelas, e não se aplica diretamente ao mecanismo de indexação.
A alternativa "1 - de densidade; 2 - disperso" é incorreta, pois Índices densos e dispersos são variações relacionadas à estrutura interna de índices, como B-Tree, e não se referem diretamente à distinção entre agrupamento e secundário. A alternativa confunde conceitos de granularidade com função estrutural do índice.
A alternativa "1 - de primária; 2 - lógico" é incorreta, pois "Índice primário" é muitas vezes confundido com chave primária, mas não necessariamente define a ordenação física. "Índice lógico" é uma terminologia ambígua e não corresponde a uma classificação concreta e usual na modelagem de índices relacionais.
A alternativa "1 – de lógica; 2 - composto" é incorreta, pois "Índice lógico" é um termo genérico e pouco utilizado formalmente para definir estrutura de indexação. "Índice composto" refere-se a índices com múltiplas colunas, o que não corresponde ao papel do índice secundário como definido na questão.





Pergunta 6
1,25 em 1,25 pontos

Correta	
No processo de modelagem de um banco de dados relacional, é necessário definir tabelas utilizando o comando CREATE TABLE, contemplando tipos de dados, restrições de integridade e relacionamentos entre tabelas. Considere a criação da tabela Aluno, com os seguintes requisitos:
id_aluno como chave primária;
email com valor único;
id_turma como chave estrangeira;
nome como VARCHAR,
data de nascimento como DATE. 
Frente ao exposto, assinale a alternativa que identifica a sintaxe correta do comando create table:
Resposta Selecionada:	
Corretag. 
CREATE TABLE Aluno (id_aluno INT PRIMARY KEY, nome VARCHAR(100),
email VARCHAR(100) UNIQUE, nascimento DATE, id_turma INT, FOREIGN KEY (id_turma)  REFERENCES Turma(id_turma));

Respostas:	
a. 
CREATE TABLE Aluno (id_aluno INT, nome VARCHAR(100),email UNIQUE, nascimento DATE, id_turma, PRIMARY KEY, FOREIGN KEY REFERENCES Turma);

b. 
REFERENCES Turm

c. 
CREATE TABLE Aluno (id_aluno INT, nome VARCHAR(100),
email UNIQUE, nascimento DATE, id_turma,
PRIMARY KEY, FOREIGN KEY REFERENCES Turm


d. 
CREATE TABLE Aluno (id_aluno INT, nome TEXT, email VARCHAR UNIQUE, nascimento DATA, id_turma INT,FOREIGN (id_turma) REFERENCES Turma);

e. 
;

f. 
CREATE TABLE Aluno (id_aluno PRIMARY KEY INT, nome VARCHAR(100), email VARCHAR(100), nascimento DATE, id_turma INT FOREIGN KEY);

Corretag. 
CREATE TABLE Aluno (id_aluno INT PRIMARY KEY, nome VARCHAR(100),
email VARCHAR(100) UNIQUE, nascimento DATE, id_turma INT, FOREIGN KEY (id_turma)  REFERENCES Turma(id_turma));

Comentário da resposta:	
A alternativa "CREATE TABLE Aluno (id_aluno INT PRIMARY KEY, nome VARCHAR(100), email VARCHAR(100) UNIQUE, nascimento DATE, id_turma INT, FOREIGN KEY (id_turma)  REFERENCES Turma(id_turma)); " é correta, pois a alternativa  define corretamente todos os elementos da tabela: id_aluno como INT e chave primária; nome e email com tipo VARCHAR, sendo email também UNIQUE; nascimento com tipo DATE; e id_turma como chave estrangeira corretamente declarada com FOREIGN KEY (id_turma) REFERENCES Turma(id_turma), estabelecendo vínculo com a tabela Turma.
As demais alternativas são incorretas:
A alternativa "CREATE TABLE Aluno (id_aluno INT, nome TEXT, email VARCHAR UNIQUE, nascimento DATA, id_turma INT,FOREIGN (id_turma) REFERENCES Turma); 
" é incorreta, pois utiliza tipo TEXT para nome, o que é impreciso; VARCHAR é o mais adequado. email VARCHAR UNIQUE está mal formado, pois falta o tamanho do campo. O tipo DATA é inválido em SQL, o correto é DATE. A chave estrangeira está incorretamente declarada: falta a palavra-chave KEY e a referência à tabela relacionada.
A alternativa "CREATE TABLE Aluno (id_aluno INT, nome VARCHAR(100),email UNIQUE, nascimento DATE, id_turma, PRIMARY KEY, FOREIGN KEY REFERENCES Turma);  " é incorreta, pois a declaração de email UNIQUE está errada, pois o campo não tem tipo definido. id_turma não tem tipo atribuído. As definições de chave primária e chave estrangeira estão incompletas e incorretas, sem especificação de colunas nem da tabela referenciada, comprometendo a estrutura lógica da tabela.
A alternativa " CREATE TABLE Aluno (id_aluno PRIMARY KEY INT, nome VARCHAR(100), email VARCHAR(100), nascimento DATE, id_turma INT FOREIGN KEY);  " é incorreta, pois a sintaxe id_aluno PRIMARY KEY INT está incorreta; o tipo vem antes da restrição. A cláusula id_turma INT FOREIGN KEY está mal estruturada, pois falta a referência explícita à tabela e à coluna relacionada, essencial para definir corretamente uma chave estrangeira em SQL.
A alternativa "CREATE TABLE Aluno (id_aluno INT, nome VARCHAR(100),email VARCHAR(100), nascimento DATE, id_turma INT, UNIQUE KEY(email), FK(id_turma));  " é incorreta, pois o uso de UNIQUE KEY(email) não é reconhecido em SQL padrão para essa finalidade básica; o correto seria apenas email VARCHAR(100) UNIQUE. A notação FK(id_turma) não é válida para definir chave estrangeira. A ausência de FOREIGN KEY e da cláusula REFERENCES torna a definição incompleta






Pergunta 7
1,25 em 1,25 pontos

Correta	
Uma empresa de logística marítima está desenvolvendo um sistema para rastrear cargas e embarcações. Foram inicialmente criadas as tabelas Navio (com id_navio, nome) e Carga (com id_carga, descricao, peso). Após testes, surgiram novas necessidades de integridade entre essas tabelas.
Com relação a este contexto e sobre o conteúdo estudado, julque as afirmativas a seguir:
I. Para garantir que o campo descricao da tabela Carga não contenha valores duplicados, pode-se utilizar: ALTER TABLE Carga ADD CONSTRAINT unq_descricao UNIQUE (descricao);
II. Para tornar o campo id_navio da tabela Navio chave primária, deve-se usar: ALTER TABLE Navio ALTER COLUMN id_navio SET PRIMARY KEY;
III. Para vincular uma carga a um navio, adicionando a coluna id_navio na tabela Carga como chave estrangeira, é correto usar: ALTER TABLE Carga ADD CONSTRAINT fk_navio FOREIGN KEY (id_navio) REFERENCES Navio(id_navio);
Está correto o que se afirma em:




Resposta Selecionada:	
Corretae. 
I e III, apenas.

Respostas:	
a. 
I, apenas.

b. 
I e II, apenas.

c. 
I, II e III.

d. 
II e III, apenas.

Corretae. 
I e III, apenas.

Comentário da resposta:	
A afirmativa I é correta, pois a restrição UNIQUE impede que duas cargas tenham exatamente a mesma descrição, evitando ambiguidades no sistema. Por exemplo, se a empresa tenta registrar duas cargas com descricao = 'Contêiner Refrigerado 40 pés', o sistema gerará erro. O comando a ser usado é:  ALTER TABLE Carga ADD CONSTRAINT unq_descricao UNIQUE (descricao); A sintaxe ALTER COLUMN ... SET PRIMARY KEY não é válida no SQL padrão. O correto seria usar: ALTER TABLE Navio ADD CONSTRAINT pk_navio PRIMARY KEY (id_navio);
Esse comando garante que cada navio cadastrado no sistema tenha um id_navio único, como por exemplo: NAV001, NAV002, representando identificadores distintos para embarcações como "Navio Atlântico" e "Navio Poseidon". 
A afirmativa II é incorreta, pois não segue a sintaxe válida para definição de chave primária em SQL padrão nem é aceita pelos principais SGBDs como PostgreSQL, MySQL, SQL Server, Oracle ou SQLite. O erro está na tentativa de aplicar uma restrição de chave primária diretamente com ALTER COLUMN, o que não é permitido. 
O comando ALTER COLUMN é utilizado para modificar propriedades da coluna, como tipo de dado, tamanho ou permitir/impedir valores nulos — não para adicionar restrições como PRIMARY KEY. For ma correta ALTER TABLE Navio ADD CONSTRAINT pk_navio PRIMARY KEY (id_navio);
A afirmativa III é correta, pois para registrar qual navio transportará determinada carga, é necessário relacionar a tabela Carga à tabela Navio por meio de uma chave estrangeira. Primeiro, adiciona-se a coluna:
ALTER TABLE Carga ADD COLUMN id_navio VARCHAR(10); Depois, define-se a integridade referencial com:
ALTER TABLE Carga ADD CONSTRAINT fk_navio FOREIGN KEY (id_navio) REFERENCES Navio(id_navio);
Assim, ao associar a carga CAR123 ao navio NAV002, o sistema garante que esse NAV002 realmente exista na tabela Navio.







Pergunta 8
0 em 1,25 pontos

Incorreta	
Em sistemas de bancos de dados relacionais, o uso correto de tipos de dados numéricos influencia diretamente a precisão, desempenho e integridade das informações armazenadas. Essa escolha se torna ainda mais crítica em domínios onde valores monetários e relacionamentos entre entidades estão envolvidos.
Com relação a este contexto, avalie as asserções a seguir e a relação proposta entre elas:
 I. No cadastro de lançamentos financeiros de uma entidade fraca associada a uma conta bancária (entidade forte), deve-se evitar o uso do tipo FLOAT para representar valores monetários, optando-se por DOUBLE ou tipos mais precisos.
PORQUE
II. Isso ocorre porque o tipo FLOAT pode introduzir imprecisão na representação de números decimais, o que é inadequado para registros financeiros que exigem exatidão nos cálculos, especialmente quando os dados são inseridos por meio de comandos como INSERT INTO.
 
A respeito dessas asserções, assinale a alternativa correta:





Resposta Selecionada:	
Incorretac. 
A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.

Respostas:	
Corretaa. 
As asserções I e II são proposições verdadeiras, e a II é uma justificativa da I.

b. 
A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.

c. 
A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.

d. 
As asserções I e II são falsas.

e. 
As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa da I.

Comentário da resposta:	
A asserção I é uma proposição verdadeira, pois em sistemas financeiros, entidades fracas como Transacao ou Pagamento, associadas a uma entidade forte como Conta, lidam com valores monetários que exigem alta precisão. O uso do tipo FLOAT é desaconselhado, pois pode gerar inconsistências. Tipos como DOUBLE ou DECIMAL são mais apropriados. Isso implica que o tipo FLOAT armazena números em ponto flutuante binário, o que significa que nem todos os números decimais podem ser representados exatamente em binário.  Por exemplo, valores como 0.1, 0.2 ou 199.99 não têm representação binária exata, e são aproximados no armazenamento.  Essas aproximações podem causar erros de arredondamento em operações matemáticas, como somas e subtrações. Exemplo: ao somar 0.1 + 0.2 com FLOAT, o resultado pode ser 0.30000000000000004.
Esses erros afetam diretamente: Comparações (WHERE valor = 199.99 pode falhar); Cálculos de totais (SUM, AVG); Relatórios financeiros, faturas e balanços contábeis.
A asserção II é uma proposição verdadeira, pois FLOAT utiliza representação binária de ponto flutuante com precisão limitada, o que pode resultar em erros de arredondamento em operações simples. Isso compromete a exatidão de registros como INSERT INTO Transacao VALUES (...). DOUBLE oferece maior precisão e é preferível para cálculos financeiros.
A asserção II é uma justificado da I, pois podemos exemplificar a situação proposta através do exemplo aplicado a seguir:
Entidade forte: Conta(id_conta, titular)
Entidade fraca: Transacao(id_transacao, valor, data, id_conta)
valor não deve ser do tipo FLOAT, pois operações como:
INSERT INTO Transacao (valor) VALUES (199.99);
podem gerar valores armazenados como 199.98999..., causando imprecisão contábil. 
O ideal é usar DOUBLE ou DECIMAL(10,2).

