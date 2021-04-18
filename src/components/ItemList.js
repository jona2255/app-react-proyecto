import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

const ItemList = props => {
  const { ongs } = props;
  const { _id, logo, nombre, direccion, telefono, correo } = ongs;
  return (
    <Card key={_id}>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          {
            <div>
              <p>{direccion}</p>
              <p>{telefono}</p>
              <p>{correo}</p>
            </div>
          }
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
