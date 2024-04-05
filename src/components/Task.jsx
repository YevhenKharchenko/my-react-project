import { MdClose } from "react-icons/md";

export const Task = ({ task }) => {
  return (
    <div>
      <input type="checkbox" checked={task.completed} />
      <p>{task.text}</p>
      <button>
        <MdClose size={24} />
      </button>
    </div>
  );
};
