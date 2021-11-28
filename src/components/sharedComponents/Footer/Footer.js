import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import {
  GrFacebook,
  GrGithub,
  GrLinkedin,
  GrMail,
  GrTwitter,
} from "react-icons/gr";
import { RiMapPinFill } from "react-icons/ri";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="py-5 footer text-light">
      <Container>
        <Row>
          <Col sm={6} className="footer-contact">
            <div className="address d-flex  my-3">
              <div className="icon mx-2">
                <RiMapPinFill />
              </div>
              <div className="footer-text mx-2 align-items-center">
                {" "}
                Hathazari Upazila, Chittagong District, <br />
                Bangladesh.
              </div>
            </div>
            <div className="address d-flex my-3 align-items-center">
              <div className="icon mx-2">
                <FaPhoneAlt />
              </div>
              <div className="footer-text mx-2 ">+8801356437446</div>
            </div>
            <div className="address d-flex my-3 align-items-center">
              <div className="icon mx-2">
                <GrMail />
              </div>
              <div className="footer-text mx-2 ">csecu2021@gmail.com</div>
            </div>
          </Col>
          <Col sm={6} className="footer-about">
            <h1 className="heading">About Our Department</h1>
            <p className="pr-3 text-alignment">
              The Department of Computer Science & Engineering (CSE) at the
              University of Chittagong launched its undergraduate major
              programme in 2001 and its postgraduate programme in 2010. CSE
              department currently hosts 22 faculty members, including eight
              Professors and around 400 students. There are 300 undergraduate
              students, 100 MSc students.
            </p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="d-flex justify-content-center">
            <div className="icon mx-3">
              <a className="text-light" href="#facebook">
                <GrFacebook />
              </a>
            </div>
            <div className="icon mx-3">
              <a className="text-light" href="#linkedin">
                {" "}
                <GrLinkedin />
              </a>
            </div>
            <div className="icon mx-3">
              <a className="text-light" href="#twitter">
                {" "}
                <GrTwitter />
              </a>
            </div>
            <div className="icon mx-3">
              <a className="text-light" href="#github">
                <GrGithub />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
