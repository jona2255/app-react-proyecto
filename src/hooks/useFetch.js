import { useCallback, useState } from "react";

export const useFetch = () => {
  const [datos, setDatos] = useState(null);
  const pideDatos = useCallback(async (url, opciones = {}) => {
    const resp = await fetch(url, opciones);
    const datosAPI = await resp.json();
    setDatos(datosAPI);
  }, []);
  const resetDatos = useCallback(() => {
    setDatos(null);
  }, []);
  return { datos, pideDatos, resetDatos };
};
