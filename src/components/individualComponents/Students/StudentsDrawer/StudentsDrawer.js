import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Students from "../../../../fakedata/students";
import ProfileCard from "../../../utilityComponents/ProfileCard/ProfileCard";
const StudentsDrawer = () => {
  return (
    <>
      <Container>
        {/* StudentsCard display */}
        <Row>
          {Students.map((student) => (
            <Col xs={12} sm={6} md={4} lg={3} className="mb-2">
              <ProfileCard key={student.student_id} students={student} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default StudentsDrawer;
