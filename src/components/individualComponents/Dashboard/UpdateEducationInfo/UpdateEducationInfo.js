import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useToasts } from "react-toast-notifications";
import { ContextProvider } from "../../../../App";

const Updateeducationinfo = () => {
  const [api, LoggedInUser] = useContext(ContextProvider);
  const [educationInfo, setEducationInfo] = useState({});
  const { addToast } = useToasts();
  const [reload, setReload] = useState(true);
  //get educationinfo
  useEffect(() => {
    axios
      .get(`${api}/educationinfo/geteducationinfo`, { withCredentials: true })
      .then((res) => {
        if (res.status === 200) {
          setEducationInfo(res.data);
        }
      });
  }, [api, reload]);
  const { register, handleSubmit } = useForm();
  //update education info
  const onSubmit = (data, e) => {
    const updateObj = {
      authentication_id: LoggedInUser.authentication_id,
      ...data,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },

      withCredentials: true,
    };
    //calling api
    axios
      .post(`${api}/educationinfo/update`, updateObj, config)
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
    <div className="mt-3">
      <h1 className="mt-3 mb-4 text-green">
        Upadate Your Education Information
      </h1>
      <Form className="px-3" onSubmit={handleSubmit(onSubmit)}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>HSC GPA</Form.Label>
            <Form.Control
              {...register("hsc_gpa")}
              type="text"
              placeholder={educationInfo.hsc_gpa}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>HSC Year</Form.Label>
            <Form.Control
              {...register("hsc_year")}
              type="text"
              placeholder={educationInfo.hsc_year}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>College</Form.Label>
            <Form.Control
              {...register("college")}
              type="text"
              placeholder={educationInfo.college}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>SSC GPA</Form.Label>
            <Form.Control
              {...register("ssc_gpa")}
              type="text"
              placeholder={educationInfo.ssc_gpa}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>SSC Year</Form.Label>
            <Form.Control
              {...register("ssc_year")}
              type="text"
              placeholder={educationInfo.ssc_year}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>School</Form.Label>
            <Form.Control
              {...register("school")}
              type="text"
              placeholder={educationInfo.school}
            />
          </Form.Group>
        </Row>

        <button
          className="btn btn-success my-4 d-block w-50 mx-auto"
          type="submit"
        >
          Submit
        </button>
      </Form>
    </div>
  );
};

export default Updateeducationinfo;
