import { useEffect } from "react";
import { Card, CardColumns, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { useFetch } from "../hooks/useFetch";

const ListOds = () => {

  const { datos, pideDatos } = useFetch();
  useEffect(() => {
    pideDatos(`${process.env.REACT_APP_API}ods`);
  }, [pideDatos]);

  console.log(datos);
  return (
    <>
      <h2 className="mb-5">Listado de ODS</h2>
      <ListGroup>
        <Row>
          {
            datos
            && datos.datos.map(ods => (
              <Col key={ods._id} md={4}>
                <Card className="card-ods" key={ods._id}>
                  <Card.Img variant="top" src={ods.imagen} />
                  <Card.Body>
                    <Card.Text>
                      {
                        ods.descripcion
                      }
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
        </Row>
      </ListGroup>
    </>
  );
};
export default ListOds;
