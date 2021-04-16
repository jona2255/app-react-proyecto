import { Col, Row } from "react-bootstrap";
import FormContact from "../components/FormContact";

const Contact = () => {
  return (
    <section className="mb-5">
      <h4 className="mb-5 text-center"><strong>Facilis consequatur eligendi</strong></h4>
      <Row className=" d-flex justify-content-center">
        <Col md={6}>
          <FormContact />
        </Col>
      </Row>
    </section>
  )
}
export default Contact;
