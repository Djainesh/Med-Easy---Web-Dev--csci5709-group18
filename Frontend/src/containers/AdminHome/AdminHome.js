// @version 1.0 @author [Neelay Goswami](nl339853@dal.ca)

import React from "react";
import Layout from "../../components/Adminlayout/Layout.jsx";
import Carousel from 'react-bootstrap/Carousel';
import "./AdminHome.css";
import Error from '../Error/Error';
import PageTitle from '../../components/PageTitle/PageTitle';
export default function Checkout(props) {
  let authToken = "";
  if(localStorage.getItem("token")!=='undefined'){
    authToken = localStorage.getItem("token");
}

  return (
    <>
      {
       "token" in localStorage?
       <Layout>
         <PageTitle title="Admin Home" />
      <div className="container imagemod">
        <h2>Welcome to Admin Home Page of Med Easy!</h2>
        <br/>
        <Carousel variant="dark">
          <Carousel.Item interval={1000} >
            <img
              className="d-block w-100" id="siz"
              src="https://images.theconversation.com/files/256057/original/file-20190129-108364-17hlc1x.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
              alt="Med Products"
            />
            <Carousel.Caption id="body">
              <h3>Med Easy Products</h3>
              <p>All types of Med Products are Available Here</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500} >
            <img
              className="d-block w-100" id="siz"
              src="https://firebasestorage.googleapis.com/v0/b/medeasyproduct.appspot.com/o/images%2FCareer-Planning-and-Development.png?alt=media&token=285b9aa0-5b46-42e7-81db-afd1d101d042"
              alt="Med Easy Career"
            />
             <Carousel.Caption id="body">
              <h3>Med Easy Careers</h3>
              <p>Add Job Postings</p> 
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item >
            <img
              className="d-block w-100" id="siz"
              src="https://firebasestorage.googleapis.com/v0/b/medeasyproduct.appspot.com/o/images%2Fblog%20(1).jpg?alt=media&token=f9ba9c6c-823a-424e-a3f0-0830e70d1a47"
              alt="Med Easy Blogs"
            />
            <Carousel.Caption id="body">
              <h3>Med Easy Blogs</h3>
              <p>Post Med related Blogs</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div></Layout>: <Error />}
    </>
  );
}
