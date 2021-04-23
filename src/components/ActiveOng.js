import { Card, Col, Form, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import ListOngContext from "../contexts/ListOngContext";

const ActiveOng = props => {
  const { activados, setActivados } = useContext(ListOngContext);
  const { ongs } = props;
  const {
    _id,
    logo,
    nombre,
    direccion,
    telefono,
    correo,
    codigo_postal,
    descripcion,
    pagina_web,
    provincia,
    ods } = ongs;

  const activar = () => {
    setActivados([...activados, _id]);
  };
  return (
    <Card className="m-3 p-3">
      <Row className="justify-content-center">
        <Col md={4} lg={4}>
          <Card.Img
            className=""
            variant="top"
            src={logo}
          />
        </Col>
        <Col md={4} lg={4} >
          <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>
              {direccion}
            </Card.Text>
            <Card.Text>
              {codigo_postal}
            </Card.Text>
            <Card.Text>
              {provincia}
            </Card.Text>
            <Card.Text>
              {telefono}
            </Card.Text>
            <Card.Text>
              {correo}
            </Card.Text>
            <Card.Text>
              {pagina_web}
            </Card.Text>
            <Card.Text>
              {
                ods.map(elemento => (
                  ods.indexOf(elemento) === ods.length - 1 ? `${elemento.nombre}` : `${elemento.nombre}, `
                ))
              }
            </Card.Text>
            <Card.Text>
              {descripcion}
            </Card.Text>
          </Card.Body>
        </Col>
        <Form.Group className="row ">
          <Form.Check type="checkbox" label="Activar" onChange={activar} className="col  align-self-end" />
        </Form.Group>
      </Row>

    </Card>
  );
};

export default ActiveOng;
