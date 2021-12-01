import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { React, useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./SignUpModal.css";
const Signupmodal = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const handlePasswordVisibility = () => {
    passwordVisibility
      ? setPasswordVisibility(false)
      : setPasswordVisibility(true);
  };
  return (
    <div>
      <button className="btn btn-outline-warning" onClick={handleShow}>
        Sign Up
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
          <h2 className="text-center mb-3 text-green">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mb-2 w-75">
            <TextField
              sx={{ mx: "auto" }}
              className="w-100"
              label="Student Name"
              type="text"
              variant="standard"
            />
            {/* Student Id field */}
            <TextField
              sx={{ mx: "auto" }}
              className="w-100"
              label="Student Id"
              type="number"
              variant="standard"
            />

            <div className="d-flex justify-content-between">
              {/* Session Select Box */}
              <FormControl variant="standard" className="signup-checkbox">
                <InputLabel id="demo-simple-select-standard-label">
                  Session
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="Student Id"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>

              {/* Current semester Select Box */}
              <FormControl variant="standard" className="signup-checkbox">
                <InputLabel id="demo-simple-select-standard-label">
                  Current Semester
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="semester"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            {/* Student Email */}
            <TextField
              sx={{ mx: "auto" }}
              className="w-100"
              label="Email"
              type="email"
              variant="standard"
            />

            {/* Student Password */}
            <FormControl className="w-100" variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={passwordVisibility ? "text" : "password"}
                // value={values.password}
                // onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handlePasswordVisibility}
                      // onMouseDown={handleMouseDownPassword}
                    >
                      {passwordVisibility ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <input
              type="submit"
              className="btn btn-outline-success d-block w-100 mt-3 mb-2"
            />
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Signupmodal;
