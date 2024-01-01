import { TodoItemsType } from "../Context/ItemsProvider";

type getSortedItemsProps = {
  sort: string;
  items: TodoItemsType[];
};

const getSortedItems = ({ sort, items }: getSortedItemsProps) => {
  const newItems = [...items];
  let sortedItems;
  switch (sort) {
    case "new":
      sortedItems = newItems.slice().sort((a, b) => {
        return b.id - a.id;
      });
      break;

    case "completed":
      sortedItems = newItems.filter((item) => {
        return item.checked === true;
      });
      break;

    case "incomplete":
      sortedItems = newItems.filter((item) => {
        return !item.checked;
      });
      break;

    case "normal":
      sortedItems = [...items];
  }
  return sortedItems && sortedItems;
};

export default getSortedItems;
