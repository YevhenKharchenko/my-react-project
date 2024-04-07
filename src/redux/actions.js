// src/redux/actions.js

import { nanoid } from "nanoid";

export const addValue = () => {
  return {
    type: "value/addCount",
  };
};

export const reduceValue = () => {
  return { type: "value/reduceCount" };
};

export const addTask = (value) => {
  return {
    type: "tasks/addTask",
    payload: { text: value, id: nanoid() },
  };
};

export const deleteTask = (id) => {
  return {
    type: "tasks/deleteTask",
    payload: id,
  };
};
