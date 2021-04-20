import { useContext, useState } from "react";
import ListOngContext from "../contexts/ListOngContext";

const SearchName = () => {
  const { setNombreBusqueda } = useContext(ListOngContext);

  const filtrarNombre = e => {
    setNombreBusqueda(`nombre=${e.target.value}`);
  };
  return (
    <>
      <label>Buscar por nombre</label>
      <input
        type="text"
        className="id-proyecto form-control"
        placeholder="Introduce el nombre"
        onChange={filtrarNombre}
      />

    </>
  );
};

export default SearchName;
