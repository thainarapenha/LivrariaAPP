import { IBook } from "@interfaces/books";
import { GetDetails } from "@services/details";
import React, { createContext, useState } from "react";

interface IDetailsContext {
  DetailsBook: IBook[];
  setDetailsBook: React.Dispatch<React.SetStateAction<IBook[]>>
  getDetailsBook(id: number): Promise<void>;
}

export const DetailsContext = createContext<IDetailsContext>({} as IDetailsContext);

type IDetailsProps = {
  children: JSX.Element;
}

export function DetailsProvider({ children }: IDetailsProps) {
  const [DetailsBook, setDetailsBook] = useState<IBook[]>([]);

  async function getDetailsBook(id: number) {
    try {
      const allDetails = await GetDetails(id);
      if(allDetails != undefined){
        setDetailsBook(allDetails);
      }
    } catch (error) {
      console.log("Erro ao tentar consultar no DetailsContext")
    }
  }

  return (
    <DetailsContext.Provider
      value={{ DetailsBook, setDetailsBook, getDetailsBook }}
    >
      {children}
    </DetailsContext.Provider>
  );
}