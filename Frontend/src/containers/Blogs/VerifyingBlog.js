/**
 * Author: jainesh Ketan Desai
 * Mail: Jainesh@dal.ca
 * The below code is responsible for the redirect the pages in which this code checks if the user is logged in and if only uer is logged in then it navigate to desired page or else it navigate to home page.
 */
import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Adminlayout/Layout";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export default function VerifyingBlog() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/validateBlog");
    } else {
      toast.error("Login needed for posting Blog", {
        position: "bottom-left",
      });
      navigate("/AdminHome");
    }
  }, []);

  return <></>;
}
