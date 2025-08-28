"use client";

import { createContext, useContext, useState } from "react";

interface IModalContext {
  isActive: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalContext = createContext<IModalContext>({
  isActive: false,
  setActive: () => {},
});

export function ModalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isActive, setActive] = useState(false);

  return (
    <ModalContext.Provider value={{ isActive, setActive }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModalContext() {
  const context = useContext(ModalContext);

  return context;
}
