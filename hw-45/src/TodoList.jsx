import React from "react";
import { connect } from "react-redux";
import { setVisibilityFilter } from "./redux/actions";
import {
  addTaskItem,
  toggleTaskItem,
  removeTaskItem,
  deleteTasks,
} from "./redux/redux-thunk/actions";

import TodoForm from "./components/TodoForm";
import Task from "./components/Task";
import FilterButtons from "./components/FilterButtons";
import RemoveAllButton from "./components/RemoveAllButton";
import Pagination from "./components/Pagination";
import styles from "./css/TodoList.module.css";

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks.data,
    status: state.tasks.status,
    visibilityFilter: state.visibilityFilter,
    currentPage: state.tasks.meta.currentPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTaskItem: (text) => dispatch(addTaskItem(text)),
    toggleTaskItem: (id) => dispatch(toggleTaskItem(id)),
    removeTaskItem: (id) => dispatch(removeTaskItem(id)),
    deleteTasks: () => dispatch(deleteTasks()),
    setVisibilityFilter: (filter) => dispatch(setVisibilityFilter(filter)),
  };
};

function TodoList(props) {
  const createTask = (text) => {
    props.addTaskItem(text);
  };

  const handleToggleComplete = (id) => {
    props.toggleTaskItem(id);
  };

  const handleDeleteTask = (id) => {
    props.removeTaskItem(id);
  };

  const handleFilterChange = (selectedFilter) => {
    props.setVisibilityFilter(selectedFilter);
  };

  const filteredTasks = Array.isArray(props.tasks)
    ? props.tasks.filter((task) => {
        if (props.visibilityFilter === "active") {
          return !task.completed;
        } else if (props.visibilityFilter === "completed") {
          return task.completed;
        } else {
          return true;
        }
      })
    : [];

  const handleRemoveAll = () => {
    props.deleteTasks();
  };

  const tasksList = filteredTasks.map((task) => (
    <Task
      key={task.id}
      task={task}
      handleDeleteTask={handleDeleteTask}
      handleToggleComplete={handleToggleComplete}
      deleteIcon={props.deleteIcon}
    />
  ));

  const listStatus = () => {
    switch (props.status) {
      case "request":
        return <div>Loading...</div>;
      case "success":
        return tasksList;
      default:
        return <div>Something went wrong</div>;
    }
  };

  return (
    <div className={styles["todo-list"]}>
      <TodoForm createTask={createTask} />
      <ul>{listStatus()}</ul>
      <Pagination />
      <FilterButtons
        handleFilterChange={handleFilterChange}
        status={props.visibilityFilter}
      />
      <RemoveAllButton removeAllFunc={handleRemoveAll} />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
