import { FormEvent, useState } from "react";
import { getPerfectDateValue } from "./UsefulFunctions/getDate";
import { useItemsContext } from "./Context/ItemsProvider";

const LowerNav = () => {
  const [value, setValue] = useState("");
  const [items, setItems] = useItemsContext();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Getting current date
    const todayDate = `${getPerfectDateValue("date")}/${getPerfectDateValue(
      "month"
    )}/${getPerfectDateValue("year")}`;

    // Getting current time
    const currentTime = `${getPerfectDateValue("hour")}:${getPerfectDateValue(
      "minute"
    )}:${getPerfectDateValue("second")}`;

    // Setter function
    if (value.trim() !== "") {
      setItems((prevItems) => [
        ...prevItems,
        {
          checked: false,
          id: new Date().getTime(),
          value: value,
          date: todayDate,
          time: currentTime,
        },
      ]);
    }

    setValue("");
  };

  if (items === null) {
    console.log(items);
  }

  return (
    <form className="lower-nav" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="todo-input" className="lower-nav-text">
        Add Todo
      </label>
      <input
        type="text"
        id="todo-input"
        placeholder="for eg. Do Running"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="btn">Add</button>
    </form>
  );
};

export default LowerNav;
