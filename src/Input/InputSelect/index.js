import { Field } from "formik";
import React from "react";
import { ErrorMessage, InputContent } from "./style";
import { Form, Placeholder } from "react-bootstrap";

const handleChange = (onChange, setValue) => (e) => {
  const value = e.target.value;
  setValue(value);
  if (onChange) {
    onChange(value);
  }
};

const InputSelect = (props) => {
  const { name, label, options, onChange } = props;

  return (
    <Field name={name}>
      {({
        field,
        form: { touched, errors, setFieldValue, isValid },
        meta,
      }) => (
        <InputContent>
          <Form.Group className="mb-3" controlId="formBasicEmail" key={name}>
            <Form.Label>{label}</Form.Label>
            <Form.Select
              {...field}
              {...props}
             
             
              className={
                touched[name] &&
                !field?.value &&
                !isValid &&
                errors[name] &&
                "class-error"
              }
             
              aria-label="form-control"
              name={name}
              onChange={handleChange(onChange, setFieldValue)}
            >
              {options.map((item) => (
                <option name={name} key={item}>
                  {item}
                </option>
              ))}
            </Form.Select>
            {touched[name] && !field?.value && !isValid && errors[name] && (
              <ErrorMessage id="feedback">{errors[name]}</ErrorMessage>
            )}
          </Form.Group>
        </InputContent>
      )}
    </Field>
  );
};

export default InputSelect;
