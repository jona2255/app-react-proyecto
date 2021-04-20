import { useEffect } from "react";
import { Card, CardColumns } from "react-bootstrap";
import { useFetch } from "../hooks/useFetch";

const ListOds = () => {

  const { datos, pideDatos } = useFetch();
  useEffect(() => {
    pideDatos(`${process.env.REACT_APP_API}ods`);
  }, [pideDatos]);

  return (
    <>
      <h2 className="mb-5">Listado de ODS</h2>
      <CardColumns>
        {
          datos
          && datos.datos.map(ods => (
            <Card key={ods._id}>
              <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/ongeitor.appspot.com/o/ods%2Ffin_pobreza.svg?alt=media" />
              <Card.Body>
                <Card.Title>{ods.imagen}</Card.Title>
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
