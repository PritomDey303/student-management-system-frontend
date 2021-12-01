import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { default as StudentsData } from "../../../../fakedata/StudentsData";
import ProfileCard from "../../../utilityComponents/ProfileCard/ProfileCard";
const StudentsDrawer = () => {
  return (
    <>
      <Container>
        {/* StudentsCard display */}
        <Row>
          {StudentsData.map((student) => (
            <Col xs={12} sm={6} md={4} lg={3} className="mb-2">
              <ProfileCard key={student.studentId} students={student} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default StudentsDrawer;
