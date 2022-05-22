// @version 1.0 @author [Neelay Goswami](nl339853@dal.ca)

import * as ReactBootStrap from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CSS/Career.css";
import Layout from '../../components/Adminlayout/Layout';
import Error from '../Error/Error';
import PageTitle from '../../components/PageTitle/PageTitle';
// This is a admin portal page
// Function to Display all the past added job posting by admin in the Admin portal
// This page has Add, Update and Delete Job posting button in the Page

function Career() {
  let authToken = "";
  if(localStorage.getItem("token")!=='undefined'){
    authToken = localStorage.getItem("token");
  }

  let navigate = useNavigate();
  const [jobInfo, setjobInfo] = useState([]);
  // const [productDelete, setproductDelete] = useState([]);
  const api_url = '/careerlist/';
  
// function to redirect to Update Job Details page
  const handleClick = (job) => {
    // const temp = JSON.stringify(product);
    // console.log("Product id on items page", product);
    navigate(`/career/${job}`);
  };

// function to handle delete request on button click
  const HandleDelete = (jobdelete) => {
    // const temp = JSON.stringify(product);
    // console.log("Product id on items page", product);
    axios.delete(api_url+jobdelete).then((res) => {
      // console.table("Result", JSON.stringify(res));
      axios.get(api_url).then((res)=>{
        alert("Job Deleted ",jobdelete.Name)
        setjobInfo(res.data)
      })
    });    
  };

// useEffect function to get all the product details from the database
  useEffect(() => {
    axios.get(api_url).then((res) => {
      // console.table("Result", JSON.stringify(res));
      setjobInfo(res.data);
    });
  },[]);

  return (
    <>
    {
     "token" in localStorage?
      <div className="Items">
        {/* <header></header> */}
        {/* <Navbar></Navbar> */}
        <Layout>
        <PageTitle title="Admin Job Posting" />
        <br />
        <ReactBootStrap.Button
          variant="primary"
          onClick={() => {
            navigate("/addcareer");
          }}
        id="Buttontwo">
          Add Job Posting 
        </ReactBootStrap.Button>
        
        <ReactBootStrap.Button
          variant="primary"
          onClick={() => {
            navigate("/viewapp");
          }}
        id="Buttontwo">
          View Job Applications
        </ReactBootStrap.Button>
        <br/>
        {jobInfo.map((job) => {
          return (
            <div class="body">
             
              <ReactBootStrap.Card style={{ width: "18rem",fill:"Highlight" }} key={job._id} >
                {/* <ReactBootStrap.Card.Img variant="top" src={product.ImageURL}  class="responsive"/> */}
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
                    Update Job Post
                  </ReactBootStrap.Button>
                  
                  <br />
                  <ReactBootStrap.Button id="Button" variant="primary" onClick={() => HandleDelete(job._id)}>
                    Delete  Job  
                  </ReactBootStrap.Button>
                </ReactBootStrap.Card.Body>
              </ReactBootStrap.Card>

            </div>
          );
        })}
        </Layout>
      </div>: <Error />}
      
    </>
  );
}

export default Career;
