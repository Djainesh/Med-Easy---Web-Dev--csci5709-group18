/**
 *
 * @version 1.0
 * @author [Aditya Busam] (aditya.busam@dal.ca/ jg469380@dal.ca)
 */

import { useState, } from "react";
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
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import Layout from "../../../components/Layout/Layout";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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

function Registration() {

  const buttonStyle = useStyles();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  const [securityQuestion1, setSecurityQuestion1] = useState("");
  const [securityQuestion2, setSecurityQuestion2] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [cnfPasswordError, setCnfPasswordError] = useState("");
  const [securityQuestion1Error, setSecurityQuestion1Error] = useState("");
  const [securityQuestion2Error, setSecurityQuestion2Error] = useState("");
  const [userRole, setUserRole] = useState("");
  const [userRoleError, setUserRoleError] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isRegistrationErr, setIsRegistrationErr] = useState("");
  const [open, setOpen] = useState(false);

  function onChangeFirstName(event) {
    let firstname = event.target.value;
    let firstNameRegEx = /^([a-zA-Z]+)$/;
    let err = "";
    if (!firstname.trim()) {
      err = "This field is mandatory and cannot be empty";
      setIsValid(false);
    } else if (!firstNameRegEx.test(firstname)) {
      err = "Enter only letters";
      setIsValid(false);
    } else {
      setIsValid(true);
    }
    setFirstName(firstname);
    setFirstNameError(err);
  }

  function onChangeLastName(event) {
    let lastname = event.target.value;
    let lastNameRegEx = /^([a-zA-Z]+)$/;
    let err = "";
    if (!lastname.trim()) {
      err = "This field is mandatory and cannot be empty";
      setIsValid(false);
    } else if (!lastNameRegEx.test(lastname)) {
      err = "Enter only letters";
      setIsValid(false);
    } else {
      setIsValid(true);
    }
    setLastName(lastname);
    setLastNameError(err);
  }

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

  function onChangeAddress(event) {
    let Address = event.target.value;
    let err = "";
    if (!Address.trim()) {
      err = "This field is mandatory and cannot be empty";
      setIsValid(false);
    } else {
      setIsValid(true);
    }
    setAddress(Address);
    setAddressError(err);
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

  function onChangePhone(event) {
    let Phone = event.target.value;
    let phoneRegEx = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    let err = "";
    if (!Phone.trim()) {
      err = "This field is mandatory and cannot be empty";
      setIsValid(false);
    } else if (!phoneRegEx.test(Phone)) {
      err = "Enter a Valid Phone Number";
      setIsValid(false);
    } else {
      setIsValid(true);
    }
    setPhoneNumber(Phone);
    setPhoneNumberError(err);
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

  function onChangeCnfPassword(event) {
    let CnfPassword = event.target.value;
    let err = "";
    if (CnfPassword !== password) {
      err = "The passwords do not match";
      setIsValid(false);
    } else {
      setIsValid(true);
    }
    setCnfPassword(CnfPassword);
    setCnfPasswordError(err);
  }

  function onHandleSubmit(event) {
    console.log(event);
    event.preventDefault();
    if(!isValid){
      setIsRegistrationErr("All fields are Required");
    }
    console.log("role", userRole)
    if (isValid) {
      axios.get("/api/v1/verifyemail/" + email).then((result) => {
        console.log("verify email", result)
        if (result.data.success) {
          setEmailError("Email Already Exists. Please register with different email")
        }
        else {
          axios.post("/api/v1/register",
            {
              firstName: firstName,
              lastName: lastName,
              email: email,
              phoneNumber: phoneNumber,
              address: address,
              securityQuestion1: securityQuestion1,
              securityQuestion2: securityQuestion2,
              password: password,
              userRole: userRole
            })
            .then((res) => {
              console.log("response", res);
              if (res.data.success) {
                setOpen(true);
              }
              else {
                setIsRegistrationErr(res.message)
              }
            })
        }
      })

    }
  }

  function onChangeUserRole(event) {
    let userRole = event.target.value;
    let err = "";
    if (!userRole.trim()) {
      err = "This field is mandatory and cannot be empty";
      setIsValid(false);
    } else {
      setIsValid(true);
    }
    setUserRole(userRole);
    setUserRoleError(err);
  }

  function onHandleReset(event) {
    event.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
    setAddress("");
    setPhoneNumber("");
    setPassword("");
    setCnfPassword("");
    setSecurityQuestion1("");
    setSecurityQuestion2("");
    setUserRole("");
  }
  function onHandleClose() {
    setOpen(false);
    navigate("/Login");
    setFirstName("");
    setLastName("");
    setEmail("");
    setAddress("");
    setPhoneNumber("");
    setPassword("");
    setCnfPassword("");
    setSecurityQuestion1("");
    setSecurityQuestion2("");
  }

  return (
    <div >
      <Layout>
      <PageTitle title="User Registration" />
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
                    Registration Page
                  </Typography>
                  <FormHelperText style={{ color: "red", fontWeight: "600" }}>
                    {isRegistrationErr}
                  </FormHelperText>
                  <TextField
                    fullWidth
                    margin="normal"
                    size="normal"
                    id="firstName"
                    type="text"
                    name="firstName"
                    label="First Name"
                    variant="outlined"
                    required
                    value={firstName}
                    onChange={onChangeFirstName}
                  />
                  <FormHelperText style={{ color: "red" }}>
                    {firstNameError}
                  </FormHelperText>
                  <TextField
                    fullWidth
                    margin="normal"
                    size="normal"
                    id="lastName"
                    type="text"
                    name="lastName"
                    label="Last Name"
                    variant="outlined"
                    required
                    value={lastName}
                    onChange={onChangeLastName}
                  />
                  <FormHelperText style={{ color: "red" }}>
                    {lastNameError}
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
                    id="phoneNumber"
                    type="text"
                    name="phoneNumber"
                    label="Phone Number"
                    variant="outlined"
                    required
                    value={phoneNumber}
                    onChange={onChangePhone}
                  />
                  <FormHelperText style={{ color: "red" }}>
                    {phoneNumberError}
                  </FormHelperText>
                  <TextField
                    fullWidth
                    margin="normal"
                    size="normal"
                    id="Address"
                    type="text"
                    name="Address"
                    label="Address"
                    variant="outlined"
                    multiline
                    rows={5}
                    required
                    value={address}
                    onChange={onChangeAddress}
                  />
                  <FormHelperText style={{ color: "red" }}>
                    {addressError}
                  </FormHelperText>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={userRole}
                      label="Role"
                      onChange={onChangeUserRole}
                      required
                      placeholder="Please select a Role"
                    >
                      <MenuItem value={"Administrator"}>Administrator</MenuItem>
                      <MenuItem value={"Customer"}>Customer</MenuItem>
                    </Select>
                  </FormControl>
                  <FormHelperText style={{ color: "red" }}>
                    {userRoleError}
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
                    value={password}
                    onChange={onChangePassword}
                  />
                  <FormHelperText style={{ color: "red" }}>
                    {passwordError}
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
                    style={{ margin: "10px" }}
                    type="submit"
                  >
                    Register
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
                </form>
              </Paper>
            </Grid>
          </Container>
        </Grow>
        <Dialog
          open={open}
          onClose={onHandleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogTitle id="alert-dialog-title" style={{ textAlign: "center" }}>
              Success!
            </DialogTitle>
            <DialogContentText id="alert-dialog-description">
              Account Successfully created with MedEasy! 
              Click okay to <b>Login</b>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={onHandleClose} variant="contained" autoFocus>
              okay
            </Button>
          </DialogActions>
        </Dialog>
      </Layout>
      <p></p>
    </div>
  );
}

export default Registration;
