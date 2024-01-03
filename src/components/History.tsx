import { useDeletedItemsContext } from "./Context/DeletedItemsProvider";
import Item from "./Item";

const History = () => {
  const { setDeletedItems, deletedItems } = useDeletedItemsContext();

  const handleCheckChange = () => {};
  const handleDelete = (id: number) => {
    setDeletedItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th className="th">Status</th>
            <th>Task</th>
            <th>Date</th>
            <th>Time</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <>
            {deletedItems.map((item) => (
              <Item
                key={item.id}
                item={item}
                handleDelete={handleDelete}
                handleCheckChange={handleCheckChange}
              />
            ))}
          </>
        </tbody>
      </table>
      {deletedItems.length === 0 && (
        <div className="no-list-text">Nothing Deleted</div>
      )}
    </>
  );
};

export default History;
