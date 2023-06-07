import {
  ADD_TASK,
  TOGGLE_TASK,
  REMOVE_TASK,
  REMOVE_ALL,
  FETCH_TASKS,
  SET_CURRENT_PAGE,
} from "../constants";

const INITIAL_STATE = {
  status: "none",
  data: [],
  meta: {
    limit: 5,
    currentPage: 1,
    total: 0,
  },
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      switch (action.status) {
        case "request":
          return {
            ...state,
            status: "request",
          };
        case "success":
          return {
            status: "success",
            data: action.payload.data,
            meta: {
              ...state.meta,
              ...action.payload.meta,
            },
          };
        default:
          return {
            ...state,
            status: "failure",
          };
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        meta: {
          ...state.meta,
          currentPage: action.payload,
        },
      };

    case ADD_TASK:
      return {
        ...state,
        data: [action.payload, ...state.data],
      };

    case TOGGLE_TASK:
      return {
        ...state,
        data: state.data.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };

    case REMOVE_TASK:
      return {
        ...state,
        data: state.data.filter((task) => task.id !== action.payload),
      };

    case REMOVE_ALL:
      return {
        ...state,
        data: [],
      };

    default:
      return state;
  }
};

export default reducer;
