import { combineReducers } from "redux";
import tasks from "./tasks";
import visibilityFilter from "./visibilityFilter";

const rootReducer = combineReducers({
  tasks,
  visibilityFilter,
});

export default rootReducer;
