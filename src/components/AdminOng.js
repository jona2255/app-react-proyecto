import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import ItemList from "./ItemList";

const AdminOng = () => {

  const { datos, pideDatos } = useFetch();
  useEffect(() => {
    pideDatos(`${process.env.REACT_APP_API}ongs?activo=false`);
  }, [pideDatos]);
  return (
    <>
      <h1>Listado de ONGs sin activar</h1>
      {
        datos && datos.datos.map(ongs => (
          <ItemList key={ongs._id} ongs={ongs}></ItemList>
        ))
      }
    </>
  );
};

export default AdminOng;
