# Pergunta 1

Existem possíveis operações que podem ser realizadas com os tipos de dados inteiros e real. Como exemplos temos podemos realizar somas, subtração, divisão, multiplicação, entre outras operações. As principais linguagens de programação oferecem muitos tipos de dados, que podem se classificar em básicos e estruturados. Os tipos de dados básicos e primitivos não contém uma estrutura sobre seus valores, ou seja, não podemos separar os tipos primitivos em partes menores. Os tipos básicos são indivisíveis, como o exemplo de um tipo lógico, que pode assumir os valores verdadeiros e falsos. Os principais tipos primitivos que existem são o tipo inteiro, tipo real, lógico e caractere.

Observe o trecho de código a seguir em C++.

(Descrição da imagem: A imagem apresenta um trecho de um código em C++ demonstrando atribuição de valores em diferentes tipos de variáveis. Na linha 1, lê-se: `char funcionario = 'José';` Na linha 2, `char departamento = 'Vendas';` Na linha 3, `float salario = 2050,10;` Na linha 4, `float comissao = 1200,50;` Na linha 5, `bool meta = true;` Na linha 6, `float total = 0;` Na linha 7, `if (meta = true)` Na linha 8, `total = salario + comissao;` Na linha 9, `senao` Na linha 10, `total = salario;`)

Considerando o trecho e a atribuição de valores das variáveis, avalie se são (V) verdadeiras ou (F) falsas as afirmativas a seguir:

I. (   ) As variáveis “funcionario” e “departamento” são do tipo caractere.
II. (   ) As variáveis “salario”, “comissao” e “total” são do tipo real.
III. (   ) A variável “total” é do tipo inteiro.
IV. (   ) A variável “meta” é do tipo caractere.

Assinale a alternativa que apresenta a sequência CORRETA:

a. V - F - V - F

<details><summary>Resposta</summary>**Incorreta.**  
II é verdadeira (salario/comissao/total são `float` → real), então a segunda posição não é F.</details>

b. **V - V - F - F**

<details><summary>Resposta</summary>**Correta.**  
I = V (declaradas como `char` no trecho → tipo caractere).  
II = V (`salario`, `comissao`, `total` são `float` → tipo real).  
III = F (`total` é `float`, não inteiro).  
IV = F (`meta` é `bool`, não caractere).</details>

c. F - V - F - V

<details><summary>Resposta</summary>**Incorreta.**  
I está incorreta aqui; no trecho I é verdadeira (declaração com `char`).</details>

d. F - F - V - V

<details><summary>Resposta</summary>**Incorreta.**  
Várias posições contradizem as declarações do código (II e III incorretas nessa opção).</details>

e. V - V - V - F

<details><summary>Resposta</summary>**Incorreta.**  
III está marcada V aqui, mas `total` não é inteiro — é `float`.</details>

---

# Pergunta 2

Segundo Edelweiss e Galante (2014, p. 34): “Uma aplicação em Ciência da Computação é basicamente um programa de computador que manipula dados. A representação dos dados manipulados por uma aplicação pode ser feita por diferentes estruturas de dados.”.

EDELWEISS, N.; GALANTE, R. Estruturas de dados. Porto Alegre: Bookman, 2014. 18 v.

Utilizando as características de uma aplicação em Ciência da Computação, o que melhor define uma aplicação é:

a. um hardware, que é utilizado para guardar e processar os dados

<details><summary>Resposta</summary>**Incorreta.**  
Hardware é componente físico; aplicação refere-se a programa/sofware que manipula dados.</details>

b. uma placa de vídeo, que é utilizada para visualizar melhor os dados

<details><summary>Resposta</summary>**Incorreta.**  
Placa de vídeo é hardware específico; não define uma aplicação.</details>

c. um HD, que é utilizado para guardar os dados

<details><summary>Resposta</summary>**Incorreta.**  
HD é dispositivo de armazenamento (hardware), não a aplicação que manipula dados.</details>

d. uma memória RAM, que é utilizada para processar os dados

<details><summary>Resposta</summary>**Incorreta.**  
RAM é componente de memória; não é a aplicação em si.</details>

e. **um software, que é utilizado para manipular os dados**

<details><summary>Resposta</summary>**Correta.**  
Aplicação (programa de computador) é software que processa/manipula dados conforme descrito pela citação.</details>

---

# Pergunta 3

Sobre o comando `scanf`.

O que faz o comando: interrompe o programa e espera que o usuário digite dados de entradas. Os dados de entrada devem ser terminados com a digitação da tecla enter. A cada caractere de controle deve corresponder uma variável a qual terá o valor que for digitado pelo usuário.

A lista de variáveis é uma lista de identificadores de variáveis separadas por vírgulas. Cada identificador deve ser precedido pelo caractere `&`, também conhecido como o "e comercial".

Os caracteres de controle são uma sequência de `%d`.

Assinale a alternativa correta.

a. No código

```c
for (i = 0; i < n; i++){
  printf("Digite mais um número: ");
  scanf("%d", &num);
}
```

O usuário deve digitar n-1 números. Note que o printf tem como finalidade somente orientar o usuário para a digitação dos números.

<details><summary>Resposta</summary>**Incorreta.**  
O laço `for (i = 0; i < n; i++)` executa `n` iterações (i = 0..n-1), então o usuário digita `n` números, não `n-1`.</details>

b. **No comando `scanf("%d", &n)` espera-se que o usuário digite um inteiro. O valor digitado será o conteúdo da variável n.**

<details><summary>Resposta</summary>**Correta.**  
`%d` lê um inteiro e armazena no endereço fornecido (`&n`).</details>

c. No comando `scanf("%d %d", &m, &n)` espera-se que o usuário digite dois inteiro iguais m=n.

<details><summary>Resposta</summary>**Incorreta.**  
`scanf("%d %d", &m, &n)` lê **dois inteiros**, armazenando o primeiro em `m` e o segundo em `n`. Não exige que sejam iguais.</details>

d. No código

```c
for (i = 1; i < n; i++){
  printf("Digite mais um número: ");
  scanf("%d", &num);
}
```

O usuário deve digitar n números. Note que o printf tem como finalidade somente orientar o usuário para a digitação dos números.

<details><summary>Resposta</summary>**Incorreta.**  
Aqui o laço vai de i=1 até i<n (i = 1..n-1), total de `n-1` iterações — o usuário digita `n-1` números, não `n`.</details>

e. No comando `scanf("%d %d", &m, &n)` espera-se que o usuário digite dois inteiros. O primeiro valor digitado será o conteúdo da variável n e o segundo valor será o conteúdo da variável m.

<details><summary>Resposta</summary>**Incorreta.**  
A ordem é **primeiro → m**, **segundo → n**, conforme a ordem dos argumentos após a string de formato.</details>

---

# Pergunta 4

A quebra de linha pode ser comparada ao mesmo que ocorre quando teclamos o Enter em um texto, ou seja, ele “pula, quebra” para a próxima linha. Uma outra maneira de quebrar a linha, é usando o caractere `\n`. O caractere `\n` ocupa 1 byte de memória na execução do programa. Agora, verifique a seguinte afirmativa:

Considere os dois códigos a seguir:

```cpp
#include<iostream>
using namespace std;
int main()
{
     cout<<"Hello world"<<endl;
     cout<<"I am programmer";
     return 0;
}
```

e

```cpp
#include<iostream>
using namespace std;
int main()
{
    cout<<"Hello world\n";
    cout<<"I am programmer";
    return 0;
}
```

Assinale a alternativa correta.

a. A resposta do primeiro código é:

Hello world \n I am programmer

<details><summary>Resposta</summary>**Incorreta.**  
`endl` insere uma nova linha (não imprime a sequência literal `\n`). O resultado não mostra `\n` como texto.</details>

b. A resposta do primeiro código é:

Hello world I am programmer

<details><summary>Resposta</summary>**Incorreta.**  
O `endl` quebra a linha: as mensagens aparecem em **linhas separadas**, não na mesma linha concatenada sem quebra.</details>

c. A resposta do segundo código é:

Hello world I am programmer

<details><summary>Resposta</summary>**Incorreta.**  
Similar ao item (b): `"\n"` quebra a linha, então as strings ficam em linhas separadas — não numa única linha sem quebra.</details>

d. **Ambos os códigos geram o mesmo resultado.**

<details><summary>Resposta</summary>**Correta.**  
`endl` e `"\n"` produzem uma nova linha entre as duas mensagens; o primeiro também faz `flush` do buffer, mas visualmente ambos imprimem:  
```
Hello world
I am programmer
```</details>

e. A resposta do segundo código é:

Hello world \n I am programmer

<details><summary>Resposta</summary>**Incorreta.**  
O `\n` é interpretado como caractere de nova linha, não impresso literalmente como `\n`.</details>
