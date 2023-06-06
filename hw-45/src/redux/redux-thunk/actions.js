import { addTask, toggleTask, removeTask, removeAll } from "../actions";
import { FETCH_TASKS, SET_CURRENT_PAGE } from "../constants";

export const setCurrentPage = (page) => {
  return async (dispatch) => {
    dispatch({
      type: SET_CURRENT_PAGE,
      payload: page,
    });

    dispatch(fetchTasks());
  };
};

const fetchTaskRequest = () => ({
  type: FETCH_TASKS,
  payload: {
    data: [],
  },
  status: "request",
});

const fetchTaskSuccess = (data) => ({
  type: FETCH_TASKS,
  payload: {
    data: data,
    meta: {
      limit: data.limit,
      currentPage: data.currentPage,
      total: data.total,
    },
  },
  status: "success",
});

const fetchTaskFailure = () => ({
  type: FETCH_TASKS,
  payload: {
    data: [],
  },
  status: "failure",
});

export const fetchTasks = () => {
  return async (dispatch, _, options) => {
    dispatch(fetchTaskRequest());

    try {
      const response = await fetch(`${options.apiEndpoint}/api/v1/tasks`);
      const data = await response.json();
      dispatch(fetchTaskSuccess(data));
    } catch (error) {
      dispatch(fetchTaskFailure());
    }
  };
};

export const addTaskItem = (text) => {
  return async (dispatch, _, options) => {
    try {
      const response = await fetch(`${options.apiEndpoint}/api/v1/tasks`, {
        method: "POST",
        body: JSON.stringify({ text }),
      });
      const data = await response.json();
      dispatch(addTask(text));
    } catch (error) {
      console.log("Error while adding task", error);
    }
  };
};

export const toggleTaskItem = (id) => {
  return async (dispatch, _, options) => {
    try {
      const response = await fetch(
        `${options.apiEndpoint}/api/v1/tasks/${id}`,
        {
          method: "PUT",
          body: JSON.stringify({ completed: true, active: true }),
        }
      );
      const data = await response.json();
      dispatch(toggleTask(id));
    } catch (error) {
      console.log("Error while toggling task", error);
    }
  };
};

export const removeTaskItem = (id) => {
  return async (dispatch, _, options) => {
    try {
      const response = await fetch(
        `${options.apiEndpoint}/api/v1/tasks/${id}`,
        {
          method: "PUT",
          body: JSON.stringify({ id }),
        }
      );
      const data = await response.json();
      dispatch(removeTask(id));
    } catch (error) {
      console.log("Error while removing task", error);
    }
  };
};

export const deleteTasks = () => {
  return async (dispatch, _, options) => {
    try {
      const response = await fetch(`${options.apiEndpoint}/api/v1/tasks/`, {
        method: "DELETE",
      });
      const data = await response.json();
      dispatch(removeAll(data));
    } catch (error) {
      console.log("Error while deleting tasks", error);
    }
  };
};
