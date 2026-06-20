Pergunta 1
0 em 0 pontos

Correta	
Em uma dependência funcional em que A é funcionalmente dependente de B, como é feita essa representação?

Resposta Selecionada:	
Correta 
B → A

Respostas:	
A → B

A, B

Correta 
B → A

B, A

A x B

Comentário da resposta:	
Você acertou! Essa é a alternativa correta. B → A, representa a dependência funcional em que A é funcionalmente dependente de B.

Pergunta 1
0 em 0 pontos

Correta	
Dependência funcional total é um conceito que está relacionado e que é trabalhado em qual forma normal?

Resposta Selecionada:	
Correta 
Segunda Forma Normal (2NF).

Respostas:	
Primeira Forma Normal (1NF).

Correta 
Segunda Forma Normal (2NF).

Terceira Forma Normal (3NF).

Quarta Forma Normal (4NF).

Forma Normal de Boyce-Codd (BCNF).

Comentário da resposta:	
Você acertou! Essa é a alternativa correta. A dependência funcional total e o atributo primo são conceitos que estão relacionados à Segunda Forma Normal (2NF).

Pergunta 1
0 em 0 pontos

Correta	
Questão referente ao texto-base “Comparing Database Management Systems: MySQL, PostgreSQL, MSSQL Server, MongoDB, Elasticsearch and others”, de AltexSoft Inc. 



Qual é o banco de dados opensource que nasceu a partir de uma ramificação (fork) do MySQL?

Resposta Selecionada:	
Correta 
Maria DB.

Respostas:	
Postgresql.

Correta 
Maria DB.

Oracle.

MongoDB.

Redis.

Comentário da resposta:	
Você acertou! Essa é a alternativa correta. Maria DB é o banco de dados opensource que nasceu a partir de uma ramificação do MySQL.

Pergunta 2
0 em 0 pontos

Correta	
Questão referente ao texto-base Sistemas de banco de dados (seções 14 até 14.7), de Ramez Elmasri e Shamkant B. Navathe. 



Os únicos valores permitidos são valores atômicos (ou indivisíveis). Estamos nos referindo à:

Resposta Selecionada:	
Correta 
Primeira Forma Normal.

Respostas:	
Correta 
Primeira Forma Normal.

Segunda Forma Normal.

Terceira Forma Normal.

Forma Normal de Boyce-Codd.

Quarta Forma Normal.

Comentário da resposta:	
Você acertou! Essa é a alternativa correta. A Primeira Forma Normal afirma que os únicos valores permitidos são valores atômicos.

Considere a seguinte tabela e as seguintes dependências funcionais (FD) especificadas pelo projetista do banco de dados:

ENDERECO

CEP

numero

rua

cidade

estado


FD1: {CEP, numero} → rua
FD2: CEP → rua
FD3: CEP → cidade
FD4: CEP → estado

Informe a qual forma normal a relação acima não obedece:

Resposta Selecionada:	
Correta 
Segunda forma normal.

Respostas:	
Primeira forma normal.

Correta 
Segunda forma normal.

Terceira forma normal.

Forma normal de Boyce-Codd.

Nenhuma das demais alternativas.

Comentário da resposta:	
Justificativa

O fato de ter atributos não primos que dependem parcialmente da chave, impede de estar na 2NF, consequentemente, a 3NF e a BCNF.
Está na 1FN porque não há atributo multivalorado ou tabela aninhada.

Pergunta 3
0 em 0 pontos

Correta	
Considere a seguinte relação e as seguintes dependências funcionais (FD) especificadas pelo projetista do banco de dados:

CARRO

num_serial

modelo

cor

fabricante

preco

FD1: {num_serial} → {modelo, cor, fabricante, preco}

FD2: {modelo, cor, fabricante} → preco

Informe a qual forma normal a relação acima não obedece:

Resposta Selecionada:	
Correta 
Terceira forma normal.

Respostas:	
Primeira forma normal.

Segunda forma normal.

Correta 
Terceira forma normal.

Forma normal de Boyce-Codd.

Nenhuma das demais alternativas.

Comentário da resposta:	
Justificativa

O atributo preço depende do funcionamento de modelo, cor e fabricante, criando uma dependência transitiva para num_serial, dessa forma, não atende à 3NF, consequentemente, a BCNF.
Está na 1FN porque não há nenhum atributo multivalorado ou tabela aninhada.
Está na 2NF porque não há atributos não primos que dependem parcialmente da chave.

Pergunta 4
0 em 0 pontos

Correta	
Considere a tabela “AVIAO” descrita a seguir e as dependências funcionais estabelecidas para esse esquema de relação:

AVIAO (id_aviao, id_voo, nome_aviao, autonomia, de, para, distancia, hora_saida, hora_chegada)
DF1 - id_aviao → {nome_aviao, autonomia}
DF2 - id_voo → {de, para, distancia, hora_saida, hora_chegada}

Responda a normalização correta do esquema para atender à segunda forma normal (2NF):

Resposta Selecionada:	
Correta 
AVIAO_NOVO(id_aviao, nome_aviao, autonomia);
VOO(id_voo, de, para, distancia, hora_saida, hora_chegada, idav);
#idav referência id_aviao em AVIAO_NOVO.

Respostas:	
AVIAO_NOVO(id_aviao, nome_aviao, autonomia);
LOCAL(id_voo, de, para);  #id_voo referência id_aviao em AVIAO_NOVO
TEMPO(id_voo, distancia, hora_saida, hora_chegada)
#id_voo referência id_aviao em AVIAO_NOVO.

Correta 
AVIAO_NOVO(id_aviao, nome_aviao, autonomia);
VOO(id_voo, de, para, distancia, hora_saida, hora_chegada, idav);
#idav referência id_aviao em AVIAO_NOVO.

AVIAO_NOVO(id_aviao, nome_aviao, autonomia);
VOO(id_voo, de, para, distancia, hora_saida, hora_chegada).

AVIAO_NOVO(id_aviao);
VOO(id_voo, nome_aviao, autonomia, de, para, distancia, hora_saida, hora_chegada).

Comentário da resposta:	
Justificativa

Para atender à 2NF é necessário que todas os atributos não primos dependentes de parte da chave sejam decompostos. 
Dessa forma, utilizou-se as dependências funcionais quebrando a tabela em duas.

Pergunta 1
1,25 em 1,25 pontos

Correta	
A escolha do banco de dados apropriado depende de vários fatores como estrutura dos dados, volume de leitura e escrita, latência e tolerância a falhas. Em arquiteturas distribuídas e aplicações modernas, diferentes tecnologias NoSQL são avaliadas conforme requisitos específicos.
Com base no contexto, e as tecnologias de bancos de dados NoSQL MongoDB, Redis e Cassandra em diferentes contextos de uso, julgue as afirmativas a seguir:
I. Redis é indicado para aplicações que exigem altíssima velocidade de leitura e escrita, como cache em memória e filas de mensagens.
II. Cassandra é ideal para cenários com grande volume de escrita distribuída, pois garante alta disponibilidade mesmo com falhas em nós.
III. MongoDB adota exclusivamente modelo de chave-valor, sendo mais eficiente que Cassandra e Redis em operações de dados binários puros.
Está correto o que se afirma em:




Resposta Selecionada:	
Corretab. 
I e II, apenas.

Respostas:	
a. 
I, II e III.

Corretab. 
I e II, apenas.

c. 
I, apenas.

d. 
I e III, apenas.

e. 
II e III, apenas.

Comentário da resposta:	
A afirmativa I é correta, pois Redis é uma estrutura de dados em memória extremamente rápida, indicada para cache, filas, sessões e pub/sub. Seu desempenho em leitura e escrita é superior a muitos bancos, sendo frequentemente usado como camada de suporte em aplicações de alta performance.
A afirmativa II é correta, pois Cassandra foi projetado para escrita massiva distribuída. Utiliza um modelo baseado em coluna larga e arquitetura peer-to-peer, oferecendo alta disponibilidade e tolerância a falhas, sendo ideal para grandes volumes de dados com replicação eficiente.
A afirmativa III é incorreta, pois MongoDB utiliza modelo de documento(JSON/BSON), não de chave-valor. Além disso, Cassandra e Redis são mais indicados para manipulação pura de dados binários. MongoDB se destaca na flexibilidade de dados semiestruturados, não no tratamento binário puro.


Pergunta 2
1,25 em 1,25 pontos

Correta	
A normalização é uma técnica aplicada ao projeto lógico de bancos de dados com o objetivo de reduzir redundâncias e dependências inadequadas entre os dados. O conhecimento das regras que regem as formas normais é essencial para a construção de modelos eficientes e consistentes.
 
Com relação a este contexto, avalie as asserções a seguir e a relação proposta entre elas:
I. Uma relação está em 2FN quando os atributos não chave dependem funcionalmente de parte da chave primária composta.
PORQUE
II. A 2FN é aplicada quando todos os atributos não chave são independentes da chave primária completa e possuem múltiplos valores por registro.
A respeito dessas asserções, assinale a alternativa correta:





Resposta Selecionada:	
Corretaa. 
As asserções I e II são falsas.

Respostas:	
Corretaa. 
As asserções I e II são falsas.

b. 
As asserções I e II são proposições verdadeiras, e a II é uma justificativa da I.

c. 
A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.

d. 
A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.

e. 
As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa da I.

Comentário da resposta:	
A asserção I  é uma proposição falsa, pois a definição apresentada é incorreta. A 2FN elimina dependências parciais, ou seja, atributos que dependem apenas de parte da chave composta violam a 2FN. Portanto, afirmar que a presença dessa dependência indica que a relação está em 2FN é um erro conceitual.
A asserção II  é uma proposição falsa a 2FN não trata de atributos com múltiplos valores por registro (isso é uma violação da 1FN). Além disso, a afirmação mistura critérios da 1FN e da 2FN de forma confusa. O erro complementa o da proposição I ao tratar de uma questão distinta, mas relacionada à estrutura correta da tabela.

Pergunta 3
1,25 em 1,25 pontos

Correta	
Leia o texto a seguir:
Empresas lidam com diferentes necessidades de armazenamento e consulta de dados. A escolha entre bancos relacionais e não relacionais depende de fatores como estrutura dos dados, escalabilidade, consistência e necessidade de resposta em tempo real. Avaliar corretamente esses critérios é essencial.
Neste contexto, para um sistema de gerenciamento de estoque com regras rígidas e integridade referencial, recomenda-se o [preencher 1]. Já para um sistema de análise de redes sociais com dados semiestruturados e alta escalabilidade, o mais adequado é o [preencher 2].
Nesse contexto, reconheça os termos de [preencher 1] e [preencher 2] que são substituídos por:


Resposta Selecionada:	
Corretae. 
1 - banco relacional; 2 - banco não relacional.

Respostas:	
a. 
1 - banco distribuído; 2 - banco tabular relacional.

b. 
1 - banco não relacional; 2 - banco relacional.

c. 
1 - banco não relacional; 2 - banco não relacional.

d. 
1 - banco relacional; 2 - banco relacional.

Corretae. 
1 - banco relacional; 2 - banco não relacional.

Comentário da resposta:	
A alternativa "1 - banco relacional; 2 - banco não relacional." ´e incorreta, pois Bancos relacionais são ideais para sistemas estruturados e com regras rígidas como estoques. Já bancos não relacionais (NoSQL) são indicados para grandes volumes de dados semiestruturados e escaláveis, como redes sociais.
As demais alternativas são incorretas.
A alternativa "1 - banco não relacional; 2 - banco relacional" é incorreta, pois Inverte  os papéis: um banco não relacional para controle de estoque compromete a integridade e consistência dos dados; já um banco relacional para dados de redes sociais pode não oferecer a escalabilidade desejada.
 
A alternativa "1 - banco não relacional; 2 - banco não relacional" é incorreta, pois embora bancos não relacionais atendam bem à análise de redes sociais, sua aplicação em sistemas com fortes restrições de integridade (como estoques) é inadequada, pois carecem de suporte completo a relacionamentos e transações.
A alternativa "1 - banco relacional; 2 - banco relacional" é incorreta, pois Bancos relacionais não são os mais adequados para grandes volumes de dados semiestruturados e de rápida mutação como em redes sociais, pois sua estrutura rígida limita desempenho e escalabilidade horizontal.
A alternativa "1 - banco distribuído; 2 - banco tabular relacional" é incorreta, pois  são termos ambíguos ou imprecisos no contexto da questão. Um banco distribuído pode ser relacional ou não, e “tabular relacional” é redundante. Ambos os termos não atendem ao cenário técnico descrito.






Pergunta 4
1,25 em 1,25 pontos

Correta	
A modelagem de dados exige atenção à estrutura lógica das tabelas. Para evitar inconsistências e redundâncias, os projetistas aplicam regras conhecidas como formas normais, que estabelecem critérios para a organização dos dados nas tabelas de forma eficiente e coerente, e contribuem para a integridade das informações, facilitando a manutenção, minimizando duplicações e promovendo a clareza na representação dos relacionamentos entre os dados.
Com base no apresentado, assinale alternativa que identifica uma característica da 1FN ao projetar uma tabela relacional:
Resposta Selecionada:	
Corretae. 
Todos os atributos devem conter valores atômicos, ou seja, indivisíveis, sem grupos repetitivos ou multivalorados.

Respostas:	
a. 
A tabela deve conter pelo menos uma chave estrangeira para garantir integridade referencial entre entidades distintas.

b. 
É necessário garantir que todas as colunas sejam preenchidas com valores distintos, sem repetições em nenhuma linha.

c. 
Os dados devem estar ordenados de acordo com a chave primária definida na estrutura da tabela relacional.

d. 
A relação deve ser dividida em múltiplas tabelas para eliminar transbordo de registros em arquivos de dados binários

Corretae. 
Todos os atributos devem conter valores atômicos, ou seja, indivisíveis, sem grupos repetitivos ou multivalorados.

Comentário da resposta:	
A alternativa "Todos os atributos devem conter valores atômicos, ou seja, indivisíveis, sem grupos repetitivos ou multivalorados" é correta, pois a 1ª Forma Normal exige que todos os atributos da tabela contenham valores atômicos, ou seja, que não sejam compostos nem contenham listas ou repetições. Essa atomicidade é fundamental para garantir a integridade e a coerência do modelo relacional.
As demais alternativas são incorretas.
A alternativa "A tabela deve conter pelo menos uma chave estrangeira para garantir integridade referencial entre entidades distintas" é incorreta, pois a presença de chave estrangeira não é uma exigência da 1FN, mas sim relacionada à integridade referencial entre tabelas, que aparece em etapas posteriores da modelagem e da normalização, como na 3FN ou em dependências entre relações.
A alternativa "Os dados devem estar ordenados de acordo com a chave primária definida na estrutura da tabela relacional" é incorreta, pois a ordenação dos dados na tabela não é uma exigência de nenhuma forma normal. O modelo relacional trabalha com conjuntos não ordenados de tuplas. A 1FN trata da estrutura dos atributos, não da ordenação dos registros.
A alternativa "É necessário garantir que todas as colunas sejam preenchidas com valores distintos, sem repetições em nenhuma linha" é incorreta, pois a 1FN não exige que todas as colunas contenham valores distintos. Podem haver repetições desde que os dados sejam atômicos. Unicidade de valores está mais relacionada à definição de chaves primárias do que à normalização em si.
A alternativa "A relação deve ser dividida em múltiplas tabelas para eliminar transbordo de registros em arquivos de dados binários" é incorreta, pois dividir uma relação para evitar transbordo em arquivos é uma questão de implementação física, e não uma diretriz da 1FN. A 1FN trata de conceitos lógicos de modelagem, não da estruturação física do armazenamento.





Pergunta 5
1,25 em 1,25 pontos

Correta	
Empresas avaliam tecnologias de banco de dados com base em critérios técnicos e operacionais. Essas avaliações consideram tanto desempenho quanto adoção no mercado, confiabilidade e suporte. Ferramentas de benchmark ajudam nesse processo, promovendo decisões mais fundamentadas, e permitem comparar diferentes sistemas de forma objetiva, com base em métricas padronizadas que abrangem aspectos como tempo de resposta, escalabilidade, disponibilidade de recursos e popularidade no uso corporativo.
Com base nas métricas utilizadas para avaliar a presença de SGBDs no mercado, assinale a alternativa que identifica um critério para adoção de um Sistema Gerenciador de Banco de dados (ferramenta DB-Score-Engine).
Resposta Selecionada:	
Corretaa. 
Participação de mercado baseada em implementações empresariais e ambientes produtivos ativos.

Respostas:	
Corretaa. 
Participação de mercado baseada em implementações empresariais e ambientes produtivos ativos.

b. 
Nível de engajamento da base de usuários nas redes sociais mantidas pelo fabricante do SGBD.

c. 
Frequência de atualizações dos plugins de administração lançados pela comunidade de usuários.

d. 
Quantidade de tutoriais e vídeos disponíveis no YouTube sobre o SGBD avaliado.

e. 
Número de programadores cadastrados em fóruns online que mencionam o nome do banco de dados.

Comentário da resposta:	
A alternativa "Participação de mercado baseada em implementações empresariais e ambientes produtivos ativos." é correta, pois a participação de mercado com base em implementações reais e ambientes de produção é um critério objetivo e relevante. O DB-Score-Engine utiliza dados consolidados de uso corporativo para avaliar a penetração dos SGBDs no mercado.
As demais alternativas são incorretas:
A alternativa "Quantidade de tutoriais e vídeos disponíveis no YouTube sobre o SGBD avaliado" é incorreta, pois a quantidade de tutoriais no YouTube pode indicar popularidade, mas não representa uma métrica oficial ou padronizada para avaliar o uso no mercado. É uma medida informal e não confiável para benchmarks.
A alternativa "Número de programadores cadastrados em fóruns online que mencionam o nome do banco de dado" é incorreta, pois  a menção em fóruns indica comunidade ativa, mas não comprova adoção de mercado. A ferramenta DB-Score-Engine foca em métricas mais objetivas, como volume de uso em ambientes produtivos.
A alternativa "Frequência de atualizações dos plugins de administração lançados pela comunidade de usuários" é incorreta, pois atualizações de plugins são importantes para a manutenção, mas não representam um critério direto para avaliar o uso ou adoção de um SGBD no mercado real, especialmente em ambientes empresariais.
 
A alternativa "Nível de engajamento da base de usuários nas redes sociais mantidas pelo fabricante do SGBD" é incorreta, pois engajamento em redes sociais mostra popularidade, mas não indica presença efetiva no mercado. Métricas de benchmark como as do DB-Score-Engine baseiam-se em indicadores técnicos e de adoção institucional.






Pergunta 6
1,25 em 1,25 pontos

Correta	
O mercado oferece diversas soluções de bancos de dados, cada uma com características próprias quanto ao desempenho, licenciamento, funcionalidades e suporte. Entender as diferenças entre esses produtos é fundamental para a escolha adequada conforme os requisitos de projetos distintos.
Com base no contexto, assinale a alternativa que compreende a relação entre os produtos de banco de dados e uma característica que os diferencia dos demais no mercado:
Resposta Selecionada:	
Corretac. 
Oracle – Suporte nativo a partições de tabelas em múltiplos níveis com paralelismo automático de consultas.

Respostas:	
a. 
MySQL – Suporte nativo e robusto a regras e procedimentos armazenados com controle transacional avançado.

b. 
SQL Server – Licença gratuita e open source para todos os módulos da edição padrão, sem restrições de uso.

Corretac. 
Oracle – Suporte nativo a partições de tabelas em múltiplos níveis com paralelismo automático de consultas.

d. 
Oracle – Compatibilidade exclusiva com ambientes operacionais baseados em Linux e arquiteturas ARM.

e. 
PostgreSQL – Sistema de licenciamento comercial com cobrança por núcleos de CPU e suporte da Microsoft.

Comentário da resposta:	
A alternativa "Oracle – Suporte nativo a partições de tabelas em múltiplos níveis com paralelismo automático de consultas" é correta, pois o Oracle Database se destaca por recursos corporativos avançados, incluindo suporte nativo a partições multiescalares e paralelismo automático, otimizando desempenho em grandes volumes de dados — diferencial que o coloca como opção robusta para ambientes corporativos.
 
As demais alternativas são incorretas.
A alternativa "MySQL – Suporte nativo e robusto a regras e procedimentos armazenados com controle transacional avançado" é incorreta, pois embora o MySQL suporte procedimentos armazenados, seu controle transacional é limitado em comparação com outros bancos como PostgreSQL e Oracle. Ele também não é referência em recursos avançados como controle granular de regras.
A alternativa "SQL Server – Licença gratuita e open source para todos os módulos da edição padrão, sem restrições de uso" é incorreta, pois o SQL Server possui uma versão gratuita (Express), mas a edição padrão não é open source e possui limitações e custos. A afirmação mistura características da versão Express com condições inexistentes na edição padrão.
A alternativa "PostgreSQL – Sistema de licenciamento comercial com cobrança por núcleos de CPU e suporte da Microsoft" é incorreta, pois o PostgreSQL é um banco de dados open source, com licença PostgreSQL permissiva e sem custos, sendo mantido por uma comunidade global — e não por licenciamento comercial nem pela Microsoft.
A alternativa "Oracle – Compatibilidade exclusiva com ambientes operacionais baseados em Linux e arquiteturas ARM" é incorreta, pois o Oracle é compatível com vários sistemas operacionais, incluindo Windows e Unix. A afirmação sobre compatibilidade exclusiva com Linux e ARM é incorreta e ignora a diversidade de plataformas suportadas pela Oracle.






Pergunta 7
1,25 em 1,25 pontos

Correta	
A normalização busca eliminar anomalias em bancos de dados relacionais. As formas normais impõem regras baseadas em dependências funcionais. Identificar a forma normal correta em um projeto garante estrutura adequada para atualização, inserção e remoção de dados sem inconsistências.
 
Diante do tema, assinale a alternativa que interpreta a normalização até a Forma Normal de Boyce-Codd (BCNF):

Resposta Selecionada:	
Corretae. 
Em uma relação onde a chave primária é (Curso, Disciplina), e a única dependência funcional é (Curso, Disciplina) → Professor.

Respostas:	
a. 
 Em uma tabela com chave primária (Aluno, Disciplina), existe a dependência funcional Disciplina → Professor.
b. 
Em uma tabela com chave primária (Funcionario, Projeto), o atributo Departamento depende da combinação completa da chave, o que evita qualquer repetição de dados

c. 
Em uma relação com chave primária (CPF, Endereço), há dependência funcional Endereço → Cidade, o que caracteriza multivaloração

d. 
Em uma relação com chave primária (Produto, Loja), há dependência funcional Loja → Endereço, mantendo transição parcial

Corretae. 
Em uma relação onde a chave primária é (Curso, Disciplina), e a única dependência funcional é (Curso, Disciplina) → Professor.

Comentário da resposta:	
A alternativa "Em uma relação onde a chave primária é (Curso, Disciplina), e a única dependência funcional é (Curso, Disciplina) → Professor" é correta, pois a única dependência funcional parte da chave primária completa (Curso, Disciplina) → Professor, o que significa que todas as dependências funcionais têm determinantes que são superchaves. Portanto, a relação está em BCNF.
As demais alternativas são incorretas.
A alternativa "Em uma relação com chave primária (CPF, Endereço), há dependência funcional Endereço → Cidade, o que caracteriza multivaloração" é incorreta, pois embora a chave primária seja composta, a existência de Endereço → Cidade caracteriza uma dependência onde o determinante não é superchave, violando BCNF. Esse é um indicativo de que a relação está apenas na 2FN.
A alternativa "Em uma tabela com chave primária (Aluno, Disciplina), existe a dependência funcional Disciplina → Professor" é incorreta, pois a dependência Disciplina → Professor indica que Disciplina determina Professor, mas Disciplina não é superchave, o que caracteriza violação à BCNF. Essa dependência parcial é típica de relações que estão apenas na 3FN.
A alternativa "Em uma relação com chave primária (Produto, Loja), há dependência funcional Loja → Endereço, mantendo transição parcial" é incorreta, pois a dependência Loja → Endereço mostra que um atributo que não é superchave determina outro. Essa transição indica que a relação ainda apresenta redundância e não atende à BCNF.
 
A alternativa "Em uma tabela com chave primária (Funcionario, Projeto), existe a dependência Projeto → Departamento, gerando redundância" é incorreta, pois a dependência Projeto → Departamento viola a BCNF, pois Projeto não é superchave e está determinando outro atributo, o que pode causar anomalias de atualização e inserção, típico de relações não totalmente normalizadas.






Pergunta 8
1,25 em 1,25 pontos

Correta	
A organização eficiente das entidades em bancos de dados relacionais exige decisões fundamentadas em critérios estruturais. Entre esses critérios, alguns processos são aplicados para melhorar o desempenho, a consistência e a integridade dos dados. Um desses processos é a normalização
Com relação a este tema e a a necessidade de normalizar entidades em um banco de dados, compreenda as afirmativas a seguir:
I. A normalização permite reduzir redundâncias e inconsistências, promovendo maior integridade e organização dos dados.
II. A normalização tem como principal finalidade aumentar a velocidade de leitura e escrita no banco de dados.
III. A normalização facilita a manutenção de dados ao separar conceitos distintos em tabelas independentes com chaves bem definidas.
Está correto o que se afirma em:




Resposta Selecionada:	
Corretaa. 
I e III, apenas.

Respostas:	
Corretaa. 
I e III, apenas.

b. 
I e II, apenas.

c. 
I, apenas.

d. 
II e III, apenas.

e. 
I, II e III.

Comentário da resposta:	
A afirmativa I  é correta, pois a normalização organiza os dados em tabelas menores e relacionadas, reduzindo redundâncias e inconsistências. Isso melhora a integridade dos dados e facilita a manutenção, pois evita duplicações desnecessárias e garante maior consistência nas atualizações e inserções.
A afirmativa II é incorreta, pois embora traga benefícios lógicos, a normalização não visa diretamente otimizar a performance física. Em muitos casos, ela pode até reduzir o desempenho de leitura, pois exige mais junções entre tabelas. Seu foco está na integridade e consistência dos dados, não na velocidade de acesso.
A afirmativa III é correta, pois separar dados em tabelas específicas com chaves bem definidas facilita a manutenção, pois cada tabela representa um conceito único. Essa abordagem modular permite atualizações mais seguras, reduz riscos de inconsistência e melhora o entendimento e controle sobre a estrutura do banco.
