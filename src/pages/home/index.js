import React from "react";
import { Container, Dropdown } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import axios from "axios";

import { Link } from "react-router-dom";

import Formulario from "../../components/Formulario/formulario";

const sendToBackend = async (values) => {
  const response = await axios.post("http://localhost:3001/formulario", values);
  console.log(response);
};

const inserir = async (values, { resetForm, ...props }) => {
  sendToBackend(values);
  resetForm({});
};

const Home = () => {
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
        <Formulario handleSubmit={inserir} />
      </div>
    </Container>
  );
};

export default Home;
