// src/components/App.jsx

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "./redux/operations";
import { selectError, selectIsLoading } from "./redux/selectors";
import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";
import { AppBar } from "./components/AppBar";
import { Layout } from "./components/Layout";
import Cart from "./components/Cart/Cart";

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Layout>
      <AppBar />
      <TaskForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <TaskList />
      <button onClick={handleModal}>Open modal</button>
      {isOpen && <Cart handleModal={handleModal} />}
    </Layout>
  );
};
