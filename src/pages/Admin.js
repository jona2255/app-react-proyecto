import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import AdminOng from "../components/AdminOng";
import Login from "../components/Login";
import ListOngContext from "../contexts/ListOngContext";
import { useFetch } from "../hooks/useFetch";

const Admin = () => {
  const [activados, setActivados] = useState([]);
  const { pideDatos } = useFetch();
  const history = useHistory();

  const activarOngs = async (e) => {
    e.preventDefault();
    const listaIds = { ids: activados };
    await pideDatos(`${process.env.REACT_APP_API}ongs/ong/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token-acceso-api")}`
      },
      body: JSON.stringify(listaIds)
    });
    history.go(0);
  };
  return (
    <ListOngContext.Provider value={{ activados, setActivados }}>
      {
        localStorage.getItem("token-acceso-api")
          ?
          <Form onSubmit={activarOngs} className="">
            <AdminOng />
            <Row >
              <Col>
                <Button type="submit" className="float-right m-5" >Enviar</Button>
              </Col>
            </Row>
          </Form>
          : <Login />
      }
    </ListOngContext.Provider>
  );
};

export default Admin;
