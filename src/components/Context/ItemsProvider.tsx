import { ReactNode, createContext, useContext, useState } from "react";

export type TodoItemsType = {
  checked: boolean;
  id: number;
  value: string;
  date: string;
  time: string;
};

type ItemsProviderProps = {
  children: ReactNode;
};

type ItemsContextType = [
  items: TodoItemsType[],
  setItems: React.Dispatch<React.SetStateAction<TodoItemsType[]>>
];

const SortContext = createContext<ItemsContextType | undefined>(undefined);

export const useItemsContext = (): ItemsContextType => {
  const context = useContext(SortContext);
  if (!context) {
    throw new Error("useSortContext must be used within an SortProvider");
  }
  return context;
};

const ItemsProvider = ({ children }: ItemsProviderProps) => {
  const [items, setItems] = useState<TodoItemsType[]>([]);
  return (
    <SortContext.Provider value={[items, setItems]}>
      {children}
    </SortContext.Provider>
  );
};

export default ItemsProvider;
