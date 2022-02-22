import React from "react";
import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import InputText from "../../Input/InputText";
import InputSelect from "../../Input/InputSelect";
import { Link } from "react-router-dom";
import { Formik, Form, useFormik } from "formik";

const Home = () => {
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
  const Validacao = () => {
    const formik = useFormik({
      initialValues: {
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
      },

      onSubmit: (values, { resetForm, ...props }) => {
        alert(JSON.stringify(values, null, 2));
      },

      onReset: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });

    return (
      <Container>
        <Dropdown>
          <DropdownToggle className="btn btn-secondary" id="dropdownMenuButton">
            Menu
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Contato</DropdownItem>
            <DropdownItem as={Link} to="/contatos">
              Lista de Contato
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <h1>CADASTRO</h1>
        <div>
          <Form onSubmit={formik.handleSubmit}>
            <Row>
              <Col lg="6">
                <InputText
                  label="NOME"
                  name="nome"
                  placeholder="Nome completo"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.nome}
                ></InputText>
              </Col>

              <Col lg="6">
                <InputText
                  label="EMAIL"
                  name="email"
                  placeholder="email@email.com"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                ></InputText>
              </Col>
            </Row>

            <Row>
              <Col lg="2">
                <InputText
                  label="CEP"
                  name="cep"
                  placeholder="00000 000"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.cep}
                ></InputText>
              </Col>

              <Col lg="3">
                <InputSelect
                  label="TIPO DE LOGRADOURO"
                  name="tipoDeLogradouro"
                  placeholder="Rua, Alameda..."
                  type="text"
                  options={tipoDeLogradouro}
                  onChange={formik.handleChange}
                  value={formik.values.tipoDeLogradouro}
                ></InputSelect>
              </Col>

              <Col lg="6">
                <InputText
                  label="LOGRADOURO"
                  name="logradouro"
                  placeholder="endereço completo"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.logradouro}
                ></InputText>
              </Col>

              <Col lg="1">
                <InputText
                  label="Nº"
                  name="numero"
                  placeholder="00"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.numero}
                ></InputText>
              </Col>
            </Row>

            <Row>
              <Col lg="4">
                <InputText
                  label="COMPLEMENTO"
                  name="complemento"
                  placeholder="quadra, lote..."
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.complemento}
                />
              </Col>

              <Col lg="3">
                <InputText
                  label="BAIRRO"
                  name="bairro"
                  placeholder=""
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.bairro}
                />
              </Col>

              <Col lg="3">
                <InputText
                  label="CIDADE"
                  name="cidade"
                  placeholder=""
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.cidade}
                />
              </Col>

              <Col lg="2">
                <InputSelect
                  label="ESTADO"
                  name="estado"
                  options={estados}
                  onChange={formik.handleChange}
                  value={formik.values.estado}
                />
              </Col>
            </Row>

            <Row>
              <Col lg="4">
                <InputText
                  label="TIPO DE TELEFONE"
                  name="tipo"
                  placeholder="Residencial, comercial, cel..."
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.tipo}
                />
              </Col>

              <Col lg="4">
                <InputText
                  label="DDD"
                  name="ddd"
                  placeholder="00"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.ddd}
                />
              </Col>

              <Col lg="4">
                <InputText
                  label="TELEFONE"
                  name="telefone"
                  placeholder="000000000"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.telefone}
                />
              </Col>

              <Col lg="12">
                <InputText
                  label="MENSAGEM"
                  name="mensagem"
                  placeholder="Informe sua solicitação"
                  as="textarea"
                  rows="5"
                  onChange={formik.handleChange}
                  value={formik.values.mensagem}
                />
              </Col>
            </Row>

            <Button className="btn btn-primary" type="submit">
              Enviar
            </Button>
          </Form>
        </div>
      </Container>
    );
  };
};

export default Home;
