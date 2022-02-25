import React from "react";
import "./forgotPassword.css";
import { Row, Col, Form, Button } from "react-bootstrap";

import reverrLogo from "./logo.png";
export default function ForgotPassword() {
  return (
    <div className="container-fluid ">
      <Row className=" pt-5">
        <Col className="leftSection pt-5">
          <img src={reverrLogo} alt="reverr-logo"></img>
        </Col>
        <Col className="rightSection p-5">
          <div className="wlcm-msg">
            <h1 className="main-msg">Forgot Password</h1>
            <p className="msg mb-4">Please receive your password reset instructions</p>
          </div>
          <Form className="form-container">
            <Form.Group className="mb-3 input">
              <Form.Label>
              Email/Phone no.
               
              </Form.Label>
              <Form.Control type="text" placeholder="Your email/Phone no." />
            </Form.Group>
            
          
           
            <div className="input">
            <Button type="submit">Send Password</Button>
            </div>
          </Form>
          <div className="login  mt-3 input"> <a href="!#">I remember the password</a></div>
        </Col>
      </Row>
    </div>
  );
}
