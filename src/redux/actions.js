// src/redux/actions.js

import { nanoid } from "nanoid";
import { createAction } from "@reduxjs/toolkit";

export const addValue = createAction("value/increment");

export const reduceValue = createAction("value/decrement");

export const addTask = createAction("tasks/addTask", (text) => {
  return {
    payload: {
      text,
      id: nanoid(),
    },
  };
});

export const deleteTask = createAction("tasks/deleteTask");
