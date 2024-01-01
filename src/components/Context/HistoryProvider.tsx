import { ReactNode, createContext, useContext, useState } from "react";

type HistoryProviderProps = {
  children: ReactNode;
};

type HistoryContextType = [
  history: boolean,
  seHistory: React.Dispatch<React.SetStateAction<boolean>>
];

const HistoryContext = createContext<HistoryContextType | undefined>(undefined);

export const useHistoryContext = (): HistoryContextType => {
  const context = useContext(HistoryContext);
  if (!context) {
    throw new Error("useHistoryContext must be used within an HistoryProvider");
  }
  return context;
};

const HistoryProvider = ({ children }: HistoryProviderProps) => {
  const [history, setHistory] = useState(false);
  return (
    <HistoryContext.Provider value={[history, setHistory]}>
      {children}
    </HistoryContext.Provider>
  );
};

export default HistoryProvider;
