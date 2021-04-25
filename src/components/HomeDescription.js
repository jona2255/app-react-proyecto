import { Col, Row } from "react-bootstrap";

const HomeDescription = () => {
  return (
    <Row>
      <Col md={6} className="gx-5 mb-4">
        <div className="bg-image hover-overlay ripple shadow-2-strong" data-mdb-ripple-color="light">
          <img src="/img/img-home.jpg" alt="" className="img-fluid" />
        </div>
      </Col>

      <Col md={6} className="gx-5 mb-4">
        <h2>¿Qué es Rodster?</h2>
        <p className="text-muted">
          <span className="negrita">Rodster</span> te permite encontrar las <span className="negrita">ONGs </span>
          de España que cumplen con algún <span className="negrita">ODS</span> de manera fácil y sencilla.
          Rodster también te permite buscar las ONGs en base al nombre, la provincia o el ODS que realiza.
        </p>
        <h3>¿Qué es un ODS?</h3>
        <p className="text-muted">
          Los <span className="negrita">Objetivos de Desarrollo Sostenible (ODS)</span> son <span className="negrita">17</span> retos cuyo fin es erradicar la pobreza,
          proteger el planeta y garantizar que todos las personas del mundo sin distinción gocen de paz y prosperidad.
          Los ODS constituyen una iniciativa de la <span className="negrita">Organización de Naciones Unidas (ONU)</span>.
        </p>
      </Col>
    </Row>
  );
};

export default HomeDescription;
