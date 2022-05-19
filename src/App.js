import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import Create from "./pages/Create";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
//import "./App.css";

function App() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Link to="/" className="navbar-brand">
            Tasks
          </Link>
          <Nav className="me-auto">
            <Link to="/create" className="nav-link">
              Create
            </Link>
          </Nav>
          <Nav>
            <Link to="/signin" className="nav-link">
              Sing In
            </Link>
            <Link to="/signup" className="nav-link">
              Sing Up
            </Link>
            <Link to="/signout" className="nav-link">
              Sing Out
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="mt-3">
        <Row>
          <Col>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<Create />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
