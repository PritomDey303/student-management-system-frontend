import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Col, Form, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { ContextProvider } from "../../../../App";
const Updateresult = () => {
  const [api] = useContext(ContextProvider);
  const { addToast } = useToasts();
  const [Students, setStudents] = useState([]);
  const [Reload, setReload] = useState(1);
  const [sessions, setSessions] = useState([]);
  const [semesters, setSemesters] = useState([]);
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [session, setSession] = useState("");
  const [semester, setSemester] = useState("");
  console.log(name, studentId, session, semester);

  //getting sessions and semester
  useEffect(() => {
    axios
      .get(`${api}/academicinfo/sessions`)
      .then((res) => setSessions(res.data));
  }, [api]);
  //getSemesters
  useEffect(() => {
    axios
      .get(`${api}/academicinfo/semesters`)
      .then((res) => setSemesters(res.data));
  }, [api]);
  //approve student function

  //getting students depend on filter value
  useEffect(() => {
    axios
      .get(
        `${api}/students/filterstudents`,

        {
          params: {
            name: name.trim(),
            student_id: studentId.trim(),
            session: session.trim(),
            current_semester: semester.trim(),
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data.data);
        if (res.data.status === 200) {
          if (!res.data.data.length) {
          }
          setStudents(res.data.data);
        } else {
          setStudents([]);
          setReload((prev) => prev + 1);
        }
      });
  }, [name, studentId, session, semester, addToast, api]);
  ////////////////////////////////////////////////////
  useEffect(() => {
    Reload &&
      axios
        .get(`${api}/students/allstudents`, { withCredentials: true })
        .then((res) => {
          console.log(res.data);
          setStudents(res.data);
        });
  }, [api, Reload]);

  return (
    <div>
      <Row className="my-4">
        <Col>
          <h2 className="text-success">Update Students' Result</h2>
        </Col>
      </Row>
      <Form>
        <Row className="px-2">
          <Col md={3}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Student Name</Form.Label>

              <Form.Control
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group className="mb-3" controlId="formBasicId">
              <Form.Label>Student ID</Form.Label>

              <Form.Control
                type="number"
                placeholder="Enter Student ID"
                onChange={(e) => setStudentId(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Session</Form.Label>

              <Form.Select onChange={(e) => setSession(e.target.value)}>
                <option value="">Select Session</option>
                {sessions.length &&
                  sessions.map((session) => {
                    return (
                      <option key={session.session} value={session.session}>
                        {session.session}
                      </option>
                    );
                  })}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Current Semester</Form.Label>

              <Form.Select onChange={(e) => setSemester(e.target.value)}>
                <option value="">Select Session</option>
                <option value="">Select Semester</option>

                {semesters.length &&
                  semesters.map((semester) => {
                    return (
                      <option
                        key={semester.semester_id}
                        value={semester.semester_id}
                      >
                        {semester.semester_name}
                      </option>
                    );
                  })}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <Row>
        {!Students.length && (
          <h1 className="text-danger mx-auto text-center mt-5">
            No Student Found.
          </h1>
        )}
        <Col>
          {Students.length ? (
            <Table striped hover size="lg" responsive>
              <thead className="bg-success text-light border-none">
                <tr className="text-center">
                  <th>Student Id</th>
                  <th>Name</th>
                  <th>Session</th>
                  <th>Current Semester</th>
                  <th>Hall</th>

                  <th>Update Result</th>
                </tr>
              </thead>
              <tbody>
                {Students.map((student) => (
                  <tr key={student.authentication_id} className="text-center">
                    <td>{student.student_id}</td>
                    <td>{student.name}</td>
                    <td>{student.session}</td>
                    <td>{student.semester_name}</td>
                    <td>{student.hall_name}</td>

                    <td>
                      <Link
                        to={`/dashboard/updateresult/${student.student_id}`}
                      >
                        <button className="btn btn-outline-success">
                          Update Result
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            ""
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Updateresult;
