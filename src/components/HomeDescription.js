import { Col, Row } from "react-bootstrap"

const HomeDescription = () => {
    return (
        <Row>
            <Col md={6} className="gx-5 mb-4">
                <div className="bg-image hover-overlay ripple shadow-2-strong" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/slides/031.jpg" alt="" className="img-fluid" />
                    <a href="#!">
                        <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                    </a>
                </div>
            </Col>

            <Col md={6} className="gx-5 mb-4">
                <h4><strong>Facilis consequatur eligendi</strong></h4>
                <p className="text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consequatur
                    eligendi quisquam doloremque vero ex debitis veritatis placeat unde animi laborum
                    sapiente illo possimus, commodi dignissimos obcaecati illum maiores corporis.
                  </p>
                <p><strong>Doloremque vero ex debitis veritatis?</strong></p>
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
