import React from "react";
import "./confirmationPage.css";
import { Row, Col, Form, Button } from "react-bootstrap";

import reverrLogo from "./logo.png";
export default function ConfirmationPage() {
  return (
    <div className="container-fluid ">
      <Row className=" pt-5">
        <Col className="leftSection pt-5">
          <img src={reverrLogo} alt="reverr-logo"></img>
        </Col>
        <Col className="rightSection p-5">
          <div className="wlcm-msg">
            <h1 className="main-msg">Confirmation</h1>
            <p className="msg mb-4">Please enter the vertification code from the sms we just send you</p>
          </div>
          <Form className="form-container">
            <Form.Group className="mb-3 input">
              <Form.Label>
             OTP
               
              </Form.Label>
              <Form.Control type="text" placeholder="Code" />
            </Form.Group>
            
          
           
            <div className="input">
            <Button type="submit">Confirm</Button>
            </div>
          </Form>
          <div className="login  mt-3 input">Don't get it? <a href="!#">Resend Code</a></div>
        </Col>
      </Row>
    </div>
  );
}
