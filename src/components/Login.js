import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router";
import { useFetch } from "../hooks/useFetch";

const Login = () => {
  const history = useHistory();
  const { datos, pideDatos } = useFetch();
  const [datosForm, modificarDatos] = useState({
    correo: "",
    password: ""
  });
  const cambiarValores = e => {
    modificarDatos({
      ...datosForm,
      [e.target.name]: e.target.value
    });
  };
  const acceder = e => {
    e.preventDefault();
    pideDatos(`${process.env.REACT_APP_API}usuarios/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(datosForm)
    });
  };
  useEffect(() => {
    if (datos) {
      if (datos.error) {
        console.log("No existe el usuario");
      } else if (datos.token) {
        localStorage.setItem("token-acceso-api", datos.token);
        history.go(0);
      }
    }
  }, [datos, history]);
  return (
    <>
      <h1>Iniciar Sesión</h1>
      <Form className="w-50 mt-5" onSubmit={acceder}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control name="correo" type="email" onChange={cambiarValores} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control name="password" type="password" onChange={cambiarValores} />
        </Form.Group>
        <Form.Group>
          <Button type="submit" className=" btn-block mb-4 ">Enviar</Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default Login;
