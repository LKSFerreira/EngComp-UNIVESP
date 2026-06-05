# Pergunta 1

A linguagem de programação pode ser definida como uma sequência de códigos e comandos que fornece um resultado escolhido pelo autor. Dessa forma, sobre essa linguagem, analise as afirmativas a seguir.

I) É muito importante e só é viável quando se utiliza a linguagem de programação C.
II) Para se orientar objetos, é recomendável o Java.
III) Existem alguns tipos de linguagem de modelagem, que são, muitas vezes, definidas com baixo nível, um exemplo disso é a Assembly.
IV) Quando se usa um Android, recomenda-se utilizar a linguagem Java.
V) A linguagem de programação C# foi desenvolvida pela Microsoft.

Está correto o que se afirma em:

a. II, III, IV e V, apenas.

<details><summary>Resposta</summary>**Correta.**  
II (Java é recomendável para POO) — verdade.  
III (Assembly é linguagem de baixo nível — classificada como linguagem de programação de baixo nível; a frase é um pouco confusa ao usar “linguagem de modelagem”, mas o sentido esperado é que Assembly é exemplo de linguagem de baixo nível) — verdade.  
IV (Android tradicionalmente usa Java — recomendação histórica/compatibilidade) — verdade (hoje também se recomenda Kotlin, mas Java ainda é válido).  
V (C# foi desenvolvido pela Microsoft) — verdade.</details>

b. I, IV e V, apenas.

<details><summary>Resposta</summary>**Incorreta.**  
I é falsa — a programação não é “só viável” com C; muitas linguagens são viáveis. Portanto essa opção está errada.</details>

c. II, apenas.

<details><summary>Resposta</summary>**Incorreta.**  
III, IV e V também estão corretas; logo escolher apenas II é insuficiente.</details>

d. I, III e IV, apenas.

<details><summary>Resposta</summary>**Incorreta.**  
I é falsa; além disso V (C# → Microsoft) é verdadeiro e não está incluído aqui.</details>

e. II e V, apenas.

<details><summary>Resposta</summary>**Incorreta.**  
Também faltam III e IV, que são verdadeiras no contexto da questão.</details>

---

# Pergunta 2

A linguagem C foi pioneira nos padrões de programação, ou Programação Orientada em Objetos (POO), e deu início a várias outras — dentre elas, podemos ilustrar: C++, Java, C# e Objective C. Sobre esse código, vejamos a descrição a seguir.

```c
#include<stdio.h>
int f(int *a, int n)
{
  if(n <= 0) return 0;
  else if(*a % 2 == 0) return *a + f(a+1, n-1);
  else return *a - f(a+1, n-1);
}
  
int main()
{
  int a[] = {12, 7, 13, 4, 11, 6};
  printf("%d", f(a, 2));
  getchar();
  return 0;
}
```

Esse código C, ao final, aplicará o número:

a. 15

<details><summary>Resposta</summary>**Incorreta.**  
Cálculo correto abaixo torna 15 inválido.</details>

b. 0

<details><summary>Resposta</summary>**Incorreta.**  
Não corresponde ao resultado da recursão para n=2.</details>

c. 3

<details><summary>Resposta</summary>**Incorreta.**  
Não corresponde ao cálculo: veja cálculo correto em (d).</details>

d. 19

<details><summary>Resposta</summary>**Correta.**  
Cálculo: f(a,2) = *a (12, par) + f(a+1,1). f(a+1,1) = 7 (ímpar) - f(a+2,0)=7-0=7. Logo f(a,2)=12+7=19.</details>

e. 8

<details><summary>Resposta</summary>**Incorreta.**  
Também não é o resultado da execução mostrada.</details>

---

# Pergunta 3

Pilhas são listas que só podem ser acessadas de uma extremidade, chamada extremidade superior da pilha. Todas as solicitações, alterações, adições e exclusões de nós só podem ser feitas no nó considerado como o topo da pilha.

Sobre a característica da estrutura linear da pilha em estrutura de dados, avalie se são (V) verdadeiras ou (F) falsas as afirmativas a seguir.

I. (  ) O primeiro dado a entrar na estrutura tem que ser o último a sair.
II. (  ) O primeiro dado a entrar na estrutura tem que ser o primeiro a sair.
III. (  ) O último dado a entrar tem que ser o último a sair.
IV. (  ) O último dado a entrar tem que ser o primeiro a sair.

Assinale a alternativa que apresenta a sequência CORRETA.

a. F - F - V - V

<details><summary>Resposta</summary>**Incorreta.**  
III aqui está marcada V, mas III é falsa para pilha LIFO.</details>

b. V - F - V - F

<details><summary>Resposta</summary>**Incorreta.**  
III está marcada V mas é falsa; IV marcada F mas é verdadeira — incorreto.</details>

c. F - V - V - F

<details><summary>Resposta</summary>**Incorreta.**  
II está marcada V, mas II é falsa (isso seria FIFO), incorreto.</details>

d. V - F - F - V

<details><summary>Resposta</summary>**Correta.**  
I (primeiro a entrar → último a sair) = V (LIFO).  
II (primeiro a entrar → primeiro a sair) = F.  
III (último a entrar → último a sair) = F.  
IV (último a entrar → primeiro a sair) = V.</details>

e. V - V - F - F

<details><summary>Resposta</summary>**Incorreta.**  
II está marcada V aqui, mas II é falsa no conceito de pilha (isso seria fila).</details>

---

# Pergunta 4

Pilhas são listas nas quais o acesso somente pode ser feito em uma das extremidades, denominada topo da pilha. Todas as consultas, alterações, inclusões e remoções de nodos podem ser realizadas somente sobre um nodo, que está na extremidade considerada o topo da pilha.

Com relação às características de Last In, First Out (LIFO) de uma pilha, assinale a alternativa CORRETA.

a. O número 32 é o último dado a entrar e o primeiro a sair

<details><summary>Resposta</summary>**Correta.**  
Na figura o topo está no extremo onde aparece o 32 (último inserido). Em LIFO, o último inserido (32) é o primeiro a ser removido — corresponde exatamente a essa afirmação.</details>

b. O número 32 é o último dado a entrar e o último a sair

<details><summary>Resposta</summary>**Incorreta.**  
Se 32 é o último a entrar, em LIFO ele será o primeiro a sair, não o último.</details>

c. O número 32 é o primeiro dado a entrar e o primeiro a sair

<details><summary>Resposta</summary>**Incorreta.**  
32 não é o primeiro a entrar (está no topo), e em pilha o primeiro a entrar não é o primeiro a sair.</details>

d. O número 34 é o último dado a entrar e o primeiro a sair

<details><summary>Resposta</summary>**Incorreta.**  
34 aparece na base (foi inserido primeiro), logo não é o último a entrar; portanto esta alternativa está errada.</details>

e. O número 34 é o primeiro dado a entrar e o primeiro a sair

<details><summary>Resposta</summary>**Incorreta.**  
Embora 34 seja o primeiro a entrar (base), em LIFO ele não é o primeiro a sair; é o último a sair.</details>

---

# Pergunta 5

Sobre o código a seguir que envolve operações matemáticas básicas, assinale a alternativa correta após a execução do código.

```cpp
// main function
int main()
{
  // Array  to store 5 numbers
  double T[5]; 
  double sum; // to store sum 
  double avg; // to store result
 
  // take input values
  cout << "Enter five numbers: ";
  for (int loop = 0; loop  < 5; ++loop )
  {
    cin >> T[loop ];
  }
  
  // calculate sum value
  sum = 0;
  for (int loop  = 0; loop  < 5; ++loop )
  {
    sum += T[loop ];
  }
 
  // calculate average value
  avg = sum/5;
  
  // display result
  cout << "Sum = " << sum << endl;
  cout << "Average = " << avg << endl;
 
  return 0;
}
```

Suponha que o usuário tenha entrado com os valores 1, 2, 2, 2, 1.

a. loop = 8 T=1.6

<details><summary>Resposta</summary>**Incorreta.**  
“loop = 8” não faz sentido no contexto; saída real mostra sum/avg formatados conforme `cout` (Sum = …).</details>

b. Sum = 8 Average = 1.6

<details><summary>Resposta</summary>**Correta.**  
Soma = 1+2+2+2+1 = 8. Média = 8 / 5 = 1.6. O programa imprime exatamente essas linhas com esses rótulos.</details>

c. loop = 1.6 T=8

<details><summary>Resposta</summary>**Incorreta.**  
Incorreto e sem relação com a saída real do programa.</details>

d. sum = 8 avg = 1.6

<details><summary>Resposta</summary>**Incorreta.**  
Mesmo valores corretos numericamente, porém a questão pede a saída conforme o programa — que usa “Sum =” e “Average =” (maiúsculas e formato). A opção (b) reflete exatamente a saída.</details>

e. loop = 8 T=4

<details><summary>Resposta</summary>**Incorreta.**  
Incorreta/irrelevante no contexto do programa.</details>

---

# Pergunta 6

Filas são ordenamentos de valores em que apenas os dois nós em cada extremidade do ordenamento podem ser acessados. A adição de novos nós é sempre feita no final da lista e as funções de consulta, alteração de dados e exclusão são feitas no início.

(Fila: 11, 50, 34, 25, 43 — da esquerda para a direita)

Com relação às características de First In, First Out (FIFO) de uma fila, assinale a alternativa CORRETA.

a. O número 43 é o primeiro dado a entrar e o primeiro a sair

<details><summary>Resposta</summary>**Incorreta.**  
43 está na direita (último inserido), não foi o primeiro a entrar.</details>

b. O número 11 é o primeiro dado a entrar e o primeiro a sair

<details><summary>Resposta</summary>**Correta.**  
11 está na esquerda (frente da fila): foi o primeiro a entrar e será o primeiro a sair — comportamento FIFO.</details>

c. O número 11 é o último dado a entrar e o primeiro a sair

<details><summary>Resposta</summary>**Incorreta.**  
11 é o primeiro a entrar, não o último.</details>

d. O número 43 é o último dado a entrar e o primeiro a sair

<details><summary>Resposta</summary>**Incorreta.**  
43 é o último a entrar, mas em FIFO ele será o último a sair, não o primeiro.</details>

e. O número 43 é o último dado a entrar e o último a sair

<details><summary>Resposta</summary>**Incorreta.**  
Em FIFO, 43 (último a entrar) será de fato o último a sair — essa afirmação está parcialmente correta, mas a opção b é a que melhor responde à pergunta sobre quem é o primeiro a entrar/primeiro a sair segundo o enunciado (a alternativa pedida quer o correto junto: “primeiro a entrar e primeiro a sair” que é 11).</details>

---

# Pergunta 7

Em qual(is) posição(ões) os elementos de uma pilha são inseridos ou removidos?

* Os elementos são inseridos ou removidos no início da pilha.

<details><summary>Resposta</summary>**Correta.**  
Operações push/pop acontecem no topo (início) da pilha — tanto inserção quanto remoção ocorrem nessa mesma extremidade.</details>

* Os elementos são inseridos no início da pilha e removidos do final da pilha.

<details><summary>Resposta</summary>**Incorreta.**  
Isso descreve comportamento diferente (não é pilha LIFO).</details>

* Os elementos são inseridos arbitrariamente e removidos no início ou no final da pilha.

<details><summary>Resposta</summary>**Incorreta.**  
Pilha não permite inserção arbitrária; apenas no topo.</details>

* Os elementos são inseridos e removidos em posições arbitrárias.

<details><summary>Resposta</summary>**Incorreta.**  
Isto seria um vetor/lista com acesso aleatório, não uma pilha.</details>

* Os elementos são inseridos no início da pilha e removidos arbitrariamente.

<details><summary>Resposta</summary>**Incorreta.**  
Remoções arbitrárias não fazem parte da definição de pilha.</details>

---

# Pergunta 8

Os Tipos Abstratos de Dados (TAD) existem nas linguagens de programação para a criação de tipos de dados que não foram previstos na criação dessa linguagem. São tipos de dados criados no próprio desenvolvimento de alguma aplicação para resolver uma necessidade específica. Os Tipos Abstratos de Dados (\_\_\_\_\_\_\_\_\_) são estruturas de dados que representam os \_\_\_\_\_\_\_\_\_\_\_\_ que não foram desenvolvidos no núcleo das(os) \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ e que, normalmente, são utilizados para alguma necessidade específica no desenvolvimento de aplicações.

Preencha as lacunas escolhendo a alternativa CORRETA.

a. TAD; tipos de dados; softwares

<details><summary>Resposta</summary>**Incorreta.**  
“O núcleo” refere-se à linguagem de programação, não a “softwares”.</details>

b. TAD; tipos de comandos; linguagens de programação

<details><summary>Resposta</summary>**Incorreta.**  
TAD refere-se a tipos de **dados**, não a “tipos de comandos”.</details>

c. DAT; tipos de comandos; linguagens de programação

<details><summary>Resposta</summary>**Incorreta.**  
Sigla incorreta (usa-se TAD) e “tipos de comandos” está errado.</details>

d. TAD; tipos de dados; linguagens de programação

<details><summary>Resposta</summary>**Correta.**  
TAD = Tipos Abstratos de Dados; representam tipos de dados que não fazem parte do núcleo da linguagem de programação e são definidos pelo programador conforme a necessidade.</details>

e. DAT; tipos de dados; empresas

<details><summary>Resposta</summary>**Incorreta.**  
Sigla incorreta e “empresas” não é o termo adequado para completar o enunciado.</details>


Perfeito — vou responder as 8 questões **no formato que você pediu**: repito o enunciado completo, listo as alternativas (a–e), marco a **única alternativa correta** e deixo uma justificativa técnica curta **oculta** com `<details>`. Vamos lá:

---

# Pergunta 1

Sobre a linguagem C++, muitas vezes, podemos usar estratégias para substituir algum item de outra linguagem, como a C, por exemplo.

A figura apresenta duas funções: `scanf("%d", &x)` e `printf("%d", y)`.

Nesse caso, podemos substituir as funções apresentadas, da linguagem C, por quais itens da linguagem C++, respectivamente?

a. `std::cout >> x` e `std::cin >> y`.

<details><summary>Resposta</summary>**Incorreta.** `std::cout` usa o operador `<<` para saída, não `>>`. `scanf` corresponde a `std::cin >> x` (entrada) e `printf` corresponde a `std::cout << y` (saída).</details>

b. `std::cin << x` e `std::cout >> y`.

<details><summary>Resposta</summary>**Incorreta.** Operadores trocados: `std::cin` usa `>>` e `std::cout` usa `<<`.</details>

c. `std::cout >> x` e `std::cin << y`.

<details><summary>Resposta</summary>**Incorreta.** Ambos os operadores/inversões estão errados para cin/cout.</details>

d. `std::cin >> x` e `std::cout << y`.

<details><summary>Resposta</summary>**Correta.** `scanf("%d", &x)` lê um inteiro para `x` → em C++ usa-se `std::cin >> x`. `printf("%d", y)` imprime `y` → em C++ usa-se `std::cout << y`.</details>

e. `std::cout << x` e `std::cin >> y`.

<details><summary>Resposta</summary>**Incorreta.** Inverte entrada/saída: `std::cout << x` imprime `x` (não substitui `scanf`) e `std::cin >> y` lê para `y` (não substitui `printf`).</details>

---

# Pergunta 2

Pilhas são listas nas quais o acesso somente pode ser feito em uma das extremidades, denominada topo da pilha. Todas as consultas, alterações, inclusões e remoções de nodos podem ser realizadas somente sobre um nodo, que está na extremidade considerada o topo da pilha.

Com relação às características de Last In, First Out (LIFO) de uma pilha, assinale a alternativa CORRETA.

a. O número 32 é o último dado a entrar e o último a sair.

<details><summary>Resposta</summary>**Incorreta.** Em LIFO o último a entrar é o primeiro a sair; então se 32 é o último a entrar, não será o último a sair.</details>

b. O número 34 é o primeiro dado a entrar e o primeiro a sair.

<details><summary>Resposta</summary>**Incorreta.** Se 34 foi o primeiro a entrar (base), em LIFO ele será o último a sair, não o primeiro.</details>

c. O número 32 é o primeiro dado a entrar e o primeiro a sair.

<details><summary>Resposta</summary>**Incorreta.** Isso descreve FIFO; não é característica de pilha LIFO.</details>

d. O número 32 é o último dado a entrar e o primeiro a sair.

<details><summary>Resposta</summary>**Correta.** Pela figura, 32 está no topo (inserido por último). Em LIFO (Last In, First Out) o último inserido é o primeiro a ser removido — portanto 32 é último a entrar e primeiro a sair.</details>

e. O número 34 é o último dado a entrar e o primeiro a sair.

<details><summary>Resposta</summary>**Incorreta.** 34 está na base (foi inserido primeiro), não é o último a entrar; seria o último a sair em LIFO.</details>

---

# Pergunta 3

Filas são ordenamentos de valores em que apenas os dois nós em cada extremidade do ordenamento podem ser acessados. A adição de novos nós é sempre feita no final da lista e as funções de consulta, alteração de dados e exclusão são feitas no início.

(Sequência da figura, da esquerda para a direita: 11, 50, 34, 25, 43)

Com relação às características de First In, First Out (FIFO) de uma fila, assinale a alternativa CORRETA.

a. O número 43 é o último dado a entrar e o último a sair.

<details><summary>Resposta</summary>**Incorreta.** 43 é de fato o último a entrar (é o elemento mais à direita), mas em FIFO ele é o último a sair — esta afirmação fala apenas dessa condição, mas a alternativa que indica claramente primeiro a entrar/primeiro a sair é mais diretamente correta conforme o enunciado busca.</details>

b. O número 11 é o último dado a entrar e o primeiro a sair.

<details><summary>Resposta</summary>**Incorreta.** 11 está na frente (esquerda) e é o primeiro a entrar, não o último a entrar.</details>

c. O número 43 é o último dado a entrar e o primeiro a sair.

<details><summary>Resposta</summary>**Incorreta.** Contraditório com FIFO: o último a entrar não é o primeiro a sair em FIFO.</details>

d. O número 11 é o primeiro dado a entrar e o primeiro a sair.

<details><summary>Resposta</summary>**Correta.** Em FIFO (First In, First Out), o elemento que entrou primeiro (11, à esquerda) será o primeiro a sair — corresponde exatamente à definição.</details>

e. O número 43 é o primeiro dado a entrar e o primeiro a sair.

<details><summary>Resposta</summary>**Incorreta.** 43 é o último a entrar (direita), não o primeiro.</details>

---

# Pergunta 4

A linguagem de programação pode ser definida como uma sequência de códigos e comandos que fornece um resultado escolhido pelo autor. Dessa forma, sobre essa linguagem, analise as afirmativas a seguir.

I) É muito importante e só é viável quando se utiliza a linguagem de programação C.
II) Para se orientar objetos, é recomendável o Java.
III) Existem alguns tipos de linguagem de modelagem, que são, muitas vezes, definidas com baixo nível, um exemplo disso é a Assembly.
IV) Quando se usa um Android, recomenda-se utilizar a linguagem Java.
V) A linguagem de programação C# foi desenvolvida pela Microsoft.

Está correto o que se afirma em:

a. II, III, IV e V, apenas.

<details><summary>Resposta</summary>**Correta.** I é falsa (programação não é “só viável” com C). II (POO → Java é recomendável/histórico), III (Assembly é linguagem de baixo nível — a afirmação descreve isso), IV (Android historicamente usa Java como principal linguagem; hoje também Kotlin é recomendado, mas Java continua correto historicamente), V (C# foi desenvolvida pela Microsoft) — II, III, IV e V são verdadeiras.</details>

b. I, III e IV, apenas.

<details><summary>Resposta</summary>**Incorreta.** I é falsa; além disso falta V (C# → Microsoft) que é verdadeira.</details>

c. II e V, apenas.

<details><summary>Resposta</summary>**Incorreta.** Também faltam III e IV que são corretas no contexto dado.</details>

d. II, apenas.

<details><summary>Resposta</summary>**Incorreta.** Há outras afirmativas corretas além de II (III, IV e V também são corretas).</details>

e. I, IV e V, apenas.

<details><summary>Resposta</summary>**Incorreta.** I é falsa; portanto essa combinação está errada.</details>

---

# Pergunta 5

A contiguidade física é intuitiva e natural para estruturas que representam uma relação lógica de ordenação linear entre nós. No entanto, existem estruturas que representam outras relações entre nós, como relações de subordinação, para as quais essa representação física não é intuitiva.

Considerando algumas vantagens da representação das estruturas de dados por contiguidade física, avalie as afirmativas a seguir.

I. Estruturas simples – É adequado para a realização de estruturas simples, principalmente aquelas que utilizam uma sequência física para representação.
II. Privacidade – Qualquer nodo não pode ser diretamente acessado a qualquer momento, é necessário um tipo de chave para realizar o acesso.
III. Representação – Algumas estruturas de dados possuem uma representação lógica semelhante à contiguidade física, simplificando desta maneira a representação dos dados.
IV. Transferência de dados – Como todos os dados estão alocados em bloco, a transferência de dados entre memória principal e secundária fica facilitada.

Está correto que se afirma em:

a. I, apenas

<details><summary>Resposta</summary>**Incorreta.** Além de I, III e IV também são corretas; II é falsa (contiguidade física geralmente permite acesso direto por índice, não “privacidade” como descrito).</details>

b. I, II e IV, apenas

<details><summary>Resposta</summary>**Incorreta.** II é incorreta: contiguidade física normalmente facilita acesso direto (por índice), logo a afirmação II está errada.</details>

c. II, apenas

<details><summary>Resposta</summary>**Incorreta.** II é falsa conforme explicado.</details>

d. I, III e IV, apenas

<details><summary>Resposta</summary>**Correta.** I é verdadeira (adequado para estruturas simples/seqüências), III é verdadeira (algumas estruturas lógicas casam bem com representação contígua), IV é verdadeira (blocos contíguos facilitam transferência/IO). II é falsa (a afirmação está incorreta para representação contígua).</details>

e. I, II, III e IV

<details><summary>Resposta</summary>**Incorreta.** Inclui II que é incorreta.</details>

---

# Pergunta 6

Uma classe é uma unidade básica da Programação Orientada em Objetos (POO). Ela é responsável por encapsular atributos estáticos e comportamento dinâmicos numa caixa.

Sobre os conceitos de classe, analise as afirmativas a seguir.

I. A classe é um modelo usado para criar objetos, também chamados de instâncias.
II. A comunicação com os objetos é feita pelo uso da interface pública do objeto.
III. A complexidade envolvida na realização de uma tarefa fica escondida dentro da classe.

Está correto o que se afirma em:

a. II, apenas.

<details><summary>Resposta</summary>**Incorreta.** II é verdadeira, mas I e III também são verdadeiras.</details>

b. II e III, apenas.

<details><summary>Resposta</summary>**Incorreta.** Faltou I, que é verdadeira (classe → modelo para instâncias).</details>

c. I, II e III.

<details><summary>Resposta</summary>**Correta.** Todas as três são características fundamentais de classe/POO: (I) classe = molde para objetos; (II) interação via interface pública (métodos/atributos públicos); (III) encapsulamento oculta complexidade interna.</details>

d. I e II, apenas.

<details><summary>Resposta</summary>**Incorreta.** III também é verdadeira (encapsulamento/ocultamento de complexidade).</details>

e. I e III, apenas.

<details><summary>Resposta</summary>**Incorreta.** II também é verdadeira (comunicação via interface pública).</details>

---

# Pergunta 7

Quando necessitamos de uma linguagem compilada e bem estruturada, podemos usar a linguagem C. Ela trouxe consigo um avanço na linguagem de programação e influenciou outros tipos de linguagem, como C#, Shell, Java, JavaScript, Perl, PHP, dentre outras. Uma das grandes vantagens da linguagem C é a capacidade de gerar códigos rápidos, ou seja, com tempo de execução baixo.

Assinale a alternativa correta em relação às características da linguagem C++.

a. Portabilidade, geração de código eficiente, confiabilidade, simplicidade, facilidade de uso e regularidade.

<details><summary>Resposta</summary>**Correta (melhor opção).** Entre as alternativas apresentadas, (a) lista características normalmente associadas a linguagens compiladas como C/C++ (portabilidade e geração de código eficiente são atributos esperados). As outras opções contêm afirmações manifestamente incorretas ou imprecisas (por exemplo, que C++ é interpretada, ou misturam conceitos de função com tipos).</details>

b. Não possui tratamento de exceções, é uma linguagem essencialmente interpretada e possui 32 palavras guardadas.

<details><summary>Resposta</summary>**Incorreta.** C++ **possui** tratamento de exceções; não é interpretada (é compilada); número de palavras-reservadas não é essa descrição útil.</details>

c. Os tipos básicos de variáveis para manuseio de caracteres são o char, a string e o printf () e se apoiam na orientação ao objeto.

<details><summary>Resposta</summary>**Incorreta.** `printf()` não é um tipo; `std::string` é tipo de string (não “string” puro em C), e a frase mistura conceitos errados.</details>

d. Abarca ações entendidas pelo programa ao rodar código C e trechos dos códigos que servem para designar uma posição de memória.

<details><summary>Resposta</summary>**Incorreta.** Frase confusa e incorreta conceitualmente; não descreve claramente C++.</details>

e. Critérios ou parâmetros, que fixarão quais são os tipos de dados corretos e definirão regras de adesão com o sistema que está sendo criado.

<details><summary>Resposta</summary>**Incorreta.** Frase vaga e não caracteriza C++ especificamente.</details>

---

# Pergunta 8

Indique a alternativa que apresenta a definição do operador `::` no seguinte código:

```cpp
void Time::setMinute(int minute) {
  this->minute = minute;
}
```

a. Operador de declaração de tipo.

<details><summary>Resposta</summary>**Incorreta.** Não é o termo adequado.</details>

b. Operador de concatenação.

<details><summary>Resposta</summary>**Incorreta.** Não concatena; concatenação de strings usa outros operadores/funções.</details>

c. Operador de resolução de escopo.

<details><summary>Resposta</summary>**Correta.** `::` é o operador de resolução de escopo em C++ (indica que `setMinute` é a função `setMinute` pertencente à classe/namespace `Time`).</details>

d. Operador que inicia a execução.

<details><summary>Resposta</summary>**Incorreta.** Não inicia execução.</details>

e. Operador de definição de tipo.

<details><summary>Resposta</summary>**Incorreta.** Não define tipos; é resolução de escopo.</details>

---

Perfeito — vou responder as 8 questões no formato que você pediu: reproduzo o texto completo da pergunta, listo as alternativas (a–e) e, para **cada alternativa**, coloco a justificativa curta **oculta** com `<details>`. Só marquei **uma única** resposta correta por pergunta.

---

# Pergunta 1

Uma pilha é uma estrutura bastante útil, principalmente quando precisamos garantir alinhamento de componentes em processos.

Sobre as pilhas, analise as afirmativas a seguir.

I. São usadas para a chamada de funções na execução de programas.
II. Realizam a análise de sintaxe de linguagens de programação.
III. Fazem a verificação de alinhamento de parênteses em strings.

Está correto o que se afirma em:

a. II, apenas.

<details><summary>Resposta</summary>**Incorreta.** A pilha é usada em mais de uma dessas tarefas; II sozinho não cobre todas as aplicações citadas.</details>

b. I, apenas.

<details><summary>Resposta</summary>**Incorreta.** I é verdadeira, mas não é a única correta — pilhas também são usadas na análise sintática e verificação de parênteses.</details>

c. I, II e III.

<details><summary>Resposta</summary>**Correta.** Todas são aplicações típicas de pilhas: chamadas/retornos de funções (armazenamento de endereço/arquivos de ativação), análise sintática (parsing) e verificação de parênteses/escopos (balanceamento).</details>

d. II e III, apenas.

<details><summary>Resposta</summary>**Incorreta.** Embora II e III sejam verdadeiras, I também é correta — pilhas são fundamentais para chamadas de função.</details>

e. I e III, apenas.

<details><summary>Resposta</summary>**Incorreta.** II também é verdadeira — análise sintática também usa pilhas em muitos algoritmos (por exemplo, análise LR).</details>

---

# Pergunta 2

A classe é um modelo usado para criar objetos ou instâncias cuja comunicação ocorre através de interface. Ao usar scanf() para ler a entrada de string, ele para de ler quando encontra espaço em branco, nova linha ou fim de arquivo. Aliás, é usado para ler a entrada de qualquer tipo de dados.

Utilizando a linguagem de string, podemos desenvolver vários comandos e observar as respostas que eles nos dão. Assim, pode-se observar que os sinais de % são um comando que permitirá essa leitura.

A seguir, observe o comando na linguagem C.

```c
#include<stdio.h>
int f(int *a, int n)
{
  if(n <= 0) return 0;
  else if(*a % 2 == 0) return *a + f(a+1, n-1);
  else return *a - f(a+1, n-1);
}
  
int main()
{
  int a[] = {12, 7, 13, 4, 11, 6};
  printf("%d", f(a, 2));
  getchar();
  return 0;
}
```

Qual o tipo da variável `a`?

a. Ponteiro

<details><summary>Resposta</summary>**Incorreta.** Em `main` a variável é declarada como `int a[]` (um vetor/array). Note que ao passar para função `f`, o array decai para um ponteiro, mas a declaração em `main` é de vetor.</details>

b. Caractere.

<details><summary>Resposta</summary>**Incorreta.** Os elementos são inteiros; não é tipo caractere.</details>

c. Vetor.

<details><summary>Resposta</summary>**Correta.** `int a[] = {...}` declara `a` como um vetor (array) de inteiros. Tecnically, quando usado como argumento para `f`, ele decai para `int*`, mas a variável `a` foi declarada como vetor.</details>

d. Real.

<details><summary>Resposta</summary>**Incorreta.** Não há tipos reais (float/double) aqui; os elementos são inteiros.</details>

e. Inteiro.

<details><summary>Resposta</summary>**Incorreta.** Os elementos do vetor são inteiros, mas a variável `a` em `main` é um vetor (array), não uma única variável do tipo `int`.</details>

---

# Pergunta 3

A linguagem de programação pode ser definida como uma sequência de códigos e comandos que fornece um resultado escolhido pelo autor. Dessa forma, sobre essa linguagem, analise as afirmativas a seguir.

I) É muito importante e só é viável quando se utiliza a linguagem de programação C.
II) Para se orientar objetos, é recomendável o Java.
III) Existem alguns tipos de linguagem de modelagem, que são, muitas vezes, definidas com baixo nível, um exemplo disso é a Assembly.
IV) Quando se usa um Android, recomenda-se utilizar a linguagem Java.
V) A linguagem de programação C# foi desenvolvida pela Microsoft.

Está correto o que se afirma em:

a. II, III, IV e V, apenas.

<details><summary>Resposta</summary>**Correta.** I é falsa (programação não é “só viável” com C). II, III, IV e V são afirmativas verdadeiras no contexto apresentado (Java é recomendável para POO/histórico Android; Assembly é exemplo de linguagem de baixo nível; C# desenvolvida pela Microsoft).</details>

b. I, IV e V, apenas.

<details><summary>Resposta</summary>**Incorreta.** I é falsa.</details>

c. II e V, apenas.

<details><summary>Resposta</summary>**Incorreta.** Também são corretas III e IV, então essa opção está incompleta.</details>

d. I, III e IV, apenas.

<details><summary>Resposta</summary>**Incorreta.** I é falsa; além disso falta V.</details>

e. II, apenas.

<details><summary>Resposta</summary>**Incorreta.** Há outras afirmativas verdadeiras além de II.</details>

---

# Pergunta 4

Sobre a linguagem C++, muitas vezes, podemos usar estratégias para substituir algum item de outra linguagem, como a C, por exemplo.

A figura apresenta duas funções: `scanf ("%d", &x)` e `printf ("%d", y)`.

Nesse caso, podemos substituir as funções apresentadas, da linguagem C, por quais itens da linguagem C++, respectivamente?

a. a figura apresenta os seguintes itens da linguagem C++, respectivamente: `std::cin >> x` e `std::cout << y`.

<details><summary>Resposta</summary>**Correta.** `scanf("%d",&x)` (leitura) → `std::cin >> x`. `printf("%d", y)` (saída) → `std::cout << y`.</details>

b. a figura apresenta os seguintes itens da linguagem C++, respectivamente: `std::cout >> x` e `std::cin >> y`.

<details><summary>Resposta</summary>**Incorreta.** Operadores trocados; `std::cout` usa `<<` e `std::cin` usa `>>`.</details>

c. a figura apresenta os seguintes itens da linguagem C++, respectivamente: `std::cout << x` e `std::cin >> y`.

<details><summary>Resposta</summary>**Incorreta.** Ordem invertida: aqui o primeiro (correspondente a `scanf`) deveria ser `std::cin >> x`, não `std::cout << x`.</details>

d. a figura apresenta os seguintes itens da linguagem C++, respectivamente: `std::cout >> x` e `std::cin << y`.

<details><summary>Resposta</summary>**Incorreta.** Ambos os operadores estão invertidos; sintaxe inválida/semântica trocada.</details>

e. a figura apresenta os seguintes itens da linguagem C++, respectivamente: `std::cin << x` e `std::cout >> y`.

<details><summary>Resposta</summary>**Incorreta.** Operadores invertidos: `std::cin` usa `>>`, `std::cout` usa `<<`.</details>

---

# Pergunta 5

Pilhas são listas nas quais o acesso somente pode ser feito em uma das extremidades, denominada topo da pilha. Todas as consultas, alterações, inclusões e remoções de nodos podem ser realizadas somente sobre um nodo, que está na extremidade considerada o topo da pilha.

Com relação às características de Last In, First Out (LIFO) de uma pilha, assinale a alternativa CORRETA.

a. O número 32 é o primeiro dado a entrar e o primeiro a sair

<details><summary>Resposta</summary>**Incorreta.** Essa descrição é típica de FIFO, não de pilha (LIFO).</details>

b. O número 34 é o primeiro dado a entrar e o primeiro a sair

<details><summary>Resposta</summary>**Incorreta.** Se 34 é o primeiro a entrar (base), em LIFO ele será o último a sair.</details>

c. O número 34 é o último dado a entrar e o primeiro a sair

<details><summary>Resposta</summary>**Incorreta.** Pela figura 34 aparece na base (não no topo), então não é o último a entrar.</details>

d. O número 32 é o último dado a entrar e o primeiro a sair

<details><summary>Resposta</summary>**Correta.** Na ilustração 32 está na posição do topo (foi inserido por último). Em LIFO, o último inserido é o primeiro a ser removido — logo 32 é último a entrar e primeiro a sair.</details>

e. O número 32 é o último dado a entrar e o último a sair

<details><summary>Resposta</summary>**Incorreta.** Em pilha LIFO, o último a entrar será o primeiro a sair — não o último a sair.</details>

---

# Pergunta 6

Filas são ordenamentos de valores em que apenas os dois nós em cada extremidade do ordenamento podem ser acessados. A adição de novos nós é sempre feita no final da lista e as funções de consulta, alteração de dados e exclusão são feitas no início.

Descrição da imagem: Fila com 5 posições, primeira coluna, lê-se “11”; na segunda coluna, lê-se “50”; na terceira coluna, lê-se “34”; na quarta coluna, lê-se “25”, na quinta coluna, lê-se “43”.

Com relação às características de First In, First Out (FIFO) de uma fila, assinale a alternativa CORRETA.

a. O número 11 é o primeiro dado a entrar e o primeiro a sair

<details><summary>Resposta</summary>**Correta.** Pela disposição (11, 50, 34, 25, 43) o elemento 11 está na frente da fila (entrou primeiro). Em FIFO o primeiro que entrou será o primeiro a ser removido — portanto 11 é o primeiro a entrar e o primeiro a sair.</details>

b. O número 43 é o último dado a entrar e o primeiro a sair

<details><summary>Resposta</summary>**Incorreta.** 43 é o último a entrar (direita), mas em FIFO ele será o último a sair, não o primeiro.</details>

c. O número 11 é o último dado a entrar e o primeiro a sair

<details><summary>Resposta</summary>**Incorreta.** Contradição: 11 é o primeiro a entrar (frente), não o último.</details>

d. O número 43 é o último dado a entrar e o último a sair

<details><summary>Resposta</summary>**Incorreta.** Embora 43 seja o último a entrar, a alternativa (a) responde diretamente à definição FIFO pedida (quem é o primeiro a entrar/primeiro a sair).</details>

e. O número 43 é o primeiro dado a entrar e o primeiro a sair

<details><summary>Resposta</summary>**Incorreta.** 43 é o último a entrar; não é o primeiro.</details>

---

# Pergunta 7

A linguagem C++ é chamada de linguagem nível intermediária, pois combina os elementos das linguagens de alto nível com o funcionalismo da linguagem nível máquina. Numa situação hipotética, leve em consideração o código escrito a seguir, em linguagem de programação C++:

```cpp
ItemType Queue::dequeue()
{
  if (!isEmpty()){
    front++;
    return structure[(front-1) % MAX_ITEMS];
  } else {
    throw "Queue is empty!";
  }
}
```

Qual a função do código?

a. Apenas incrementar a posição final front da pilha.

<details><summary>Resposta</summary>**Incorreta.** Não é sobre pilha; e além disso o código retorna um elemento — não apenas incrementa um índice.</details>

b. Incrementar a posição final front da fila e verificar se a mesma não está cheia.

<details><summary>Resposta</summary>**Incorreta.** Não há verificação de “cheia” aqui; o código verifica `!isEmpty()` e retorna o elemento; descreve operação de remoção (dequeue), não checagem de cheia.</details>

c. Retirar um elemento da fila quando possível.

<details><summary>Resposta</summary>**Correta.** Essa função incrementa o índice `front` (movendo a frente) e retorna o elemento removido (usando `(front-1) % MAX_ITEMS` — padrão de fila circular). Em outras palavras: remove (dequeue) e devolve o elemento se a fila não estiver vazia.</details>

d. Apenas incrementar a posição final front da fila quando estiver vazia.

<details><summary>Resposta</summary>**Incorreta.** Se a fila estiver vazia, ele lança exceção; não incrementa `front` nesse caso.</details>

e. Incrementar a posição inicial front da fila e verificar se a mesma não está cheia.

<details><summary>Resposta</summary>**Incorreta.** Não há verificação de “cheia” e o objetivo é remover (não verificar cheia). A formulação “inicial/front” vs “final” é confusa — a resposta correta é que remove um elemento quando possível.</details>

---

# Pergunta 8

Uma definição de TAD é a separação de sua implementação de seu conceito, ou seja, existe uma diferença entre sua representação e a definição e implementação do tipo. Portanto, uma característica essencial de um TAD é a separação entre conceito e implementação.

Sendo assim, assinale a alternativa correta que apresenta a melhor definição de um TAD.

a. Um novo tipo de HD junto com as operações que salvam um novo tipo de dado

<details><summary>Resposta</summary>**Incorreta.** HD é hardware; TAD refere-se a tipo de dado/abstração, não hardware.</details>

b. Um novo tipo de site junto com os links que manipulam esse novo tipo de dado

<details><summary>Resposta</summary>**Incorreta.** Irrelevante — TAD não é site.</details>

c. Um novo tipo de hardware junto com as memórias que manipulam esse novo tipo de dado

<details><summary>Resposta</summary>**Incorreta.** TAD é conceito de linguagem/softwares, não hardware.</details>

d. Um novo tipo de software junto com os botões que manipulam esse novo tipo de dado

<details><summary>Resposta</summary>**Incorreta.** TAD é um tipo de dado abstrato + operações, não “software com botões”.</details>

e. Um novo tipo de dado junto com as operações que manipulam esse novo tipo de dado

<details><summary>Resposta</summary>**Correta.** TAD = Tipo Abstrato de Dados; define o **novo tipo de dado** e a interface (operações) que manipulam esse tipo, separando conceito e implementação.</details>

---
