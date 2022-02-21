import React from "react";
import { Form } from "react-bootstrap";
import { Field } from "formik";

const InputText = ({ name, label, placeholder, type, value }) => {
  console.log(value);
  return (
    <Field id="nome" name={name}>
      {({
        field, // { name, value, onChange, onBlur }
        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
        meta,
      }) => (
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>{label}</Form.Label>
          <Form.Control
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
          />
          <Form.Text className="text-muted" />
        </Form.Group>
      )}
    </Field>
  );
};

export default InputText;
