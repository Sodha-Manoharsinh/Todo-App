import { TodoItemsType } from "./Context/ItemsProvider";

type ItemProps = {
  item: TodoItemsType;
  handleDelete: (id: number) => void;
  handleCheckChange: (id: number, checked: boolean) => void;
};

const Item = ({ item, handleDelete, handleCheckChange }: ItemProps) => {
  return (
    <tr draggable role="row">
      <td>
        <input
          type="checkbox"
          className="checkbox"
          checked={item.checked}
          onChange={(e) => handleCheckChange(item.id, e.target.checked)}
        />
      </td>
      <td className="task">{item.value}</td>
      <td>{item.date}</td>
      <td>{item.time}</td>
      <td>
        <button className="del-btn" onClick={() => handleDelete(item.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Item;
