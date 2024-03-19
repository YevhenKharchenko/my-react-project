import Task from "./Task";

const ToDoList = ({ tasks, onDelete }) => {
  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            <Task data={task} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
};

export default ToDoList;
