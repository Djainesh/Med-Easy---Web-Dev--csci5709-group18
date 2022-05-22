// @version 1.0 @author [Neelay Goswami](nl339853@dal.ca)

import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import Layout from '../../components/Adminlayout/Layout';
import "./CSS/Career.css";
import Error from '../Error/Error';
import PageTitle from '../../components/PageTitle/PageTitle';
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";

// This is Admin Portal Page
// function to update Job details that are already added 
// here admin on clicking update button in Career.js page will be redirected to this
// page and then form will be prefilled with the job details and then admin can 
// any field they like to job
function UpdateCareer() {
  let authToken = "";
  if(localStorage.getItem("token")!=='undefined'){
    authToken = localStorage.getItem("token");
  }

  const [position,setPosition] = useState("")
  const [pay,setPay] = useState("")
  const [hours,setHours] = useState("")
  const [experience,setExperience] = useState("")
  const [education,setEducation] = useState("")
  const [description,setDescription] = useState("")

  const params = useParams();

  const api_url = '/careerlist/'+params.jobid;

// function to set all the variables with database values
  useEffect(() => {
    axios.get(api_url).then((res) => {
      // console.table("Result", JSON.stringify(res));
      setPosition(res.data.Position);
      setPay(res.data.Pay);
      setHours(res.data.Hours);
      setExperience(res.data.Experience);
      setEducation(res.data.Education);
      setDescription(res.data.Description);
    });
  },[]);

// Below are the set function to handle change of all the variables whose value is 
// is updated by admin 
  function handlePosition(e) {
    setPosition(e.target.value);
  }
  function handlePay(e)
  {
    setPay(e.target.value);
  }
  function handleHours(e)
  {
    setHours(e.target.value);
  }
    
  function handleExperience(e)
  {
    setExperience(e.target.value);
  }
    
  function handleEducation(e)
  {
    setEducation(e.target.value);
  }
    
  function handleDescription(e)
  {
    setDescription(e.target.value);
  }
  

  
  // function to handle the form submit
  function submit(e) {
    e.preventDefault();
    axios
      .patch(api_url, {
        Position: position,
        Pay: pay,
        Hours: hours,
        Experience: experience,
        Education: education,
        Description: description,
      })
      .then((res) => {
       alert("Job Details Updated");
    
      }); 
  }

  return (
    <>
    {
     "token" in localStorage?
    <div>
      <Layout>
      <PageTitle title="Update Job Posting" />
      <br/>
      <a href="/career">
        <ReactBootStrap.Button
          variant="primary"
          id="Buttontwo"> Back to Admin Career Page
        </ReactBootStrap.Button>
        </a>
      <div>
      <Grid>
        <Card
          style={{
            maxWidth: 600,
            padding: "20px 20px",
            margin: "3em auto auto  auto",
          }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Update Job Details Page
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
             <h5> Enter the Details you wish to Update for this Job: </h5>
            </Typography>
            <br/>
            <form onSubmit={(e) => submit(e)}>
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <TextField
                    onChange={(e) => handlePosition(e)}
                    id="Position"
                    value={position}
                    placeholder="Enter Position"
                    label="Position"
                    variant="outlined"
                    inputProps={{maxlength: 18}}
                    fullWidth
                    required
                  />
                </Grid>
                <br/> <br/> <br/>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) => handlePay(e)}
                    id="Pay"
                    value={pay}
                    type="number"
                    placeholder="Enter Pay"
                    label="Pay"
                    variant="outlined"
                    inputProps={{ max: 100, min: 15 }}
                    fullWidth
                    required
                  />
                  <br/> <br/>
                  <Grid item xs={12}>
                    <TextField
                      onChange={(e) => handleHours(e)}
                      id="Hours"
                      value={hours}
                      type="number"
                      placeholder="Enter Hours"
                      label="Hours"
                      variant="outlined"
                      inputProps={{ max: 50, min: 10 }}
                      fullWidth
                      required
                    />
                  </Grid>
                  <br/>
                  <Grid item xs={12}>
                    <TextField
                      onChange={(e) => handleExperience(e)}
                      id="Experience"
                      value={experience}
                      type="number"
                      placeholder="Enter Experience required in years"
                      label="Experience Required"
                      variant="outlined"
                      inputProps={{ max: 30, min: 0 }}
                      fullWidth
                      required
                    />
                  </Grid>
                  <br/>
                  <Grid item xs={12}>
                    <TextField
                      onChange={(e) => handleEducation(e)}
                      id="Education"
                      value={education}
                      placeholder="Enter Education Required"
                      label="Education"
                      variant="outlined"
                      inputProps={{ maxLength: 18 }}
                      fullWidth
                      required
                    />
                  </Grid>
                  <br/>
                  <Grid item xs={12}>
                    <TextField
                      onChange={(e) => handleDescription(e)}
                      id="Description"
                      value={description}
                      label="Job Description"
                      multiline
                      rows={4}
                      placeholder="Enter Job Description Here"
                      variant="outlined"
                      inputProps={{ maxLength: 18 }}
                      fullWidth
                      required
                    />
                  </Grid>
                  <br/>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      id="Buttonthree"
                      fullWidth>
                      Update Job Details
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
      </div>
      </Layout>
    </div>: <Error />}  
    </>
  );
}

export default UpdateCareer;
