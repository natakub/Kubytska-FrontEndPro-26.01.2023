import React from "react";
import { Formik, Form } from "formik";
import CustomInput from "./components/CustomInput";
import SubmitButton from "./components/SubmitButton";
import "./MyForm.css";

const MyForm = () => {
  const initialValues = {
    username: "",
    email: "",
    phoneNumber: "",
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      resetForm();
    }, 400);
  };

  const validate = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = "*this field is required";
    } else if (values.username.length > 25) {
      errors.username = "*must be 25 characters or less";
    }

    if (!values.email) {
      errors.email = "*this field is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "*invalid email address";
    }

    if (!values.phoneNumber) {
      errors.phoneNumber = "*this field is required";
    } else if (!/^\+38\(\d{3}\)-\d{3}-\d{2}-\d{2}$/i.test(values.phoneNumber)) {
      errors.phoneNumber = '*must be in this format "+38(xxx)-xxx-xx-xx"';
    }

    return errors;
  };

  return (
    <div className="MyForm">
      <h1 className="MyForm-title">My Form</h1>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        <Form className="MyForm-form">
          <label className="MyForm-label" htmlFor="username">
            Username:
          </label>
          <CustomInput name="username" type="text" placeholder="Enter a name" />
          <label className="MyForm-label" htmlFor="email">
            Email:
          </label>
          <CustomInput name="email" type="email" placeholder="Enter an email" />
          <label className="MyForm-label" htmlFor="phoneNumber">
            Phone number:
          </label>
          <CustomInput
            name="phoneNumber"
            type="tel"
            placeholder="Enter a phone number"
          />
          <SubmitButton>Submit</SubmitButton>
        </Form>
      </Formik>
    </div>
  );
};

export default MyForm;
