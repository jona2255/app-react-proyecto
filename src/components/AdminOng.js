import { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useFetch } from "../hooks/useFetch";
import ActiveOng from "./ActiveOng";

const AdminOng = () => {

  const { datos, pideDatos } = useFetch();
  useEffect(() => {
    pideDatos(`${process.env.REACT_APP_API}ongs`, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token-acceso-api")}`
      }
    });
  }, [pideDatos]);
  if (datos && datos.error) {
    localStorage.clear();
  }
  const refreshToken = () => localStorage.clear();

  const bajar = (e) => {
    e.preventDefault();
    const element = document.getElementById("enviar");
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Row>
      <Col sm={11} md={11} lg={11}>
        <h1>Listado de ONGs sin activar</h1>
        {
          datos && datos.datos ? datos.datos.map(ongs => (
            <ActiveOng key={ongs._id} ongs={ongs}></ActiveOng>
          )) : <h2>Refresca la página</h2>
        }
      </Col>
      <Col sm={1} md={1} lg={1} className="align-self-center" >
        <Button id="enviar" variant="light" onClick={bajar}>⬇</Button>
      </Col>
    </Row>
  );
};

export default AdminOng;
