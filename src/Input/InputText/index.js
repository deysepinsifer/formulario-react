import { useField } from "formik";
import React from "react";
import { Form } from "react-bootstrap";
import {ErrorMessage, InputContent} from './style'

const InputText = ({name, label, placeholder, restProps}) => {
  const [field, meta] = useField(name);
  return (
    <InputContent>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>{label}</Form.Label>
          <Form.Control className={meta?.touched && meta?.value === "" && "class-error"} {...field} {...restProps}  placeholder={placeholder}/>
          <Form.Text className="text-muted"/>
          {meta?.touched && meta?.value === "" && <ErrorMessage id="feedback">Campo obrigatório</ErrorMessage>}
        </Form.Group>
        </InputContent>
  );
};

export default InputText;
