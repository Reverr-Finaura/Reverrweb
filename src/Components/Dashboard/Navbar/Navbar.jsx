import logo from "./logo.png";
import { Container, Button, Nav, Navbar } from "react-bootstrap";
import React from "react";
import "./navbar.css";

export default function Navbar1() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="70"
            height="55"
            className="d-inline-block align-top mt-2"
            alt="reverr-logo"
          />
          <p>Reverr</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse style={{ color: "white" }} id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#product">Browse Mentor</Nav.Link>
            <Nav.Link href="#about">Log in</Nav.Link>
            <Button className="m-1">REGISTER NOW</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
  );
}
