import { createContext, useContext, useEffect, useState, ReactNode, useRef } from 'react';
import { toast } from 'react-toastify';

import { api } from '../services/api';

interface Product {
  id: number,
  title: string,
  description: string,
  ingredients: Array<string>,
  weight: string,
  price: number,
  image: string,
  amount: number
}

interface CartProviderProps {
  children: ReactNode
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount}: UpdateProductAmountProps) => void;
}

interface UpdateProductAmountProps {
  productId: number;
  amount: number;
}

const CarContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem("@myjuice:cart")

      if (storagedCart) {
       return JSON.parse(storagedCart);
      }

      return []
  });

  // I: altera localstorage quando lista do carrinho sofrer qualquer tipo de alteração
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


  const addProduct = async (productId: number) => {
    try {
      const storagedCart = [...cart];
      const productExists = storagedCart.find(product => product.id === productId);
      
      const stock = await api.get(`/stock/${productId}`);
      const stockAmount = stock.data.amount;

      const amount = productExists ? productExists.amount : 0;
      const productAmount = amount + 1;

      if(productAmount > stockAmount){
        toast.error('Quantidade solicitada fora de estoque');
        return
      }
      
      if(productExists) {
        productExists.amount = productAmount;
      } else {
        const product = await api.get(`/products/${productId}`)
        const newProduct = {
          ...product.data,
          amount: 1
        }
        storagedCart.push(newProduct);
      }

      setCart(storagedCart);

    } catch {
      toast.error('Erro na adição do produto');
    }
  }

  const removeProduct = (productId: number) => {
    try {
      const storagedCart = [...cart];
      const productIndex = storagedCart.findIndex(product => product.id === productId);
                 
      if(productIndex >= 0) {
        storagedCart.splice(1, productIndex);
        setCart(storagedCart);
      } else {
        toast.error('Erro na remoção do produto');
        return
      }    

    } catch {
      toast.error('Erro na remoção do produto');
    }
  }

  const updateProductAmount = async ({productId, amount}: UpdateProductAmountProps) => {
    try {

      if(amount <= 0){
        return
      }
         
      const stock = await api.get(`/stock/${productId}`);
      const stockAmount = stock.data.amount;

      if(amount > stockAmount){
        toast.error('Quantidade solicitada fora de estoque');
        return
      }
      
      const storagedCart = [...cart];
      const productExists = storagedCart.find(product => product.id === productId);

      if(productExists) {
        productExists.amount = amount;
        setCart(storagedCart);
      } else {
        throw Error();
      }     
    } catch {
      toast.error('Erro na adição do produto');
    }
  }

  return (
    <CarContext.Provider value={{ cart, addProduct, removeProduct, updateProductAmount }}>
      {children}
    </CarContext.Provider>
  )
};

export function useCart(): CartContextData {
  const context = useContext(CarContext);
  return context;
}

