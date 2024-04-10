import { nanoid } from "nanoid";
import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: {
      reducer(state, action) {
        return [...state, action.payload];
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
          },
        };
      },
    },
    deleteTask: {
      reducer(state, action) {
        return state.filter((task) => task.id !== action.payload);
      },
    },
  },
});

export const { addTask, deleteTask } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
