import React from 'react';
import { Container, ProductList } from './styles';
import { GiShoppingCart } from 'react-icons/gi';

export const Home = () => {
  return (
    <Container>
      <ProductList>
        <li>
          <img src="https://images.unsplash.com/photo-1619241638225-14d56e47ae64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="Suco" />
          <h3 className='title'>Suco de Laranja</h3>
          <p className='description'>Suco feito com laranjas fresquinhas.</p>
          <div className='details'><span className='price'>R$ 3,50</span> <span className='quantity'>350 ml</span></div>
          <button type="button" className="btn-orange"><span className="cartAmount"><GiShoppingCart size={24}/> 0</span> Adicionar ao carrinho</button>
        </li>
      </ProductList>
    </Container>
  )
}