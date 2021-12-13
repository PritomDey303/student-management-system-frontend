import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useContext, useState } from "react";
import { Container, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ContextProvider } from "../../../App";
import "./LoginModal.css";
const Loginmodal = () => {
  const [api, , setLoggedInUser] = useContext(ContextProvider);
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const [show, setShow] = useState(false);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlePasswordVisibility = () => {
    passwordVisibility
      ? setPasswordVisibility(false)
      : setPasswordVisibility(true);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  //toaster
  const notify = () => toast("Wow so easy!");

  //handle login
  const handleLogin = (e) => {
    const userObj = {
      email: Email,
      password: Password,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },

      withCredentials: true,
    };
    //calling api
    axios.post(`${api}/authentication/login`, userObj, config).then((res) => {
      if (res.status === 200) {
        notify();
      } else {
        notify();
      }
      console.log(res);
      setLoggedInUser(res.data);
    });
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
          <Container>
            <h2 className="text-center mb-3 text-green">Login</h2>
            <form className="loginForm">
              <TextField
                className="w-100 mb-3"
                label="Email"
                type="email"
                value={Email}
                onChange={handleEmailChange}
                variant="standard"
              />

              {/* Student Password */}
              <FormControl className="w-100 mb-4" variant="standard">
                <InputLabel htmlFor="standard-adornment-password">
                  Password
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={passwordVisibility ? "text" : "password"}
                  value={Password}
                  onChange={handlePasswordChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handlePasswordVisibility}
                        // onMouseDown={handleMouseDownPassword}
                      >
                        {passwordVisibility ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <input
                type="button"
                value="Submit"
                onClick={handleLogin}
                className="w-100 mb-4 d-block mx-auto text-light btn custom-button"
              />
            </form>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Loginmodal;
