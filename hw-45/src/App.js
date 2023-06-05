import React from "react";
import TodoList from "./TodoList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="app-title">To-Do List</h1>
      <TodoList
        deleteIcon={
          <FontAwesomeIcon icon={faTrashCan} style={{ color: "#61dafb" }} />
        }
      />
    </div>
  );
}

export default App;
