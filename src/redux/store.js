// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { valueReducer } from "./valueSlice";
import { tasksReducer } from "./tasksSlice";

export const store = configureStore({
  reducer: {
    value: valueReducer,
    tasks: tasksReducer,
  },
});
