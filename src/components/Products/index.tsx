import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';

import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../util/format';

import { FiShoppingCart } from 'react-icons/fi';
import { Container, ProductsList, Product } from './styles';


interface Product {
  id: number,
  title: string,
  description: string,
  ingredients: Array<string> ,
  weight: string,
  price: number,
  image: string,
  amount: number,
  priceFormatted: string
}

interface CartProductsAmount {
  [key: number]: number;
}

export const Products = (): JSX.Element => {
  const [products, setProducts] = useState<Product[]>();
  const { cart, addProduct } = useCart();

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

  const handleAddProduct = (productId: number) => {
    addProduct(productId);
  }

  const cartProductsAmount = cart.reduce((accAmount, product) => {
    const newAccAmount = { ...accAmount };
    newAccAmount[product.id] = product.amount;

   return newAccAmount;
  }, {} as CartProductsAmount)

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
                <h3>{product.title}  <small>{product.weight}</small></h3>               
                <span>{product.description}</span>
               
              </div>
              <div className="footer">
                <h3>{product.priceFormatted}</h3>  
                <button type="button" onClick={() => handleAddProduct(product.id)}><FiShoppingCart size={16} /> 
                <span>{cartProductsAmount[product.id] || 0}</span>
                </button>
              </div>
            </Product>
          )
        })}    
      </ProductsList>      
    </Container>
  )
}