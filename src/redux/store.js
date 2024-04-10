// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { valueReducer, tasksReducer } from "./reducers";

export const store = configureStore({
  reducer: {
    value: valueReducer,
    tasks: tasksReducer,
  },
});
