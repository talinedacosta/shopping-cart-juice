import React, { useEffect, useState } from 'react';

import { FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, ProductsList, Product } from './styles';

interface Product {
  id: number,
  title: string,
  description: string,
  ingredients: Array<string> ,
  quantity: string,
  price: number,
  image: string,
}

export const Cart = (): JSX.Element => {
  const [cart, setCart] = useState<Product[]>();

  useEffect(() => {
    async function loadCart() {
      const storagedCart = localStorage.getItem("@myjuice:cart")

      if (storagedCart) {
        setCart(JSON.parse(storagedCart));
      } 
     }
   
     loadCart();
  }, [])

  return (
    <Container>
     <h2>Carrinho</h2>  
      <ProductsList>
        {cart?.map(product => {
          return (
            <Product key={product.id}>
            <div className="header">
              <img src={product.image} alt={product.title} />
              <div className="description">
                <h3>{product.title}</h3>
                <span>{product.description}</span>            
              </div>              
            </div>
            <div className="body">
              <button type="button"><FiMinus size={16} /></button>
              <span>1</span>
              <button type="button"><FiPlus size={16} /></button>
            </div>
            <div className="footer">
              <button type="button"><FiTrash2 size={16} /></button>
            </div>
          </Product>
          )
        })}
      </ProductsList>
    </Container>
  )
};
