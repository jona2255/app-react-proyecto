import { Col, Row } from "react-bootstrap"

const HomeDescription = () => {
  return (
    <Row>
      <Col md={6} className="gx-5 mb-4">
        <div className="bg-image hover-overlay ripple shadow-2-strong" data-mdb-ripple-color="light">
          <img src="https://mdbootstrap.com/img/new/slides/031.jpg" alt="" className="img-fluid" />
        </div>
      </Col>

      <Col md={6} className="gx-5 mb-4">
        <h2>¿Qué es ONGeitor?</h2>
        <p className="text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consequatur
          eligendi quisquam doloremque vero ex debitis veritatis placeat unde animi laborum
          sapiente illo possimus, commodi dignissimos obcaecati illum maiores corporis.
                  </p>
        <h3>¿Qué es un ODS?</h3>
        <p className="text-muted">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod itaque voluptate
          nesciunt laborum incidunt. Officia, quam consectetur. Earum eligendi aliquam illum
          alias, unde optio accusantium soluta, iusto molestiae adipisci et?
                </p>
      </Col>
    </Row>
  )
}

export default HomeDescription;
