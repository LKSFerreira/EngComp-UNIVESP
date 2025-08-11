Perfeito — vou responder como você pediu: enunciado completo, alternativas (a–e), a **única** alternativa correta marcada, e uma justificativa técnica curta **oculta** com `<details>` sob cada alternativa. No final incluo o **gabarito** consolidado.

---

# Pergunta 1

Sistemas de informação dependem da modelagem conceitual para garantir que os dados representem corretamente as regras de negócio. Essa modelagem envolve identificar entidades, seus atributos e os relacionamentos possíveis entre elas no ambiente a ser sistematizado
• A entidade Professor tem os valores: {Carlos, Denise, Hugo}
• A entidade Disciplina tem os valores: {BD1, POO, Redes}
• A entidade Curso tem os valores: {ADS, SI, RedesComp}

Com relação a este tema e o cenário anterior, compreenda as afirmativas a seguir:
I. O relacionamento apresentado extraído do cenário "Professor ministra Disciplina" é um exemplo simples de relacionamento binário.
II. A associação "Professor ministra Disciplina no Curso" pode ser modelada com três relacionamentos binários, sem alterar o significado.
III. Um relacionamento entre Professor, Disciplina e Curso representa um relacionamento ternário com possibilidade de conter atributos como “semestre".

Está correto o que se afirma em:

a. I e III, apenas.

<details><summary>Resposta</summary>**Correta.**  
I é verdadeira — “Professor ministra Disciplina” envolve duas entidades (binário). III é verdadeira — a associação entre as três é um relacionamento ternário e pode ter atributos (ex.: semestre, ano, sala). II é falsa: decompor um relacionamento ternário em três relações binárias (`Professor–Disciplina`, `Professor–Curso`, `Disciplina–Curso`) geralmente perde a informação sobre a dependência conjunta (qual professor ministra qual disciplina em qual curso) — portanto não preserva o significado completo.</details>

b. II e III, apenas.

<details><summary>Resposta</summary>**Incorreta.** II é incorreta (ver justificativa acima).</details>

c. I e II, apenas.

<details><summary>Resposta</summary>**Incorreta.** II é incorreta; I é verdadeira mas falta III.</details>

d. I, apenas.

<details><summary>Resposta</summary>**Incorreta.** III também é correta (o caso ternário com atributos é aplicável).</details>

e. I, II e III.

<details><summary>Resposta</summary>**Incorreta.** II é incorreta — não se pode sempre substituir um ternário por três binários sem perda semântica.</details>

---

# Pergunta 2

Modelagens conceituais de dados são fundamentais para estruturar informações de forma compreensível e eficiente. …
Com base no contexto, associe os elementos do MER e exemplos de modelagem conceitual.

**Teóricos — Ideias sobre a Língua**

I. Atributo multivalorado
II. Atributo derivado
III. Entidade fraca
IV. Atributo composto

A. Dispositivo sem endereço IP fixo, dependente de outro nó
B. Lista de protocolos suportados por um roteador
C. Endereço com campos rua, número, cidade e estado
D. Latência média calculada a partir de logs históricos

Assinale a alternativa que apresenta a associação correta:

a. I-B; II-A; III-D; IV-C.

<details><summary>Resposta</summary>**Incorreta.** II e III trocadas; II (atributo derivado) deveria mapear para D e III (entidade fraca) para A.</details>

b. I-B; II-D; III-A; IV-C.

<details><summary>Resposta</summary>**Correta.**  
I-B: atributo multivalorado → lista de protocolos (vários valores possíveis).  
II-D: atributo derivado → latência média (calculada a partir de outros dados).  
III-A: entidade fraca → dispositivo dependente (sem IP fixo, depende de outro nó).  
IV-C: atributo composto → endereço composto por rua, número, cidade, estado.</details>

c. I-D; II-B; III-C; IV-A.

<details><summary>Resposta</summary>**Incorreta.** Associação trocada; por exemplo D é derivado (II), não multivalorado (I).</details>

d. I-C; II-A; III-D; IV-B.

<details><summary>Resposta</summary>**Incorreta.** Combinações incorretas (p.ex. endereço é composto → IV, não I).</details>

e. I-A; II-C; III-B; IV-D.

<details><summary>Resposta</summary>**Incorreta.** Trocas incorretas (entidade fraca não é lista de protocolos, etc.).</details>

---

# Pergunta 3

Em organizações que lidam com grande volume de informações, ...
Diante do contexto, assinale a alternativa correta com relação a definição técnica de um banco de dados.

a. Um banco de dados é uma planilha com dados salvos digitalmente, desde que seja utilizada para armazenar informações em formato tabular.

<details><summary>Resposta</summary>**Incorreta.** Planilha é uma forma simples de armazenamento tabular, mas definição técnica de BD é mais ampla (coleção estruturada e relacionada).</details>

b. Um banco de dados é formado por dados armazenados de forma aleatória, desorganizados, bastando estarem disponíveis em um servidor na rede.

<details><summary>Resposta</summary>**Incorreta.** BD pressupõe organização/estrutura; não é apenas dados aleatórios em servidor.</details>

c. Um banco de dados é o sistema que executa comandos para armazenar dados, ignorando o conteúdo ou a organização dos dados em si.

<details><summary>Resposta</summary>**Incorreta.** Isso descreve parcialmente um SGBD (sistema), mas a definição está incorreta ao dizer que ignora organização — SGBD gerencia estrutura e integridade.</details>

d. Um banco de dados é uma coleção estruturada e relacionada de dados, projetada para suportar múltiplas aplicações e garantir integridade e acesso eficiente.

<details><summary>Resposta</summary>**Correta.** Esta alternativa descreve tecnicamente um BD: dados organizados/relacionados, com objetivo de integridade e acesso eficiente para várias aplicações.</details>

e. Um banco de dados é qualquer conjunto de arquivos digitais utilizados para arquivamento, mitigando a necessidade de estrutura ou relacionamento entre os dados.

<details><summary>Resposta</summary>**Incorreta.** Arquivos digitais isolados não constituem, necessariamente, um BD se não houver estrutura/relacionamento/gerenciamento adequados.</details>

---

# Pergunta 4

Um sistema acadêmico armazena informações sobre estudantes e matrículas. A entidade Aluno possui os valores {João, Carla, Tiago}, e a entidade Matrícula possui os valores {M1, M2, M3}. ...

I. A entidade Aluno tem participação total no relacionamento com Matrícula, pois todos os alunos (João, Carla e Tiago) possuem ao menos uma matrícula registrada.
PORQUE
II. a entidade Matrícula tem participação parcial no relacionamento com Aluno, pois M2 não está associada a nenhum dos alunos listados.

A respeito dessas asserções, assinale a alternativa correta:

a. A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.

<details><summary>Resposta</summary>**Incorreta.** II foi apresentada como fato (M2 não associado), então II não é necessariamente falsa.</details>

b. Asserções I e II são proposições verdadeiras, mas a II não é uma justificativa da I.

<details><summary>Resposta</summary>**Correta.**  
I: verdadeira (por hipótese todos os alunos têm ao menos uma matrícula).  
II: verdadeira (se M2 não está associada, então nem todas as matrículas participam → participação parcial de Matrícula). Porém II não justifica I: a condição sobre Matrícula (existência de M2 isolada) não explica por que todos os alunos têm matrícula; ou seja, II não é justificativa lógica de I.</details>

c. A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.

<details><summary>Resposta</summary>**Incorreta.** I foi dada como verdadeira no enunciado (todos os alunos possuem ao menos uma matrícula), logo não é falsa.</details>

d. Asserções I e II são falsas.

<details><summary>Resposta</summary>**Incorreta.** Ambas são consistentes como verdadeiras com as informações apresentadas.</details>

e. Asserções I e II são proposições verdadeiras, e a II é uma justificativa da I.

<details><summary>Resposta</summary>**Incorreta.** II não justifica I — II fala sobre participação de Matrícula, não explica por que todos os alunos possuem matrícula.</details>

---

Perfeito — refiz o teste com cuidado. Abaixo estão as 4 perguntas **com o enunciado completo**, cada alternativa (a–e) e, **após cada alternativa**, a justificativa curta **oculta** dentro de `<details>` conforme você pediu. No final coloquei o **gabarito consolidado**.

---

# Pergunta 1

Em organizações que lidam com grande volume de informações, a estruturação e o acesso eficiente aos dados são fatores importantes para a tomada de decisão, análise estratégica e operação de sistemas computacionais com precisão e confiabilidade, pois dados bem organizados permitem extração rápida de informações relevantes, reduzem redundâncias e inconsistências, e possibilitam integrações entre sistemas, o que favorece a agilidade nos processos e a geração de insights baseados em evidências concretas.

Diante do contexto, assinale a alternativa correta com relação a definição técnica de um banco de dados.

a. Um banco de dados é uma planilha com dados salvos digitalmente, desde que seja utilizada para armazenar informações em formato tabular.

<details><summary>Resposta</summary>**Incorreta.** Uma planilha é um exemplo simples de armazenamento tabular, mas a definição técnica de banco de dados é mais ampla e envolve estrutura, relacionamentos e gerenciamento (SGBD).</details>

b. Um banco de dados é o sistema que executa comandos para armazenar dados, ignorando o conteúdo ou a organização dos dados em si.

<details><summary>Resposta</summary>**Incorreta.** Isso descreve parcialmente um SGBD, mas afirma incorretamente que o sistema “ignora” organização — na verdade o SGBD gerencia estrutura, integridade e organização.</details>

c. Um banco de dados é uma coleção estruturada e relacionada de dados, projetada para suportar múltiplas aplicações e garantir integridade e acesso eficiente.

<details><summary>Resposta</summary>**Correta.** Definição técnica: BD = coleção organizada/relacionada de dados, criada para suportar aplicações, integridade e acesso eficiente.</details>

d. Um banco de dados é formado por dados armazenados de forma aleatória, desorganizados, bastando estarem disponíveis em um servidor na rede.

<details><summary>Resposta</summary>**Incorreta.** Dados “aleatórios/desorganizados” não configuram um banco de dados; BD pressupõe estrutura e organização.</details>

e. Um banco de dados é qualquer conjunto de arquivos digitais utilizados para arquivamento, mitigando a necessidade de estrutura ou relacionamento entre os dados.

<details><summary>Resposta</summary>**Incorreta.** Arquivos isolados não equivalem a um BD se não houver estrutura, esquema e gerenciamento adequados.</details>

---

# Pergunta 2

Modelagens conceituais de dados são fundamentais para estruturar informações de forma compreensível e eficiente. ...

Com base no contexto, associe os elementos do MER e exemplos de modelagem conceitual.

I. Atributo multivalorado
II. Atributo derivado
III. Entidade fraca
IV. Atributo composto

A. Dispositivo sem endereço IP fixo, dependente de outro nó
B. Lista de protocolos suportados por um roteador
C. Endereço com campos rua, número, cidade e estado
D. Latência média calculada a partir de logs históricos

Assinale a alternativa que apresenta a associação correta:

a. I-D; II-B; III-C; IV-A.

<details><summary>Resposta</summary>**Incorreta.** Troca incorreta — por exemplo D (latência média) é derivado (II), não multivalorado (I).</details>

b. I-A; II-C; III-B; IV-D.

<details><summary>Resposta</summary>**Incorreta.** Combinações trocadas; endereço composto mapeia para IV-C, não II-C.</details>

c. I-B; II-D; III-A; IV-C.

<details><summary>Resposta</summary>**Correta.**  
I-B: atributo multivalorado → lista de protocolos (vários valores).  
II-D: atributo derivado → latência média calculada.  
III-A: entidade fraca → dispositivo dependente sem IP fixo.  
IV-C: atributo composto → endereço (rua, número, cidade, estado).</details>

d. I-C; II-A; III-D; IV-B.

<details><summary>Resposta</summary>**Incorreta.** Mistura incorreta dos mapeamentos ( endereço é composto → IV-C, não I-C ).</details>

e. I-B; II-A; III-D; IV-C.

<details><summary>Resposta</summary>**Incorreta.** II e III estão trocadas (II deveria ser D; III deveria ser A).</details>

---

# Pergunta 3

Sistemas de informação dependem da modelagem conceitual para garantir que os dados representem corretamente as regras de negócio. ...

• Professor = {Carlos, Denise, Hugo}
• Disciplina = {BD1, POO, Redes}
• Curso = {ADS, SI, RedesComp}

I. “Professor ministra Disciplina” é exemplo de relacionamento binário.
II. “Professor ministra Disciplina no Curso” pode ser modelada com três relacionamentos binários, sem alterar o significado.
III. Relacionamento entre Professor, Disciplina e Curso é ternário e pode ter atributos como “semestre”.

Está correto o que se afirma em:

a. II e III, apenas.

<details><summary>Resposta</summary>**Incorreta.** II é falsa: decompor um ternário em três binários geralmente perde a informação sobre a dependência conjunta (quem ministra qual disciplina em qual curso).</details>

b. I, II e III.

<details><summary>Resposta</summary>**Incorreta.** II é incorreta conforme acima.</details>

c. I, apenas.

<details><summary>Resposta</summary>**Incorreta.** III também é correta (o caso ternário pode conter atributos como semestre).</details>

d. I e III, apenas.

<details><summary>Resposta</summary>**Correta.** I é verdadeiro (relacionamento simples entre duas entidades). III é verdadeiro (há um relacionamento ternário possível com atributos). II é falso (não se preserva semântica ao separar em três binários).</details>

e. I e II, apenas.

<details><summary>Resposta</summary>**Incorreta.** II é falsa.</details>

---

# Pergunta 4

Ao estruturar os dados de um sistema, a modelagem conceitual deve considerar as estratégias que permitam distinguir de forma precisa cada ocorrência de uma entidade em diversas situações...

I. A chave primária é usada para garantir que cada instância de uma entidade possa ser identificada de forma única, impedindo registros duplicados.

PORQUE

II. a chave estrangeira é usada para identificar unicamente registros de uma tabela, garantindo a unicidade das tuplas em qualquer entidade.

A respeito dessas asserções, assinale a alternativa correta:

a. As asserções I e II são falsas.

<details><summary>Resposta</summary>**Incorreta.** I é verdadeira. II é incorreta conceitualmente.</details>

b. A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.

<details><summary>Resposta</summary>**Incorreta.** Inversão dupla: I é verdadeira; II é falsa (foreign key não garante unicidade).</details>

c. A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.

<details><summary>Resposta</summary>**Correta.** I está correta — PK garante identificação única. II está incorreta — chave estrangeira referencia PK de outra tabela para manter integridade referencial; ela não tem por função garantir a unicidade das tuplas (isso é papel de PK/UNIQUE).</details>

d. As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa da I.

<details><summary>Resposta</summary>**Incorreta.** II não é verdadeira; logo não se aplica.</details>

e. As asserções I e II são proposições verdadeiras, e a II é uma justificativa da I.

<details><summary>Resposta</summary>**Incorreta.** II é falsa; assim não justifica I.</details>

---
