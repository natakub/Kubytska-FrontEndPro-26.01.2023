import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "./App.css";

const App = () => {
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
    <div>
      <h1>My Form</h1>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {(formProps) => {
          const {
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          } = formProps;

          return (
            <Form onSubmit={handleSubmit}>
              <label htmlFor="username">Username:</label>
              <div>
                <div>
                  <ErrorMessage name="username" />
                </div>
                <Field
                  name="username"
                  type="text"
                  validate={
                    errors.username && touched.username && errors.username
                  }
                  placeholder="Enter a name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <label htmlFor="email">Email:</label>
              <div>
                <div>
                  <ErrorMessage name="email" />
                </div>
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter an email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  validate={errors.email && touched.email && errors.email}
                />
              </div>
              <label htmlFor="phoneNumber">Phone number:</label>
              <div>
                <div>
                  <ErrorMessage name="phoneNumber" />
                </div>
                <Field
                  name="phoneNumber"
                  type="tel"
                  validate={
                    errors.phoneNumber &&
                    touched.phoneNumber &&
                    errors.phoneNumber
                  }
                  placeholder="Enter a phone number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default App;
