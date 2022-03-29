import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Router } from './routes';
import GlobalStyles from './styles/global';
import { Container } from './styles/App';

function App() {
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
