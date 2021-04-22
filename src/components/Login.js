import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router";
import { useFetch } from "../hooks/useFetch";
import { useForm } from "../hooks/useForm";

const Login = () => {
  const history = useHistory();
  const { datos, pideDatos } = useFetch();
  const { datosForm, modificarDatos } = useForm({
    email: "",
    password: ""
  });
  const acceder = e => {
    e.preventDefault();
    pideDatos("http://localhost:5000/usuarios/login", {
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
        history.push("/admin");
      }
    }
  }, [datos, history]);
  return (
    <>
      <h1>Iniciar Sesión</h1>
      <Form className="w-50 mt-5" onSubmit={acceder}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control name="emailLogin" type="email" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control name="passwordLogin" type="password" />
        </Form.Group>
        <Form.Group>
          <Button type="submit" className=" btn-block mb-4 ">Enviar</Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default Login;
