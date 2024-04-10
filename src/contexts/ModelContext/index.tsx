import { IBook } from "@interfaces/book";
import { GetAllBook } from "@services/book";
import React, { createContext, useState, Dispatch, SetStateAction, useEffect } from "react";

interface IBookContext {
  Book: IBook[];
  setBook: Dispatch<SetStateAction<IBook[]>>;
}

export const BookContext = createContext<IBookContext>({} as IBookContext);

type IBookProps = {
  children: JSX.Element;
}

export const BookProvider: React.FC<IBookProps> = ({ children }) => {
  const [Book, setBook] = useState<IBook[]>([]);

  useEffect(() => {
    GetBook();
  }, []);

  async function GetBook() {
    try {
      const allBook = await GetAllBook();
      setBook(allBook);
    } catch (error) {
      
    }
  }

  return (
    <BookContext.Provider
      value={{ Book, setBook }}
    >
      {children}
    </BookContext.Provider>
  )
}
