import React from 'react';
import { Link } from 'react-router-dom';
import { GiFruitBowl, GiShoppingCart } from 'react-icons/gi';

import { Container, Logo, Cart } from './styles';

export const Header = () => {
  return ( 
    <Container>
      <Link to="/">
        <Logo><span>Heart Healthy</span> <GiFruitBowl size={32} /></Logo>
      </Link>

      <Link to="/cart"> 
        <Cart className='btn-orange'>
          <GiShoppingCart size={32} />
          <strong>Meu carrinho</strong>
          <span>0 item</span>
        </Cart>
      </Link>
    </Container>
   );
}
