import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { ContextProvider } from "../../../App";
import Footer from "../../sharedComponents/Footer/Footer";
import Navigation from "../../sharedComponents/Navigation/Navigation";
import Academicinfo from "./AcademicInfo/AcademicInfo";
import Educationinfo from "./EducationInfo/EducationInfo";
import Personalinfo from "./PersonalInfo/PersonalInfo";
import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const [, LoggedInUser] = useContext(ContextProvider);
  if (!LoggedInUser.email) {
    navigate("/");
  }
  const [api] = useContext(ContextProvider);
  const { id } = useParams();
  const [academicInfo, setAcademicInfo] = useState({});
  const [personalInfo, setPersonalInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState({});
  useEffect(() => {
    let finalApi = null;
    id === "*"
      ? (finalApi = `${api}/students/loggedinstudent`)
      : (finalApi = `${api}/students/selectstudentbyid/${id}`);

    axios
      .get(finalApi, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        //set academic info
        setAcademicInfo({
          name: res.data[0].name,
          profile_picture: res.data[0].profile_picture,
          student_id: res.data[0].student_id,
          session: res.data[0].session,
          semester_name: res.data[0].semester_name,
          hall_name: res.data[0].hall_name,
        });
        //set education info
        setEducationInfo({
          hsc_gpa: res.data[0].hsc_gpa,
          hsc_year: res.data[0].hsc_year,
          college: res.data[0].college,
          ssc_gpa: res.data[0].ssc_gpa,
          ssc_year: res.data[0].ssc_year,
          school: res.data[0].school,
        });
        //set personalinfo
        setPersonalInfo({
          father_name: res.data[0].father_name,
          mother_name: res.data[0].mother_name,
          present_address: res.data[0].present_address,
          permanent_address: res.data[0].permanent_address,
          date_of_birth: res.data[0].date_of_birth,
          gender: res.data[0].gender,
          religion: res.data[0].religion,
          nid: res.data[0].nid,
          email: res.data[0].email,
          phone: res.data[0].phone,
          guardian_name: res.data[0].guardian_name,
          guardian_phone: res.data[0].guardian_phone,
        });
      });
  }, [api, id]);
  return (
    <div style={{ backgroundColor: "aliceblue" }}>
      <Navigation />

      <div className="student-profile py-4">
        <div className="container">
          <Row>
            <Col lg={4}>
              <Academicinfo academicInfo={academicInfo} />
            </Col>
            <Col lg={8}>
              <Personalinfo personalInfo={personalInfo} />
              <Educationinfo educationInfo={educationInfo} />
            </Col>
          </Row>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Profile;
