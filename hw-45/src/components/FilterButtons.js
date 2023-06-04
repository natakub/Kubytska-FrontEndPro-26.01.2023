import React from "react";
import clsx from "clsx";
import styles from "../css/FilterButtons.module.css";

function FilterButtons(props) {
  return (
    <div className={styles["filter-buttons"]}>
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
