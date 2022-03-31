import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Router } from './routes';
import GlobalStyles from './styles/global';
import { Container } from './styles/App';
import { CartProvider } from './hooks/useCart';

function App() {
  
  return (  
    <BrowserRouter>
      <GlobalStyles />  
      <CartProvider>   
        <Container>
          <Header /> 
          <Router />        
        </Container>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
