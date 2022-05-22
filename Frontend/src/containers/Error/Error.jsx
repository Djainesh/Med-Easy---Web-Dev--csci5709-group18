import React from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import GppBadSharpIcon from '@mui/icons-material/GppBadSharp';
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    background: "#13878F !important",
    border: 0,
    color: 'white',
    height: 40,
    fontSize: 18,
    width: "100%",
    textTransform: 'none',
    fontWeight: 600,
    "&:hover": {
      background: "#11999E !important",
      color: "#fff"
    }
  },
});

const Error = () => {
  let navigate = useNavigate();
  function routeChange() {
    navigate("/Login");
  }
  const classes = useStyles();
  return (
    <Container component="main" >
      <Box
        sx={{
          mt: 30,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "red" }}>
          <GppBadSharpIcon />
        </Avatar>
        <Typography component="h1" variant="h4">
          oops! you've landed on the wrong page (error 404)
        </Typography>
        <Typography sx={{ mt: 2 }} component="h1" variant="h5">
          you need to login to access this page
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button variant="contained"
            className={classes.root} onClick={routeChange}>Login</Button>
        </Box>

      </Box>
    </Container>
  );
};

export default Error;
