import React from "react";
import { withFormik } from "formik";
import InputText from "../../Input/InputText/index"
import InputSelect from "../../Input/InputSelect/index";
import { Col, Container, Row, Button } from "react-bootstrap";
import * as Yup from "yup";

const FormularioComponent = ({ data, handleSubmit, ...props }) => {
  const estados = [
    "Escolher",
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
  ];

  const tipoDeLogradouro = [
    "Escolher",
    "Rua",
    "Alameda",
    "Avenida",
    "Vila",
    "Fazenda",
  ];

  return (
    <Container>
      <div>
        <form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <InputText
                label="Nome"
                name="nome"
                placeholder="Nome completo"
                type="text"
                value={data?.nome}
              />
            </Col>
            <Col>
              <InputText
                label="Email"
                name="email"
                placeholder="email@email.com"
                type="text"
                value={data?.email}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <InputText
                label="CEP"
                name="cep"
                placeholder="cep"
                type="text"
                value={data?.cep}
              />
            </Col>

            <Col>
              <InputSelect
                label="Tipo de Logradouro"
                name="tipoDeLogradouro"
                value={data?.tipoDeLogradouro}
                options={tipoDeLogradouro}
              />
            </Col>

            <Col>
              <InputText
                label="Logradouro"
                name="logradouro"
                placeholder="Nome da rua"
                type="text"
                value={data?.logradouro}
              />
            </Col>

            <Col>
              <InputText
                label="Nº"
                name="numero"
                placeholder="00"
                type="text"
                value={data?.numero}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <InputText
                label="Complemento"
                name="complemento"
                placeholder="quadra, lote..."
                type="text"
                value={data?.complemento}
              />
            </Col>

            <Col>
              <InputText
                label="Bairro"
                name="bairro"
                placeholder=""
                type="text"
                value={data?.bairro}
              />
            </Col>

            <Col>
              <InputText
                label="Cidade"
                name="cidade"
                placeholder=""
                type="text"
                value={data?.cidade}
              />
            </Col>

            <Col>
              <InputSelect
                label="Estado"
                name="estado"
                value={data?.estado}
                options={estados}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <InputText
                label="Tipo de Telefone"
                name="tipo"
                placeholder="Residencial, comercial, cel..."
                type="text"
                value={data?.tipo}
              />
            </Col>

            <Col>
              <InputText
                label="DDD"
                name="ddd"
                placeholder="00"
                type="text"
                value={data?.ddd}
              />
            </Col>

            <Col>
              <InputText
                label="Telefone"
                name="telefone"
                placeholder="000000000"
                type="text"
                value={data?.telefone}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <InputText
                label="Mensagem"
                name="mensagem"
                placeholder="Digite sua mensagem"
                type="text"
                value={data?.mensagem}
              />
            </Col>
          </Row>
          <div>
            <Col>
              <Button className="btn btn-primary" type="submit">
                Enviar
              </Button>
            </Col>

            <footer>
              
            </footer>
          </div>
        </form>
      </div>
    </Container>
  );
};

const validationSchema = Yup.object().shape({
  nome: Yup.string().trim().required("Obrigatório!"),
  email: Yup.string().email().trim().required("Obrigatório!"),
  cep: Yup.string()
    .trim()
    .min(8, "Muito curto!")
    .max(9, "Muito Longo!")
    .required("Obrigatório!"),
  tipoDeLogradouro: Yup.string(),
  logradouro: Yup.string().trim().required("Obrigatório!"),
  numero: Yup.string().trim(),
  complemento: Yup.string().trim(),
  bairro: Yup.string().trim().required("Obrigatório!"),
  cidade: Yup.string().trim().required("Obrigatório!"),
  estado: Yup.string().trim().required("Obrigatório!"),
  tipo: Yup.string().trim(),
  ddd: Yup.string()
    .trim()
    .min(2, "Muito curto!")
    .max(2, "Muito longo!")
    .required("Obrigatório"),
  telefone: Yup.string()
    .trim()
    .min(8, "Muito curto!")
    .max(10, "Muito longo!")
    .required("Obrigatório"),
  mensagem: Yup.string().trim().required("Obrigatório!"),
});

const Formulario = withFormik({
  mapPropsToValues: (props) => {
    return props?.data
      ? props.data
      : {
          nome: "",
          email: "",
          cep: "",
          tipoDeLogradouro: "",
          logradouro: "",
          numero: "",
          complemento: "",
          bairro: "",
          cidade: "",
          estado: "",
          tipo: "",
          ddd: "",
          telefone: "",
        };
  },
  validationSchema: validationSchema,
  handleSubmit: (values, { setSubmitting, props, ...rest }) => {
    debugger;
    props.handleSubmit(values);
  },

  displayName: "BasicForm",
})(FormularioComponent);

export default Formulario;
