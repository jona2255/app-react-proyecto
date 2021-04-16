import { Card, CardColumns } from "react-bootstrap";

const ListOds = () => {

  const listOds = [{
    imagen: "imagen",
    nombre: "nombre",
    descripcion: "descripcion"
  }];

  return (
    <>
      <h2 className="mb-5">Listado de ODS</h2>
      {
        listOds.map(ods => (
          <CardColumns>
            <Card>
              <Card.Img variant="top" src={ods.imagen} />
              <Card.Body>
                <Card.Title>{ods.imagen}</Card.Title>
                <Card.Text>
                  {ods.descripcion}
                </Card.Text>
              </Card.Body>
            </Card>
          </CardColumns>
        ))
      }
    </>
  );
};
export default ListOds;
