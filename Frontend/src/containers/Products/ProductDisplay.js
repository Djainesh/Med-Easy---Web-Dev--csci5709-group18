/**
 *
 * @version 1.0
 * @author [Dhruv Soni](dh554152@dal.ca)(Banner ID:- B00867642)[Jainesh Desai]
 */
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { Button, Toast, ToastContainer } from "react-bootstrap";
import "./css/ProductDisplay.css";
import PageTitle from '../../components/PageTitle/PageTitle';
import { GrCart } from "react-icons/gr";

import {
  Container,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
  CardMedia,
  CardActions,
} from "@material-ui/core";

import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import axios from "axios";
import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";

import Avatar from "@mui/material/Avatar";

import Divider from "@mui/material/Divider";
import Root from "@mui/material/Divider";
import { API } from "../../Constants/api";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 400,
  color: theme.palette.text.primary,
}));
// no change
//function for displaying product with particulat ID
const Products = (props) => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState(""); //State for handling error message
  const [productError, setProductError] = useState(""); //state for handling product error message.

  const params = useParams(); //params will be use for getting product ID
  const [value, setValue] = React.useState(0);
  const [text, setText] = React.useState("");
  const [Errvalue, setErrvalue] = React.useState(false);
  const [Errrtext, setErrrtext] = React.useState(false);
  const [med, setMed] = useState([]);
  useEffect(() => {
    //api to fetch the particular product detail
    fetch(`/api/v1/Products/${params.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((medicines) => {
        if (medicines.success) {
          setMed(medicines);
        } else {
          setProductError(medicines.message);
        }
      });
  }, []);

  //This function handles the adding particular medicine to the cart
  const enterIntoCart = (medy) => {
    let token = localStorage.getItem("token");
    console.log("token====", token);
    if (token === null) {
      setProductError(...productError, "You need to Login/SignUP First");
      setMed({ ...med, success: false });
    } else {
      let email = localStorage.getItem("Email");
      fetch(`/api/v1/AddtoCart`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          token: token,
        },

        body: JSON.stringify({
          email: email,
          productID: medy._id,
          Name: medy.Name,
          Dose: medy.Dose,
          Price: medy.Price,
          Image: medy.ImageURL,
          Brands: medy.Brands,
        }),
      })
        .then((res) => res.json())
        .then((item) => {
          console.log("item=====", item);
          if (item.success) {
            setMessage(item.message);
          } else {
            setProductError(item.message);
          }
        });
    }
  };

  const handlechange = (event) => {
    setText(event.target.value);
  };
/**
 * 
 * the below handle submit is used of validation and posting review and rating from the user to backend.
 */
  const handlesubmit = (e) => {
    let token = localStorage.getItem("token");
    e.preventDefault();
    if (value === 0) {
      // alert("Error")
      setErrvalue(true);
    } else {
      setErrvalue(false);
    }
    if (text === "") {
      setErrrtext(true);
    } else {
      console.log("LLLLLL");
      if (localStorage.getItem("token")) {
        token = localStorage.getItem("token");

        axios
          .post(
            "/postratingandreview",
            {
              rating: value,
              review: text,
              productID: med.medicineRecord._id,
            },
            {
              headers: {
                token: token,
              },
            }
          )
          .then((res) => {
            console.log(res.status);
            console.log("Data inserted");
            window.location.reload();
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        toast.error("Login needed for giving rating", {
          position: "bottom-left",
        });

       
      }
    }
  };

  const [response, setResponse] = useState([]);
/**
 * the below useEffect is used for displaying rating and review 
 */
  useEffect(() => {
    let api = `/reviewandrating/${params.id}`;

    axios
      .get(api)
      .then((res) => {
        console.log(res);

        setResponse(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return med.success ? (
    <div>
      <Layout>
      <PageTitle title="Products Display" />
        <Container style={{ marginBlockStart: "20px", display: "flex" }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ maxWidth: 345, boxShadow: 5 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="350"
                    image={med.medicineRecord.ImageURL}
                    alt="green iguana"
                  />
                  <CardContent
                    style={{ backgroundColor: "#11999E", color: "white" }}
                  >
                    <Typography
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Name: {med.medicineRecord.Name}
                    </Typography>
                    <Typography
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Brand: {med.medicineRecord.Brands}
                    </Typography>
                    <Typography
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Dose: {med.medicineRecord.Dose}
                    </Typography>
                    <Typography
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Price: ${med.medicineRecord.Price}
                    </Typography>
                    <Typography
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      ProductType: {med.medicineRecord.ProductType}
                    </Typography>
                    <Typography
                      style={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                      Product Description:{" "}
                      {med.medicineRecord.ProductDescription}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      style={{ backgroundColor: "#1A374D", color: "white" }}
                      size="small"
                      variant="contained"
                      onClick={() => {
                        enterIntoCart(med.medicineRecord);
                        setShow(true);
                      }}
                    >
                      AddtoCart
                    </Button>
                  </CardActions>
                  <div class="rating">
                    <form class="row g-3" type="submit">
                      <div class="form-group">
                        <Box
                          sx={{
                            "& > legend": { mt: 2 },
                          }}
                        >
                          <Typography component="legend">Rating</Typography>
                          <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                          />
                        </Box>
                      </div>
                      {Errvalue ? <span> Not Valid rating</span> : ""}
                      <div class="form-group">
                        <Typography component="legend">Review</Typography>
                        <br></br>
                        <br></br>
                        <textarea
                          class="form-control"
                          placeholder="Leave a review here"
                          id="floatingTextarea"
                          value={text}
                          onChange={handlechange}
                        ></textarea>
                      </div>
                      {Errrtext ? <span> Not Valid review</span> : ""}

                      <div>
                        <Button
                          style={{ backgroundColor: "#1A374D", color: "white" }}
                          size="small"
                          variant="contained"
                          onClick={handlesubmit}
                        >
                          Submit
                        </Button>
                      </div>
                    </form>
                  </div>
                  <div className="ratingandreviewboxforcomment">
                    <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
                      {response.map((user) => {
                        return (
                          <StyledPaper
                            sx={{
                              my: 1,
                              mx: "auto",
                              p: 2,
                            }}
                          >
                            <Typography component="legend" align="center">
                              Review{" "}
                            </Typography>
                            <Grid container wrap="nowrap" spacing={2}>
                              <Grid item xs>
                                <Typography align="left">
                                  {user.review}
                                </Typography>
                              </Grid>
                            </Grid>
                            <br></br>
                            <Box
                              sx={{
                                "& > legend": { mt: 2 },
                              }}
                            >
                              <Root>
                                <Divider>
                                  <Typography component="legend" align="left">
                                    Rating
                                  </Typography>
                                </Divider>
                              </Root>
                              <br></br>

                              <Rating
                                align="center"
                                name="simple-controlled"
                                value={user.rating}
                                readOnly
                              />
                            </Box>
                            <br></br>
                          </StyledPaper>
                        );
                      })}
                    </Box>
                  </div>
                </CardActionArea>
              </Card>
            </Grid>
            {message && (
              <ToastContainer position="middle-end">
                <Toast
                  onClose={() => {
                    setShow(false);
                  }}
                  show={show}
                  delay={10000}
                  bg="warning"
                  animation
                  style={{ color: "black" }}
                  autohide
                >
                  <Toast.Header>
                    <GrCart style={{ color: "red" }} />
                  </Toast.Header>
                  <Toast.Body>
                    <Typography gutterBottom variant="h5" component="div">
                      {message}
                    </Typography>
                  </Toast.Body>
                </Toast>
              </ToastContainer>
            )}
          </Grid>
        </Container>
      </Layout>
    </div>
  ) : (
    <Layout>
      <ToastContainer position="middle-center">
        <Toast
          onClose={() => {
            setShow(false);
          }}
          show={show}
          delay={10000}
          bg="danger"
          animation
          style={{ color: "black" }}
          autohide
        >
          <Toast.Header>
            {<Link to="/Register">Go to SignUp</Link>}
          </Toast.Header>
          <Toast.Body>
            <Typography gutterBottom variant="h5" component="div">
              {productError}
            </Typography>
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </Layout>
  );
};

export default Products;
