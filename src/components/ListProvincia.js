import { useContext, useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { Dropdown } from "react-bootstrap";
import ListOngContext from "../contexts/ListOngContext";

const ListProvincia = () => {

  const { datos, setProvinciaBusqueda } = useContext(ListOngContext);
  const [provincias, setProvincias] = useState();
  const buscarProvincia = provincia => {
    setProvinciaBusqueda(`provincia=${provincia}`);
  };

  const enviarProvincia = (e) => {
    e.preventDefault();
    setProvincia(e.target.textContent);
    buscarProvincia(e.target.textContent);
  };

  const [provincia, setProvincia] = useState();
  if (datos && !provincias) {
    setProvincias([...new Set(datos.datos.map(ong => ong.provincia))]);
  }

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
            provincias && provincias.map(ong => (
              <Dropdown.Item key={ong} onClick={enviarProvincia} >{ong}</Dropdown.Item>
            ))
          }
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default ListProvincia;
