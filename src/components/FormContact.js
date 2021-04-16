import { Button, Col, Form, Row } from "react-bootstrap";

const FormContact = () => {
  return (
    <Form>
      <Row className=" mb-4">
        <Col>
          <div className="form-outline">
            <input type="text" id="form3Example1" className="form-control" />
            <label className="form-label" htmlFor="form3Example1">First name</label>
          </div>
        </Col>
        <Col>
          <div className="form-outline">
            <input type="text" id="form3Example2" className="form-control" />
            <label className="form-label" htmlFor="form3Example2">Last name</label>
          </div>
        </Col>
      </Row>

      <div className="form-outline mb-4">
        <input type="email" id="form3Example3" className="form-control" />
        <label className="form-label" htmlFor="form3Example3">Email address</label>
      </div>

      <div className="form-outline mb-4">
        <input type="password" id="form3Example4" className="form-control" />
        <label className="form-label" htmlFor="form3Example4">Password</label>
      </div>

      <div className="form-check d-flex justify-content-center mb-4">
        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
        <label className="form-check-label" htmlFor="form2Example3">
          Subscribe to our newsletter
                </label>
      </div>

      <Button type="submit" className="btn btn-primary btn-block mb-4">
        Sign up
            </Button>


    </Form>
  );
};
export default FormContact;
