import { Card, Col, Image, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const ItemList = props => {
  const { ongs } = props;
  const { logo, nombre, direccion, telefono, correo, ods } = ongs;

  const history = useHistory();
  const irOng = () => {
    history.push(`/ong/${props.ongs._id}`);

  };
  return (
    <Card className="m-3 p-3" onClick={irOng}>
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
              {telefono}
            </Card.Text>
            <Card.Text>
              {correo}
            </Card.Text>
            <Card.Text>
              {
                ods.map(elemento => (
                  <Image className="imagen-ods-ong" src={`${elemento.imagen} `} />
                ))
              }
            </Card.Text>

          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ItemList;
