import { useHistoryContext } from "./Context/HistoryProvider";
import { useSortContext } from "./Context/SortProvider";

const Header = () => {
  const [history] = useHistoryContext();
  const { sort, setSort } = useSortContext();
  return (
    <header>
      {!history ? (
        <>
          <h1>Added Tasks</h1>
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
        </>
      ) : (
        <h1>Deleted Tasks</h1>
      )}
    </header>
  );
};

export default Header;
