import { useEffect } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { useParams } from "react-router";
import TakeOds from "../components/TakeOds";
import { useFetch } from "../hooks/useFetch";

const Ong = () => {

  const { idOng } = useParams();
  const { datos, pideDatos } = useFetch();
  useEffect(() => {
    pideDatos(`${process.env.REACT_APP_API}ongs/ong/${idOng}`);
  }, [idOng, pideDatos]);

  return (
    <>
      {
        datos &&
        <Row>
          <Col>
            <Image src={datos.logo} />
          </Col>
          <Col className="mb-5">
            <h1>{datos.nombre}</h1>
            <p>
              <span className="negrita">Dirección - </span>
              <a href={`https://www.google.es/maps/place/${datos.direccion.replaceAll(" ", "+").replace("C/+", "")}`}>{datos.direccion}</a>
            </p>
            <p><span className="negrita">Código Postal - </span>{datos.codigo_postal}</p>
            <p><span className="negrita">Provincia - </span>{datos.provincia}</p>
            <p><span className="negrita">Teléfono - </span><a href={`tel:${datos.telefono}`}>{datos.telefono}</a></p>
            <p><span className="negrita">Email - </span><a href={`mailto:${datos.correo}`}>{datos.correo}</a></p>
            <p><span className="negrita">Página Web - </span><a href={datos.pagina_web}>{datos.pagina_web}</a></p>
            <p><span className="negrita">ODS </span>{
              datos.ods.map(ods => (
                <Image className="imagen-ods-ong" src={`${ods.imagen} `} />
              ))
            }</p>
            <p>{datos.descripcion}</p>
          </Col>
        </Row>
      }
    </>
  );
};

export default Ong;
