import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import axios from "axios";
import { React, useContext, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ContextProvider } from "../../../../App";
import { singleImgUploader } from "../../../../utilityFunctions/imgUploader";
const SignUpBox = () => {
  const { register, handleSubmit } = useForm();
  //handling signup

  //////////////////////////////
  //setting form data into signUpData hook
  const signUpData = new FormData();

  const onSubmit = (data) => {
    signUpData.append("id_image", data.id_image[0]);
    console.log(signUpData);
    const config = {
      headers: {
        "content-Type": "multipart/form-data",
      },
      withCredentials: true,
    };
    //calling api
    axios
      .post("http://localhost:5000/signup/student", signUpData, config)
      .then((res) => console.log(res));
  };

  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const handlePasswordVisibility = () => {
    passwordVisibility
      ? setPasswordVisibility(false)
      : setPasswordVisibility(true);
  };
  //context api
  const [api] = useContext(ContextProvider);
  //halls hook
  const [Halls, setHalls] = useState([]);
  //session hook
  const [session, setSession] = useState([]);
  //current semester
  const [semesters, setSemesters] = useState([]);
  //Loading halls
  useEffect(() => {
    fetch(`${api}/academicinfo/halls`)
      .then((res) => res.json())
      .then((data) => setHalls(data));
  }, [api]);

  //Loading sessions
  useEffect(() => {
    fetch(`${api}/academicinfo/sessions`)
      .then((res) => res.json())
      .then((data) => setSession(data));
  }, [api]);
  //Loading sessions
  useEffect(() => {
    fetch(`${api}/academicinfo/semesters`)
      .then((res) => res.json())
      .then((data) => setSemesters(data));
  }, [api]);
  return (
    <div className="py-5">
      <div className=" mx-auto py-3 signup-box ">
        <h3 className="text-center mb-3 text-green">Sign Up</h3>

        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mb-2 w-75">
          <TextField
            {...register("student_name", { required: true })}
            className="w-100"
            label="Student Name"
            type="text"
            variant="standard"
          />

          <div className="d-flex justify-content-between">
            {/* Student Id field */}
            <TextField
              {...register("student_id", { required: true })}
              className="signup-checkbox"
              label="Student Id"
              type="number"
              variant="standard"
            />
            {/* Session Select Box */}
            <FormControl variant="standard" className="signup-checkbox">
              <InputLabel id="demo-simple-select-standard-label">
                Session
              </InputLabel>
              <Select
                {...register("session", { required: true })}
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="session"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {session.map((signleSession) => {
                  return (
                    <MenuItem
                      key={signleSession.session}
                      value={signleSession.session}
                    >
                      {signleSession.session}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>

          <div className="d-flex justify-content-between">
            {/* hall Select Box */}
            <FormControl variant="standard" className="signup-checkbox">
              <InputLabel id="demo-simple-select-standard-label">
                Hall
              </InputLabel>
              <Select
                {...register("hall", { required: true })}
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Hall"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {Halls.map((hall) => {
                  return (
                    <MenuItem key={hall.hall_id} value={hall.hall_id}>
                      {hall.hall_name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>

            {/* Current semester Select Box */}
            <FormControl variant="standard" className="signup-checkbox">
              <InputLabel id="demo-simple-select-standard-label">
                Current Semester
              </InputLabel>
              <Select
                {...register("semester", { required: true })}
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="semester"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {semesters.map((singleSemester) => {
                  return (
                    <MenuItem
                      key={singleSemester.semester_id}
                      value={singleSemester.semester_id}
                    >
                      {singleSemester.semester_name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>
          {/* Student Email */}
          <TextField
            {...register("email", { required: true })}
            className="w-100"
            label="email"
            type="email"
            variant="standard"
          />

          {/* Student Password */}
          <FormControl className="w-100" variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              {...register("password", { required: true })}
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
            <Form.Group controlId="formFile" className="mb-3 mt-2">
              <Form.Label className="text-secondary">
                Attach a clear photo of your student id card.
              </Form.Label>
              <Form.Control
                type="file"
                {...register("id_image", { required: true })}
                onChange={(e) => {
                  singleImgUploader(e.target.files[0]);
                }}
              />
            </Form.Group>
          </FormControl>

          <input
            type="submit"
            className="btn shadow-none btn-success d-block w-100 mt-3 mb-2"
          />
        </form>
      </div>
    </div>
  );
};

export default SignUpBox;
