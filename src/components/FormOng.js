import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import MultiSelect from "react-multi-select-component";
import { useFetch } from "../hooks/useFetch";

const FormOng = () => {
  const submitForm = e => {
    console.log(e);
  };
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

  // A partir de aquí, es para el multiselector de los ods
  const { datos: ods, pideDatos } = useFetch();
  useEffect(() => {
    pideDatos(`${process.env.REACT_APP_API}ods`);
  }, [pideDatos]);

  // Aquí se guardan los ods seleccionados
  const [selected, setSelected] = useState([]);

  const traduccion = {
    "allItemsAreSelected": "Seleccionados todos los ODS",
    "clearSearch": "Limpiar Busqueda",
    "noOptions": "Sin Opciones",
    "search": "Busqueda",
    "selectAll": "Seleccionar Todo",
    "selectSomeItems": "Seleccionar..."
  };
  let listaOds = [];
  if (ods) {
    listaOds = ods.datos.map(ods => (
      {
        label: ods.nombre,
        value: ods._id
      }
    ));
  }

  return (
    <Form onSubmit={submitForm}>
      <Form.Group>
        <Form.Label className="form-label" htmlFor="nombreOng">Nombre</Form.Label>
        <Form.Control type="text" id="nombreOng" name="nombreOng" className="form-control" onChange={cambiarValores} />
      </Form.Group>
      <Form.Group>
        <Form.Label className="form-label" htmlFor="direccionOng">Dirección</Form.Label>
        <Form.Control type="text" id="nombreContacto" name="direccionOng" className="form-control" onChange={cambiarValores} />
      </Form.Group>
      <Row className=" mb-4">
        <Col className="form-outline" md={8}>
          <Form.Label className="form-label" htmlFor="provinciaOng">Provincia</Form.Label>
          <Form.Control type="text" id="provinciaOng" name="provinciaOng" className="form-control" onChange={cambiarValores} />
        </Col>
        <Col className="form-outline" md={4}>
          <Form.Label className="form-label" htmlFor="codigoPostal">Código Postal</Form.Label>
          <Form.Control type="text" id="codigoPostal" name="codigoPostal" className="form-control" onChange={cambiarValores} />
        </Col>
      </Row>
      <Form.Group>
        <Form.Label className="form-label" htmlFor="telefonoOng">Teléfono</Form.Label>
        <Form.Control type="text" id="telefonoOng" name="telefonoOng" className="form-control" onChange={cambiarValores} />
      </Form.Group>
      <Form.Group controlId="emailContacto">
        <Form.Label>Email</Form.Label>
        <Form.Control name="emailContacto" type="email" onChange={cambiarValores} />
      </Form.Group>
      <Form.Group >
        <Form.Label className="form-label" htmlFor="webOng">Página Web</Form.Label>
        <Form.Control type="text" id="webOng" name="webOng" className="form-control" onChange={cambiarValores} />
      </Form.Group>
      <Form.Group >
        <Form.Label className="form-label">ODS que realiza</Form.Label>
        {
          ods ?
            <MultiSelect
              overrideStrings={traduccion}
              options={listaOds}
              value={selected}
              onChange={setSelected}
              labelledBy="Selecciona"
            /> :
            <MultiSelect
            />
        }
      </Form.Group>
      <Form.Group controlId="contenidoContacto">
        <Form.Label>Descripción</Form.Label>
        <Form.Control name="descripcionOng" as="textarea" rows={3} onChange={cambiarValores} />
      </Form.Group>
      <Button type="submit" className=" btn-block mb-4">
        Enviar
      </Button>
    </Form>
  );
};
export default FormOng;
