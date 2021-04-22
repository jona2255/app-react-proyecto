import { Card, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const ActiveOng = props => {
  const { ongs } = props;
  const {
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

  return (
    <Card className="m-3 p-3">
      <Row>
        <Col md={4} lg={3}>
          <Card.Img
            className=""
            variant="top"
            src={logo}
          />
        </Col>
        <Col md={8} lg={9}>
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
      </Row>
    </Card>
  );
};

/* ItemList.propTypes = {
  ong: PropTypes.shape({
    total: PropTypes.number.isRequired,
    datos:
  }).isRequired
}; */
export default ActiveOng;
