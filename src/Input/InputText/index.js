import React from "react";
import { Form } from "react-bootstrap";
import { Field } from "formik";

const InputText = (props) => {
  
  return (
    <Field id="nome" {...props}>
      {({
        field, // { name, value, onChange, onBlur }
        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
        meta,
      }) => (
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>{props.label}</Form.Label>
          <Form.Control {...field} {...props} />
          <Form.Text className="text-muted" />
        </Form.Group>
      )}
    </Field>
  );
};

export default InputText;
