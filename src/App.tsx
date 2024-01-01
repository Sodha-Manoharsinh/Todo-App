import MainCard from "./components/MainCard";
import SortProvider from "./components/Context/SortProvider";
import ItemsProvider from "./components/Context/ItemsProvider";

function App() {
  return (
    <ItemsProvider>
      <SortProvider>
        <MainCard />
      </SortProvider>
    </ItemsProvider>
  );
}

export default App;
