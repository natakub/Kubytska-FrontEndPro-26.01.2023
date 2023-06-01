import React from "react";
import { useFormikContext } from "formik";
import "./SubmitButton.css";

const SubmitButton = (props) => {
  const { isSubmitting } = useFormikContext();
  return (
    <button className="SubmitButton" type="submit" disabled={isSubmitting}>
      {props.children}
    </button>
  );
};

export default SubmitButton;
