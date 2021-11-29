import React from "react";
import { Col, Row } from "react-bootstrap";
import Footer from "../../sharedComponents/Footer/Footer";
import Navigation from "../../sharedComponents/Navigation/Navigation";
import Academicinfo from "./AcademicInfo/AcademicInfo";
import Educationinfo from "./EducationInfo/EducationInfo";
import Personalinfo from "./PersonalInfo/PersonalInfo";
import "./Profile.css";
const Profile = () => {
  return (
    <div>
      <Navigation />

      <div class="student-profile py-4">
        <div class="container">
          <Row>
            <Col lg={4}>
              <Academicinfo />
            </Col>
            <Col lg={8}>
              <Personalinfo />
              <Educationinfo />
            </Col>
          </Row>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
