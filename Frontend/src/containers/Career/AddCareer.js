// @version 1.0 @author [Neelay Goswami](nl339853@dal.ca)

import React, { useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import "./CSS/Career.css";
import Layout from '../../components/Adminlayout/Layout';
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

// This is admin portal page
// This function is used for adding the Job Description 

function AddCareer() {
  let authToken = "";
  if(localStorage.getItem("token")!=='undefined'){
    authToken = localStorage.getItem("token");
  }

  const api_url = "/addcareer";

  // State to store initial valus of all the Job details
  const [jobInfo, setjobInfo] = useState({
    Position: "",
    Pay: "",
    Hours: "",
    Experience: "",
    Education: "",
    Description: "",
  });


  // function to submit details of Job 

  function submit(e) {
    e.preventDefault();
    axios
      .post(api_url, {
        Position: jobInfo.Position,
        Pay: jobInfo.Pay,
        Hours: jobInfo.Hours,
        Experience: jobInfo.Experience,
        Education: jobInfo.Education,
        Description: jobInfo.Description,
      })
      .then((res) => {
        // console.log(res.data);
        alert("Job Added")
      });
  }
  // function to handle each field of the form 
  function handle(e) {
    const newdata = { ...jobInfo };
    newdata[e.target.id] = e.target.value;
    setjobInfo(newdata);
    console.log(newdata);
  }
 
  return (
    <>
    {
     "token" in localStorage?
    <div>
      <Layout>
      <PageTitle title="Add Job Posting" />
      <br/>
      <a href="/career">
        <ReactBootStrap.Button
          variant="primary"
          id="Buttontwo"> Back to Admin Career Page
        </ReactBootStrap.Button>
        </a>
      <Grid>
        <Card
          style={{
            maxWidth: 600,
            padding: "20px 20px",
            margin: "3em auto auto  auto",
          }}>
         
          <CardContent>
            <Typography gutterBottom variant="h5">
              Add Job Posting Page
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom>
            <h5>  Enter the Details for Job Posting: </h5>
            </Typography>
            <form onSubmit={(e) => submit(e)}>
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <TextField
                    onChange={(e) => handle(e)}
                    id="Position"
                    value={jobInfo.Position}
                    placeholder="Enter Position Name"
                    label="Position"
                    variant="outlined"
                    fullWidth
                    inputProps={{maxlength: 18}}
                    required
                  />
                </Grid>
                <br/><br/> <br/> 
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) => handle(e)}
                    id="Pay"
                    value={jobInfo.Pay}
                    type="number"
                    placeholder="Enter Pay/hr"
                    label="Pay"
                    variant="outlined"
                    fullWidth
                    inputProps={{ max: 100, min: 15 }}
                    required
                  />
                  <br/><br/>
                  <Grid item xs={12}>
                    <TextField
                      onChange={(e) => handle(e)}
                      id="Hours"
                      value={jobInfo.Hours}
                      type="number"
                      placeholder="Enter Hours available for this Job"
                      label="Hours"
                      variant="outlined"
                      fullWidth
                      inputProps={{ max: 50, min: 10 }}
                      required
                    />
                  </Grid>
                  <br/>
                  <Grid item xs={12}>
                    <TextField
                      onChange={(e) => handle(e)}
                      id="Experience"
                      value={jobInfo.Experience}
                      type="number"
                      placeholder="Enter required Experience in years"
                      label="Experience"
                      variant="outlined"
                      fullWidth
                      inputProps={{ max: 30, min: 0 }}
                      required
                    />
                  </Grid>
                  <br/>
                  <Grid item xs={12}>
                    <TextField
                      onChange={(e) => handle(e)}
                      id="Education"
                      value={jobInfo.Education}
                      placeholder="Enter required Education"
                      label="Education"
                      variant="outlined"
                      fullWidth
                      inputProps={{ maxLength: 18 }}
                      required
                    />
                  </Grid>
                  <br/>
                  <Grid item xs={12}>
                    <TextField
                      onChange={(e) => handle(e)}
                      id="Description"
                      value={jobInfo.Description}
                      label="Enter Job Description"
                      multiline
                      rows={4}
                      placeholder="Enter Job Description Here"
                      variant="outlined"
                      fullWidth
                      inputProps={{ maxLength: 18 }}
                      required
                    />
                  </Grid>
                  <br/>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      id="Buttonthree"
                      fullWidth>
                      Add Job
                    </Button>
                  </Grid>
                </Grid>
                
              </Grid>
            </form>
            <br/>
            
          </CardContent>
        </Card>
      </Grid>
      </Layout>
    </div> : <Error />}
    </>
  );
}

export default AddCareer;
