/**
 *
 * @version 1.0
 * @author [Chandan Shukla](chandan.shukla@dal.ca)
 */


import React, {useState,useEffect} from 'react';
import Layout from '../../components/Layout/Layout';
import {useNavigate} from "react-router-dom";
import * as uuid from "uuid";
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PageTitle from '../../components/PageTitle/PageTitle';
import Button from '@material-ui/core/Button';
import { teal } from '@mui/material/colors';
import { makeStyles } from '@material-ui/core/styles';
import Cart from '../Cart/Cart';
import './CSS/OrderPlaced.css';
import {toast} from "react-toastify";
import Error from "../Error/Error";
const useStyles = makeStyles({
root: {
    background: "#13878F",
    border: 0,
    color: 'white',
    height: 40,
    fontSize: 18,
    textTransform: 'none',
    fontWeight: 600,
    "&:hover": {
    background: "#11999E",
    color: "#fff"
    }
},
});
let authToken = "";
    if(localStorage.getItem("token")!=='undefined'){
        authToken = localStorage.getItem("token");
    }



function OrderPlaced(){


    let navigate = useNavigate(); 
    function routeChange(){ 
        navigate("/OrderDetails");
        
    }

    let shippingInfo="";
    let checkoutAmount="";
    let cartItemsData="";
    let customerEmail="";
    const [paymentStatus,setPaymentStatus] = useState("");
    let orderData=""
    if("shippingInfo" in localStorage){
        shippingInfo = JSON.parse(localStorage.getItem("shippingInfo"));
    }
    
    
    const classes = useStyles();
    let orderItems = [];
    
    
    
    
    
    useEffect( () => {
       
        if("PaymentStatus" in localStorage){
            
            if("checkoutAmount" in localStorage){
                checkoutAmount = JSON.parse(localStorage.getItem("checkoutAmount"));
            }
            if("cartItems" in localStorage){
                cartItemsData = JSON.parse(localStorage.getItem("cartItems"));
            }
            if("Email" in localStorage){
                customerEmail = localStorage.getItem("Email");
            }
            if("PaymentStatus" in localStorage){
                setPaymentStatus(localStorage.getItem("PaymentStatus"));
                    
            }
            if("cartItems" in localStorage){
                console.log("inside of carritems cartItemsData");
                for(let idx=0;idx<cartItemsData.CartItems.length;idx++) {
                    let items = {
                        "quantity": cartItemsData.CartItems[idx].quantity,
                        "price_data": {
                            "currency": "cad",
                            "unit_amount": cartItemsData.CartItems[idx].Price,
                            "product_data": {
                                "name": cartItemsData.CartItems[idx].Name,
                                "description": "Product description",
                                "images": [
                                    cartItemsData.CartItems[idx].ImageURL
                                ]
                            },
                            
                        },
                        "tax_rates": ["txr_1KiDYRLF0IW9HE4HAkINXJr6"]
                    }
                    orderItems.push(items);
                    
                }
                orderData = {
                    "shippingInfo": {
                        "firstName": shippingInfo.firstName,
                        "lastName": shippingInfo.lastName,
                        "streetAddress": shippingInfo.stAddress,
                        "city": shippingInfo.city.name,
                        "state": shippingInfo.stateName.name,
                        "country": shippingInfo.countryName.name,
                        "zipCode": shippingInfo.zip,
                    },
                    "shippingMethod": "Express",    
                    orderItems,
                    "orderStatus": "Processing",
                    "userEmail": customerEmail,
                    "paymentInfo": {
                        "paymentId": uuid.v4(),
                        "paymentMethod": "Stripe",
                        "paymentStatus": "Successful"
                    },
                    "itemsAmount": checkoutAmount.orderSumCost.itemCost,
                    "taxAmount": checkoutAmount.orderSumCost.tax,
                    "shippingAmount": checkoutAmount.orderSumCost.shippingCost,
                    "paymentAmount": checkoutAmount.orderSumCost.totalAmount,
                };
            }
            axios.post('/api/v1/order/createNewOrder',orderData, {headers: {
                'Content-Type': 'application/json',
                "token": authToken
                }}).then((res) => {
                    console.log(res);
                    localStorage.removeItem("PaymentStatus");
                    localStorage.removeItem("checkoutAmount");
                    localStorage.removeItem("cartItems","");
                    toast.success("Your order placed Successfully");
                })
        }
    },[])



    return(
        <div>
        {paymentStatus!==""?
        <Layout>
            
            <PageTitle title="Order Placed" />
            <Grid 
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '30vh' }}><h1>Order Confirmation</h1></Grid>
            <Box sx={{ flexGrow: 1, mx:8 }} className="textFont" display="flex" justifyContent="center">
                <Grid item xs={12} lg={5} md={5}  >
                    {shippingInfo.firstName} {shippingInfo.lastName}, Thank you for your order!
                    

                </Grid>
    
            </Box>
            <Box sx={{ flexGrow: 1, mx:8,mt: 4 }} className="textFont" display="flex"  justifyContent="center">
                <Grid item xs={12} lg={5} md={5}  >
                    We've recieved your order and will contact you as soon as your package is shipped. please click below button for your order details.

                </Grid>
                
            </Box>
            <Box sx={{ flexGrow: 1, mx:8,mt: 4 }} className="textFont" display="flex"  justifyContent="center">
                <Button variant="contained"
                                className={classes.root} onClick={routeChange}>Order Details</Button>
            </Box>
            
            {/* <div className="container" style={{marginTop:"10%"}}>
                <div className="row text-center">
                    <h1>Order is placed</h1>
                </div>
                <div className="row text-center">
                    <div className="col-sm text-center">
                        <button type="button" className="btn btn-lg placeButton" onClick={routeChange}>Orders</button>
                    </div>
                </div>
            </div> */}
        </Layout>:<Layout><Error /></Layout>} 
        </div>
    );

}

export default OrderPlaced;