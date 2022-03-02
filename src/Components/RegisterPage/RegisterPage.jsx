import React, { useState } from "react";
import "./registerPage.css";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FaAsterisk } from "react-icons/fa";
import reverrLogo from "./logo.png";

import { getFirestore } from "firebase/firestore";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import EmailVerify from "./emailVerify";

export default function LoginPage(props) {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [fullName, setFullName] = useState("");
  // const [mobileNo, setMobileNo] = useState("");
  var [isSecure1, setisSecure1] = useState(true);
  var [isSecure2, setisSecure2] = useState(true);
  const [name, setname] = useState("");
  const [nameerror, setnameerror] = useState(false);
  const [email, setemail] = useState("");
  const [emailerror, setemailerror] = useState(false);
  const [password, setpassword] = useState("");
  const [passerror, setpasserror] = useState(false);
  const [ConfermPass, setConfermPass] = useState("");
  const [confermpasserror, setconfermpasserror] = useState(false);
  const [mobile, setmobile] = useState("");
  const [moberror, setmoberror] = useState(false);
  // let navigate = useNavigate();

  const UserType = "Mentor";
  const data = {
    UserType: UserType,
    Name: name,
    Email: email,
    Password: password,
    Mobile: mobile,
  };

  //console.log(data)
  const IsEmpty = async (e) => {
  
    if (name === "") {
      setnameerror(true);
    } else {
      if (email === "") {
        setemailerror(true);
      } else {
        if (password === "") {
          setpasserror(true);
        } else {
          if (ConfermPass === "") {
            setconfermpasserror(true);
          } else {
            if (mobile === "") {
              setmoberror(true);
            } else {
              if (password !== ConfermPass) {
                alert("Password not matched!!");
              } else {
                const savedUser = await getFirestore()
                  .collection("Users")
                  .doc(email)
                  .get();
                if (savedUser._data !== undefined) {
                  alert("user already exists with that email");
                } else {
                  var OTP = EmailOtp();
                  alert("Please check your inbox");
                  // navigate("emailVerify", {
                  //   OTP: OTP,
                  //   Email: email,
                  //   Password: password,
                  //   Name: name,
                  //   Mobile: mobile,
                  // });
                  EmailVerify({
                    OTP: OTP,
                    Email: email,
                    Password: password,
                    Name: name,
                    Mobile: mobile,
                  });
                  setname("");
                  setemail("");
                  setpassword("");
                  setConfermPass("");
                  setmobile("");
                }
              }
            }
          }
        }
      }
    }
    e.preventDefault();
  };

  const EmailOtp = () => {
    const OTP = Math.floor(Math.random() * 1000000 + 1);
    const msg = "Your OTP for verification is " + OTP;

    var templateParams = {
      name: data.Name,
      email: data.Email,
      subject: "OTP for account verification",
      message: msg,
    };
    emailjs.init("user_FR6AulWQMZry87FBzhKNu");
    emailjs
      .send("service_lfmmz8k", "template_6lqwjap", templateParams)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(templateParams, "send email");

    return OTP;
  };

  return (
    <div className="register-container-fluid">
      <Row className="register-row g-0">
        <Col className="leftSection" sm={12} md={6}>
          <img src={reverrLogo} alt="reverr-logo"></img>
        </Col>
        <Col className="register-rightSection" sm={12} md={6}>
          <div className="wlcm-msg">
            <h1 className="main-msg"> Welcome to Reverr </h1>
            <p className="msg mb-4"> Enter your basic information below </p>
          </div>
          <Form className="register-form-container pt-5">
            <Form.Group className="mb-3 register-input">
              <Form.Label>
                Full Name
                <sup>
                  <FaAsterisk className="required-icon" />
                </sup>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Name"
                value={name}
                error={nameerror}
                onChange={(n) => {
               
                  setname(n);
                  if (n !== "") {
                    setnameerror(false);
                  }
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3 register-input">
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
                error={emailerror}
                onChange={(e) => {
                  setemail(e);
                  if (e !== "") {
                    setemailerror(false);
                  }
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3 register-input">
              <Form.Label>
                Password
                <sup>
                  <FaAsterisk className="required-icon" />
                </sup>
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Create password"
                value={password}
                error={passerror}
                onChange={(p1) => {
                  setpassword(p1);
                  if (p1 !== "") {
                    setpasserror(false);
                  }
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3 register-input">
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={ConfermPass}
                error={confermpasserror}
                onChange={(p2) => {
                  setConfermPass(p2);
                  if (p2 !== "") {
                    setconfermpasserror(false);
                  }
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3 register-input">
              <Form.Label>
                Mobile Number
                <sup>
                  <FaAsterisk className="required-icon" />
                </sup>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Your mobile number"
                value={mobile}
                error={moberror}
                onChange={(m) => {
                  setmobile(m);
                  if (m !== "") {
                    setmoberror(false);
                  }
                }}
                maxLength={10}
              />
            </Form.Group>
            <div className="text-center register-input">
              <Button type="submit" onClick={(e)=>IsEmpty(e)}>
                Create Account
              </Button>
            </div>
          </Form>
          <div className="login text-center mt-3 register-input">
            <p>
              Already have an account ? <a href="!#"> Login Now! </a>
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
