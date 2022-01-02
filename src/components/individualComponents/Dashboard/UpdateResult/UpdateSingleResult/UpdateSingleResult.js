import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { useToasts } from "react-toast-notifications";
import { ContextProvider } from "../../../../../App";
import Footer from "../../../../sharedComponents/Footer/Footer";
import Navigation from "../../../../sharedComponents/Navigation/Navigation";

const Updatesingleresult = () => {
  const { id } = useParams();
  const { addToast } = useToasts();
  const { handleSubmit, register } = useForm();
  const [api] = useContext(ContextProvider);
  const [reload, setReload] = useState(false);
  const [semesters, setSemesters] = useState([]);
  const [result, setResult] = useState([]);
  useEffect(() => {
    axios
      .get(`${api}/academicinfo/semesters`)
      .then((res) => setSemesters(res.data));
  }, [api]);
  //getting result
  useEffect(() => {
    axios
      .get(`${api}/result/getresult/${id}`, { withCredentials: true })
      .then((res) => setResult(res.data));
  }, [api, id, reload]);
  //handling form data
  const onSubmit = (data, e) => {
    const result = {
      student_id: id,
      ...data,
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },

      withCredentials: true,
    };
    axios
      .post(`${api}/result/updateresult`, result, config)
      .then((res) => {
        setReload(!reload);
        if (res.data.status === 200) {
          addToast(res.data.msg, {
            appearance: "success",
            placement: "top-right",
            autoDismiss: true,
            autoDismissTimeout: 3000,
            transitionDuration: 400,
          });
          e.target.reset();
        } else {
          addToast(res.data.msg, {
            appearance: "error",
            placement: "top-right",
            autoDismiss: true,
            autoDismissTimeout: 3000,
            transitionDuration: 400,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Navigation />
      <div>
        <Container
          className=" p-3 my-5"
          style={{
            backgroundColor: "#EDF6E5",
            boxShadow: "0px 0px 233px -6px rgba(0,0,0,0.75)",
            borderRadius: "20px",
          }}
        >
          <h2 className="text-success my-4 text-center">Update Result</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className="w-75 mx-auto">
              {semesters.map((semester) => (
                <Col md={4} sm={6} className="mb-4">
                  <p className="text-success">
                    Update {semester.semester_name} result:
                  </p>
                  <Form.Group className="mb-3 m mx-auto" controlId="form">
                    <Form.Control
                      type="text"
                      {...register(`result_${semester.semester_id}`)}
                      placeholder={
                        result[semester.semester_id - 1]
                          ? result[semester.semester_id - 1].gpa
                          : "N/A"
                      }
                    />
                  </Form.Group>
                </Col>
              ))}
            </Row>
            <button className="btn btn-success w-50 d-block mx-auto mb-4">
              Update
            </button>
          </Form>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Updatesingleresult;
