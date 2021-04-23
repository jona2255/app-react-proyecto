import { Card, Col, Form, Row, Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import ListOngContext from "../contexts/ListOngContext";
import { useFetch } from "../hooks/useFetch";

const ActiveOng = props => {
  const { pideDatos } = useFetch();
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
  const borrar = async () => {
    await pideDatos(`${process.env.REACT_APP_API}ongs/ong/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: _id })
    });
    history.go(0);
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
                  <Image key={elemento._id} className="imagen-ods-ong" src={`${elemento.imagen} `} />
                ))
              }
            </Card.Text>
            <Card.Text>
              {descripcion}
            </Card.Text>
          </Card.Body>
        </Col>
        <Row>
          <Col className="align-self-end">
            <Button variant="danger" type="submit" onClick={borrar} className="mb-5">Borrar</Button>
            <Form.Check type="checkbox" label="Activar" onChange={activar} />
          </Col>
        </Row>

      </Row>

    </Card>
  );
};

export default ActiveOng;
