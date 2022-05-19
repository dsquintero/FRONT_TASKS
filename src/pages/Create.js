import { Button, Form } from "react-bootstrap";

export default function Create() {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Title Task</Form.Label>
        <Form.Control type="text" placeholder="Enter title" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Task</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Create
      </Button>
    </Form>
  );
}
