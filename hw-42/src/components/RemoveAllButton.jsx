import React from "react";
import "./RemoveAllButton.css";

function RemoveAllButton(props) {
  return (
    <button className="RemoveAllButton" onClick={props.removeAllFunc}>
      Clear all
    </button>
  );
}

export default RemoveAllButton;
