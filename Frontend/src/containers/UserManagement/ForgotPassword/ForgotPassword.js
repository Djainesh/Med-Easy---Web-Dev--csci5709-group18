/**
 *
 * @version 1.0
 * @author [Aditya Busam] (aditya.busam@dal.ca/ jg469380@dal.ca)
 */

import { useState } from "react";
import React from "react";

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
import { useNavigate } from "react-router-dom";
import Layout from "../../../components/Layout/Layout";
import { makeStyles } from '@material-ui/core/styles';
import PageTitle from '../../../components/PageTitle/PageTitle';

const useStyles = makeStyles({
  root: {
    background: "#13878F !important",
    border: 0,
    color: 'white',
    height: 40,
    fontSize: 18,
    textTransform: 'none',
    fontWeight: 600,
    "&:hover": {
      background: "#11999E !important",
      color: "#fff !important"
    }
  },
});

function ForgotPassword() {
  const buttonStyle = useStyles();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  const [securityQuestion1, setSecurityQuestion1] = useState("");
  const [securityQuestion2, setSecurityQuestion2] = useState("");
  const [emailError, setEmailError] = useState("");
  const [newpasswordError, setNewPasswordError] = useState("");
  const [cnfPasswordError, setCnfPasswordError] = useState("");
  const [securityQuestion1Error, setSecurityQuestion1Error] = useState("");
  const [securityQuestion2Error, setSecurityQuestion2Error] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [forgotPasswordErr, setForgotPasswordErr] = useState("");

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
    setNewPassword(Password);
    setNewPasswordError(err);
  }

  function onChangeCnfPassword(event) {
    let CnfPassword = event.target.value;
    let err = "";
    if (CnfPassword !== newpassword) {
      err = "The passwords do not match";
      setIsValid(false);
    } else {
      setIsValid(true);
    }
    setCnfPassword(CnfPassword);
    setCnfPasswordError(err);
  }

  function onChangeSequrityQuestion1(event) {
    let SecurityQuestion1 = event.target.value;
    let err = "";
    if (!SecurityQuestion1.trim()) {
      err = "This field is mandatory and cannot be empty";
      setIsValid(false);
    } else {
      setIsValid(true);
    }
    setSecurityQuestion1(SecurityQuestion1);
    setSecurityQuestion1Error(err);
  }
  function onChangeSequrityQuestion2(event) {
    let SecurityQuestion2 = event.target.value;
    let err = "";
    if (!SecurityQuestion2.trim()) {
      err = "This field is mandatory and cannot be empty";
      setIsValid(false);
    } else {
      setIsValid(true);
    }
    setSecurityQuestion2(SecurityQuestion2);
    setSecurityQuestion2Error(err);
  }

  function onHandleSubmit(event) {
    console.log(event);
    event.preventDefault();
    if (isValid) {
      axios.post("/api/v1/forgotpassword",
        {
          email: email,
          securityQuestion1: securityQuestion1,
          securityQuestion2: securityQuestion2,
          password: newpassword
        })
        .then((res) => {
          console.log("response", res);
          if (res.data.success) {
            navigate("/Login");
          }
          else {
            setForgotPasswordErr(res.data.message)
          }
        })
    }
  }

  function onHandleReset(event) {
    event.preventDefault();
    setEmail("");
    setNewPassword("");
    setCnfPassword("");
    setSecurityQuestion1("");
    setSecurityQuestion2("");
  }


  return (
    <div >
      <Layout>
      <PageTitle title="Forgot Password" />
        <Grow in >
          <Container style={{ marginTop: 30, width: "97%" }}>
            <Grid item xs={6} md={12}>
              <Paper
                elevation={6}
                style={{ padding: "5%" }}
              >
                <form>
                  <Typography
                    variant="h5"
                    style={{ fontWeight: 600 }}
                  >
                    Forgot Password Page
                  </Typography>
                  <FormHelperText style={{ color: "red", fontWeight: "600" }}>
                    {forgotPasswordErr}
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
                    id="securityQuestion1"
                    type="text"
                    name="securityQuestion1"
                    label="Security Question 1: What is your Mother's maiden name?"
                    variant="outlined"
                    required
                    value={securityQuestion1}
                    onChange={onChangeSequrityQuestion1}
                  />
                  <FormHelperText style={{ color: "red" }}>
                    {securityQuestion1Error}
                  </FormHelperText>
                  <TextField
                    fullWidth
                    margin="normal"
                    size="normal"
                    id="securityQuestion2"
                    type="text"
                    name="securityQuestion2"
                    label="Security Question 2: What is your favorite sport?"
                    variant="outlined"
                    required
                    value={securityQuestion2}
                    onChange={onChangeSequrityQuestion2}
                  />
                  <FormHelperText style={{ color: "red" }}>
                    {securityQuestion2Error}
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
                    value={newpassword}
                    onChange={onChangePassword}
                  />
                  <FormHelperText style={{ color: "red" }}>
                    {newpasswordError}
                  </FormHelperText>
                  <TextField
                    fullWidth
                    margin="normal"
                    size="normal"
                    id="cnfPassword"
                    type="password"
                    name="cnfPassword"
                    label="Confirm Password"
                    variant="outlined"
                    required
                    value={cnfPassword}
                    onChange={onChangeCnfPassword}
                  />
                  <FormHelperText style={{ color: "red" }}>
                    {cnfPasswordError}
                  </FormHelperText>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={onHandleSubmit}
                    className={buttonStyle.root}
                    style={{margin: "10px" }}
                    type="submit"
                  >
                    Change Password
                  </Button>

                  <Button
                    className={buttonStyle.root}
                    style={{margin: "10px" }}
                    variant="contained"
                    size="large"
                    onClick={onHandleReset}
                    type="submit"
                  >
                    Reset
                  </Button>
                </form>
              </Paper>
            </Grid>
          </Container>
        </Grow>
      </Layout>
    </div>
  );
}

export default ForgotPassword;
