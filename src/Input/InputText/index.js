import React from 'react';
import { Form } from "react-bootstrap";

const InputText = ({name, label, placeholder, type, value}) => {
    console.log(value);
    return (
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{label}</Form.Label>
            <Form.Control type={type} placeholder={placeholder}  name={name} value={value}/>
            <Form.Text className="text-muted"  />
        </Form.Group>
    );
}

export default InputText;