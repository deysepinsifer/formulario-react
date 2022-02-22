import React from "react";

import { Form, FormSelect } from "react-bootstrap";

const InputSelect = ({ label, name, options }) => {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail" key={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Text className="text-muted">
        <FormSelect aria-label="form-control" name={name}>
          {options.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </FormSelect>
      </Form.Text>
    </Form.Group>
  );
};

export default InputSelect;

