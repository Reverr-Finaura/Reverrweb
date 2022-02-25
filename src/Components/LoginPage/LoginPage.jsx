import React from "react";
import "./loginPage.css";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FaAsterisk } from "react-icons/fa";
import reverrLogo from "./logo.png";
export default function LoginPage() {
  return (
    <div className="container-fluid ">
      <Row className=" pt-5">
        <Col className="leftSection pt-5">
          <img src={reverrLogo} alt="reverr-logo"></img>
        </Col>
        <Col className="rightSection p-5">
          <div className="wlcm-msg">
            <h1 className="main-msg">Welcome to Reverr</h1>
            <p className="msg mb-4">Welcome back! Please login to continue</p>
          </div>
          <Form className="form-container">
            <Form.Group className="mb-3 input">
              <Form.Label>
              Email Address/Phone no.
                <sup>
                  <FaAsterisk className="required-icon" />
                </sup>
              </Form.Label>
              <Form.Control type="text" placeholder="Jatin Khurana" />
            </Form.Group>
            
            <Form.Group className="mb-3 input">
              <Form.Label>
                Password
                <sup>
                  <FaAsterisk className="required-icon" />
                </sup>
              </Form.Label>
              <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>{" "}
           
            <div className="text-center input">
            <Button type="submit">Login</Button>
            </div>
          </Form>
          <div className="login text-center mt-3 input"><p>Don't have an account? <a href="!#">Sign Up!</a></p></div>
        </Col>
      </Row>
    </div>
  );
}
