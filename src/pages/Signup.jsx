import React, { useState } from "react";
import { Form } from "react-router-dom";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Stack from "@mui/material/Stack";
import signupSvg from "../assets/MeditatingDoodle.svg";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Signup() {
  //states
  const [showPassword, setShowPassword] = useState(false);
  //functions
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className=" row justify-content-center d-flex p-3 mt-4">
      <div className="col-5  ">
        <img src={signupSvg} alt="" />
      </div>
      <div className="col-md-4">
        <Typography
          variant="h2"
          component="h3"
          sx={{
            mt: 2,
            fontWeight: "bold",
            color: "#009473",
            fontFamily: "Source Serif Pro",
          }}
        >
          Create An Account Now
        </Typography>
        <Stack
          sx={{
            margin: "40px 0px 0px 0px",
          }}
        >
          <Form method="post">
            <FormControl
              sx={{ m: 1, margin: "0px auto 20px auto", width: "80%" }}
            >
              <TextField
                id="standard-basic"
                label="email"
                name="email"
                variant="standard"
              />
            </FormControl>
            <FormControl
              sx={{ m: 1, margin: "0px auto 20px auto", width: "80%" }}
            >
              <TextField
                id="standard-basic2"
                label="Username"
                name="username"
                variant="standard"
              />
            </FormControl>
            <FormControl
              sx={{ m: 1, margin: "0px auto 20px auto", width: "80%" }}
              variant="standard"
            >
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                name="password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl
              sx={{ m: 1, margin: "0px auto 0px auto", width: "80%" }}
              variant="standard"
            >
              <InputLabel htmlFor="standard-adornment-password2">
                Confirm Password
              </InputLabel>
              <Input
                id="standard-adornment-password2"
                type={showPassword ? "text" : "password"}
                name="confirm-password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              size="large"
              width="70px"
              sx={{ bgcolor: "#767676", mt: 2 }}
              onClick={() => {
                console.log("clicked");
              }}
            >
              SignUp
            </Button>
          </Form>
        </Stack>
      </div>
    </div>
  );
}

export default Signup;
