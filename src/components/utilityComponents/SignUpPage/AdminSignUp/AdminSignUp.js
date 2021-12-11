import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { React, useState } from "react";
import { useForm } from "react-hook-form";

const Adminsignup = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log("signup");
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const handlePasswordVisibility = () => {
    passwordVisibility
      ? setPasswordVisibility(false)
      : setPasswordVisibility(true);
  };
  return (
    <div className="py-5">
      <div className=" mx-auto py-3 signup-box ">
        <h3 className="text-center mb-3 text-green">Sign Up</h3>

        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mb-2 w-75">
          <TextField
            {...register("admin_name", { required: true })}
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
