import TakeOds from "./TakeOds";
import SearchName from "./SearchName";
import { Col, Form, Row } from "react-bootstrap";

const ListSearch = () => {
  return (
    <Form>
      <Form.Group>
        <Row>
          <Col md={4}>
            <SearchName />
          </Col>
          <Col md={4}>
            <TakeOds />
          </Col>
        </Row>
      </Form.Group>
    </Form>
  );
};
export default ListSearch;
