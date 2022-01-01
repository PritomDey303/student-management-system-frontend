import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useToasts } from "react-toast-notifications";
import { ContextProvider } from "../../../../App";

const Updatepersonalinfo = () => {
  const { addToast } = useToasts();
  const [personalInfo, setPersonalInfo] = useState({});
  const { register, handleSubmit } = useForm();
  const [api, LoggedInUser] = useContext(ContextProvider);
  const [reload, setReload] = useState(true);

  //get personalinfo
  useEffect(() => {
    axios
      .get(`${api}/personalinfo/getpersonalinfo`, {
        withCredentials: true,
      })
      .then((res) => setPersonalInfo(res.data[0]));
  }, [api, reload]);
  //form submission
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
      .post(`${api}/personalinfo/update`, updateObj, config)
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
    <div className="mt-3 ">
      <h1 className="mt-3 mb-4 text-green">
        Upadate Your Personal Information
      </h1>
      <Form className="px-3" onSubmit={handleSubmit(onSubmit)}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Father's Name</Form.Label>
            <Form.Control
              type="text"
              placeholder={personalInfo.father_name}
              {...register("father_name")}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Mother's Name</Form.Label>
            <Form.Control
              type="text"
              placeholder={personalInfo.mother_name}
              {...register("mother_name")}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label> Present Address</Form.Label>
          <Form.Control
            placeholder={personalInfo.present_address}
            {...register("present_address")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label> Permanent Address</Form.Label>
          <Form.Control
            placeholder={personalInfo.permanent_address}
            {...register("permanent_address")}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Date Of Birth</Form.Label>
            <Form.Control
              defaultValue={personalInfo.date_of_birth}
              {...register("date_of_birth")}
              type="date"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Gender</Form.Label>
            <Form.Select
              defaultChecked={personalInfo.gender}
              {...register("gender")}
            >
              <option value="">Choose Gender</option>
              <option
                value="Male"
                selected={personalInfo.gender === "Male" && "selected"}
              >
                Male
              </option>
              <option
                value="Female"
                selected={personalInfo.gender === "Female" && "selected"}
              >
                Female
              </option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Religion</Form.Label>
            <Form.Select
              defaultValue={personalInfo.religion}
              {...register("religion")}
            >
              <option value="">Choose Religion</option>
              <option
                value="Islam"
                selected={personalInfo.religion === "Islam" && "selected"}
              >
                Islam
              </option>
              <option
                value="Hinduism"
                selected={personalInfo.religion === "Hinduism" && "Hinduism"}
              >
                Hinduism
              </option>
              <option
                value="Buddhism"
                selected={personalInfo.religion === "Buddhism" && "selected"}
              >
                {" "}
                Buddhism
              </option>
              <option
                value="Christianity"
                selected={
                  personalInfo.religion === "Christianity" && "selected"
                }
              >
                Christianity
              </option>
              <option
                value="Others"
                selected={personalInfo.religion === "Others" && "selected"}
              >
                Others
              </option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>National Id Number</Form.Label>
            <Form.Control
              placeholder={personalInfo.nid}
              type="number"
              {...register("nid")}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Phone No.</Form.Label>
            <Form.Control
              placeholder={personalInfo.phone}
              type="number"
              {...register("phone")}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Guardian's Name</Form.Label>
            <Form.Control
              placeholder={personalInfo.guardian_name}
              type="text"
              {...register("guardian_name")}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Guardian's Phone No.</Form.Label>
            <Form.Control
              placeholder={personalInfo.guardian_phone}
              type="number"
              {...register("guardian_phone")}
            />
          </Form.Group>
        </Row>

        <button
          className="btn w-50 mx-auto d-block btn-outline-success my-4"
          type="submit"
        >
          Submit
        </button>
      </Form>
    </div>
  );
};

export default Updatepersonalinfo;
