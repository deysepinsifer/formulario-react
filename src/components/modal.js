import React from "react";
import { Modal, Button, Container } from "react-bootstrap";
import axios from "axios";
import Formulario from "./Formulario/formulario";
import { ModalContent } from "./style";

const atualizar = async (values) => {
  const response = await axios.put(
    `http://localhost:3001/formulario/${values.id}`,
    values
  );
};

const EdicaoModal = ({ data, ...props }) => {

  return (
    <ModalContent>
      <Modal {...props}>
        <Container>
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Edição de Cadastro</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <div>
                <Formulario data={data} handleSubmit={atualizar} />
              </div>
            </Modal.Body>

            <Modal.Footer>
              <Button
                variant=" btn btn-primary enviar"
                onClick={() => atualizar()}
              >
                Salvar
              </Button>

              <Button variant="secondary danger" onClick={props.onHide}>
                Cancelar
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Container>
      </Modal>
    </ModalContent>
  );
};

export default EdicaoModal;
