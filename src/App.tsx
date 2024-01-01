import MainCard from "./components/MainCard";
import SortProvider from "./components/Context/SortProvider";
import ItemsProvider from "./components/Context/ItemsProvider";
import HistoryProvider from "./components/Context/HistoryProvider";

function App() {
  return (
    <HistoryProvider>
      <ItemsProvider>
        <SortProvider>
          <MainCard />
        </SortProvider>
      </ItemsProvider>
    </HistoryProvider>
  );
}

export default App;
