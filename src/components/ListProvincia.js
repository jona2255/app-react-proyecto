import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { Dropdown } from "react-bootstrap";

const ListProvincia = () => {

  const { datos, pideDatos } = useFetch();
  useEffect(() => {
    pideDatos(`${process.env.REACT_APP_API}ongs`);
  }, [pideDatos]);

  const enviarProvincia = (e) => {
    e.preventDefault();
    setProvincia(e.target.textContent);
  };

  const [provincia, setProvincia] = useState();
  return (
    <>
      <label>Buscar por Provincia</label>
      <Dropdown className="w-100">
        <Dropdown.Toggle variant="light">
          {
            provincia ? provincia : "Provincia"
          }
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {
            datos && datos.datos.map(ong => (
              <Dropdown.Item key={ong._id} onClick={enviarProvincia} >{ong.provincia}</Dropdown.Item>
            ))
          }
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default ListProvincia;
