# Desafio 08: Fundamentos do React Native

### :rocket: Sobre o Desafio


Nesse desafio, desenvolverá uma nova aplicação, a GoMarketplace. Dessa vez é hora de você praticar o que você aprendeu até agora no React Native, junto com TypeScript, utilizando rotas, Async Storage e a Context API.

### Utilizando uma fake API

```js
yarn json-server server.json -p 3333
```

###  :pencil:  Funcionalidades da aplicação
- [x] **`Listar os produtos da fake API`**
- [x] **`Adicionar itens ao carrinho`**
- [x] **`Exibir itens do carrinho`**
- [x] **`Aumentar quantidade de itens do carrinho`**
- [x] **`Diminuir quantidade de um item do carrinho`**
- [x] **`Exibir valor total dos itens no carrinho`**

### ⚡️ Especificação dos testes
Para esse desafio temos os seguintes testes:


-   **`should be able to list the products`**: Para que esse teste passe, sua aplicação deve permitir que sejam listados na sua tela  `Dashboard`, toda os produtos que são retornadas do Fake API. Essa listagem deve exibir o  `title`  e o  `price`  que deve ser formatado utilizando a função  `Intl`.
    
-   **`should be able to add a product to the cart`**: Para que esse teste passe, você deve permitir que seja possível adicionar produtos da sua  `Dashboard`  ao carrinho, utilizando o contexto de  `cart`  disponibilizado.
    
-   **`should be able to list the products on the cart`**: Para que esse teste passe, você deve permitir que seja possível listar os produtos que estão salvos no contexto do seu carrinho na página  `Cart`, nessa página exiba o nome do produto, o subtotal total de cada produto (price * quantity).
    
-   **`should be able to calculate the cart total`**: Para que esse teste passe, tanto na página  `Dashboard`, tanto na página  `Cart`  você deve exibir o valor total de todos os itens que estão no seu carrinho.
    

**Dica**: Para calcular o total de todos os itens, você pode utilizar o  [reduce](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)  para somar todos os valores e retornar o valor total.

-   **`should be able to show the total quantity of itens in the cart`**: Para que esse teste passe, tanto na página  `Dashboard`, tanto na página  `Cart`  você deve exibir o número total de itens que estão no seu carrinho.

**Dica**: Para calcular o total de todos os itens, você pode utilizar o  [reduce](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)  para somar todos os valores e retornar o valor total.

**Dica 2**: Utilize o useMemo para armazenar o valor total do carrinho que você calculou.

- [x] **`should be able to increment product quantity on the cart`**
- [x]  **`should be able to decrement product quantity on the cart`**
- [x]   **`should be able to navigate to the cart`**
- [x]   **`should be able to add products to the cart`**
- [x]  **`should be able to increment quantity`**
- [x]  **`should be able to decrement quantity`**
- [x]  **`should store products in AsyncStorage while adding, incrementing and decrementing`**
- [x]  **`should load products from AsyncStorage`**


Feito com :purple_heart:   by [wslmacieira](https://github.com/wslmacieira) :wave:
