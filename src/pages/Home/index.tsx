import React from 'react';
import { Products } from '../../components/Products';

import { Container } from './styles';

export const Home = (): JSX.Element => {
  return (
    <Container>
      <h2>Mercado</h2>
      <Products />      
    </Container>
  )
}