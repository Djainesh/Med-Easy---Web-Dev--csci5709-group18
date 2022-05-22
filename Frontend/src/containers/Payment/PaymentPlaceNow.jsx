/**
 *
 * @version 1.0
 * @author [Chandan Shukla](chandan.shukla@dal.ca)
 */


import React, {useEffect, useState} from 'react'
import {Card} from 'react-bootstrap';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { teal } from '@mui/material/colors';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from '@material-ui/core/Button';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux'
import {paymentType} from '../../features/payment/PaymentType';
import {orderCost} from '../../features/payment/PaymentAmount';
import axios from 'axios';
import ShieldTwoToneIcon from '@mui/icons-material/ShieldTwoTone';
import MuiImageSlider from 'mui-image-slider';

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



export default function PaymentPlaceNow() {

    const paymentMethodType = useSelector((state) => state.paymentMethodType.value);
    const orderSumCost = useSelector((state) => state.orderSummaryCost.value);
    const dispatch = useDispatch();
    const checkoutAmount = JSON.parse(localStorage.getItem("checkoutAmount"));
    const cartItemsData = JSON.parse(localStorage.getItem("cartItems"));
    const customerEmail = localStorage.getItem("Email");
    const [items,setItems] = useState([]);
    const [images,setImage] = useState([]);
    let item = [];
    const buttonStyle = useStyles();
    let authToken = "";
    const [carouselImages,setCarouselImages] = useState([]);

    if(localStorage.getItem("token")!=='undefined'){
        authToken = localStorage.getItem("token");
    }
    const [radioButtonSelect,setRadioButton] = React.useState('Standard');
    // const handleRadioButton =(event) => {
    //     dispatch(paymentType(event.target.value));
    // }
    let line_items = [];
    console.log(orderSumCost);
    for(let idx=0;idx<cartItemsData.CartItems.length;idx++) {
        let items = {
            "quantity": cartItemsData.CartItems[idx].quantity,
            "price_data": {
                "currency": "cad",
                "unit_amount": cartItemsData.CartItems[idx].Price*100,
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
        line_items.push(items);
    }
    
    let data = {
        line_items,
        "customer_email": customerEmail,
        "delivery": checkoutAmount.orderSumCost.shippingCost
    };

    console.log(authToken);
    async function handlePlaceOrderBtn(){

        if(paymentMethodType==='Credit/Debit Card'){
            console.log('inside');
            await axios.post('/api/v1/checkout/payment/create-checkout-session',data,{headers: {
                'Content-Type': 'application/json',
                "token": authToken
                }}).then((res) => {
                    console.log(res);
                if(res && res.data){
                    console.log(res);
                    window.location.href = res.data.sessionUrl;
                    localStorage.setItem("PaymentStatus", "Success");
                }
            });
        }
    }
    useEffect(() => {
        const getProduct = async (req,res) => {
            item = await axios.get('/api/v1/Products/number');
            setItems(item.data.medicineRecord);
            let imagesTest = [];
            item.data.medicineRecord.map((item) => imagesTest.push(item.ImageURL));
            setImage(imagesTest);
            if(imagesTest.length > 0) {
                localStorage.setItem("carouselImages",imagesTest);
            }
        }
        getProduct();
    },[])
    // console.log(paymentMethodType);
  return (
    <>
    <Card className="textFont">
        <Card.Header className="text-center"><h3>Payment Methods</h3></Card.Header>
        <Card.Body >
            <Card.Title>Chose your payment method</Card.Title>
            <Card.Title>
                <Box component="span" sx={{ display: 'block', mt:2 }}>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="Credit/Debit Card"
                            name="radio-buttons-group" onChange={(e) => dispatch(paymentType(e.target.value))}
                        >
                            <FormControlLabel value="Credit/Debit Card" control={<Radio 
                            
                            sx={{
                                color: teal[800],
                                '&.Mui-checked': {
                                color: teal[600],
                            },
                            }}
                            />} label="Credit/Debit Card" />
                            <FormControlLabel value="Paypal" control={<Radio 
                            
                            sx={{
                                color: teal[800],
                                '&.Mui-checked': {
                                color: teal[600],
                            },
                            }} disabled={true}
                            />} label="Paypal (Currently Not Avaialble)" />
                    
                            
                        </RadioGroup>
                    </FormControl>


                </Box>
            </Card.Title>
        </Card.Body>
        <Card.Footer>
            
            <Card.Title>Total Amount <span style={{float: "right"}}>${checkoutAmount.orderSumCost.totalAmount}</span></Card.Title>
            
        </Card.Footer>
        <Button variant="contained"
        className={buttonStyle.root} onClick={handlePlaceOrderBtn} >Place Order</Button>
        {/* <Button variant="primary" className="placeButton" onClick={() => handleNewButton()}>Place Order</Button> */}
    </Card>
        <h5 style={{color: "grey", marginTop: "4px", marginBottom: "6px"}}><ShieldTwoToneIcon /> Safe and Secure Payments. Easy returns. 100% Authentic products.</h5>

        {images.length>0?<MuiImageSlider arrowsColor="#000" alwaysShowArrows={true} autoPlay={true} images={images}/>:<></>}
      </>


  )
}
