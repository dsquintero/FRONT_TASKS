import { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { signIn } from "../api/users";

export default function SignIn() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  async function login(event) {
    event.preventDefault();
    const { email, password } = event.target.elements;

    try {
      setError("");
      const response = await signIn({
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
      <h2 className="mt-2">Sign In</h2>
      {error && <Alert variant="warning">{error}</Alert>}
      <Form onSubmit={login}>
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
          Sign In
        </Button>
      </Form>
    </>
  );
}
