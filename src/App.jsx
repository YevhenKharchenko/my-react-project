import Button from "./components/Button";
import Form from "./components/Form";
import FeedbackForm from "./components/FeedbackForm";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
import TaskSearchBar from "./components/TaskSearchBar";
import ImageInput from "./components/ImageInput";
import { useState, useEffect } from "react";

const App = () => {
  const [lang, setLang] = useState("uk");
  const [coffeeSize, setCoffeeSize] = useState("sm");
  const [hasAccepted, setHasAccepted] = useState(false);
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return JSON.parse(savedTasks) ?? [];
  });
  const [filter, setFilter] = useState("");

  const visibleTasks = tasks.filter((task) =>
    task.task.toLowerCase().includes(filter.toLowerCase())
  );

  const addTask = (newTask) => {
    setTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleSizeChange = (value) => {
    setCoffeeSize(value);
  };

  const handleChange = (isChecked) => {
    setHasAccepted(isChecked);
  };

  const handleLogin = (userData) => {
    console.log(userData);
  };

  return (
    <>
      <Button />
      <Form
        handleLogin={handleLogin}
        lang={lang}
        setLang={setLang}
        coffeeSize={coffeeSize}
        handleSizeChange={handleSizeChange}
        hasAccepted={hasAccepted}
        handleChange={handleChange}
      />
      <FeedbackForm />
      <ToDoForm onAdd={addTask} />
      <TaskSearchBar value={filter} onFilter={setFilter} />
      <ToDoList tasks={visibleTasks} onDelete={deleteTask} />
      <ImageInput />
    </>
  );
};

export default App;
