import React from "react";
import "./resetPassword.css";
import { Row, Col, Form, Button } from "react-bootstrap";

import reverrLogo from "./logo.png";
export default function ResetPassword() {
  return (
    <div className="container-fluid ">
      <Row className=" pt-5">
        <Col className="leftSection pt-5">
          <img src={reverrLogo} alt="reverr-logo"></img>
        </Col>
        <Col className="rightSection p-5">
          <div className="wlcm-msg">
            <h1 className="main-msg">Reset Password</h1>
            <p className="msg mb-4">Please receive your password reset instructions</p>
          </div>
          <Form className="form-container">
            <Form.Group className="mb-3 input">
              <Form.Label>
            New Password
               
              </Form.Label>
              <Form.Control type="password" placeholder="Password"  className="mb-2"/>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
            
          
           
            <div className="input">
            <Button type="submit">Confirm</Button>
            </div>
          </Form>
         
        </Col>
      </Row>
    </div>
  );
}
