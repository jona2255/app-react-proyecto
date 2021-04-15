import { Col, Row } from "react-bootstrap";

const ListOds = () => {
    return (
        <Row >
            <Col lg={4} md={12} className="mb-4">
                <div className="card">
                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                        <img src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="" className="img-fluid" />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of the
                            card's content.
                    </p>
                        <a href="#!" className="btn btn-primary">Button</a>
                    </div>
                </div>
            </Col>

        </Row>
    );
};
export default ListOds;
