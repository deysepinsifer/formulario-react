import React from "react";
import { Container } from "react-bootstrap";
import * as yup from 'yup';
import { Formik } from "formik";


const Validacao = () => (
    <Container>
      <Formik>
        validationSchema={yup.object({
          nome: yup.string().required(),
          email: yup.string().email().required(),
          cep: yup.string().required(),
          tipoDeLogradouro: yup.string(),
          logradouro: yup.string(),
          numero: yup.string().required,
          complemento: yup.string(),
          bairro: yup.string().required,
          cidade: yup.string().required,
          estado: yup.string().required,
          tipo: yup.string(),
          ddd: yup.string().required,
          telefone: yup.string().matches(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, 'Phone number is not valid').required(),
          mensagem: yup.string().required
        } )}

         </Formik>
        </Container>

        );

        export default Validacao;