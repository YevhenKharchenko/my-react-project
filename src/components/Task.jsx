const Task = ({ data: { task, id }, onDelete }) => {
  return (
    <div>
      <p>{task}</p>
      <button
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
