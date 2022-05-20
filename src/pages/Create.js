import { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { newTask } from "../api/task";

export default function Create() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  async function createTask(event) {
    event.preventDefault();
    const { title, description } = event.target.elements;
    try {
      setError("");
      await newTask({
        title: title.value,
        description: description.value,
      });

      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <>
      <h2 className="mt-2">Create Task</h2>
      {error && <Alert variant="warning">{error}</Alert>}
      <Form onSubmit={createTask}>
        <Form.Group className="mb-3">
          <Form.Label>Title Task</Form.Label>
          <Form.Control type="text" name="title" placeholder="Enter title" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" name="description" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Create
        </Button>
      </Form>
    </>
  );
}
