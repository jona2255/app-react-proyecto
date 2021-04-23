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

  const activarOngs = (e) => {
    e.preventDefault();
    const listaIds = { ids: activados };
    pideDatos(`${process.env.REACT_APP_API}/ong/ong`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
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
            <AdminOng className="" />
            <Row >
              <Col className="">
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
