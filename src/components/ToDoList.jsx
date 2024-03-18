import Task from "./Task";

const ToDoList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            <Task data={task} />
          </li>
        );
      })}
    </ul>
  );
};

export default ToDoList;
