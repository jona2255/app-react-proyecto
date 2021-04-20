import { useCallback, useEffect, useState } from "react";
import ListGroupONG from "../components/ListGroupONG";
import ListSearch from "../components/ListSearch";
import ListOngContext from "../contexts/ListOngContext";
import { useFetch } from "../hooks/useFetch";

const ListOng = () => {
  const { datos, pideDatos } = useFetch();
  const [nombreBusqueda, setNombreBusqueda] = useState("");
  const [odsBudqueda, setOdsBusqueda] = useState([]);
  const [provinciaBusqueda, setProvinciaBusqueda] = useState("");
  useEffect(() => {
    pideDatos(`${process.env.REACT_APP_API}ongs?${nombreBusqueda}&&${odsBudqueda}&&${provinciaBusqueda}`);
  }, [nombreBusqueda, odsBudqueda, pideDatos, provinciaBusqueda]);

  return (
    <ListOngContext.Provider value={{ datos, nombreBusqueda, setNombreBusqueda, odsBudqueda, setOdsBusqueda, provinciaBusqueda, setProvinciaBusqueda }}>
      <ListSearch></ListSearch>
      <ListGroupONG></ListGroupONG>
    </ListOngContext.Provider>
  );
};
export default ListOng;
