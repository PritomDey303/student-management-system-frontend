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
import { React, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useToasts } from "react-toast-notifications";
import { ContextProvider } from "../../../../App";
import notify from "../../../../utilityFunctions/notify";

const Adminsignup = () => {
  const { addToast } = useToasts();

  const [api] = useContext(ContextProvider);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);

    const config = {
      headers: {
        "content-Type": "application/json",
      },
    };
    //calling api
    axios
      .post(`${api}/signup/admin`, data, config)
      .then((res) => {
        console.log(res.data);
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
      .catch((err) => {
        console.log(err.message);
        notify("Sorry! Something went wrong.", "error");
      });
  };

  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const handlePasswordVisibility = () => {
    passwordVisibility
      ? setPasswordVisibility(false)
      : setPasswordVisibility(true);
  };

  //api calling

  return (
    <div className="py-5">
      <div className=" mx-auto py-3 signup-box ">
        <h3 className="text-center mb-3 text-green">Sign Up</h3>

        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mb-2 w-75">
          <input type="hidden" value={1} {...register("role")} />
          <TextField
            {...register("name", { required: true })}
            className="w-100"
            label="Admin Name"
            type="text"
            variant="standard"
          />

          {/* Student Email */}
          <TextField
            {...register("email", { required: true })}
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

export default Adminsignup;
