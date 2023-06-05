import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  REMOVE_ALL,
} from "../redux/constants";

const initialState = [];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);

    case REMOVE_ALL:
      return [];

    default:
      return state;
  }
};

export default todos;
