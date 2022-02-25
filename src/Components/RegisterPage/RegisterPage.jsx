import React, { useState } from "react";
import "./registerPage.css";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FaAsterisk } from "react-icons/fa";
import reverrLogo from "./logo.png";
import { register, db } from "../../firebase";
import { useRef } from "react";

export default function LoginPage(props) {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [mobileNo, setMobileNo] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    db.collection("web-register")
      .add({
        fullName: fullName,
        email: email,
        mobileNo: mobileNo,
        password: password,
      })
      .then(() => {
        alert("Registered Successfully");
      })
      .catch((err) => {
        alert(err);
      });
    setFullName("");
    setEmail("");
    setMobileNo("");
    setPassword("");
  }

  return (
    <div className="container-fluid ">
      <Row className=" pt-5">
        <Col className="leftSection pt-5">
          <img src={reverrLogo} alt="reverr-logo"></img>
        </Col>
        <Col className="rightSection">
          <div className="wlcm-msg">
            <h1 className="main-msg">Welcome to Reverr</h1>
            <p className="msg mb-4">Enter your basic information below</p>
          </div>
          <Form className="form-container">
            <Form.Group className="mb-3 input">
              <Form.Label>
                Full Name
                <sup>
                  <FaAsterisk className="required-icon" />
                </sup>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Jatin Khurana"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              
            </Form.Group>
            <Form.Group className="mb-3 input">
              <Form.Label>
                Email
                <sup>
                  <FaAsterisk className="required-icon" />
                </sup>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Your Email id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>{" "}
            <Form.Group className="mb-3 input">
              <Form.Label>
                Password
                <sup>
                  <FaAsterisk className="required-icon" />
                </sup>
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>{" "}
            <Form.Group className="mb-3 input">
              <Form.Label>
                Mobile Number
                <sup>
                  <FaAsterisk className="required-icon" />
                </sup>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Your mobile number"
                value={mobileNo}
                onChange={(e) => setMobileNo(e.target.value)}
              />
            </Form.Group>
            <div className="text-center input">
              <Button type="submit" onClick={handleRegister}>
                Create Account
              </Button>
            </div>
          </Form>
          <div className="login text-center mt-3 input">
            <p>
              Already have an account? <a href="!#"> Login Now!</a>
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
