/**
 *
 * @version 1.0
 * @author [Dhruv Soni](dh554152@dal.ca)(Banner ID:-B00867642)
 */
import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { Toast, ToastContainer } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { Button, IconButton } from "@material-ui/core";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import PageTitle from '../../components/PageTitle/PageTitle';
import { API } from "../../Constants/api";
import { GrCart } from "react-icons/gr";
import { IoWarningOutline } from "react-icons/io5";
import "./Cart.css";

import { CardActionArea } from "@material-ui/core";

function Cart(props) {
  //state for handling the toaster
  const [show, setShow] = useState(true);
  //state for handling the cart error messages
  const [cartError, setCartError] = useState("");
  let navigate = useNavigate();
  function routeChange() {
    navigate("/Checkout");
  }

  function handleButton(props) {
    localStorage.setItem("cartItems", JSON.stringify(cartState));
    return routeChange();
  }
  const getCartItems = (email) => {
    let token = localStorage.getItem("token");
    if(token !== null){
      fetch(`/api/v1/getCartItems/${email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setCartState(data);
          }
          setCartError(data.message);
        });
    }else{
      setCartError("Unauthorized");
    }
    
  };

  const removeFromCart = (medy) => {
    //api call for item removal from cart after clicking on delete icon

    let token = localStorage.getItem("token"); //getting user email stored in local storage
    const productID = medy.id;

    fetch(`/api/v1/removeCartItem/${productID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
      body: JSON.stringify({ medy }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log(data.CartItems);
          let email = data.CartItems.email;
          getCartItems(email);
        }
        setCartState({ ...cartState, success: false });
        setCartError(data.message);//Setting cart error message coming as response
      });
  };
  const updateCart = (item, type) => {

    //api call for increase quantity of item  in cart  after clicking on + icon
    let token = localStorage.getItem("token");
    if (type === "ADD") {
      const productID = item.id;
      fetch(`/api/v1/updateCartItems/${productID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
        body: JSON.stringify({ item }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            const email = data.cart.email;
            getCartItems(email);
          }
        });
    } else if (type === "SUB") {
      //api call for decrease  quantity of item  in cart  after clicking on - icon
      let token = localStorage.getItem("token");
      const productID = item.id;
      fetch(`/api/v1/decreaseCartItems/${productID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
        body: JSON.stringify({ item }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            const email = data.cart.email;

            getCartItems(email);
          }
        });
    }
  };
//setting cart state for displaying cart items
  const [cartState, setCartState] = useState([]);
  useEffect(() => {
    const email = localStorage.getItem("Email");
    getCartItems(email);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //check if cart state is true and if yes then displaying the cart items.  
  return cartState.success ? (
    <Layout>
      <PageTitle title="Shopping Cart" />
      <Grid sx={{ flexGrow: 1 }} style={{ marginBlockStart: "20px" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          {cartState.CartItems.map((medy) => {
            return (
              <Grid item xs={4} sm={4} md={2}>
                <Card variant="outlined" sx={{ maxWidth: 345,boxShadow: 5 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="250"
                      image={medy.ImageURL}
                      alt="green iguana"
                    />
                    <CardContent
                      style={{
                        backgroundColor: "#11999E",
                        color: "white",
                      }}
                    >
                      <Typography gutterBottom>Name:{medy.Name}</Typography>
                      <Typography gutterBottom>Brands:{medy.Brands}</Typography>
                      <Typography gutterBottom>Dose:{medy.Dose}</Typography>
                      <Typography gutterBottom>Price:${medy.Price}</Typography>

                      <CardActions>
                        <Button
                          size="small"
                          style={{
                            backgroundColor: "#1A374D",
                            color: "white",
                          }}
                          onClick={() => {
                            updateCart(medy, "ADD");
                          }}
                          align="center"
                        >
                          +
                        </Button>
                      </CardActions>
                      <Typography>
                        Quantity:
                        <h4 style={{ color: "red" }}>{medy.quantity}</h4>
                      </Typography>
                      <CardActions>
                        <Button
                          size="small"
                          style={{
                            backgroundColor: "#1A374D",
                            color: "white",
                          }}
                          disabled={medy.quantity === 1}
                          onClick={() => {
                            updateCart(medy, "SUB");
                          }}
                        >
                          -
                        </Button>

                        <IconButton
                          style={{
                            backgroundColor: "goldenrod",
                            color: "white",
                            justifyContent: "end",
                          }}
                          aria-label="delete"
                        >
                          <DeleteIcon
                            onClick={() => {
                              removeFromCart(medy);
                            }}
                          />
                        </IconButton>
                      </CardActions>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <div className="centerButton">
        <Button
          style={{ color: "white", backgroundColor: "#11999E" }}
          size="small"
          variant="contained"
          onClick={() => {
            handleButton(cartState);
          }}
          endIcon={<SendIcon />}
        >
          Proceed to Checkout
        </Button>
      </div>
    </Layout>
  ) : (
    //toaster if cart is empty that will display cart error message coming as response.
    <Layout>
      <ToastContainer position="middle-center">
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
              <IoWarningOutline /> {cartError}
            </Typography>
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </Layout>
  );
}

export default Cart;
