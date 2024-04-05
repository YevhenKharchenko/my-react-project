import { Task } from "./Task";

export const TaskList = () => {
  const tasks = [];

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
