import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

const TakeOds = () => {
  const { datos, pideDatos } = useFetch();
  useEffect(() => {
    pideDatos(`${process.env.REACT_APP_API}ods`);
  }, [pideDatos]);
  return (
    <section class="pagina" data-path="listados">
      <div class="form-group row">
        <div class="col-4">
          <select class="tecnologias form-control" multiple>
            {
              datos && datos.datos.map(ods => (
                <option key={ods._id} value={ods.nombre}>{ods.nombre}</option>
              ))
            }
          </select>
        </div>
      </div>
    </section>
  );
};

export default TakeOds;
