// @version 1.0 @author [Neelay Goswami](nl339853@dal.ca)

import * as ReactBootStrap from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CSS/Career.css";
import Layout from '../../components/Adminlayout/Layout';
import Error from '../Error/Error';
import PageTitle from '../../components/PageTitle/PageTitle';
// This is Admin Portal Page
// Function to Display all the application done by various website visitor
// on the Job posting posted by admin on Medeasy
function ViewApplication() {
  let authToken = "";
  if(localStorage.getItem("token")!=='undefined'){
    authToken = localStorage.getItem("token");
  }

  let navigate = useNavigate();
  const [jobInfo, setjobInfo] = useState([]);
  const api_url = '/joblist/';

// useEffect function to get all the job applications from the database
  useEffect(() => {
    axios.get(api_url).then((res) => {
      setjobInfo(res.data);
    });
  },[]);

  return (
    <>
    {
     "token" in localStorage?
      <div className="Items">
        <Layout>
        <PageTitle title="View Job Applications" />
        <br />
        <ReactBootStrap.Button
          variant="primary"
          onClick={() => {
            navigate("/career");
          }}
        id="Buttontwo">
          Back to Careers Page
        </ReactBootStrap.Button>
        <br/>
        {jobInfo.map((job) => {
          return (
            <div class="body">
             
              <ReactBootStrap.Card style={{ width: "18rem",fill:"Highlight" }} key={job._id} >
                <ReactBootStrap.Card.Body>
                  <ReactBootStrap.Card.Title>
                  <h5>Position: {job.Position}</h5>
                  </ReactBootStrap.Card.Title>
                  <ReactBootStrap.Card.Text>
                  <p>Name of Applicant: {job.Name}</p>  
                  </ReactBootStrap.Card.Text>
                  <ReactBootStrap.Card.Text>
                  <p>Applicant Email: {job.Email}</p>  
                  </ReactBootStrap.Card.Text>
                  <ReactBootStrap.Card.Text>
                  <p>Applicant Contact: {job.ContactNo}</p>  
                  </ReactBootStrap.Card.Text>
                  <ReactBootStrap.Card.Text>
                  <p>Applicant Experience: {job.Experience}</p>
                  </ReactBootStrap.Card.Text>
                  <ReactBootStrap.Card.Text>
                  <p>Education: {job.Education}</p> 
                  </ReactBootStrap.Card.Text>
                  <ReactBootStrap.Card.Text>
                  <p>Download Application Resume:</p> 
                  </ReactBootStrap.Card.Text>
                    <a href= {job.Resume} target='_blank' rel='noopener noreferrer'>
                    <ReactBootStrap.Button
                    id="Button"
                    variant="primary">
                    Download Resume
                    </ReactBootStrap.Button>
                    </a>
                  <br />
                </ReactBootStrap.Card.Body>
              </ReactBootStrap.Card>
            </div>
          );
        })}
        </Layout>
      </div> : <Error />}
      
    </>
  );
}

export default ViewApplication;
