/**
 *
 * @version 1.0
 * @author [Aditya Busam] (aditya.busam@dal.ca/ jg469380@dal.ca)
 */

import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  Typography,
  Container,
  Grow,
  Grid,
  FormHelperText,
} from "@mui/material";
import { Paper } from "@mui/material";
import axios from "axios";
import Layout from "../../../components/Layout/Layout";
import { makeStyles } from "@material-ui/core/styles";
import {toast} from "react-toastify";
import PageTitle from '../../../components/PageTitle/PageTitle';
const useStyles = makeStyles({
  root: {
    background: "#13878F !important",
    border: 0,
    color: "white",
    height: 40,
    fontSize: 18,
    textTransform: "none",
    fontWeight: 600,
    "&:hover": {
      background: "#11999E !important",
      color: "#fff !important",
    },
  },
});

function Login() {
  const buttonStyle = useStyles();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [LoginError, setLoginError] = useState("");
  const [isValid, setIsValid] = useState(false);
  function onChangeEmail(event) {
    let Email = event.target.value;
    let emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let err = "";
    if (!Email.trim()) {
      err = "This field is mandatory and cannot be empty";
      setIsValid(false);
    } else if (!emailRegEx.test(Email)) {
      err = "Enter a valid Email";
      setIsValid(false);
    } else {
      setIsValid(true);
    }
    setEmail(Email);
    setEmailError(err);
  }

  function onChangePassword(event) {
    let Password = event.target.value;
    let passwordRegEx = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    let err = "";
    if (!Password.trim()) {
      err = "This field is mandatory and cannot be empty";
      setIsValid(false);
    } else if (Password.length < 8) {
      err = "The password should be a minimum of 8 characters";
      setIsValid(false);
    } else if (!passwordRegEx.test(Password) === true) {
      err =
        "The password should be a combination of alpha-numeric and special characters";
      setIsValid(false);
    } else {
      setIsValid(true);
    }
    setPassword(Password);
    setPasswordError(err);
  }

  function onHandleSubmit(event) {
    event.preventDefault();
    if (isValid) {
      axios
        .post("/api/v1/login", {
          email: email,
          password: password,
        })
        .then((res) => {
          if (res.data.success) {
            localStorage.setItem("Email", res.data.email);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("role", res.data.role);
            if (localStorage.getItem("role") === "Administrator") {
              navigate("/AdminHome"); // Need to be changed with Admin Endpoint
              toast.success("Logged in as Admin user");
            } else {
              navigate("/");
              toast.success("Log in successful")
            }
          } else {
            setLoginError("Please enter the correct login details");
            toast.error("Invalid Credentials please try again")
          }
        });
    }
  }
  function onHandleReset(event) {
    event.preventDefault();
    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <Layout>
      <PageTitle title="Login Page" />
        <Grow in>
          <Container style={{ marginTop: 30, width: "97%" }}>
            <Grid item xs={6} md={12}>
              <Paper elevation={6} style={{ padding: "5%" }}>
                <form>
                  <Typography variant="h5" style={{ fontWeight: 600 }}>
                    Login Page
                  </Typography>
                  <FormHelperText style={{ color: "red" }}>
                    <b>{LoginError} </b>
                  </FormHelperText>
                  <TextField
                    fullWidth
                    margin="normal"
                    size="normal"
                    id="email"
                    type="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                    required
                    value={email}
                    onChange={onChangeEmail}
                  />
                  <FormHelperText style={{ color: "red" }}>
                    {emailError}
                  </FormHelperText>

                  <TextField
                    fullWidth
                    margin="normal"
                    size="normal"
                    id="password"
                    type="password"
                    name="password"
                    label="Password"
                    variant="outlined"
                    required
                    value={password}
                    onChange={onChangePassword}
                  />
                  <FormHelperText style={{ color: "red" }}>
                    {passwordError}
                  </FormHelperText>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={onHandleSubmit}
                    className={buttonStyle.root}
                    style={{ margin: "10px" }}
                    type="submit"
                  >
                    Login
                  </Button>

                  <Button
                    className={buttonStyle.root}
                    style={{ margin: "10px" }}
                    variant="contained"
                    size="large"
                    onClick={onHandleReset}
                    type="submit"
                  >
                    Reset
                  </Button>

                  <Typography>
                    <a href="/ForgotPassword">Forgot Password? </a>
                  </Typography>
                </form>
              </Paper>
            </Grid>
          </Container>
        </Grow>
      </Layout>
    </div>
  );
}

export default Login;
