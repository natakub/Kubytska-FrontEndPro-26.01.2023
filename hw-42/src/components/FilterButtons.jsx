import React from "react";
import "./FilterButtons.css";

function FilterButtons(props) {
  return (
    <div className="FilterButtons">
      <button onClick={() => props.handleFilterChange("all")}>All</button>
      <button onClick={() => props.handleFilterChange("active")}>Active</button>
      <button onClick={() => props.handleFilterChange("completed")}>
        Completed
      </button>
    </div>
  );
}

export default FilterButtons;
