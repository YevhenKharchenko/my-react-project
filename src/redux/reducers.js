// src/redux/reducers.js
import { createReducer } from "@reduxjs/toolkit";
import { addValue, reduceValue, addTask, deleteTask } from "./actions";

export const valueReducer = createReducer(0, (builder) => {
  builder
    .addCase(addValue, (state, action) => {
      return state + 1;
    })
    .addCase(reduceValue, (state, action) => {
      return state - 1;
    });
});

export const tasksReducer = createReducer([], (builder) => {
  builder
    .addCase(addTask, (state, action) => {
      return [...state, action.payload];
    })
    .addCase(deleteTask, (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    });
});
