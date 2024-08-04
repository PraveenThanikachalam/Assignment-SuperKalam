"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
} from "react";

interface ContextProps {
  buttonState: boolean;
  setButtonState: Dispatch<SetStateAction<boolean>>;

  buttonTwoState: boolean;
  setButtonTwoState: Dispatch<SetStateAction<boolean>>;

  hamburgerState: boolean;
  setHamburgerState: Dispatch<SetStateAction<boolean>>;
}

const GlobalContext = createContext<ContextProps>({
  buttonState: false,
  setButtonState: () => "",
  buttonTwoState: false,
  setButtonTwoState: () => "",
  hamburgerState: false,
  setHamburgerState: () => "",
});

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [buttonState, setButtonState] = useState(false);
  const [buttonTwoState, setButtonTwoState] = useState(false);
  const [hamburgerState, setHamburgerState] = useState(false);
  return (
    <GlobalContext.Provider
      value={{
        buttonState,
        setButtonState,
        buttonTwoState,
        setButtonTwoState,
        hamburgerState,
        setHamburgerState,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
