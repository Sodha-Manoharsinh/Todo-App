import { ReactNode, createContext, useContext, useState } from "react";

type SortProviderProps = {
  children: ReactNode;
};

type SortContextType = {
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
};

const SortContext = createContext<SortContextType | undefined>(undefined);

export const useSortContext = (): SortContextType => {
  const context = useContext(SortContext);
  if (!context) {
    throw new Error("useSortContext must be used within an SortProvider");
  }
  return context;
};

const SortProvider = ({ children }: SortProviderProps) => {
  const [sort, setSort] = useState("normal");
  return (
    <SortContext.Provider value={{ sort, setSort }}>
      {children}
    </SortContext.Provider>
  );
};

export default SortProvider;
