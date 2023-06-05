import React from "react";
import { connect } from "react-redux";
import {
  addTodo,
  toggleTodo,
  removeTodo,
  removeAll,
  setVisibilityFilter,
} from "./redux/actions";

import TodoForm from "./components/TodoForm";
import Task from "./components/Task";
import FilterButtons from "./components/FilterButtons";
import RemoveAllButton from "./components/RemoveAllButton";
import styles from "./css/TodoList.module.css";

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    visibilityFilter: state.visibilityFilter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodo: (text) => dispatch(addTodo(text)),
    onToggleTodo: (id) => dispatch(toggleTodo(id)),
    onRemoveTodo: (id) => dispatch(removeTodo(id)),
    onRemoveAll: () => dispatch(removeAll()),
    onSetVisibilityFilter: (filter) => dispatch(setVisibilityFilter(filter)),
  };
};

function TodoList(props) {
  debugger;

  const createTask = (text) => {
    props.onAddTodo(text);
  };

  const handleToggleComplete = (id) => {
    props.onToggleTodo(id);
  };

  const handleDeleteTask = (id) => {
    props.onRemoveTodo(id);
  };

  const handleFilterChange = (selectedFilter) => {
    props.onSetVisibilityFilter(selectedFilter);
  };

  const filteredTasks = Array.isArray(props.todos)
    ? props.todos.filter((todo) => {
        if (props.visibilityFilter === "active") {
          return !todo.completed;
        } else if (props.visibilityFilter === "completed") {
          return todo.completed;
        } else {
          return true;
        }
      })
    : [];

  const handleRemoveAll = () => {
    props.onRemoveAll();
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

  return (
    <div className={styles["todo-list"]}>
      <TodoForm createTask={createTask} />
      <ul>{tasksList}</ul>
      <FilterButtons
        handleFilterChange={handleFilterChange}
        status={props.visibilityFilter}
      />
      <RemoveAllButton removeAllFunc={handleRemoveAll} />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
