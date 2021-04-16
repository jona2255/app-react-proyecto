import { Button, Col, Form, Row } from "react-bootstrap";

const FormContact = () => {
  return (
    <Form>
      <Row className=" mb-4">
        <Col>
          <div className="form-outline" >
            <Form.Label className="form-label" htmlFor="nombreContacto">Nombre</Form.Label>
            <Form.Control type="text" id="nombreContacto" className="form-control" />
          </div>
        </Col>
        <Col>
          <div className="form-outline" >
            <Form.Label className="form-label" htmlFor="apellidoContacto">Apellido</Form.Label>
            <Form.Control type="text" id="apellidoContacto" className="form-control" />
          </div>
        </Col>
      </Row>
      <Form.Group controlId="emailContacto">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" />
      </Form.Group>

      <Form.Group controlId="contenidoContacto">
        <Form.Label>Consulta</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <Button type="submit" className=" btn-block mb-4">
        Enviar
      </Button>

    </Form>
  );
};
export default FormContact;
