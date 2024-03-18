const ToDoForm = ({ onAdd }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    formData.append("id", Date.now());
    const formObj = Object.fromEntries(formData.entries());
    onAdd(formObj);
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ToDoForm;

// const obj = {
//   id: Date.now(),
//   text: e.target.elements.task.value,
// };
