import { useEffect, useState } from "react";
import Item from "./Item";
import { TodoItemsType, useItemsContext } from "./Context/ItemsProvider";
import { useSortContext } from "./Context/SortProvider";
import { useDeletedItemsContext } from "./Context/DeletedItemsProvider";
import getSortedItems from "./UsefulFunctions/getSortedItems";

const Table = () => {
  const [sortedItems, setSortedItems] = useState<TodoItemsType[]>([]);

  const [items, setItems] = useItemsContext();
  const { sort } = useSortContext();
  const { setDeletedItems } = useDeletedItemsContext();

  useEffect(() => {
    const newItems = getSortedItems({ sort, items });
    if (newItems) {
      setSortedItems([...newItems]);
    }
  }, [sort, items]);

  getSortedItems({ sort, items });

  const handleDelete = (id: number) => {
    let deletedItems: TodoItemsType[] = [];
    deletedItems = items.filter((item) => item.id === id);

    setDeletedItems((prevItems) => [...prevItems, ...deletedItems]);

    setItems((prevItems) =>
      prevItems.filter((item) => {
        return item.id !== id;
      })
    );
  };

  const handleCheckChange = (id: number, checked: boolean) => {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, checked: checked };
        }
        return item;
      });
    });
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
            {sortedItems.map((item) => (
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
      {items.length === 0 && (
        <div className="sort-text add-text">Add Todo List</div>
      )}
    </>
  );
};

export default Table;
