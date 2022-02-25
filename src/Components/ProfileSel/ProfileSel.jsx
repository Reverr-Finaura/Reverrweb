import "./profileSel.css";
import React from "react";
import { Navbar, Nav, Button, Card, Row, Col } from "react-bootstrap";
import logo from "./logo.png";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ProfileSel() {
  return (
    <div className="container-fluid">
      <Navbar expand="lg px-5 ">
        <Navbar.Brand href="#home" className="mt-3">
          <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="reverr-logo"
          />
          <p className="logo-sub">Reverr</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse style={{color:"white"}}id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#product">Product</Nav.Link>
            <Nav.Link href="#solution">Solution</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
          <Button className="ms-auto">REGISTER NOW</Button>
        </Navbar.Collapse>
      </Navbar>

      <div className="middle-container text-center">
        <Row className=" middle-heading">
          <h1 className="my-2">Select Profile</h1>
          <p className="my-3 mb-5">What are you here for?</p>
        </Row>
        <Row className="">
          <Col className="individual-card">
            <Card style={{ width: "18rem" }} className="mx-auto">
              <Card.Body>
                <Card.Title>Individual</Card.Title>
                <Card.Text>
                  Market Research Mentor is the terminal where all industrial,
                  commercial and profitmaking venture will get the best research
                  reports.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="startup-card">
            <Card style={{ width: "18rem" }} className="mx-auto">
              <Card.Body>
                <Card.Title>Startup</Card.Title>
                <Card.Text>
                  Market Research Mentor is the terminal where all industrial,
                  commercial and profitmaking venture will get the best research
                  reports
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mentor-card">
            <Card style={{ width: "18rem" }} className="mx-auto">
              <Card.Body>
                <Card.Title>Mentor</Card.Title>
                <Card.Text>
                  Market Research Mentor is the terminal where all industrial,
                  commercial and profitmaking venture will get the best research
                  reports
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="footer-container mt-5 p-5">
        <Row>
          <Col xs={3} className="reverr-footer text-center">
            <img
              src={logo}
              className="d-inline-block align-top"
              height="100px"
              width="200px"
              alt="React Bootstrap logo"
            />
            <h3 className="logo-sub">REVERR</h3>
            <p>
              Ipsum dolor sit amet consectetur adipiscing elit. Mauris vitae
              ultricies{" "}
            </p>
          </Col>
          <Col xs={2} className="footer-link">
            <h3>Links</h3>
            <ul>
              <li>
                <a href="!#">Who we are</a>
              </li>
              <li>
                <a href="!#">Offers</a>
              </li>
              <li>
                <a href="!#">Careers</a>
              </li>
              <li>
                <a href="!#">Report Fraud</a>
              </li>
            </ul>
          </Col>
          <Col xs={2} className="footer-terms">
            {" "}
            <h3>For You</h3>
            <ul>
              <li>
                <a href="!#">Privacy</a>
              </li>
              <li>
                <a href="!#">Terms</a>
              </li>
              <li>
                <a href="!#">Security</a>
              </li>
              <li>
                <a href="!#">Site Map</a>
              </li>
            </ul>
          </Col>
          <Col xs={4} className="footer-connect">
            <h3>Stay Connected</h3>
            <ul>
              <li>
                <Row>
                  <Col xs={1}>
                    {" "}
                    <FaMapMarkerAlt className="icons" />
                  </Col>
                  <Col className="location"  > <a href="!#">
                  601, GDITL Northex Tower, Netaji Subhash place, Pitam pura,
                  Delhi- 110034
                </a></Col>
                </Row>

              
              </li>
              <li>
                <a href="!#">
                  <FaPhoneAlt className="icons" />
                  +91 124 600 0660
                </a>
              </li>
              <li>
                <a href="!#">
                  <FaEnvelope className="icons" />
                  Support@reveer.in
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
}
