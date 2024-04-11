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
    // faço com que essa função de pegar livros
    // execute assim que inicializo o app
    GetBook();
  }, []);

  async function GetBook() {
    try {
      // busca na pasta services a função responsável por
      // requisitar informações na API (api.get('/livros'))
      const allBook = await GetAllBook();

      // adiciono o retorno da API para meu estado (state)
      setBook(allBook);
    } catch (error) {
      // lembre-se que este não é um jeito correto para fazer
      // tratamento de erro. Como expliquei anteriormente, queriamos ver
      // se acontecia algo. Fica como sugestão, pesquisar mais sobre esse tópico.
      console.log("erro no BookContext" + error);
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
