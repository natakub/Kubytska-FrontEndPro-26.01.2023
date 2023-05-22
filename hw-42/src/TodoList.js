import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import Task from "./components/Task";
import FilterButtons from "./components/FilterButtons";
import RemoveAllButton from "./components/RemoveAllButton";
import "./TodoList.css";

function TodoList(props) {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  // we have "all", "active", or "complete"

  const createTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleToggleComplete = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);

    setTasks(updatedTasks);
  };

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") {
      return !task.completed;
    } else if (filter === "completed") {
      return task.completed;
    } else {
      return true;
    }
  });

  const handleRemoveAll = () => {
    setTasks([]);
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
    <div className="TodoList">
      <TodoForm createTask={createTask} />
      <ul>{tasksList}</ul>
      <FilterButtons handleFilterChange={handleFilterChange} />
      <RemoveAllButton removeAllFunc={handleRemoveAll} />
    </div>
  );
}

export default TodoList;
