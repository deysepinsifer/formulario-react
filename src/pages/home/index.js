import React from "react";
import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import InputText from "../../Input/InputText";
import InputSelect from "../../Input/InputSelect";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import Validacao from "../validacao";

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
    "Fazenda"
  ];

 

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
      <Formik
     
        initialValues={{
          nome: " ",
          email: " ",
          cep: " ",
          tipoDeLogradouro: " ",
          logradouro: " ",
          numero: " ",
          complemento: " ",
          bairro: " ",
          cidade: " ",
          estado: " ",
          tipo: " ",
          ddd: " ",
          telefone: " ",
          mensagem: " ",
        }}
     
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
          
        }}
      >
        {({ isSubmitting }) => (
        <Form>
          <Row>
            <Col lg="6">
              <InputText label="Nome" name="nome" placeholder="Digite seu nome completo"
                type="text"></InputText>
            </Col>

            <Col lg="6">
              <InputText
              label="email" name="email" placeholder="email@email.com" type="email"
              ></InputText>
            </Col>
          </Row>

          <Row>
            <Col lg="2">
            <InputText
              label="CEP" name="cep" placeholder="00000 000" type="text"
              ></InputText>
            </Col>

            <Col lg="3">
            <InputSelect
              label="Tipo de Logradouro" name="tipoDeLogradouro" placeholder="Rua, Alameda..." type="text" options={tipoDeLogradouro}
            ></InputSelect>
            </Col>

            <Col lg="6">
            <InputText
              label="Logradouro" name="logradouro" placeholder="endereço completo" type="text"
              ></InputText>
            </Col>

            <Col lg="1">
            <InputText
              label="Nº" name="numero" placeholder="00" type="text"
              ></InputText>
            </Col>
          </Row>

          <Row>
            <Col lg="4">
              <InputText
                label="Complemento"
                placeholder="quadra, lote..."
                type="text"
              />
            </Col>

            <Col lg="3">
              <InputText label="Bairro" placeholder="" type="text" />
            </Col>

            <Col lg="3">
              <InputText label="Cidade" placeholder="" type="text" />
            </Col>

            <Col lg="2">
              <InputSelect label="Estado" name="estado" options={estados} />
            </Col>
          </Row>

          <Row>
            <Col lg="4">
              <InputText
                label="Tipo de Telefone"
                placeholder="Residencial, comercial, cel..."
                type="text"
              />
            </Col>

            <Col lg="4">
              <InputText label="DDD" placeholder="00" type="text" />
            </Col>

            <Col lg="4">
              <InputText label="Telefone" placeholder="000000000" type="text" />
            </Col>

            <Col lg="12">
              <InputText
                label="Mensagem"
                placeholder="Informe sua solicitação"
                type="text"
              />
            </Col>
          </Row>

          <Button
            className="btn btn-primary enviar"
            type="submit"  onClick={() =>(isSubmitting)}>Enviar
          </Button>
        </Form>
        )}
      </Formik>
      </div>
    </Container>
  );
};
export default Home;
