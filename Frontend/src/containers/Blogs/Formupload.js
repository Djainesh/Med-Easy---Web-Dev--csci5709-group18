/***
 * Author:Jainesh Ketan Desai [B00885171]
 * Mail:Jainesh@dal.ca
 * This is file is responsible for the getting the data for the feature Blog in which user can post the blog from the user end.
 */
import React from "react";
import { Typography } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import axios from "axios";
import "./Css/Form.css";
import Layout from "../../components/Layout/Layout";
import { toast } from "react-toastify";
import PageTitle from '../../components/PageTitle/PageTitle';

function FormUpload() {
  const [personName, setpersonName] = React.useState("");
  const [textArea, settextArea] = React.useState("");
  const [Errvalue, setErrvalue] = React.useState(false);
  const [Errrtext, setErrrtext] = React.useState(false);
/**
 * 
 * Done validation for edge cases like if uesr not logged in the application and other validation like giving both rating and review is compulsory and either giving rating or review is not allowed both field are complusory for the user to enter.
 */

  const handleChange = (event) => {
    setpersonName(event.target.value);
  };

  const handlTextArea = (event) => {
    settextArea(event.target.value);
  };
  const handlesubmit = (e) => {
    let token = localStorage.getItem("token");
    e.preventDefault();
    if (personName === "" || personName === "null" || personName === " ") {
      setErrvalue(true);
    } else {
      setErrvalue(false);
    }
    if (textArea === "") {
      setErrrtext(true);
    } else {
      console.log("LLLLLL");
      if (localStorage.getItem("token")) {
        token = localStorage.getItem("token");

        axios
          .post(
            "/postfromuser",
            {
              Topic: personName,
              Content: textArea,
              Status: "0",
            },
            {
              headers: {
                token: token,
              },
            }
          )
          .then((res) => {
            console.log("Data inserted");
            window.location.reload();
            console.log("data", res);
            toast.success("Succesful posted blog will be posted soon", {
              position: "bottom-left",
            });
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        toast.error("Login needed for posting Blog", {
          position: "bottom-left",
        });

    
      }

     
    }
  };

  return (
    <Layout>
      <PageTitle title="Post Blog" />
      <div class="ketan">
        <form class="row g-3">
          <div class="form-group">
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Topic</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={personName}
                  label="Topic"
                  onChange={handleChange}
                  required
                >
                  <MenuItem value={"Medicine"}>Medicine</MenuItem>
                  <MenuItem value={"Cancer"}>Cancer</MenuItem>
                  <MenuItem value={"Skincare"}>Skincare</MenuItem>
                  <MenuItem value={"Diabetes"}>Diabetes</MenuItem>
                  <MenuItem value={"Tuberculosis"}>tuberculosis</MenuItem>
                </Select>
              </FormControl>
            </Box>
            {Errvalue ? <span> Please select from the dropdown</span> : ""}
          </div>
          <br />
          <br />
          <div class="form-group">
            <div className="content">
              <label for="exampleFormControlTextarea1">Content</label>
            </div>
            <br></br>

            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="8"
              value={textArea}
              onChange={handlTextArea}
            ></textarea>
            {Errrtext ? <span>Please fill review</span> : ""}
          </div>
          <div class="col-12">
            <button
              class="buttonforupload"
              type="submit"
              onClick={handlesubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <br />
      <br />
    </Layout>
  );
}

export default FormUpload;
