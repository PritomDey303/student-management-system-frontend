import React, { useState } from "react";
import { Form, FormControl, InputGroup, Modal } from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const Loginmodal = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlePasswordVisibility = () => {
    passwordVisibility
      ? setPasswordVisibility(false)
      : setPasswordVisibility(true);
  };
  return (
    <div>
      <button className="btn btn-success" onClick={handleShow}>
        Login
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="md"
        centered
      >
        <Modal.Header className="border-0" closeButton>
          <h2 className="text-dark text-center"> </h2>
        </Modal.Header>

        <Modal.Body>
          <h2 className="text-center mb-3 text-green">Login</h2>
          <form>
            <InputGroup className="mb-3 w-75 mx-auto">
              <InputGroup.Text
                className="bg-transparent  border-end-0 "
                id="basic-addon1"
              >
                <FaUserAlt />
              </InputGroup.Text>
              <FormControl
                className="border-start-0 shadow-none"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3 w-75 mx-auto">
              <InputGroup.Text
                id="basic-addon1"
                className="bg-transparent border-end-0 "
              >
                <RiLockPasswordFill />
              </InputGroup.Text>
              <FormControl
                className="border-start-0 shadow-none"
                type={passwordVisibility ? "password" : "text"}
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <Form.Check
              name="terms"
              label="Show Password"
              style={{ fontSize: "14px" }}
              className=" d-block w-75 mx-auto mb-4 text-secondary"
              onClick={handlePasswordVisibility}
            />
            <input
              type="submit"
              className="w-75 mb-4 d-block mx-auto text-light btn custom-button"
            />
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Loginmodal;
