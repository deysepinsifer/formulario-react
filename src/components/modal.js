import React, { useEffect } from "react";
import { Modal, Button, Col, Container, Form, Row } from "react-bootstrap";
import InputText from "../Input/InputText";
import InputSelect from "../Input/InputSelect";

const EdicaoModal = ({ data, ...props }) => {
  console.log(data);
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
    <Modal {...props}>
      <Container>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Edição de Cadastro</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>
              <Form>
                <Row>
                  <Col>
                    <InputText
                      label="Nome"
                      placeholder="Nome completo"
                      type="text"
                      value={data?.nome}
                    />
                  </Col>
                  <Col>
                    <InputText
                      label="Email"
                      placeholder="email@email.com"
                      type="text"
                      value={data?.nome}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <InputText label="CEP" placeholder="cep" type="text" />
                  </Col>

                  <Col>
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

                  <Col>
                    <InputText
                      label="Logradouro"
                      placeholder="Nome da rua"
                      type="text"
                    />
                  </Col>

                  <Col>
                    <InputText label="Nº" placeholder="00" type="text" />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <InputText
                      label="Complemento"
                      placeholder="quadra, lote..."
                      type="text"
                    />
                  </Col>

                  <Col>
                    <InputText label="Bairro" placeholder="" type="text" />
                  </Col>

                  <Col>
                    <InputText label="Cidade" placeholder="" type="text" />
                  </Col>

                  <Col>
                    <InputSelect
                      label="Estado"
                      name="estado"
                      options={estados}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <InputText
                      label="Tipo de Telefone"
                      placeholder="Residencial, comercial, cel..."
                      type="text"
                    />
                  </Col>

                  <Col>
                    <InputText label="DDD" placeholder="00" type="text" />
                  </Col>

                  <Col>
                    <InputText
                      label="Telefone"
                      placeholder="000000000"
                      type="text"
                    />
                  </Col>
                </Row>
                <Button
                  className="btn btn-primary enviar"
                  onClick={() => ({})}
                >
                  Enviar
                </Button>
              </Form>
            </p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Container>
    </Modal>
  );
};

export default EdicaoModal;
