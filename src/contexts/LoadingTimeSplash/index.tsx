import React, { createContext, useState, Dispatch, SetStateAction } from "react";

interface ILoadingTimeSplashContext {
  finishSplash: boolean;
  setFinishSplash: Dispatch<SetStateAction<boolean>>;
  token: boolean;
  setToken: Dispatch<SetStateAction<boolean>>;
}

export const LoadingTimeSplashContext = createContext<ILoadingTimeSplashContext>({} as ILoadingTimeSplashContext);

type ILoadingTimeSplashProps = {
  children: JSX.Element;
}

export const LoadingTimeSplashProvider: React.FC<ILoadingTimeSplashProps> = ({ children }) => {
  const [finishSplash, setFinishSplash] = useState<boolean>(false);
  const [token, setToken] = useState<boolean>(false);

  return (
    <LoadingTimeSplashContext.Provider
      value={{ finishSplash, token, setFinishSplash, setToken }}
    >
      {children}
    </LoadingTimeSplashContext.Provider>
  )
}
