import "../CSS/main.css";
import DeletedItemsProvider from "./Context/DeletedItemsProvider";
import Header from "./Header";
import Navbar from "./Navbar";
import Table from "./Table";

const MainCard = () => {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <DeletedItemsProvider>
        <Table />
      </DeletedItemsProvider>
    </div>
  );
};

export default MainCard;
