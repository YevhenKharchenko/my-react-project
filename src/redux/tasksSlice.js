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

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  tasksSlice.actions;

export const { addTask, deleteTask } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
