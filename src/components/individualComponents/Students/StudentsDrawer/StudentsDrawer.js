import { React, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { default as StudentsData } from "../../../../fakedata/StudentsData";
import ProfileCard from "../../../utilityComponents/ProfileCard/ProfileCard";
const StudentsDrawer = () => {
  const [isActive, setIsActive] = useState("card");
  return (
    <>
      <Container>
        <Row>
          <Col className="text-center">
            <button
              className={`btn btn-outline-success shadow-none me-2 ${
                isActive === "card" ? "active" : ""
              }`}
              onClick={() => setIsActive("card")}
            >
              Card View
            </button>
            <button
              className={`btn btn-outline-success shadow-none me-2 ${
                isActive === "table" ? "active" : ""
              }`}
              onClick={() => setIsActive("table")}
            >
              Tabular View
            </button>
          </Col>
        </Row>
        {/* StudentsCard display */}
        {isActive === "card" && (
          <Row className="mt-4">
            {StudentsData.map((student) => (
              <Col
                key={student.studentId}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className="mb-2"
              >
                <ProfileCard key={student.studentId} students={student} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
      {/* Tabular view */}
      {isActive === "table" && (
        <Row className="mt-4 px-2">
          <Col>
            <Table striped hover size="lg" responsive>
              <thead className="bg-success text-light border-none">
                <tr className="text-center">
                  <th>Student Id</th>
                  <th>Name</th>
                  <th>Session</th>
                  <th>Current Semester</th>
                  <th>View Details</th>
                </tr>
              </thead>
              <tbody>
                {StudentsData.map((student) => (
                  <tr key={student.studentID} className="text-center">
                    <td>{student.studentId}</td>
                    <td>{student.name}</td>
                    <td>{student.session}</td>
                    <td>{student.currentSemester}</td>
                    <td>
                      <Link to={`/profile/${student.studentId}`}>
                        <button className="btn btn-success">View</button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      )}
    </>
  );
};

export default StudentsDrawer;
