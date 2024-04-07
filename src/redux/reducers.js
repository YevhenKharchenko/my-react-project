// src/redux/reducers.js

// Імпортуємо функцію композиції редюсерів
import { combineReducers } from "redux";

const valueInitialState = { value: 0, tasks: [] };

// Відповідає лише за оновлення властивості tasks
// Тепер значенням параметра state буде масив завдань
export const rootReducer = (state = valueInitialState, action) => {
  switch (action.type) {
    case "value/addCount":
      return { tasks: [...state.tasks], value: state.value + 1 };
    case "value/reduceCount":
      return { tasks: [...state.tasks], value: state.value - 1 };
    case "tasks/addTask":
      return { value: state.value, tasks: [...state.tasks, action.payload] };
    case "tasks/deleteTask":
      return {
        value: state.value,
        tasks: [...state.tasks.filter((task) => task.id !== action.payload)],
      };
    default:
      return state;
  }
};
