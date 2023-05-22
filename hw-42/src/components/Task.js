import React from "react";
import "./Task.css";

function Task({ task, handleDeleteTask, handleToggleComplete, deleteIcon }) {
  const handleDelete = () => {
    handleDeleteTask(task.id);
  };

  const toggleCompleted = () => {
    handleToggleComplete(task.id);
  };

  return (
    <li className="Task">
      <label className={task.completed ? "Todo-task completed" : "Todo-task"}>
        <input
          name="task"
          type="checkbox"
          checked={task.completed}
          onChange={toggleCompleted}
        />
        <span name="task">{task.text}</span>
      </label>
      <button onClick={handleDelete}>{deleteIcon}</button>
    </li>
  );
}

export default Task;
