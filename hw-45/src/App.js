import React, { useEffect } from "react";
import { connect } from "react-redux";
import TodoList from "./TodoList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import { fetchTasks } from "./redux/redux-thunk/actions";
import Pagination from "./components/Pagination";

const mapStateToProps = (state) => {
  return {
    currentPage: state.tasks.meta.currentPage,
  };
};

function App(props) {
  const { fetchTasks, currentPage } = props;

  useEffect(() => {
    fetchTasks();
  }, [currentPage]);

  return (
    <div className="app">
      <h1 className="app-title">To-Do List</h1>
      <TodoList
        deleteIcon={
          <FontAwesomeIcon icon={faTrashCan} style={{ color: "#61dafb" }} />
        }
      />
      <Pagination />
    </div>
  );
}

export default connect(mapStateToProps, { fetchTasks })(App);
