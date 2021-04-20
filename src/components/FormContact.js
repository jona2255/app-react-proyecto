import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const FormContact = () => {
  const [datosFormulario, setDatosFormulario] = useState({
    nombre: null,
    apellidos: null,
    email: null,
    consulta: null
  });
  const cambiarValores = e => {
    switch (e.target.name) {
      case "nombreContacto": setDatosFormulario({ ...datosFormulario, nombre: e.target.value });
        break;
      case "apellidoContacto": setDatosFormulario({ ...datosFormulario, apellidos: e.target.value });
        break;
      case "emailContacto": setDatosFormulario({ ...datosFormulario, email: e.target.value });
        break;
      case "consultaContacto": setDatosFormulario({ ...datosFormulario, consulta: e.target.value });
        break;
      default:
        break;
    }
  };
  const enviarCorreo = async (e) => {
    e.preventDefault();
    const resp = await fetch("https://api-proyecto-nodejs.herokuapp.com/incidence", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(datosFormulario)
    });
  };
  return (
    <Form onSubmit={enviarCorreo}>
      <Row className=" mb-4">
        <Col>
          <div className="form-outline" >
            <Form.Label className="form-label" htmlFor="nombreContacto">Nombre</Form.Label>
            <Form.Control type="text" id="nombreContacto" name="nombreContacto" className="form-control" onChange={cambiarValores} />
          </div>
        </Col>
        <Col>
          <div className="form-outline" >
            <Form.Label className="form-label" htmlFor="apellidoContacto">Apellido</Form.Label>
            <Form.Control type="text" id="apellidoContacto" name="apellidoContacto" className="form-control" onChange={cambiarValores} />
          </div>
        </Col>
      </Row>
      <Form.Group controlId="emailContacto">
        <Form.Label>Email</Form.Label>
        <Form.Control name="emailContacto" type="email" onChange={cambiarValores} />
      </Form.Group>

      <Form.Group controlId="contenidoContacto">
        <Form.Label>Consulta</Form.Label>
        <Form.Control name="consultaContacto" as="textarea" rows={3} onChange={cambiarValores} />
      </Form.Group>

      <Button type="submit" className=" btn-block mb-4">
        Enviar
      </Button>
    </Form>
  );
};
export default FormContact;
