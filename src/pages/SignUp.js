import React from "react";
import { Button, Form } from "react-bootstrap";

export default function SignUp() {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>First name</Form.Label>
        <Form.Control type="text" placeholder="Enter first name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last name</Form.Label>
        <Form.Control type="text" placeholder="Enter last name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Sing Up
      </Button>
    </Form>
  );
}
