import React, { useState } from "react";
import "./loginPage.css";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FaAsterisk } from "react-icons/fa";
import reverrLogo from "./logo.png";
import { login } from "../../firebase";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleLogin(e) {
    e.preventDefault();
    login(email, password);
    setEmail("");
    setPassword("");
  }
  return (
    <div className="login-container-fluid ">
      <Row className="login-row g-0">
        <Col className="login-leftSection" sm={12} md={6}>
          <img src={reverrLogo} alt="reverr-logo"></img>
        </Col>
        <Col className="login-rightSection" sm={12} md={6}>
          <div className="login-wlcm-msg">
            <h1 className="login-main-msg">Welcome to Reverr</h1>
            <p className="login-msg mb-4">Welcome back! Please login to continue.</p>
          </div>
          <Form className="login-form-container">
            <Form.Group className="mb-3 login-input">
              <Form.Label>
                Email Address/Phone no.
                <sup>
                  <FaAsterisk className="login-required-icon" />
                </sup>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="jatin@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 login-input">
              <Form.Label>
                Password
                <sup>
                  <FaAsterisk className="login-required-icon" />
                </sup>
              </Form.Label>
              <Form.Control
                type="password"
                value={password}
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>{" "}
            <div className="text-center login-input">
              <Button type="submit" className="btn-lg" onClick={handleLogin}>
                Login
              </Button>
            </div>
          </Form>
          <div className="login text-center mt-3 login-input">
            <p>
              Don't have an account? <a href="!#">Sign Up!</a>
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
