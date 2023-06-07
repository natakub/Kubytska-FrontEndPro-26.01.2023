import { useEffect, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddContactForm(props) {
  const formikRef = useRef(null);

  useEffect(() => {
    if (formikRef.current) {
      formikRef.current.focus();
    }
  }, [formikRef]);

  const initialValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    props.addContact(values.firstName, values.lastName, values.phoneNumber);
    resetForm();
  };

  const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "*this field is required";
    } else if (values.firstName.length > 15) {
      errors.firstName = "*must be 15 characters or less";
    }

    if (!values.lastName) {
      errors.lastName = "*this field is required";
    } else if (values.lastName.length > 15) {
      errors.lastName = "*must be 15 characters or less";
    }

    if (!values.phoneNumber) {
      errors.phoneNumber = "*this field is required";
    } else if (!/^[0-9]+$/i.test(values.phoneNumber)) {
      errors.phoneNumber = "numbers only";
    }

    return errors;
  };

  return (
    <Modal show={handleSubmit} onHide={props.onCancel}>
      <Modal.Header className="bg-secondary" closeButton>
        <Modal.Title>Add new Contact</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-secondary">
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={handleSubmit}
          autofocus={true}
        >
          <Form className="form">
            <div className="my-2">
              <Field
                className="form-input"
                name="firstName"
                type="text"
                placeholder="Enter first name"
                innerRef={formikRef}
                autofocus={true}
              />
              <ErrorMessage name="firstName" />
            </div>
            <div className="my-2">
              <Field
                className="form-input"
                name="lastName"
                type="text"
                placeholder="Enter last name"
                autofocus={true}
              />

              <ErrorMessage name="lastName" />
            </div>
            <div className="my-2">
              <Field
                className="form-input"
                name="phoneNumber"
                type="tel"
                placeholder="Enter a phone number"
              />
              <ErrorMessage name="phoneNumber" />
            </div>
            <Button variant="info" type="submit">
              Add Contact
            </Button>
          </Form>
        </Formik>
      </Modal.Body>
    </Modal>
  );
}

export default AddContactForm;
