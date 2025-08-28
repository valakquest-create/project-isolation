import { createContext, useContext, useState } from "react";

interface ICustomContext<T> {
  data: T;
  setData: React.Dispatch<React.SetStateAction<T>>;
}

export function createCustomContext<T>(initialData: T) {
  const context = createContext<ICustomContext<T>>({
    data: initialData,
    setData: () => {},
  });

  const ContextProvider = ({
    children,
  }: Readonly<{ children: React.ReactNode }>) => {
    const [data, setData] = useState(initialData);

    return (
      <context.Provider value={{ data, setData }}>{children}</context.Provider>
    );
  };

  const useCustomContext = () => useContext(context);

  return { ContextProvider, useCustomContext };
}
