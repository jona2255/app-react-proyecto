import { useContext, useEffect, useState } from "react";
import MultiSelect from "react-multi-select-component";
import ListOngContext from "../contexts/ListOngContext";
import { useFetch } from "../hooks/useFetch";

const TakeOds = () => {
  const { setOdsBusqueda } = useContext(ListOngContext);

  const { datos, pideDatos } = useFetch();
  useEffect(() => {
    pideDatos(`${process.env.REACT_APP_API}ods`);
  }, [pideDatos]);

  const [selected, setSelected] = useState([]);

  const filtrarOds = e => {
    console.log(e);
    setSelected(e);
    setOdsBusqueda(`ods=${e.map(ods => ods.value)}`);
  };

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
          onChange={filtrarOds}
          labelledBy="Selecciona"
        />
      }
    </>
  );
};

export default TakeOds;
