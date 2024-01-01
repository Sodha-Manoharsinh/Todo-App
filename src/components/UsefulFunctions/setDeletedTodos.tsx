import { TodoItemsType } from "../Context/ItemsProvider";

const setDeletedTodos = (deletedTodos: TodoItemsType[]) => {
  for (const item of deletedTodos) {
    console.log(item.value);
  }
};

export default setDeletedTodos;
