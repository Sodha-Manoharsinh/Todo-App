import "../CSS/exp.css";
// import "../CSS/main.css";
import DeletedItemsProvider from "./Context/DeletedItemsProvider";
import { useHistoryContext } from "./Context/HistoryProvider";
import Header from "./Header";
import History from "./History";
import Navbar from "./Navbar";
import Table from "./Table";

const MainCard = () => {
  const [showHistory] = useHistoryContext();

  return (
    <div className="container">
      <Navbar />
      <Header />
      <DeletedItemsProvider>
        {showHistory ? <History /> : <Table />}
      </DeletedItemsProvider>
    </div>
  );
};

export default MainCard;
