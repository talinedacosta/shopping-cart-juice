import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Router } from './routes';
import GlobalStyles from './styles/global';
import { Container } from './styles/App';

function App() {
  const productsList = [
    {
      "id": 1,
      "title": "Laranjamor",
      "description": "Suco feito com laranjas fresquinhas.",
      "ingredients": [
      "laranja"
      ],
      "quantity": "350 ml",
      "price": 3.5,
      "image": "https://images.unsplash.com/photo-1621054143165-33e0e77558d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
      },
      {
      "id": 2,
      "title": "Frescoco",
      "description": "Água de coco, laranja e limão siciliano.",
      "ingredients": [
      "laranja",
      "limão siciliano",
      "coco"
      ],
      "quantity": "410 ml",
      "price": 5.5,
      "image": "https://images.unsplash.com/photo-1622267224551-8063a2d4fbb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
      },
  ]
  localStorage.setItem("@myjuice:cart", JSON.stringify(productsList));
  
  return (  
    <BrowserRouter>
      <GlobalStyles />     
      <Container>
        <Header /> 
        <Router />        
      </Container>
    </BrowserRouter>
  );
}

export default App;
