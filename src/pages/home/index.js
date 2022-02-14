import React from "react";
import { Button, Col, Container, Dropdown, Form, Row } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import InputText from '../../Input/InputText'
import InputSelect from '../../Input/InputSelect'
import { Link } from "react-router-dom";

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
      <Form>
        <Row>
          <Col lg="6">
            <InputText label="Nome" placeholder="Nome completo" type="text" />
          </Col>
          <Col lg="6">
            <InputText
              label="Email"
              placeholder="email@email.com"
              type="text"
            />
          </Col>
        </Row>
        <Row>
          <Col lg="2">
            <InputText label="CEP" placeholder="cep" type="text" />
          </Col>

          <Col lg="3">
            <InputSelect
              label="Tipo de Logradouro"
              name="tipoDeLogradouro"
              options={[
                "Escolher...",
                "Rua",
                "Alameda",
                "Avenida",
                "Fazenda",
                "Vila",
              ]}
            />
          </Col>

          <Col lg="6">
            <InputText
              label="Logradouro"
              placeholder="Nome da rua"
              type="text"
            />
          </Col>

          <Col lg="1">
            <InputText label="Nº" placeholder="00" type="text" />
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
        <Button className="btn btn-primary enviar" onClick={() => ({})}>
          Enviar
        </Button>
      </Form>
    </Container>
  );
}
export default Home;
