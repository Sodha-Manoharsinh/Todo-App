import { useHistoryContext } from "./Context/HistoryProvider";
import { TodoItemsType } from "./Context/ItemsProvider";

type ItemProps = {
  item: TodoItemsType;
  handleDelete: (id: number) => void;
  handleCheckChange: (id: number, checked: boolean) => void;
};

const Item = ({ item, handleDelete, handleCheckChange }: ItemProps) => {
  const [history] = useHistoryContext();

  return (
    <tr draggable role="row">
      <td>
        {!history ? (
          <input
            type="checkbox"
            id="checkbox"
            checked={item.checked}
            onChange={(e) => handleCheckChange(item.id, e.target.checked)}
          />
        ) : (
          <div>{item.checked ? "Completed" : "Not Completed"}</div>
        )}
      </td>
      <td className="task">{item.value}</td>
      <td>{item.date}</td>
      <td>{item.time}</td>
      <td>
        <i
          onClick={() => handleDelete(item.id)}
          className="fa fa-trash-o del-btn btn-hover"
        ></i>
      </td>
    </tr>
  );
};

export default Item;
