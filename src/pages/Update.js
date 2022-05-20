import { useEffect, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { singleTask, updateTask } from "../api/task";

export default function Update() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [task, setTask] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const { id } = params;

  const { title = "", description = "", complete = false } = task;

  async function getTask() {
    try {
      const response = await singleTask({ id });
      setTask(response);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(error);
      setLoading(false);
    }
  }

  useEffect(function () {
    getTask();
  }, []);

  async function update(event) {
    event.preventDefault();
    const { title, description } = event.target.elements;
    try {
      setError("");
      await updateTask({
        id,
        title: title.value,
        description: description.value,
        complete: task.complete,
      });

      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <>
      <h2 className="mt-2">Update Task [{id}]</h2>
      {error && <Alert variant="warning">{error}</Alert>}
      <Form onSubmit={update}>
        <Form.Group className="mb-3">
          <Form.Label>Title Task</Form.Label>
          <Form.Control
            type="text"
            name="title"
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            value={title}
            placeholder="Enter title"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            onChange={(e) => setTask({ ...task, description: e.target.value })}
            value={description}
            rows={3}
          />
        </Form.Group>
        <Form.Check
          type="switch"
          label={complete ? "Completed" : "Not Completed"}
          checked={complete}
          onChange={(e) => setTask({ ...task, complete: e.target.checked })}
        />
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </>
  );
}
