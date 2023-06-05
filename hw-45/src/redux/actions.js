import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  SET_VISIBILITY_FILTER,
  REMOVE_ALL,
} from "./constants";

// let nextTodoId = 0;
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: text,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id,
});

export const removeAll = () => ({
  type: REMOVE_ALL,
});

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});
