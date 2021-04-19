import { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { useFetch } from "../hooks/useFetch";
import ItemList from "./ItemList";

const ListGroupONG = () => {
  const { datos, pideDatos } = useFetch();
  useEffect(() => {
    pideDatos(`${process.env.REACT_APP_API}ongs`);
  }, [pideDatos]);
  return (
    <ListGroup variant="flush">
      <ListGroup.Item>
        {
          datos && datos.datos.map(ongs => (
            <ItemList key={ongs._id} ongs={ongs}></ItemList>
          ))
        }
      </ListGroup.Item>
    </ListGroup>
  );
};

export default ListGroupONG;
