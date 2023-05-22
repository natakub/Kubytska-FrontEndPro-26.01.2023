import React, { useState } from "react";
import "./TodoForm.css";

function TodoForm({ createTask }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = (event) => {
    event.preventDefault();

    const newTask = {
      id: new Date().getTime(),
      text: inputValue,
      completed: false,
    };

    if (inputValue.trim() !== "") {
      createTask(newTask);
      setInputValue("");
    }
  };

  return (
    <div className="TodoForm">
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a new task"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default TodoForm;
