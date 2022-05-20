import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { signUp } from "../api/users";

export default function SignUp() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  async function register(event) {
    event.preventDefault();
    const { first_name, last_name, email, password } = event.target.elements;

    try {
      setError("");
      const response = await signUp({
        first_name: first_name.value,
        last_name: last_name.value,
        email: email.value,
        password: password.value,
      });

      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response));

      navigate("/");
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  }
  return (
    <>
      <h2 className="mt-2">Sign Up</h2>
      {error && <Alert variant="warning">{error}</Alert>}
      <Form onSubmit={register}>
        <Form.Group className="mb-3">
          <Form.Label>First name</Form.Label>
          <Form.Control
            type="text"
            name="first_name"
            placeholder="Enter first name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type="text"
            name="last_name"
            placeholder="Enter last name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </>
  );
}
