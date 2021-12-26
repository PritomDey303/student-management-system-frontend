import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";
import { useToasts } from "react-toast-notifications";
import { ContextProvider } from "../../../App";
import "./FilterBox.css";

const Filterbox = (props) => {
  const { setStudents } = props;
  const [api] = useContext(ContextProvider);
  const [semesters, setSemesters] = useState([]);
  const [sessions, setSessions] = useState([]);
  const { addToast } = useToasts();
  //get all students
  useEffect(() => {
    axios
      .get(`${api}/students/allstudents`, { withCredentials: true })
      .then((res) => {
        setStudents(res.data);
        console.log(res.data);
      });
  }, [api, setStudents]);
  //get sessions
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
  const { register, handleSubmit } = useForm();

  const [DisplayFilter, setDisplayFilter] = useState(0);
  //getting form data
  const onSubmit = (data) => {
    axios
      .get(
        `${api}/students/filterstudents`,

        {
          params: {
            name: data.name.trim(),
            student_id: data.student_id.trim(),
            session: data.session.trim(),
            current_semester: data.current_semester.trim(),
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data.data);
        if (res.data.status === 200) {
          if (!res.data.data.length) {
            addToast("No student found.", {
              appearance: "error",
              placement: "top-right",
              autoDismiss: true,
              autoDismissTimeout: 3000,
              transitionDuration: 400,
            });
          }
          setStudents(res.data.data);
        } else {
          setStudents([]);
          addToast(res.data.msg, {
            appearance: "error",
            placement: "top-right",
            autoDismiss: true,
            autoDismissTimeout: 3000,
            transitionDuration: 400,
          });
        }
      });
  };
  return (
    <div className="my-4 w-75 mx-auto">
      <Container>
        <button
          onClick={() => {
            setDisplayFilter(!DisplayFilter);
          }}
          className="btn shadow-none btn-outline-success d-block mx-auto mb-3 "
        >
          {DisplayFilter ? "Close Filter" : "Open Filter"}
          {"  "}
          {DisplayFilter ? (
            <BsFillArrowUpCircleFill />
          ) : (
            <BsFillArrowDownCircleFill />
          )}
        </button>
        <Form
          className={`filter-form ${DisplayFilter ? "d-block" : "d-none"} `}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              className=" shadow-none filter-input-box  mx-auto py-3"
              type="text"
              placeholder="Search By Name"
              {...register("name")}
            />
          </Form.Group>

          <Row className="mb-3">
            <Col md={4}>
              {" "}
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Control
                  className=" shadow-none filter-input-box   py-3"
                  type="number"
                  placeholder="Student Id"
                  {...register("student_id")}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Select
                  className=" shadow-none filter-input-box  py-3"
                  {...register("session")}
                  defaultValue="Session"
                >
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
            <Col md={4}>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Select
                  className=" shadow-none filter-input-box  py-3"
                  placeholder="Session"
                  defaultValue="Current Semester"
                  {...register("current_semester")}
                >
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
          <input className="btn btn-success w-100 d-block" type="submit" />
        </Form>
      </Container>
    </div>
  );
};

export default Filterbox;
