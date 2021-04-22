import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import AdminOng from "../components/AdminOng";
import Login from "../components/Login";
import ListOngContext from "../contexts/ListOngContext";
import { useFetch } from "../hooks/useFetch";

const Admin = () => {
  const [activados, setActivados] = useState([]);
  const { pideDatos } = useFetch();

  const activarOngs = (e) => {
    e.preventDefault();
    const listaIds = { ids: activados };
    pideDatos(`${process.env.REACT_APP_API}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(listaIds)
    });
  };
  return (
    <ListOngContext.Provider value={{ activados, setActivados }}>
      {
        localStorage.getItem("token-acceso-api")
          ?
          <Form onSubmit={activarOngs}>
            <AdminOng />
            <Button type="submit" >Enviar</Button>
          </Form>
          : <Login />
      }
    </ListOngContext.Provider>
  );
};

export default Admin;
