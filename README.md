
<h4 align="center">
	💳 Carrinho de compras 💳
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#%EF%B8%8F-funcionalidades">Funcionalidades</a> •
 <a href="#-próximos-passos">Próximos passos</a> •
 <a href="#-observações">Observações</a> •
 <a href="#-executando-o-projeto">Como executar</a> •
</p>


## 💻 Sobre o projeto

O carrinho de compras é parte fundamental de um ecommerce. A partir dele é que o processo de compra se inicia. Essa implementação tem como objetivo o estudo de hooks no react.

---

### ⚙️ Funcionalidades

- [x] Adicionar um item no carrinho
- [x] Remover um item do carrinho
- [x] Atualizar a quantidade de um item no carrinho
- [x] Limpar o carrinho
- [x] Gerar totais e subtotais
- [x] Recuperar o carrinho

---

### 👷 Próximos passos

- [ ] Implementar Testes
- [ ] Refatorar alguns itens muito acoplados
- [ ] Melhorar regras de segurança (Apenas o dono do carrinho deve poder alterá-lo, etc.)
- [ ] Adicionar Logs
- [ ] Implementar serviço de promoção (Para validar cupons e aplicar ofertas promocionais)
- [ ] Implementar serviço entrega (Para calculo de frete e prazos de entrega)
- [ ] Implementar serviço para gerenciar taxa de serviço
- [ ] Implementar serviço para gerenciar o catálogo de produtos (estoque, disponibilidade, preço, etc.)

---

### ❗ Observações

Foi usado nesse projeto: React, Typescript, Styled Components, Axios e Json-server.

---

### 🎲 Executando o projeto

```bash

# Clone este repositório
$ git clone git@github.com:talinedacosta/shopping-cart-juice.git

# Acesse a pasta do projeto no terminal/cmd
$ cd shopping-cart-juice

# Instale as dependências
$ npm install

# Inicie o server
$ npm run server

# Inicie o projeto
$ npm run start

# O projeto será iniciado na porta "3000" -> disponível em "http://localhost:3000"
# O servidor será iniciado na porta "3333" -> disponível em "http://localhost:3333"

```
### Referências

- **[Ignite - React](https://www.rocketseat.com.br)**
























## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run server`

Runs the server.\
Open [http://localhost:3333](http://localhost:3333) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
