import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

const TakeOds = () => {
  const { datos, pideDatos } = useFetch();
  useEffect(() => {
    pideDatos(`${process.env.REACT_APP_API}ods`);
  }, [pideDatos]);
  return (
    <section className="pagina" data-path="listados">
      <label>Buscar por ODS</label>
      <select className="tecnologias form-control" multiple>
        {
          datos && datos.datos.map(ods => (
            <option key={ods._id} value={ods.nombre}>{ods.nombre}</option>
          ))
        }
      </select>
    </section>
  );
};

export default TakeOds;
