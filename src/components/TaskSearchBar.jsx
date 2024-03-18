const TaskSearchBar = ({ filter, onFilter }) => {
  return (
    <input
      type="text"
      value={filter}
      onChange={(e) => onFilter(e.target.value)}
    />
  );
};

export default TaskSearchBar;
