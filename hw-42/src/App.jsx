import React from "react";
import TodoList from "./components/TodoList";
// import ToDo from "./components/ToDo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="App-title">To-Do List</h1>
      <TodoList
        deleteIcon={
          <FontAwesomeIcon icon={faTrashCan} style={{ color: "#61dafb" }} />
        }
      />
    </div>
  );
}

export default App;
