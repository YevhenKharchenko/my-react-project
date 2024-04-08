import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addValue, reduceValue, addTask, deleteTask } from "../redux/actions";
import { getTasks, getValue } from "../redux/selectors";

const Counter = () => {
  const value = useSelector(getValue);
  const tasks = useSelector(getTasks);
  const dispatch = useDispatch();

  const handleAddClick = () => {
    dispatch(addValue());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.name.value;
    dispatch(addTask(value));
    e.target.reset();
  };

  const handleDelete = (e) => {
    dispatch(deleteTask(e.target.id));
  };

  return (
    <div>
      <p>Count: {value}</p>
      <button onClick={handleAddClick}>Add</button>
      <button
        onClick={() => {
          dispatch(reduceValue());
        }}
      >
        Reduce
      </button>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" />
        <input type="submit" value="Submit" />
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <p>{task.text}</p>
            <button id={task.id} onClick={handleDelete}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Counter;
