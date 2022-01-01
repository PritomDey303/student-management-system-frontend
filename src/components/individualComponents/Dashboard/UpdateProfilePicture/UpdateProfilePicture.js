import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Col, Form, Image, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useToasts } from "react-toast-notifications";
import { ContextProvider } from "../../../../App";

const Updateprofilepicture = () => {
  const [api] = useContext(ContextProvider);
  const { register, handleSubmit } = useForm();
  const { addToast } = useToasts();
  const [profilePicture, setProfilePicture] = useState({});
  const [buttonState, setButtonState] = useState("");
  //get profile picture
  useEffect(() => {
    axios
      .get(`${api}/personalinfo/getprofilepicture`, {
        withCredentials: true,
      })
      .then((res) => setProfilePicture(res.data));
  }, [api, buttonState]);
  const onSubmit = (data, e) => {
    setButtonState("disabled");
    const formData = new FormData();
    formData.append("profile_picture", data.profile_picture[0]);
    const config = {
      headers: {
        "content-Type": "multipart/form-data",
      },
      withCredentials: true,
    };
    //calling api
    axios
      .post(
        `${api}/personalinfo/updateprofilepicture`,

        formData,
        config
      )
      .then((res) => {
        setButtonState("");

        console.log(res.data.msg);
        if (res.data.status === 200) {
          addToast(res.data.msg, {
            appearance: "success",
            placement: "top-right",
            autoDismiss: true,
            autoDismissTimeout: 5000,
            transitionDuration: 400,
          });

          e.target.reset();
        } else {
          addToast(res.data.msg, {
            appearance: "error",
            placement: "top-right",
            autoDismiss: true,
            autoDismissTimeout: 5000,
            transitionDuration: 400,
          });
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="mt-3">
      <h1 className="mt-3 mb-4 text-green">Upadate Your Profile Picture</h1>
      <Image
        className="d-block mx-auto rounded-cirle"
        style={{ border: "10px solid green" }}
        width={200}
        height={200}
        src={profilePicture.profile_picture}
        roundedCircle
      />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="mt-4">
          <Col>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Update Your Profile Picture</Form.Label>
              <Form.Control
                type="file"
                {...register("profile_picture", { required: true })}
              />
            </Form.Group>
          </Col>
          <Col>
            <button
              className={`btn btn-success w-25 ${buttonState}`}
              style={{ marginTop: "32px" }}
            >
              Update
            </button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Updateprofilepicture;
