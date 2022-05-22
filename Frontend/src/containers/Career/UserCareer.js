// @version 1.0 @author [Neelay Goswami](nl339853@dal.ca)

import * as ReactBootStrap from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CSS/Career.css";
import Layout from '../../components/Layout/Layout';
import PageTitle from '../../components/PageTitle/PageTitle';
// This is User Portal Page
// Function to Show User all the posted Job on the Career Page of the Website
// And also allow the user to apply for any position available

function UserCareer() {
  let navigate = useNavigate();
  const [jobInfo, setjobInfo] = useState([]);
  const api_url = '/careerlist/';
  
// function to redirect to Job Application Page
  const handleClick = (job) => {
    navigate(`/viewcareer/${job}`);
  };


// useEffect function to get all the job posting from the database
  useEffect(() => {
    axios.get(api_url).then((res) => {
      setjobInfo(res.data);
    });
  },[]);

  return (
    <>
      <div className="Items">
        <Layout>
        <PageTitle title="View Job Posting" />
        <br />
        {jobInfo.map((job) => {
          return (
            <div class="body">
             
              <ReactBootStrap.Card style={{ width: "18rem",fill:"Highlight" }} key={job._id} >
                <ReactBootStrap.Card.Body>
                  <ReactBootStrap.Card.Title>
                  <h5>Position: {job.Position}</h5>
                  </ReactBootStrap.Card.Title>
                  <ReactBootStrap.Card.Text>
                  <p>Pay: {job.Pay}</p>  
                  </ReactBootStrap.Card.Text>
                  <ReactBootStrap.Card.Text>
                  <p>Hours: {job.Hours}</p>  
                  </ReactBootStrap.Card.Text>
                  <ReactBootStrap.Card.Text>
                  <p>Experience: {job.Experience}</p>  
                  </ReactBootStrap.Card.Text>
                  <ReactBootStrap.Card.Text>
                  <p>Education: {job.Education}</p>
                  </ReactBootStrap.Card.Text>
                  <ReactBootStrap.Card.Text>
                  <p>Description: {job.Description}</p> 
                  </ReactBootStrap.Card.Text>
                  <ReactBootStrap.Button
                    id="Button"
                    variant="primary"
                    onClick={() => handleClick(job._id)}>
                    Apply 
                  </ReactBootStrap.Button>
                  <br />
                </ReactBootStrap.Card.Body>
              </ReactBootStrap.Card>
            </div>
          );
        })}
        </Layout>
      </div>
      
    </>
  );
}

export default UserCareer;
