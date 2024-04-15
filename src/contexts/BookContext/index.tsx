import { IBook } from "@interfaces/books";
import { GetAllBooks } from "@services/book";
import React, { createContext, useEffect, useState } from "react";

interface IBookContext {
  Book: IBook[];
  setBook: React.Dispatch<React.SetStateAction<IBook[]>>
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>
  itemSearch: string;
  setItemSearch: React.Dispatch<React.SetStateAction<string>>
  getBook(): Promise<void>;
}

export const BookContext = createContext<IBookContext>({} as IBookContext);

type IBookProps = {
  children: JSX.Element;
}

export function BookProvider({ children }: IBookProps) {
  const [Book, setBook] = useState<IBook[]>([]);
  const [input, setInput] = useState<string>('');
  const [itemSearch, setItemSearch] = useState<string>('');

  useEffect(() => {
    setTimeout(() => {
      getBook();
    }, 3000);
  }, []);

  async function getBook() {
    try {
      const allBooks = await GetAllBooks();
      setBook(allBooks);
    } catch (error) {
      console.log("Erro ao tentar consultar no BookContext")
    }
  }

  return (
    <BookContext.Provider
      value={{ Book, itemSearch, input, setBook, setItemSearch, setInput, getBook }}
    >
      {children}
    </BookContext.Provider>
  );
}