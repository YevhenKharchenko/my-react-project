// src/redux/reducers.js

// Імпортуємо функцію композиції редюсерів
import { combineReducers } from "redux";

const valueInitialState = 0;

const tasksInitialState = [];

const valueReducer = (state = valueInitialState, action) => {
  switch (action.type) {
    case "value/addCount":
      return state + 1;
    case "value/reduceCount":
      return state - 1;
    default:
      return state;
  }
};

// Відповідає лише за оновлення властивості tasks
// Тепер значенням параметра state буде масив завдань
const tasksReducer = (state = tasksInitialState, action) => {
  switch (action.type) {
    case "tasks/addTask":
      return [...state, action.payload];
    case "tasks/deleteTask":
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  value: valueReducer,
  tasks: tasksReducer,
});
