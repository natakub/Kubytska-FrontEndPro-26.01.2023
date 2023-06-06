import { VisibilityFilters, SET_VISIBILITY_FILTER } from "../constants";

const visibilityFilter = (state = VisibilityFilters.SHOW_ACTIVE, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;

    default:
      return state;
  }
};

export default visibilityFilter;
