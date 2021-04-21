import { Col, Row } from "react-bootstrap";
import FormContact from "../components/FormContact";

const Contact = () => {
  return (
    <section className="mb-5">
      <h1 className="mb-5 text-center">Contacta con nosotros</h1>
      <Row className=" d-flex justify-content-center">
        <Col md={6}>
          <p className="mb-4">Si tienes cualquier duda, contacta con nosotros a través de este formulario.</p>
          <FormContact />
        </Col>
      </Row>
    </section>
  );
};
export default Contact;
