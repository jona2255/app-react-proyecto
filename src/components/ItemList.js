import { Card, Col, Row } from "react-bootstrap";

const ItemList = props => {
  const { ongs } = props;
  const { logo, nombre, direccion, telefono, correo } = ongs;
  return (
    <Card className="mt-3 mb-3 pt-3 pb-3">
      <Row>
        <Col md={3}>
          <Card.Img
            variant="top"
            src="https://firebasestorage.googleapis.com/v0/b/ongeitor.appspot.com/o/ods%2Ffin_pobreza.svg?alt=media"
            width="180" height="180"
          />
        </Col>
        <Col md={9}>
          <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>
              {direccion}
            </Card.Text>
            <Card.Text>
              {telefono}
            </Card.Text>
            <Card.Text>
              {correo}
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
export default ItemList;
