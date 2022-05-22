// @version 1.0 @author [Neelay Goswami](nl339853@dal.ca)

import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";
import {storage} from '../Product/firebase';
import "./CSS/Career.css";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Layout from '../../components/Layout/Layout';
import PageTitle from '../../components/PageTitle/PageTitle';
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";

// This is a User Portal Page
// This function is used for submitting Job Application to the website inventory

function JobApply() {
  // const navigate = useNavigate;
  const params = useParams();
  const api_url = '/careerlist/'+params.jobid;
  const api_urltwo = '/application';
  const[position,setPosition]= useState("");
  const [resume,setResume] = useState(null);
  const [resumelink,setResumeLink] = useState("");
  const store = getStorage();
  const [progress,setProgress] = useState();
 
  // State to store value of position chosen by user on career page 
  useEffect(() => {
    axios.get(api_url).then((res) => {
      console.log("data retrieved",res.data.Position);
      setPosition(res.data.Position);
    });
  },[]);

  const [appInfo, setappInfo] = useState({
    Position:"",
    Name: "",
    Email: "",
    ContactNo: "",
    Resume: "",
    Experience: "",
    Education: "",
  });


// function to store resume files name in the variable
  const handleResume= e =>
  {
    if(e.target.files[0]){
      console.log(e.target.files[0])
      setResume(e.target.files[0]);
    }
  };
  console.log("Resume",resume)

// function to upload resume of the application to firebase  
  const handleUpload = () =>
  {
    const storageRef = ref(store, 'resumes/' + resume.name);
    const uploadTask = uploadBytesResumable(storageRef, resume);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgress(progress)
        console.log('Upload is ' + progress + '% done');
      },
      error => {
        console.log(error);
      },
      () =>{
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
          console.log("File available at ",downloadURL);
          setResumeLink(downloadURL);
        });
      }
    );
  }

  // function to submit details of job application

  function submit(e) {
    e.preventDefault();
    axios
      .post(api_urltwo, {
        Position: position,
        Name: appInfo.Name,
        Email: appInfo.Email,
        ContactNo: appInfo.ContactNo,
        Resume: resumelink,
        Experience: appInfo.Experience,
        Education: appInfo.Education,
      })
      .then((res) => {
        console.log(res.data);
        alert("Application Done")
      });
  }
  // function to handle each field of the form 

  function handle(e) {
    const newdata = { ...appInfo };
    newdata[e.target.id] = e.target.value;
    setappInfo(newdata);
    console.log(newdata);
  }
 
  return (
    <div>
      <Layout>
      <PageTitle title="Job Application" />
      <br/>
      <a href="/viewcareer">
        <ReactBootStrap.Button
          variant="primary"
          id="Button"> Back to Careers Page
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
              Job Application Page
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom>
            <h5>  Enter the Details for the Position: {position} </h5>
            </Typography>
            <form onSubmit={(e) => submit(e)}>
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <TextField
                    onChange={(e) => handle(e)}
                    id="Name"
                    value={appInfo.Name}
                    placeholder="Enter Your Name"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    inputProps={{ maxlength: 20 }}
                    required
                    />
                     </Grid>
                   <br/><br/> <br/> 
                  <Grid item xs={12}>
                  <TextField
                    onChange={(e) => handle(e)}
                    id="Email"
                    value={appInfo.Email}
                    type="email"
                    placeholder="Enter your Email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    inputProps={{ maxlength: 20 }}
                    required
                  />
                  </Grid>
                  <br/><br/>
                  <Grid item xs={12}>
                    <TextField
                      onChange={(e) => handle(e)}
                      id="ContactNo"
                      value={appInfo.ContactNo}
                      type="number"
                      placeholder="Enter your Contact No"
                      label="ContactNo"
                      variant="outlined"
                      fullWidth
                      inputProps={{ max: 10000000000 }}
                      setCustomValidity="Enter a 10 digit number"
                      required
                    />
                  </Grid>
                  <br/>
                  <Grid item xs={12}>
                    <TextField
                      onChange={(e) => handleResume(e)}
                      id="Resume"
                      type="file"
                      variant="outlined"
                      fullWidth
                      required
                    />
                    <ReactBootStrap.Button id="Button" onClick={handleUpload}> Upload</ReactBootStrap.Button>
                    <h4>Resume Upload Status: {progress}%</h4>
                  </Grid>
                  <br/>
                  <Grid item xs={12}>
                    <TextField
                      onChange={(e) => handle(e)}
                      id="Experience"
                      inputProps={{ max: 30, min: 0 }}
                      value={appInfo.Experience}
                      type="number"
                      placeholder="Enter Your Experience in terms of years"
                      label="Experience"
                      variant="outlined"
                      fullWidth
                      
                      required
                    />
                  </Grid>
                  <br/>
                  <Grid item xs={12}>
                    <TextField
                      onChange={(e) => handle(e)}
                      id="Education"
                      value={appInfo.Education}
                      placeholder="Enter Your Highesh Education/Degree"
                      label="Education"
                      variant="outlined"
                      fullWidth
                      inputProps={{ maxlength: 20 }}
                      required
                    />
                  </Grid>
                  <br/>
                  
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      id="Button"
                      fullWidth>
                      Apply
                    </Button>
                  </Grid>
                </Grid>
            </form>
            <br/>
            
          </CardContent>
        </Card>
      </Grid>
      </Layout>
    </div>
  );
}

export default JobApply;
