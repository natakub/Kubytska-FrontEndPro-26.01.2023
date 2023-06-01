import React from "react";
import { useField } from "formik";
import "./CustomInput.css";

const CustomInput = (props) => {
  const [field, meta] = useField(props.name);

  return (
    <div>
      <div>
        <input
          className="CustomInput"
          type={field.type}
          name={field.name}
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
          placeholder={props.placeholder}
        />
      </div>
      <div className="CustomInput-error">
        {meta.error && meta.touched && <ErrorField>{meta.error}</ErrorField>}
      </div>
    </div>
  );
};

const ErrorField = (props) => {
  return <div>{props.children}</div>;
};

export default CustomInput;
