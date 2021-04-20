import { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import ListOngContext from "../contexts/ListOngContext";
import ItemList from "./ItemList";

const ListGroupONG = () => {
  const { datos } = useContext(ListOngContext);

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
