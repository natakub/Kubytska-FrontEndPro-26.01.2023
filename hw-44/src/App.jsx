import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "./App.css";

const App = () => {
  const initialValues = {
    username: "",
    email: "",
    phoneNumber: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  const isRequired = (message) => (value) => !!value ? undefined : message;

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = " *this field is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
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
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <div>
              <Field
                name="username"
                type="text"
                validate={isRequired(" *this field is required")}
                placeholder="Enter a name"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name="username" />
            </div>
            <label htmlFor="email">Email:</label>
            <div>
              <Field
                name="email"
                type="email"
                placeholder="Enter an email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
            </div>
            <label htmlFor="phoneNumber">Phone number:</label>
            <div>
              <Field
                name="phoneNumber"
                type="tel"
                validate={isRequired(" *this field is required")}
                placeholder="Enter a phone number"
              />
              <ErrorMessage name="phoneNumber" />
            </div>
            {/* {errors.password && touched.password && errors.password} */}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;
