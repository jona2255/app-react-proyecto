import { Col, Row } from "react-bootstrap";
import FormOng from "../components/FormOng";

const AddOng = () => {
  return (
    <section className="mb-5">
      <h1 className="mb-5 text-center">Añade tu Organización</h1>
      <Row className=" d-flex justify-content-center">
        <Col md={6}>
          <p className="mb-4">Si quieres que tu organización esté en esta web, completa de este formulario con los datos de tu organizacion.</p>
          <p className="mb-4">La organización será visible en 24/48 horas. Si hay algún problema, no dudes en contactar con nosotros a través de la página de <span className="negrita">"Contacto"</span></p>
          <FormOng />
        </Col>
      </Row>
    </section>
  );
};
export default AddOng;
