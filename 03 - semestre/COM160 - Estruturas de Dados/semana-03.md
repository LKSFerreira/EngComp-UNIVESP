# Pergunta 1

Uma maneira de implementar estruturas dinâmicas é encadear, em que os nós são ligados entre si para mostrar a ordem entre eles. Assim, a ordem de nós é determinada pelas informações contidas no próprio nó, que informa o próximo nó da lista. Essas informações estão contidas em um campo chamado campo de link. Os nós da lista de fases podem ser atribuídos a qualquer local de memória, contíguo ou não, porque a ordem é explicitamente emitida pelo link, independentemente de sua localização física.

Sobre as desvantagens de listas lineares sequenciais na estrutura de dados, avalie se são (V) verdadeiras ou (F) falsas as afirmativas a seguir.

I. (  ) Na inserção, o processo de deslocamento acontece movimentando somente o último elemento da lista.
II. (  ) É preciso determinar o espaço necessário para todos os elementos de uma vez.
III. (  ) Para manter a ordem, talvez sejam necessários muitos deslocamentos em memória.
IV. (  ) Na remoção de qualquer elemento, o processo de deslocamento é realizado de forma que somente o primeiro elemento da lista é movido.

Assinale a alternativa que apresenta a sequência CORRETA.

a. F - V - V - F

<details><summary>Resposta</summary>**Correta.** Em listas sequenciais (arrays) você precisa reservar espaço de uma vez (II = V). Inserção/removal em posições intermediárias pode exigir muitos deslocamentos (III = V). I e IV estão incorretas: não é só o último ou só o primeiro que se move — o número de elementos movidos depende da posição de inserção/remoção.</details>

b. F - F - V - V

<details><summary>Resposta</summary>**Incorreta.** II está errada aqui; II deve ser V (precisa alocar espaço no modelo sequencial).</details>

c. V - F - F - V

<details><summary>Resposta</summary>**Incorreta.** I e IV estão trocadas/incorretas para o contexto de arrays.</details>

d. F - V - F - V

<details><summary>Resposta</summary>**Incorreta.** III está incorreta nessa opção; na verdade III é verdadeira (muitos deslocamentos podem ser necessários).</details>

e. V - V - F - F

<details><summary>Resposta</summary>**Incorreta.** I está incorreta — não é só o último elemento que é movido ao inserir.</details>

---

# Pergunta 2

Considerando o seguinte tipo abstrato de dados de uma fila implementada com lista encadeada: *(trecho do `.h` e depois o método `enqueue` mostrado)*

No trecho do `enqueue` há esta parte:

```cpp
if (rear = NULL) {
    front = new_node;
}
```

Assinale a alternativa que descreve corretamente o seguinte trecho de código:

a. Escrever mensagem de erro em stderr caso haja algum problema.

<details><summary>Resposta</summary>**Incorreta.** Não tem relação com stderr — o `if` testa rear e, se vazio, ajusta front.</details>

b. Verificar se a fila está vazia, se sim, o primeiro nó é o nó recém-criado.

<details><summary>Resposta</summary>**Correta.** A intenção correta (corrigindo `=` para `==`) é checar se `rear` é `NULL` (fila vazia); então `front = new_node` torna o novo nó também o primeiro da fila.</details>

c. Verificar se a fila é nula e apontar para o próximo nó da lista encadeada.

<details><summary>Resposta</summary>**Incorreta.** O código não aponta `rear` para `next`; ele define `front = new_node` quando a fila está vazia.</details>

d. Verificar se a fila é nula e fazer uma cópia local dos dados pré-inserção na fila.

<details><summary>Resposta</summary>**Incorreta.** Não faz cópia local dos dados — apenas ajusta ponteiros para primeiro/último nó.</details>

e. Verificar se a fila está cheia, se sim, o primeiro nó é o nó recém-criado.

<details><summary>Resposta</summary>**Incorreta.** A verificação não trata de “cheia”; trata de `rear == NULL` (vazia).</details>

---

# Pergunta 3

...Vamos analisar o código fornecido a seguir:

```c
#include <stdio.h> 
void sub (int *x, int y) 
{
    *x = 3; y = *x + 1 ;
} 
int main () 
{
    int a, b, z; a = 1; b = 2; sub (&a, b); z = a + b; printf ("%d", z); 
    return 0 ;
}
```

Com base nesse comando, podemos verificar que:

a. a = 3.

<details><summary>Resposta</summary>**Verdadeiro (mas não é a alternativa pedida como saída final).** A função `sub` escreve `*x = 3`, então `a` passa a ser 3 após a chamada.</details>

b. a + b = 9.

<details><summary>Resposta</summary>**Incorreta.** Após `sub`, `a = 3` e `b = 2` (b não foi alterado), logo `a+b = 5`.</details>

c. b = 7.

<details><summary>Resposta</summary>**Incorreta.** `b` é passado por valor; modificações em `y` dentro de `sub` não alteram `b` fora da função.</details>

d. z = 5.

<details><summary>Resposta</summary>**Correta.** Após a chamada `sub(&a,b)`, `a` passa a valer 3 e `b` permanece 2; então `z = a + b = 3 + 2 = 5`.</details>

e. c = 4.

<details><summary>Resposta</summary>**Incorreta.** Não existe variável `c` no código; alternativa inválida.</details>

---

# Pergunta 4

Em uma lista encadeada, ou lista linear, em que a ordem lógica dos elementos não é a mesma da ordem física (elementos espalhados na memória), cada elemento precisa indicar em que endereço seu sucessor pode ser encontrado, de modo a manter a ordem lógica.

Assinale a alternativa que apresenta o código correto para inserir elementos em listas encadeadas.

a. Código de `print()` que percorre lista e imprime (uso de tempPtr).

<details><summary>Resposta</summary>**Incorreta.** Esse trecho apenas imprime elementos; não é rotina de inserção/push.</details>

b. `void Stack::push(ItemType item){ if (!isFull()){ NodeType* location; location = new NodeType; location->info = item; location->next = structure; structure = location; } else { throw "Stack is already full!"; } }`

<details><summary>Resposta</summary>**Correta.** Esse é o padrão correto para inserir (push) em uma pilha implementada por lista encadeada: alocar novo nó, atribuir `info`, apontar `next` para o antigo topo (`structure`) e atualizar `structure` para o novo nó.</details>

c. Código de `isEmpty` / `isFull` com `new` e `delete` (testa memória).

<details><summary>Resposta</summary>**Incorreta.** Esse trecho trata checagens de vazio/cheio via tentativa de alocação; não é a rotina de inserção em si.</details>

d. Código que usa `cin.get(character)` em loop até `'/n'` e empilha — vários erros de sintaxe e lógica.

<details><summary>Resposta</summary>**Incorreta.** Contém problemas (ex.: comparação com `'/n'` errado) e é mais um programa utilitário do que uma rotina genérica de inserção correta.</details>

e. `ItemType Stack :: pop(){ ... }` (implementação de pop).

<details><summary>Resposta</summary>**Incorreta.** Esse trecho é a rotina de remoção (pop), não de inserção (push).</details>

---

# Pergunta 5

Listas lineares são estruturas em que cada elemento é precedido por um elemento e sucedido por outro, com exceção do primeiro que não tem predecessor e do último que não tem sucessor. Essas estruturas podem ser implementadas em memória como listas sequenciais ou como listas encadeadas. Sobre essas formas de implementação, assinale a alternativa correta:

a. Em uma lista sequencial, cada elemento precisa indicar em que endereço o seu sucessor pode ser encontrado por meio de um ponteiro para garantir a ordem lógica.

<details><summary>Resposta</summary>**Incorreta.** Isso descreve listas encadeadas; em listas sequenciais (arrays) os elementos são contíguos, não precisam de ponteiros para sucessor.</details>

b. Listas encadeadas possuem a grande vantagem de que o acesso a qualquer elemento, dado o índice do elemento, pode ser feito em tempo constante.

<details><summary>Resposta</summary>**Incorreta.** Acesso por índice em lista encadeada é O(n); apenas em listas sequenciais (arrays) é O(1).</details>

c. O tempo computacional da busca binária independe da implementação em listas encadeadas ou em listas sequenciais.

<details><summary>Resposta</summary>**Incorreta.** Busca binária pressupõe acesso aleatório (O(1) para acessar meio); em lista encadeada o acesso ao meio é O(n), logo a complexidade muda.</details>

d. Uma lista encadeada é uma lista linear implementada de tal modo que a ordem lógica dos elementos não representa a ordem física em memória.

<details><summary>Resposta</summary>**Correta.** Exatamente: em listas encadeadas os nós podem estar espalhados na memória; a ordem lógica é mantida pelos ponteiros `next`.</details>

e. Listas sequenciais exigem que sejam percorridos todos os predecessores, de um por um, para se obter o elemento que está em um dado índice.

<details><summary>Resposta</summary>**Incorreta.** Em listas sequenciais (arrays) acesso por índice é direto (O(1)), não exige percorrer predecessores.</details>

---

# Pergunta 6

Na linguagem computacional, uma prática rotineira é a compilação, ela é usada em vários tipos de linguagem para tornar a linguagem real acessível para uma determinada máquina. Quando se usa a compilação em sistema Windows, a extensão utilizada em mapas e objetos tridimensionais é:

a. `.obj`

<details><summary>Resposta</summary>**Correta.** O formato Wavefront `.obj` é uma extensão comum para arquivos de objetos 3D; também em compiladores Windows a extensão `.obj` é usada para object files gerados pelo compilador, então `.obj` é a resposta esperada.</details>

b. `.hex`

<details><summary>Resposta</summary>**Incorreta.** `.hex` é usado para imagens/firmware em algumas plataformas (ex.: Intel HEX), não é o padrão para mapas/objetos 3D nem object files típicos no Windows.</details>

c. `.exe`

<details><summary>Resposta</summary>**Incorreta.** `.exe` é executável final, não arquivo de objeto/3D.</details>

d. `.lib`

<details><summary>Resposta</summary>**Incorreta.** `.lib` é biblioteca estática, não arquivo de objetos 3D.</details>

e. `.h`

<details><summary>Resposta</summary>**Incorreta.** `.h` é header C/C++, não arquivo 3D/object.</details>

---

# Pergunta 7

Para remover um nó de uma lista linear encadeada, ... Com relação à remoção de elementos para o passo a passo do desenvolvimento do algoritmo, assinale a alternativa CORRETA.

a. Vincula o nó anterior com o nó seguinte / se o nó removido é o primeiro, endereço de acesso atualizado / exclui o nó

<details><summary>Resposta</summary>**Incorreta.** Faltam passos essenciais (percorrer a lista, tratar caso “não encontrado” antes de vincular) — etapa de busca não aparece.</details>

b. Percorrer a lista / não encontrou, retorna falso / encontrou vincula o nó anterior com o nó seguinte/ se o nó removido é o primeiro, endereço de acesso atualizado / exclui o nó

<details><summary>Resposta</summary>**Correta.** Esta alternativa descreve corretamente as etapas típicas: percorrer (buscar), se não encontrado retorna falso, se encontrado ajustar ponteiros (vincular anterior→seguinte), tratar caso especial do primeiro nó (atualizar head), e então liberar/excluir o nó.</details>

c. Percorrer a lista / vincula o nó anterior com o nó seguinte / se o nó removido é o primeiro, endereço de acesso atualizado / exclui o nó

<details><summary>Resposta</summary>**Incorreta.** Falta o passo de “não encontrou retorna falso” — essencial para algoritmo robusto.</details>

d. Percorrer a lista / vincula o nó anterior com o nó seguinte/ exclui o nó

<details><summary>Resposta</summary>**Incorreta.** Falta o caso “não encontrado” e a atualização do ponteiro de início se for o primeiro nó.</details>

e. Percorrer a lista / não encontrou, retorna falso / encontrou exclui o nó / se o nó removido é o primeiro, endereço de acesso atualizado /

<details><summary>Resposta</summary>**Incorreta.** Ordem problemática (deleta antes de atualizar ponteiro do primeiro) e não menciona vincular o anterior com o seguinte explicitamente.</details>

---

# Pergunta 8

(Recursão/fatorial) Código:

```c
#include <stdio.h>
int fat (int n)
{
  if (n)
    return n*fat(n-1);
  else
    return 1;
}
```

Para que esse comando ocorra de forma correta, é descrito o recurso de:

a. arranjos autossequenciais.

<details><summary>Resposta</summary>**Incorreta.** Não é o termo correto.</details>

b. linearidade.

<details><summary>Resposta</summary>**Incorreta.** Não descreve a técnica usada aqui.</details>

c. recursividade.

<details><summary>Resposta</summary>**Correta.** A função chama a si própria (`fat` chama `fat(n-1)`), portanto é um exemplo clássico de recursão/recursividade.</details>

d. autochamamento.

<details><summary>Resposta</summary>**Incorreta (sinônimo possível, mas a alternativa padrão é “recursividade”).** Embora “autochamamento” seja sinônimo em sentido técnico, a opção esperada é “recursividade”.</details>

e. sequenciamento de memória.

<details><summary>Resposta</summary>**Incorreta.** Não é o conceito principal aqui — o ponto chave é a chamada recursiva.</details>

---

