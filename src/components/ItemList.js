import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

const ItemList = props => {
  const { ongs } = props;
  const { logo, nombre, direccion, telefono, correo } = ongs;
  return (
    <Card>
      <Card.Img variant="top" src={logo} />
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
