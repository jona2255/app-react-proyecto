import { useEffect, useState } from "react";
import MultiSelect from "react-multi-select-component";
import { useFetch } from "../hooks/useFetch";

const TakeOds = () => {
  const { datos, pideDatos } = useFetch();
  useEffect(() => {
    pideDatos(`${process.env.REACT_APP_API}ods`);
  }, [pideDatos]);

  const [selected, setSelected] = useState([]);


  let listaOds = [];
  if (datos) {
    listaOds = datos.datos.map(ods => (
      {
        label: ods.nombre,
        value: ods._id
      }
    ));
  }
  return (
    <section className="pagina" data-path="listados">
      <label>Buscar por ODS</label>
      {
        datos &&
        <MultiSelect
          options={listaOds}
          value={selected}
          onChange={setSelected}
          labelledBy="Selecciona"
        />
      }
    </section>
  );
};

export default TakeOds;
