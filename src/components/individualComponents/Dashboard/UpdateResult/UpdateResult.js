import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Col, Row, Table } from "react-bootstrap";
import { useToasts } from "react-toast-notifications";
import { ContextProvider } from "../../../../App";
const Updateresult = () => {
  const [api] = useContext(ContextProvider);
  const { addToast } = useToasts();
  const [Students, setStudents] = useState([]);
  const [Reload, setReload] = useState(1);

  useEffect(() => {
    Reload &&
      axios
        .get(`${api}/students/allstudents`, { withCredentials: true })
        .then((res) => {
          console.log(res.data);
          setStudents(res.data);
        });
  }, [api, Reload]);

  //approve student function
  const approveStudents = (auth_id) => {
    if (window.confirm("Are you sure?")) {
      axios
        .put(`http://localhost:5000/students/approvestudent/${auth_id}`)
        .then((res) => {
          if (res.status === 200) {
            addToast(res.data.msg, {
              appearance: "success",
              placement: "top-right",
              autoDismiss: true,
              autoDismissTimeout: 5000,
              transitionDuration: 400,
            });
            setReload((prev) => prev + 1);
          } else {
            addToast(res.data.msg, {
              appearance: "error",
              placement: "top-right",
              autoDismiss: true,
              autoDismissTimeout: 5000,
              transitionDuration: 400,
            });
          }
        });
    }
  };

  //decline student reauest

  return (
    <div>
      <Row className="my-4">
        <Col>
          <h2 className="text-success">Update Students' Result</h2>
        </Col>
      </Row>
      <Row>
        <Col>
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
                    <button
                      className="btn btn-outline-success"
                      onClick={() => approveStudents(student.authentication_id)}
                    >
                      {" "}
                      Update Result
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default Updateresult;
