import { useState } from "react";

export const useForm = datosFormInicial => {
  const [datosForm, setDatosForm] = useState(datosFormInicial);
  const modificarDatos = e => {
    setDatosForm({
      ...datosForm,
      [e.name]: e.value
    });
  };
  return { datosForm, modificarDatos };
};
