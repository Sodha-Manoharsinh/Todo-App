import { useSortContext } from "./Context/SortProvider";

const Header = () => {
  const { sort, setSort } = useSortContext();
  return (
    <header>
      <h1>Todo List</h1>
      <div className="select">
        <label htmlFor="sort" className="sort-text">
          Sort by
        </label>
        <select
          name="sort"
          id="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="normal">Normal</option>
          <option value="new">New</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
