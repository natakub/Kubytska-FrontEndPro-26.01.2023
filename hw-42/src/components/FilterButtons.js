import React from "react";
import "./FilterButtons.css";
import clsx from "clsx";

function FilterButtons(props) {
  return (
    <div className="FilterButtons">
      <button
        className={clsx({ active: props.status === "all" })}
        onClick={() => {
          props.handleFilterChange("all");
        }}
      >
        All
      </button>
      <button
        className={clsx({ active: props.status === "active" })}
        onClick={() => props.handleFilterChange("active")}
      >
        Active
      </button>
      <button
        className={clsx({ active: props.status === "completed" })}
        onClick={() => props.handleFilterChange("completed")}
      >
        Completed
      </button>
    </div>
  );
}

export default FilterButtons;
