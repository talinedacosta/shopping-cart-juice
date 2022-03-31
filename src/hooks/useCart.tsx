import { createContext, useContext, useEffect, useState, ReactNode, useRef } from 'react';
import { toast } from 'react-toastify';

import { api } from '../services/api';

interface Product {
  id: number,
  title: string,
  description: string,
  ingredients: Array<string>,
  quantity: string,
  price: number,
  image: string
}

interface CartProviderProps {
  children: ReactNode
}

interface CartContextData {
  cart: Product[];
}

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem("@myjuice:cart")

      if (storagedCart) {
       return JSON.parse(storagedCart);
      }

      return []
  });

  // I: altera localstora quando lista do carrinho sofrer qualquer alteração
  const prevCartRef = useRef<Product[]>();
  useEffect(() => {
    prevCartRef.current = cart;
  })

  const cartPreviousValue = prevCartRef.current ?? cart;
  useEffect(() => {
    if(cartPreviousValue !== cart) {
      localStorage.setItem("@myjuice:cart", JSON.stringify(cart))
    }
  }, [cart, cartPreviousValue])
  // fim I

  return <CarContext.Provider value={{ cart }}>
    {children}
  </CarContext.Provider>;
};

const CarContext = createContext({} as CartContextData);

export function useCart(): CartContextData {
  const context = useContext(CarContext);
  return context;
}