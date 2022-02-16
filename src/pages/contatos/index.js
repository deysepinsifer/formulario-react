import React, { useState, useEffect } from "react";
import {
  Container,
  Dropdown,
  ButtonGroup,
  Button,
  Table,
} from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { Link } from "react-router-dom";
import { Style, PageTitle } from "./style";
import EdicaoModal from "../../components/modal";
import axios from 'axios';

const apiURL = "http://localhost:3001/formulario"

const Contatos = () => {
  const [isModalOpen, setModalIsOpen] = useState(false);
  const [dataModal, setDataModal] = useState(null);
  const [contatos, setContatos] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(apiURL)
    setContatos(response.data) 
  }

  useEffect(()=> {
    fetchData()
    // fetch(apiURL)
    //   .then((res) => res.json())
    //   .then((data) => setContatos(data));
  }, [])

  return (
    <Style>
      <Container>
        <Dropdown className="mt-3">
          <DropdownToggle className="btn btn-secondary" id="dropdownMenuButton">
            Menu
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem as={Link} to="/">
              Contato
            </DropdownItem>
            <DropdownItem>Lista de Contato</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <PageTitle>Lista de Contato</PageTitle>

        <Table className="mt-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>EMAIL</th>
              <th>LOGRADOURO</th>
              <th>BAIRRO</th>
              <th>CIDADE</th>
              <th>TELEFONE</th>
              <td>
                <div />
              </td>
              <td>
                <div />
              </td>
            </tr>
          </thead>
          <tbody>
            {contatos?.length &&
              contatos.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.nome}</td>
                    <td>{item.email}</td>
                    <td>{item.logradouro}</td>
                    <td>{item.bairro}</td>
                    <td>{item.cidade}</td>
                    <td>{item.telefone}</td>
                    <td>
                      <Button className="btn btn-seconary" onClick={()=> {
                        setModalIsOpen(!isModalOpen)
                        setDataModal(item)
                      }}>Editar</Button>
                    </td>
                    <td>
                      <Button className="btn btn-seconary">Excluir</Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>

        <br />
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary" as={Link} to="/">
            Voltar
          </Button>
        </ButtonGroup>
        <EdicaoModal data={dataModal} show={isModalOpen && dataModal} onHide={() => setModalIsOpen(false)} />
      </Container>
    </Style>
  );
};

export default Contatos;
