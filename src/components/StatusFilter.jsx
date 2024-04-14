import { useSelector, useDispatch } from "react-redux";
import { Button } from "./Button";
import { statusFilters } from "../redux/constants";
import { selectStatusFilter } from "../redux/selectors";
import { setStatusFilter } from "../redux/filtersSlice";

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

  return (
    <div>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
