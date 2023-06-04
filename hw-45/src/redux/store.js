import rootReducer from "../reducers/rootReduser";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
