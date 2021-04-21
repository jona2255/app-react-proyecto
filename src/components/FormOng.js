import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import MultiSelect from "react-multi-select-component";
import { useFetch } from "../hooks/useFetch";

const FormOng = () => {
  const submitForm = async e => {
    e.preventDefault();
    await fetch("https://api-proyecto-nodejs.herokuapp.com/ongs/ong", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(datosFormulario),
    });
  };
  const [datosFormulario, setDatosFormulario] = useState({
    nombre: null,
    descripcion: null,
    direccion: null,
    codigo_postal: null,
    telefono: null,
    correo: null,
    pagina_web: null,
    ods: null,
    logo: null,
    provincia: null,
    active: false
  });
  const cambiarValores = e => {
    switch (e.target.name) {
      case "nombreOng": setDatosFormulario({ ...datosFormulario, nombre: e.target.value });
        break;
      case "direccionOng": setDatosFormulario({ ...datosFormulario, direccion: e.target.value });
        break;
      case "provinciaOng": setDatosFormulario({ ...datosFormulario, provincia: e.target.value });
        break;
      case "codigoPostalOng": setDatosFormulario({ ...datosFormulario, codigo_postal: e.target.value });
        break;
      case "telefonoOng": setDatosFormulario({ ...datosFormulario, telefono: e.target.value });
        break;
      case "emailOng": setDatosFormulario({ ...datosFormulario, correo: e.target.value });
        break;
      case "webOng": setDatosFormulario({ ...datosFormulario, pagina_web: e.target.value });
        break;
      case "descripcionOng": setDatosFormulario({ ...datosFormulario, descripcion: e.target.value });
        break;
      default:
        break;
    }
  };
  const enviarLogo = e => {
    setDatosFormulario({ ...datosFormulario, logo: e.target.files[0] });
  };
  const seleccionarOds = (e) => {
    setSelected(e);
    setDatosFormulario({ ...datosFormulario, ods: e });
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
          <Form.Label className="form-label" htmlFor="codigoPostalOng">Código Postal</Form.Label>
          <Form.Control type="text" id="codigoPostalOng" name="codigoPostalOng" className="form-control" onChange={cambiarValores} />
        </Col>
      </Row>
      <Form.Group>
        <Form.Label className="form-label" htmlFor="telefonoOng">Teléfono</Form.Label>
        <Form.Control type="text" id="telefonoOng" name="telefonoOng" className="form-control" onChange={cambiarValores} />
      </Form.Group>
      <Form.Group controlId="emailOng">
        <Form.Label>Email</Form.Label>
        <Form.Control name="emailOng" type="email" onChange={cambiarValores} />
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
              name="odsONG"
              overrideStrings={traduccion}
              options={listaOds}
              value={selected}
              onChange={seleccionarOds}
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
      <Form.Group>
        <Form.File type="file" id="logoOng" name="logoOng" label="Logo o imagen de la organización" onChange={enviarLogo} />
      </Form.Group>
      <Button type="submit" className=" btn-block mb-4">
        Enviar
      </Button>
    </Form>
  );
};
export default FormOng;
