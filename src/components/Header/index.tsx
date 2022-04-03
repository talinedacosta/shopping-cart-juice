import React from 'react';

import { FiShoppingCart } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { Container, Logo, Cart } from './styles';

export const Header = (): JSX.Element => {
  const { cart } = useCart();
  const totalItems = cart.length;

  return (
    <Container>
      <nav>
        <Logo to="/"><h1>myjuice</h1></Logo>

        <div className="navegation">
          <NavLink className={({isActive}) => (isActive ?' active' : '') } to="/"><h3>Mercado</h3></NavLink>
          /
          <NavLink className={({isActive}) => (isActive ?' active' : '')} to="/cart"><h3>Carrinho</h3></NavLink>
        </div>       

        <Cart to="/cart" >
          <button type="button">
            <FiShoppingCart size={24}/>
            <span>{totalItems <= 1 ? `${totalItems} item` : `${totalItems} itens` }</span>
          </button>
        </Cart>       
      </nav>
    </Container>
  )
}