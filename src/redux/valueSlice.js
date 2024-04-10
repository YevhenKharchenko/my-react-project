import { createSlice } from "@reduxjs/toolkit";

const valueSlice = createSlice({
  name: "value",
  initialState: 0,
  reducers: {
    addValue(state, action) {
      return state + 1;
    },
    reduceValue(state, action) {
      return state - 1;
    },
  },
});

export const { addValue, reduceValue } = valueSlice.actions;

export const valueReducer = valueSlice.reducer;
