import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Image, Modal, Row, Table } from "react-bootstrap";
import { useToasts } from "react-toast-notifications";

const Studentrequest = () => {
  const { addToast } = useToasts();
  const [Students, setStudents] = useState([]);
  const [Reload, setReload] = useState(1);

  //react modal functions and state
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    Reload &&
      axios({
        method: "get",
        url: "http://localhost:5000/students/pendingstudents",
      }).then(function (res) {
        setStudents(res.data);
      });
  }, [Reload]);

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
  const declineStudents = (auth_id) => {
    if (window.confirm("Are you sure?")) {
      axios
        .delete(`http://localhost:5000/students/declinestudent/${auth_id}`)
        .then((res) => {
          console.log(res);
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
  return (
    <div>
      <Row className="my-4">
        <Col>
          <h2 className="text-success">Verify Student Signup Requests</h2>
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
                <th>Email</th>
                <th>Id Image</th>
                <th>Aprrove</th>
                <th>Decline</th>
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
                  <td>{student.email}</td>
                  <td>
                    <button
                      className="btn btn-outline-warning"
                      onClick={handleShow}
                    >
                      View
                    </button>

                    <Modal show={show} onHide={handleClose} centered>
                      <Modal.Body className="bg-dark">
                        <Image
                          src={student.id_img}
                          className="w-100 h-75"
                          thumbnail
                        />
                      </Modal.Body>
                    </Modal>
                  </td>
                  <td>
                    <button
                      className="btn btn-outline-success"
                      onClick={() => approveStudents(student.authentication_id)}
                    >
                      Approve
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => declineStudents(student.authentication_id)}
                    >
                      Decline
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

export default Studentrequest;
