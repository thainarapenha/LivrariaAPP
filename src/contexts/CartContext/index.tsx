import { IBook } from "@interfaces/books";
import React, { createContext, useState } from "react";

interface ICartContext {
  CartBook: IBook[];
  setCartBook: React.Dispatch<React.SetStateAction<IBook[]>>
  getCartBook(id: number): Promise<void>;
}

export const CartContext = createContext<ICartContext>({} as ICartContext);

type ICartProps = {
  children: JSX.Element;
}

export function CartProvider({ children }: ICartProps) {
  const [CartBook, setCartBook] = useState<IBook[]>([]);

  // async function getCartBook(id: number) {
  //   try {
  //     const allCart = await GetCart(id);
  //     if(allCart != undefined){
  //       setCartBook(allCart);
  //     }
  //   } catch (error) {
  //     console.log("Erro ao tentar consultar no CartContext")
  //   }
  // }

  return (
    <CartContext.Provider
      value={{ CartBook, setCartBook, getCartBook }}
    >
      {children}
    </CartContext.Provider>
  );
}