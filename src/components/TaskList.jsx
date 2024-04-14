// src/components/TaskList/TaskList.jsx

// Імпортуємо хук
import { useSelector } from "react-redux";
import { Task } from "./Task";
import { selectVisibleTasks } from "../redux/selectors";

export const TaskList = () => {
  // Отримуємо масив завдань із стану Redux
  const tasks = useSelector(selectVisibleTasks);

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
