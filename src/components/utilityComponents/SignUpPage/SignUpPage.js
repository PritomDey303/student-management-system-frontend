import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Footer from "../../sharedComponents/Footer/Footer";
import Navigation from "../../sharedComponents/Navigation/Navigation";
import AdminSignUp from "./AdminSignUp/AdminSignUp";
import SignUpBox from "./SignUpBox/SignUpBox";
import "./SignUpModal.css";
const Signuppage = () => {
  const [isActive, setisActive] = useState("student");
  return (
    <div style={{ backgroundColor: "aliceblue" }}>
      <Navigation />
      <Container>
        <div className="d-flex justify-content-center mt-4">
          <button
            className={`btn btn-outline-success shadow-none me-2 ${
              isActive === "student" ? "active" : ""
            }`}
            onClick={() => setisActive("student")}
          >
            Student Sign Up
          </button>
          <button
            className={`btn btn-outline-success shadow-none ms-2 ${
              isActive === "admin" ? "active" : ""
            }`}
            onClick={() => setisActive("admin")}
          >
            Admin Sign Up
          </button>
        </div>
      </Container>
      {isActive === "student" && <SignUpBox />}
      {isActive === "admin" && <AdminSignUp />}
      <Footer />
    </div>
  );
};

export default Signuppage;
