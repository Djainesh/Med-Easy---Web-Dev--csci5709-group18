/**
 *
 * @version 1.0
 * @author [Aditya Busam] (aditya.busam@dal.ca/ jg469380@dal.ca)
 */

import { useState, useEffect } from "react";
import {
    Typography,
    Container,
    Grow,
    Grid,
    FormHelperText,
} from "@mui/material";
import { Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import Box from '@mui/material/Box';
import Layout from "../../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import PageTitle from '../../components/PageTitle/PageTitle';

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
  

function Profile() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [newpassword, setNewPassword] = useState("");
    const [cnfPassword, setCnfPassword] = useState("");
    const [securityQuestion1, setSecurityQuestion1] = useState("");
    const [securityQuestion2, setSecurityQuestion2] = useState("");
    const [newpasswordError, setNewPasswordError] = useState("");
    const [cnfPasswordError, setCnfPasswordError] = useState("");
    const [securityQuestion1Error, setSecurityQuestion1Error] = useState("");
    const [securityQuestion2Error, setSecurityQuestion2Error] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [changePasswordErr, setChangePasswordErr] = useState("");
    const [open, setOpen] = useState(false);
    const buttonStyle = useStyles();
    let token = "";
    useEffect(() => {
        if (localStorage.getItem("Email")) {
            let email = localStorage.getItem("Email");
            if (localStorage.getItem("token")) {
                token = localStorage.getItem("token");
            }
            if (email) {
                axios.get("/api/v1/getuserdetails/" + email, { headers: { "token": token } }).then(
                    (response) => {
                        console.log(response)
                        if (response.data.success) {
                            setFirstName(response.data.userDetails[0].firstName);
                            setLastName(response.data.userDetails[0].lastName);
                            setEmail(response.data.userDetails[0].email);
                            setPhoneNumber(response.data.userDetails[0].phoneNumber);
                            setAddress(response.data.userDetails[0].address);
                        }

                    });
            }
        }
        //eslint-disable-next-line
    }, []);


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
        if (localStorage.getItem("token")) {
            token = localStorage.getItem("token");
        }
        if (isValid) {
            axios.post("/api/v1/changepassword",
                {
                    email: localStorage.getItem('Email'),
                    securityQuestion1: securityQuestion1,
                    securityQuestion2: securityQuestion2,
                    password: newpassword
                }, { headers: { "token": token } })
                .then((res) => {
                    console.log("response", res);
                    if (res.data.success) {
                        setOpen(true);
                        setNewPassword("");
                        setCnfPassword("");
                        setSecurityQuestion1("");
                        setSecurityQuestion2("");
                        navigate("/Profile");
                    }
                    else {
                        setChangePasswordErr(res.data.message)
                    }
                })
        }
    }

    function onHandleReset(event) {
        event.preventDefault();
        setNewPassword("");
        setCnfPassword("");
        setSecurityQuestion1("");
        setSecurityQuestion2("");
    }
    
    function onHandleClose() {
        setOpen(false);
        navigate("/Profile");
        setNewPassword("");
        setCnfPassword("");
        setSecurityQuestion1("");
        setSecurityQuestion2("");
        
      }

    return (
        <div>
            <Layout>
            <PageTitle title="Profile Page" />
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
                                        Profile Page
                                    </Typography>
                                    <Box  style={{ paddingTop: "3%", justifyContent: 'space-between' }}>
                                        <Box component="div"  sx={{  mx: 'auto',display: 'inline', fontSize: "19px"}}><b>Email</b></Box>
                                        <Box component="div" sx={{ mx: 'auto',display: 'inline', width: "fit-content", p:15.25, textOverflow: 'ellipsis' ,fontSize: "19px" }}>{email}</Box>
                                    </Box>
                                    <Box>
                                        <Box component="div" sx={{ dmx: 'auto',display: 'inline',fontSize: "19px"}}><b>First Name</b></Box>
                                        <Box component="div" sx={{ mx: 'auto',display: 'inline', p:9.25, textOverflow: 'ellipsis',fontSize: "19px"}}>{firstName}</Box>
                                    </Box>
                                    <Box  style={{justifyContent: 'space-between' }}>
                                        <Box component="div"  sx={{  mx: 'auto',display: 'inline', fontSize: "19px"}}><b>Last Name</b></Box>
                                        <Box component="div" sx={{ mx: 'auto',display: 'inline', width: "fit-content", p:9.5, textOverflow: 'ellipsis' ,fontSize: "19px" }}>{lastName}</Box>
                                    </Box>
                                    <Box>
                                        <Box component="div" sx={{ dmx: 'auto',display: 'inline',fontSize: "19px"}}><b>Phone Number</b></Box>
                                        <Box component="div" sx={{ mx: 'auto',display: 'inline', p:4.25, textOverflow: 'ellipsis',fontSize: "19px"}}>{phoneNumber}</Box>
                                    </Box>
                                    <Box  style={{ justifyContent: 'space-between' }}>
                                        <Box component="div"  sx={{  mx: 'auto',display: 'inline', fontSize: "19px"}}><b>Address</b></Box>
                                        <Box component="div" sx={{ mx: 'auto',display: 'inline', width: "fit-content", p:12, textOverflow: 'ellipsis' ,fontSize: "19px" }}>{address.replaceAll('\n', ' ')}</Box>
                                    </Box>
                                    
                            
                                </form>
                                <Typography
                                    variant="h6"
                                    style={{ marginTop: "3%", fontWeight: 400 }}
                                >
                                    Change Password
                                </Typography>
                                <FormHelperText style={{ color: "red", fontWeight: "600" }}>
                                    {changePasswordErr}
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
                                    type="submit"
                                    sx={{mr: 2}}
                                >
                                    Change Password
                                </Button>

                                <Button
                                    className={buttonStyle.root}
                                    variant="contained"
                                    size="large"
                                    onClick={onHandleReset}
                                    type="submit"
                                >
                                    Reset
                                </Button>
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
              Password Updated Successfully!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={onHandleClose} autoFocus>
              okay
            </Button>
          </DialogActions>
        </Dialog>
            </Layout>
        </div>
    );

}

export default Profile;