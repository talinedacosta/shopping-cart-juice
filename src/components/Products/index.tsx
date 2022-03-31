import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';

import { formatPrice } from '../../util/format';

import { FiShoppingCart } from 'react-icons/fi';
import { Container, ProductsList, Product } from './styles';

interface Product {
  id: number,
  title: string,
  description: string,
  ingredients: Array<string> ,
  quantity: string,
  price: number,
  image: string,
  priceFormatted: string
}

export const Products = (): JSX.Element => {
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get<Product[]>('/products');
      
      const data = response.data.map(product => ({
       ...product,
       priceFormatted: formatPrice(product.price)
     }))
 
     setProducts(data);
     }
   
     loadProducts();
  }, [])

  return (
    <Container>
      <ProductsList>
        {products?.map(product => {
          return (
            <Product key={product.id}>
              <div className="header">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="body">
                <h3>{product.title}</h3>
                <span>{product.description}</span>
              </div>
              <div className="footer">
                <h3>{product.priceFormatted}</h3>
                <button type="button"><FiShoppingCart size={16} /> <span>0</span></button>
              </div>
            </Product>
          )
        })}    
      </ProductsList>      
    </Container>
  )
}