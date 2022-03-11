import React, { useState } from "react";
import { withFormik } from "formik";
import InputText from "../../Input/InputText/index"
import InputSelect from "../../Input/InputSelect/index";
import { Col, Container, Row, Button } from "react-bootstrap";
import * as Yup from "yup";

const buscarCidadesDoEstado = (setCidades) => async (estado) => {
  setCidades(["Araraquara", "São Carlos"]);
}

const FormularioComponent = ({ data, handleSubmit, ...props }) => {

  const [cidades, setCidades] = useState(["Selecione uma cidade"]);

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

  const tipo = [
    "Escolher",
    "Celular",
    "Residencial",
    "Comercial",
    "Recado",
    
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
              <InputSelect
                label="Estado"
                name="estado"
                value={data?.estado}
                options={estados}
                onChange={buscarCidadesDoEstado(setCidades)}
              />
            </Col>

            <Col>
              <InputSelect
                label="Cidade"
                name="cidade"
                value={data?.cidade}
                options={cidades}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <InputSelect
                label="Tipo de Telefone"
                name="tipo"
                options={tipo}
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
  nome: Yup.string().trim().required("Nome completo é obrigatório!"),
  email: Yup.string().email().trim().required("Email obrigatório!"),
  cep: Yup.string()
    .trim()
    .min(8, "Muito curto!")
    .max(9, "Muito Longo!")
    .required("CEP obrigatório!"),
  tipoDeLogradouro: Yup.string().required("Tipo de logradouro é obrigatório!"),
  logradouro: Yup.string().trim().required("Logradouro obrigatório!"),
  numero: Yup.string().trim(),
  complemento: Yup.string().trim(),
  bairro: Yup.string().trim().required("Bairro obrigatório!"),
  cidade: Yup.string().trim(),
  estado: Yup.string().trim().required("Estado obrigatório!"),
  tipo: Yup.string().trim(),
  ddd: Yup.string()
    .trim()
    .min(2, "Muito curto!")
    .max(2, "Muito longo!")
    .required("DDD obrigatório!"),
  telefone: Yup.string()
    .trim()
    .min(8, "Muito curto!")
    .max(10, "Muito longo!")
    .required("Telefone obrigatório!"),
  mensagem: Yup.string().trim().required("Mensagem obrigatória!"),
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
          mensagem: "",
        };
  },
  validationSchema: validationSchema,
  handleSubmit: (values, { setSubmitting, props, resetForm, ...rest }) => {
    debugger;
    props.handleSubmit(values);
    resetForm({});
  },

  displayName: "BasicForm",
})(FormularioComponent);

export default Formulario;
