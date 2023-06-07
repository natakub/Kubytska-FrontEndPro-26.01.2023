import {
  ADD_TASK,
  TOGGLE_TASK,
  REMOVE_TASK,
  SET_VISIBILITY_FILTER,
  REMOVE_ALL,
} from "./constants";

export const addTask = (text) => ({
  type: ADD_TASK,
  payload: text,
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: id,
});

export const removeTask = (id) => ({
  type: REMOVE_TASK,
  payload: id,
});

export const removeAll = () => ({
  type: REMOVE_ALL,
});

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});
