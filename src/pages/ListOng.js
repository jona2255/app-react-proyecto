import { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import ItemList from "../components/ItemList";
import { useFetch } from "../hooks/useFetch";

const ListOng = () => {
  const { datos, pideDatos } = useFetch();
  useEffect(() => {
    pideDatos(`${process.env.REACT_APP_API}ongs`);
  }, [pideDatos]);
  return (
    <ListGroup variant="flush">
      <ListGroup.Item>
        {
          datos && datos.datos.map(ongs => (
            <ItemList ongs={ongs}></ItemList>
          ))
        }

      </ListGroup.Item>
    </ListGroup>
  );
};
export default ListOng;
