import React from "react";
import styles from "../css/Task.module.css";

function Task({ task, handleDeleteTask, handleToggleComplete, deleteIcon }) {
  const handleDelete = () => {
    handleDeleteTask(task.id);
  };

  const toggleCompleted = () => {
    handleToggleComplete(task.id);
  };

  return (
    <li className={styles.task}>
      <label
        className={
          task.completed
            ? `${styles["todo-task"]} ${styles.completed}`
            : styles["todo-task"]
        }
      >
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
