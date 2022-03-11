import { Field } from "formik";
import React from "react";
import { Form } from "react-bootstrap";
import { ErrorMessage, InputContent } from "./style";

const InputText = ({ name, label, placeholder, ...restProps }) => {
  return (
    <Field name={name}>
      {({
        field, 
        form: { touched, isValid, errors }, 
        meta,
      }) => (
        <InputContent>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{label}</Form.Label>
            <Form.Control
              className={
                touched[name] &&
                !field?.value &&
                !isValid &&
                errors[name] &&
                "class-error"
              }
              {...field}
              {...restProps}
              placeholder={placeholder}
            />
            {touched[name] && !field?.value && !isValid && errors[name] && (
              <ErrorMessage id="feedback">{errors[name]}</ErrorMessage>
            )}
          </Form.Group>
        </InputContent>
      )}
    </Field>
  );
};

export default InputText;
