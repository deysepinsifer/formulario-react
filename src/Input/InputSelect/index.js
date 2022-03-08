import { useField } from "formik";
import React from "react";

import { Form } from "react-bootstrap";

const handleChange = (setValue) => (e) => {
  setValue(e.target.value);
};

const InputSelect = ({ label, name, options }) => {
  const [field, meta, helpers] = useField(name);
  const { setValue } = helpers;

  return (
    <Form.Group className="mb-3" controlId="formBasicEmail" key={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Select
        aria-label="form-control"
        name={name}
        onChange={handleChange(setValue)}
      >
        {options.map((item) => (
          <option name={name} key={item}>
            {item}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};

export default InputSelect;
