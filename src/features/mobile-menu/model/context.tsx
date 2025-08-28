"use client";

import { createContext, useState } from "react";

interface IMenuContext<T> {
  isActive: T;
  setActive: React.Dispatch<React.SetStateAction<T>>;
}

export const MenuContext = createContext<IMenuContext<boolean>>({
  isActive: false,
  setActive: () => {},
});

export function MenuContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isActive, setIsActive] = useState(false);

  return (
    <MenuContext.Provider value={{ isActive, setActive: setIsActive }}>
      {children}
    </MenuContext.Provider>
  );
}
