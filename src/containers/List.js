import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { removeTask } from "../api/task";
import Task from "../components/Task";

export default function List({ tasksRes }) {
  const [error, setError] = useState("");
  const [tasks, setTasks] = useState(tasksRes);
  async function remove({ id }) {
    try {
      setError("");
      await removeTask({
        id,
      });

      const res = tasks.filter((task) => {
        return task._id !== id;
      });
      setTasks(res);
    } catch (err) {
      setError(err.message);
    }
  }
  return (
    <Container>
      <Row>
        {tasks.map((task) => (
          <Col xs={4} className="mb-4">
            <Task
              remove={remove}
              id={task._id}
              title={task.title}
              description={task.description}
              completed={task.complete}
              createdAt={task.createdAt}
            ></Task>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
