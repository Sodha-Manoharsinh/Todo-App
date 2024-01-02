import {
  ReactNode,
  useContext,
  useState,
  createContext,
  useEffect,
} from "react";
import { TodoItemsType } from "./ItemsProvider";

type DeletedItemsProviderProps = {
  children: ReactNode;
};

type DeletedItemsContextType = {
  setDeletedItems: React.Dispatch<React.SetStateAction<TodoItemsType[]>>;
  deletedItems: TodoItemsType[];
};

const delItemsContext = createContext<DeletedItemsContextType | undefined>(
  undefined
);

export const useDeletedItemsContext = (): DeletedItemsContextType => {
  const context = useContext(delItemsContext);
  if (!context) {
    throw new Error(
      "useDeletedItemsContext must be used within an DeletedItemsProvider"
    );
  }
  return context;
};

const DeletedItemsProvider = ({ children }: DeletedItemsProviderProps) => {
  const [deletedItems, setDeletedItems] = useState<TodoItemsType[]>(() => {
    const localValue = localStorage.getItem("DELETED_ITEMS");
    if (localValue == null) {
      return [];
    }
    return JSON.parse(localValue);
  });
  const contextValue = {
    setDeletedItems,
    deletedItems,
  };

  useEffect(() => {
    localStorage.setItem("DELETED_ITEMS", JSON.stringify(deletedItems));
  }, [deletedItems]);

  return (
    <delItemsContext.Provider value={contextValue}>
      {children}
    </delItemsContext.Provider>
  );
};

export default DeletedItemsProvider;
