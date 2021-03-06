import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import MultiSelect from "react-multi-select-component";
import { useFetch } from "../hooks/useFetch";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormOng = () => {
  const submitForm = async e => {
    e.preventDefault();
    const valuesID = datosFormulario.ods.map(odsValue => odsValue.value);
    const datos = new FormData();
    añadirDatos(datos, valuesID);
    const datosFetch = await fetch(`${process.env.REACT_APP_API}ongs/ong`, {
      method: "POST",
      body: datos,
    });
    const error = await datosFetch.json();
    if (error.error) {
      toast.error("Error al enviar", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success("Enviado Correctamente", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const añadirDatos = (datos, valuesID) => {
    datos.append("nombre", datosFormulario.nombre);
    datos.append("descripcion", datosFormulario.descripcion);
    datos.append("direccion", datosFormulario.direccion);
    datos.append("codigo_postal", datosFormulario.codigo_postal);
    datos.append("telefono", datosFormulario.telefono);
    datos.append("correo", datosFormulario.correo);
    datos.append("pagina_web", datosFormulario.pagina_web);
    datos.append("ods", valuesID);
    datos.append("logo", datosFormulario.logo);
    datos.append("provincia", datosFormulario.provincia);
    datos.append("activo", datosFormulario.activo);
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
    activo: false
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
        <Form.Label className="form-label" htmlFor="nombreOng">Nombre *</Form.Label>
        <Form.Control type="text" id="nombreOng" name="nombreOng" className="form-control" onChange={cambiarValores} />
      </Form.Group>
      <Form.Group>
        <Form.Label className="form-label" htmlFor="direccionOng">Dirección</Form.Label>
        <Form.Control type="text" id="nombreContacto" name="direccionOng" className="form-control" onChange={cambiarValores} />
      </Form.Group>
      <Row className=" mb-4">
        <Col className="form-outline" md={8}>
          <Form.Label className="form-label" htmlFor="provinciaOng">Provincia *</Form.Label>
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
        <Form.Label>Email *</Form.Label>
        <Form.Control name="emailOng" type="email" onChange={cambiarValores} />
      </Form.Group>
      <Form.Group >
        <Form.Label className="form-label" htmlFor="webOng">Página Web *</Form.Label>
        <Form.Control type="text" id="webOng" name="webOng" className="form-control" onChange={cambiarValores} />
      </Form.Group>
      <Form.Group >
        <Form.Label className="form-label">ODS que realiza *</Form.Label>
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
      <p className="campos-obligatorios">Los campos con un * son obligatorios</p>
      <Button type="submit" className=" btn-block mb-4">
        Enviar
      </Button>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Form>
  );
};
export default FormOng;
