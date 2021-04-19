import { useEffect, useState } from "react";
import MultiSelect from "react-multi-select-component";
import { useFetch } from "../hooks/useFetch";

const TakeOds = () => {
  const { datos, pideDatos } = useFetch();
  useEffect(() => {
    pideDatos(`${process.env.REACT_APP_API}ods`);
  }, [pideDatos]);

  const [selected, setSelected] = useState([]);

  const traduccion = {
    "allItemsAreSelected": "Seleccionados todos los ODS",
    "clearSearch": "Limpiar Busqueda",
    "noOptions": "Sin Opciones",
    "search": "Busqueda",
    "selectAll": "Seleccionar Todo",
    "selectSomeItems": "Seleccionar..."
  };
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
    <>
      <label>Buscar por ODS</label>
      {
        datos &&
        <MultiSelect
          overrideStrings={traduccion}
          options={listaOds}
          value={selected}
          onChange={setSelected}
          labelledBy="Selecciona"
        />
      }
    </>
  );
};

export default TakeOds;
