import { useEffect } from "react";
import { Card, CardColumns } from "react-bootstrap";
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
      <CardColumns>
        {
          datos
          && datos.datos.map(ods => (
            <Card key={ods._id}>
              <Card.Img variant="top" src={ods.imagen} className="imagen-ods-lista" />
              <Card.Body>
                <Card.Title>{ods.nombre}</Card.Title>
                <Card.Text>
                  {ods.descripcion}
                </Card.Text>
              </Card.Body>
            </Card>
          ))
        }
      </CardColumns>
    </>
  );
};
export default ListOds;
