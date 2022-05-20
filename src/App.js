import React from "react";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { clearSession, getSession, isAuthenticated } from "./Auth";
import Create from "./pages/Create";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Update from "./pages/Update";
//import "./App.css";

function App() {
  const navigate = useNavigate();
  async function LogOut() {
    await clearSession();
    navigate("/signIn");
  }
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Link to="/" className="navbar-brand">
            Tasks
          </Link>
          <Nav className="me-auto">
            {isAuthenticated() && (
              <Link to="/create" className="nav-link">
                Create
              </Link>
            )}
          </Nav>
          <Nav>
            {!isAuthenticated() && (
              <Link to="/signin" className="nav-link">
                Sign In
              </Link>
            )}
            {!isAuthenticated() && (
              <Link to="/signup" className="nav-link">
                Sign Up
              </Link>
            )}
            {isAuthenticated() && (
              <Link to="#" className="nav-link">
                Welcome, {getSession().user.first_name}
              </Link>
            )}

            {isAuthenticated() && (
              <Button variant="link" onClick={LogOut} className="nav-link">
                Sign Out
              </Button>
            )}
          </Nav>
        </Container>
      </Navbar>
      <Container className="mt-3">
        <Row>
          <Col>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/task/:id" element={<Update />} />
              <Route path="/create" element={<Create />} />
              {!isAuthenticated() && (
                <Route path="/signin" element={<SignIn />} />
              )}
              {!isAuthenticated() && (
                <Route path="/signup" element={<SignUp />} />
              )}

              <Route path="*" element={<Home />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
