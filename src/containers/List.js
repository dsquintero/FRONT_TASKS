import { Col, Container, Row } from "react-bootstrap";
import Task from "../components/Task";

export default function List() {
  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <Task
            title={"Hacer las compras"}
            description={"comprar arroz, comprar huevos"}
            completed={false}
          ></Task>
        </Col>
        <Col>
          <Task
            title={"Hacer las compras"}
            description={"comprar arroz, comprar huevos"}
            completed={true}
          ></Task>
        </Col>
        <Col>
          <Task
            title={"Hacer las compras"}
            description={"comprar arroz, comprar huevos"}
            completed={true}
          ></Task>
        </Col>
      </Row>
      <Row>
        <Col>
          <Task
            title={"Hacer las compras"}
            description={"comprar arroz, comprar huevos"}
            completed={false}
          ></Task>
        </Col>
        <Col>
          <Task
            title={"Hacer las compras"}
            description={"comprar arroz, comprar huevos"}
            completed={true}
          ></Task>
        </Col>
        <Col>
          <Task
            title={"Hacer las compras"}
            description={"comprar arroz, comprar huevos"}
            completed={true}
          ></Task>
        </Col>
      </Row>
    </Container>
  );
}
