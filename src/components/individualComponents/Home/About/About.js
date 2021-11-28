import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import SectionHeader from "../../../sharedComponents/SectionHeader/SectionHeader";
export default function About() {
  return (
    <section className="py-5 about" id="about">
      <Container>
        <SectionHeader
          heading="About Our Department"
          paragraph="Education is the most powerful weapon which you can use to change the world."
        ></SectionHeader>
      </Container>
      <Container className="py-5">
        <Row>
          <Col md={6} className="mb-3">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/1/17/Department_of_Computer_Science_%26_Engineering_at_CU_01.JPG"
              thumbnail
              className="w-100"
              alt=""
            />
          </Col>
          <Col md={6} className="mb-3">
            <p className="lead">
              <h3 className="text-green">Computer Science And Engineering</h3>
              The Department of Computer Science & Engineering (CSE) at the
              University of Chittagong launched its undergraduate major
              programme in 2001 and its postgraduate programme in 2010. CSE
              department currently hosts 22 faculty members, including eight
              Professors and around 400 students. There are 300 undergraduate
              students, 100 MSc students, and a few postgraduate research
              students in CSE department, carrying out learning and research
              activities in a very co-operative and friendly environment.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
