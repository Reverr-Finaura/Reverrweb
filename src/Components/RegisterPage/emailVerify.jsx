import React, { useState,useContext } from "react";
// import "./confirmationPage.css";
import { Row, Col, Form, Button } from "react-bootstrap";
import { getFirestore } from "firebase/firestore";
import reverrLogo from "./logo.png";
import { AuthContext } from "./AuthProvider";
export default function EmailVerify(props) {
 
  const OTP = props.route.params.OTP;
  const Email = props.route.params.Email;
  const Password = props.route.params.Password;
  const Name = props.route.params.Name;
  const Mobile = props.route.params.Mobile;
  const UserType = props.route.params.UserType;
  const [otp, setOtp] = useState("");
  const data = {
    userType: UserType,
    name: Name,
    email: Email,
    password: Password,
    mobile: Mobile,
  };
  const { register } = useContext(AuthContext);
  const signup = async () => {
    
    if (UserType === "Individual") {
      await getFirestore()
        .collection("Users")
        .doc(Email)
        .set({
          ...data,
          image: "",
          membership: "none",
          liked: [],
          likes: [],
          matched: [],
          TotalLikes: 20,
          Totalhandshakes: 1,
          notification: [],
          mentors: [],
          about: "",
          education: {
            type: "",
            school: "",
          },
          skills: [],
          industry: "",
          designation: "",
          linkedin: "",
          experience: {
            position: "",
            company: "",
            tenure: "",
          },
          lookingFor: [],
        })
        .then(() => {
          register(Email, Password);
        });
    } else if (UserType === "Startup") {
      await getFirestore()
        .collection("Users")
        .doc(Email)
        .set({
          ...data,
          image: "",
          membership: "none",
          liked: [],
          likes: [],
          matched: [],
          TotalLikes: 20,
          Totalhandshakes: 1,
          notification: [],
          mentors: [],
          about: "",
          industry: "",
          designation: "",
          linkedin: "",
          lookingFor: [],
          founders: [],
          website: "",
          operationsFrom: "",
          memeberNo: "none",
          stage: "",
        });
    } else if (UserType === "Mentor") {
      await getFirestore()
        .collection("Users")
        .doc(Email)
        .set({
          ...data,
          image: "",
          notification: [],
          clients: [],
          about: "",
          industry: "",
          linkedin: "",
          experience: "",
          reviews: [],
          rating: 0,
          totalRating: 0,
          plans: [],
        });
    }
  };

  function submitHandler(e) {
    if (OTP === otp) {
      signup()
        .then(() => {
          alert("Registered successfully!");

          // navigation.navigate("Login");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Wrong OTP please try again!");


    }
    e.preventDefault();
  }

  return (
    <div className="container-fluid ">
      <Row className=" pt-5">
        <Col className="leftSection pt-5">
          <img src={reverrLogo} alt="reverr-logo"></img>
        </Col>
        <Col className="rightSection p-5">
          <div className="wlcm-msg">
            <h1 className="main-msg">Confirmation</h1>
            <p className="msg mb-4">
              Please enter the vertification code from the sms we just send you
            </p>
          </div>
          <Form className="form-container">
            <Form.Group className="mb-3 input">
              <Form.Label>OTP</Form.Label>
              <Form.Control type="text" placeholder="Code" value={otp} onChangeText={(e) => {setOtp(e)}} />
            </Form.Group>

            <div className="input">
              <Button type="submit" onClick={(e)=>submitHandler(e)}>
                Confirm
              </Button>
            </div>
          </Form>
          <div className="login  mt-3 input">
            Don't get it? <a href="!#">Resend Code</a>
          </div>
        </Col>
      </Row>
    </div>
  );
}
