import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";
import semesters from "../../../fakedata/semester";
import sessions from "../../../fakedata/session";
import "./FilterBox.css";
const Filterbox = () => {
  const { register, handleSubmit } = useForm();

  const [DisplayFilter, setDisplayFilter] = useState(0);
  //getting form data
  const onSubmit = (data) => console.log(data);
  return (
    <div className="my-4 w-75 mx-auto">
      <Container>
        <button
          onClick={() => {
            setDisplayFilter(!DisplayFilter);
          }}
          className="btn shadow-none btn-outline-success d-block mx-auto mb-3 w-25"
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
                  {sessions.map((session) => {
                    return <option value={session}>{session}</option>;
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
                  {semesters.map((semester) => {
                    return (
                      <option value={semester.semester_id}>
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
