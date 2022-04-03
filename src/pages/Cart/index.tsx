import React, { useEffect, useState } from 'react';
import { useCart } from '../../hooks/useCart';

import { FiMinus, FiPlus, FiTrash2, FiFrown } from 'react-icons/fi';
import { Container, ProductsList, Product, Total } from './styles';
import { formatPrice } from '../../util/format';

interface Product {
  id: number,
  title: string,
  description: string,
  ingredients: Array<string> ,
  weight: string,
  price: number,
  image: string,
  amount: number
}

export const Cart = (): JSX.Element => {
  const { cart, updateProductAmount, removeProduct } = useCart();

  const cartFormatted = cart.map((product) => {
    return {
      ...product,
      priceFormatted: formatPrice(product.price),
      subtotal: formatPrice(product.amount * product.price)
    }
  })

  const total = cart.reduce((accTotal, product) => {
    return accTotal + (product.price * product.amount)
  }, 0)

  function handleIncrementProductAmount(product: Product) {
    updateProductAmount({
      productId: product.id,
      amount: product.amount + 1
    });
  }

  function handleDecrementProductAmount(product: Product) {
    updateProductAmount({
      productId: product.id,
      amount: product.amount - 1
    });
  }

  function handleRemoveProduct(productId: number){
    removeProduct(productId)
  }

  function renderCart() {
    if (cartFormatted.length) {
      return (
        cartFormatted.map(product => {
          return (
            <Product key={product.id}>
              <div className="product">
                <img src={product.image} alt={product.title} />
                <div className="description">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <p className="title">{product.priceFormatted}</p>            
                </div>              
              </div>
              <div className="amount">
                <div>
                  <button type="button" className={product.amount == 1 ? 'disabled' : '' } onClick={() => handleDecrementProductAmount(product)}><FiMinus size={16} /></button>
                    <p>{product.amount}</p>
                  <button type="button" onClick={() => handleIncrementProductAmount(product)}><FiPlus size={16} /></button>
                  <button type="button" onClick={() => handleRemoveProduct(product.id)}><FiTrash2 size={16} /></button>
                </div>
                <p className="title">Subtotal {product.subtotal}</p>
              </div>             
            </Product>
          )
        })
      )
    } else {
      return <p className="emptyCart">Vazio <FiFrown size={16} /></p>
    }
  }

  return (
    <Container>
     <h2>Carrinho</h2>      
      <ProductsList>       
        { renderCart() }
      </ProductsList>     
      <Total>
        <h4>Total</h4>
        <h3>{formatPrice(total)}</h3>
      </Total>
    </Container>
  )
};
