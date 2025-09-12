## Prompt para Resumir Videoaulas

> A partir do arquivo em anexo, **resuma uma videoaula** no mesmo estilo e formatação do exemplo abaixo.
>
> ### Estrutura obrigatória:
>
> 1. **Título** no formato:
>    `### Resumo do Vídeo: **Nome da Aula (Fonte/Professor)**`
> 2. **Parágrafo introdutório** explicando em poucas linhas o que foi tratado na aula.
> 3. **Lista cronológica com timestamps** (`* [0:00:00](link_do_vídeo&t={tempo_em_segundos}) – Título do tópico`)
>
>    * Cada item deve ter:
>
>      * Um **título curto e em negrito**.
>      * Uma breve explicação clara e objetiva.
>      * Quando necessário, um **exemplo prático** destacado com `**Exemplo**:`.
> 4. **Resumo final em tópicos**, comparando as etapas ou conceitos principais.
> 5. **Link da videoaula** no final com o emoji 📌.
>
> ### Estilo de escrita:
>
> * Claro, conciso e didático.
> * Use **negrito** para conceitos principais.
> * Use listas com `*` e recuo para detalhes.
> * Não ultrapasse 3 linhas por explicação.
> * Sempre destaque **palavras-chave** em negrito.
>
> ### Exemplo de saída esperada:
>
### Resumo do Vídeo: **Videoaula 9 – Normalização – Parte 2 (UNIVESP, Prof. José Eduardo Santarém Segundo)**

Nesta videoaula, o professor José Eduardo Santarém Segundo continua a explicação sobre **normalização de bancos de dados**, aprofundando os conceitos da **Segunda Forma Normal (2FN)**, **Terceira Forma Normal (3FN)** e **Forma Normal de Boyce-Codd (FNBC/BCNF)**. São apresentados exemplos práticos, dependências funcionais e os impactos de cada forma normal no projeto de bancos de dados.

* **[0:00:10](https://www.youtube.com/watch?v=hWqzE2_hcE0&t=10s)** – **Revisão da 1ª Forma Normal (1FN)**

  * Tabelas devem ter valores atômicos (sem grupos repetidos).
  * Cada célula armazena apenas um valor.

* **[0:01:40](https://www.youtube.com/watch?v=hWqzE2_hcE0&t=100s)** – **Segunda Forma Normal (2FN)**

  * Exige que a tabela esteja na 1FN.
  * Todos os atributos não-chave devem depender **totalmente** da chave primária (elimina dependências parciais).
  * **Exemplo**: Em uma tabela de pedidos com chave composta (`cod_pedido`, `cod_produto`), atributos como `nome_cliente` dependem apenas de `cod_pedido`, e não da chave completa → precisa ser removido para outra tabela.

* **[0:06:50](https://www.youtube.com/watch?v=hWqzE2_hcE0&t=410s)** – **Terceira Forma Normal (3FN)**

  * Exige que a tabela esteja na 2FN.
  * Elimina **dependências transitivas** (atributo não-chave não pode depender de outro atributo não-chave).
  * **Exemplo**: se `cod_cliente` determina `cidade_cliente`, e `cidade_cliente` determina `estado`, há uma dependência transitiva → deve ser quebrada.

* **[0:11:40](https://www.youtube.com/watch?v=hWqzE2_hcE0&t=700s)** – **Forma Normal de Boyce-Codd (FNBC/BCNF)**

  * É uma extensão mais rigorosa da 3FN.
  * Para cada dependência funcional X → Y, o conjunto X deve ser uma chave candidata.
  * Resolve casos em que a 3FN ainda permite anomalias.

* **[0:15:30](https://www.youtube.com/watch?v=hWqzE2_hcE0&t=930s)** – **Exemplo de Decomposição**

  * Mostra como decompor uma tabela mal estruturada em múltiplas tabelas normalizadas.
  * Garante eliminação de redundância e consistência dos dados.

* **[0:20:00](https://www.youtube.com/watch?v=hWqzE2_hcE0&t=1200s)** – **Trade-offs da Normalização**

  * Nem sempre a normalização máxima é a melhor escolha.
  * Em alguns casos, bancos desnormalizados oferecem mais desempenho (especialmente em consultas frequentes).
  * O ideal é equilibrar normalização e performance, considerando o caso de uso.

* **[0:23:10](https://www.youtube.com/watch?v=hWqzE2_hcE0&t=1390s)** – **Resumo Final**

  * **1FN**: elimina valores não atômicos.
  * **2FN**: elimina dependências parciais.
  * **3FN**: elimina dependências transitivas.
  * **BCNF**: garante que cada determinante é uma chave.
  * Objetivo: reduzir redundância, evitar anomalias e melhorar integridade.

📌 Videoaula 9 – Normalização – Parte 2: [http://www.youtube.com/watch?v=hWqzE2\_hcE0](http://www.youtube.com/watch?v=hWqzE2_hcE0)



--------------------------------


Quero adicionar novas questões a um banco de dados em formato **JSON**, mas as questões fornecidas não estão no formato correto.

Siga **exatamente** o modelo abaixo para formatar as questões:

```json
{
  "semana": "Semana X",
  "perguntas": [
    {
      "questao": "Texto da nova questão aqui...",
      "alternativas_incorretas": [
        "Alternativa incorreta 1.",
        "Alternativa incorreta 2.",
        "Alternativa incorreta 3.",
        "Alternativa incorreta 4."
      ],
      "resposta_correta": "Texto da resposta correta.",
      "justificativa": "Justificativa da resposta correta."
    }
  ]
}
```

### Regras importantes:

1. **Mantenha o formato JSON válido.**
2. Cada questão deve conter:

   * `"questao"`: enunciado da questão.
   * `"alternativas_incorretas"`: uma lista com **4 alternativas incorretas**.
   * `"resposta_correta"`: a alternativa correta.
   * `"justificativa"`: explicação da resposta correta.
3. Não altere o texto das questões, apenas adapte ao modelo.
4. Insira as novas questões **ao final da lista `perguntas` existente** no JSON.
5. Não adicione comentários, explicações ou texto fora do JSON.

### Entrada:

Aqui estão as questões que quero adicionar:
\[COLE AS QUESTÕES AQUI]

### Saída esperada:

Um único bloco **JSON válido**, contendo todas as questões existentes + as novas no formato correto.