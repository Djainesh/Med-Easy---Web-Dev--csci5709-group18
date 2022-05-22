/**
 *
 * @version 1.0
 * @author [Chandan Shukla](chandan.shukla@dal.ca)
 */


import React, {useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import {TextField} from '@material-ui/core';
import Layout from '../../components/Layout/Layout';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { teal } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import {useNavigate} from "react-router-dom";
import {Card} from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import {saveShippingInfo,saveCheckoutAmount} from '../../actions/CheckoutActions';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Country, State, City } from "country-state-city";
import PageTitle from '../../components/PageTitle/PageTitle';
import { useSelector, useDispatch } from 'react-redux';
import {orderCost} from '../../features/payment/PaymentAmount';
import './CSS/Checkout.css';
import MedEasyPlus from '../../components/MedEasyPlus/MedEasyPlus';

// Regex to validate the fields
const firstNameRegex = /^[a-zA-Z]+$/;
const lastNameRegex = /^[a-zA-Z]+$/;
const streetAddressRegex = /^([0-9]{1,4})([a-zA-Z0-9@/\-*&\s]){8,}$/;
const cityRegex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)+$/;
const stateRegex = /^[a-zA-Z\s]{1,}$/;
const zipRegex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
let totalAmount = 0;



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






export default function Checkout(props) {

    const orderSumCost = useSelector((state) => state.orderSummaryCost.value);
    const dispatch = useDispatch();
    console.log(orderSumCost.itemCost);
    let orderCostData = {itemCost: 0, shippingCost: 0, totalBeforeTax: 0, tax: 0, totalAmount: 0};

    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState(""); 
    const [stAddress, setStAddress] = useState(""); 
    const [city, setCity] = useState(""); 
    const [state, setState] = useState(""); 
    const [zip, setZip] = useState(""); 
    
    const classes = useStyles();
    const [radioButtonSelect,setRadioButton] = useState('Standard');
    const handleRadioButton =(event) => {
        setRadioButton(event.target.value);
    }

    

    // Function to navigate to the OrderPlaced screen
    let navigate = useNavigate(); 
    function routeChange(props){ 
        // navigate("/Checkout/Payment");
        navigate(props);
    }

    // handles the open close of Accordion
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    function handleNewButton(){

        if(firstNameErrorMessage.length===0 && lastNameErrorMessage.length===0 && stAddressErrorMessage.length===0 && cityErrorMessage.length===0 && stateErrorMessage.length===0 && zipErrorMessage.length===0 ){

            if(firstName.length===0 || lastName.length===0 || stAddress.length===0 || city.length===0 || state.length===0 || zip.length===0 ){
                return window.alert("Please fill all the fields");
            }else{


                let stateName = State.getStateByCodeAndCountry(state,countryNameValue);
                let countryName = Country.getCountryByCode(countryNameValue);
                saveShippingInfo({firstName,lastName,stAddress,city,stateName,countryName,zip});
                saveCheckoutAmount({orderSumCost});
                const customerEmail = localStorage.getItem("Email");
                if(customerEmail!=='undefined' && customerEmail!==null){
                    routeChange("/Checkout/Payment");
                }else{
                    
                    routeChange("/Login");
                    window.alert("To place your order, please login to your User Account");
                }
                
            }

        }else{
            return window.alert("Please resolve the highlighted errors before proceeding")
        }
        // console.log("inside");
    }


    const [firstNameErrorMessage, setFirstNameErrorMessage] = useState(""); 
    const handleFirstNameChange = (e) => {
        // console.log("inside");
        if(!firstNameRegex.test(e.target.value) && e.target.value){
            setFirstNameErrorMessage("Field should contain letters");
        }else{
            setFirstNameErrorMessage("");
        }
        setFirstName(e.target.value);
    };
    const [lastNameErrorMessage, setLastNameErrorMessage] = useState("");
    const handleLastNameChange = (e) => {
        if(!lastNameRegex.test(e.target.value) && e.target.value){
            setLastNameErrorMessage("Field should contain letters");
        }else{
            setLastNameErrorMessage("");
        }
        setLastName(e.target.value);
    }


    const [stAddressErrorMessage, setStAddressErrorMessage] = useState("");
    const handleStAddressChange = (e) =>{
        if(!streetAddressRegex.test(e.target.value) && e.target.value){
            setStAddressErrorMessage("Field should start with 1-4 numbers and should be minimum 8 character long");
        }else{
            setStAddressErrorMessage("");
        }
        setStAddress(e.target.value);
    }
    
    const [cityErrorMessage, setCityErrorMessage] = useState("");
    const handleCityChange = (e) => {

        if(!city && !e.target.value){
            setCityErrorMessage("Field should be minimum 8 character long");
        }else{
            setCityErrorMessage("");
        }
        
        setCity(e.target.value);
    }

    const [stateErrorMessage, setStateErrorMessage] = useState("");
    const handleStateChange = (e) => {
        // console.log(e.target.value)
        if(!stateRegex.test(e.target.value) && e.target.value){
            setStateErrorMessage("Field should start with 1-4 numbers and should be minimum 8 character long");
        }else{
            setStateErrorMessage("");
        }
        setState(e.target.value);
    }

    const [zipErrorMessage, setZipErrorMessage] = useState("");
    const handleZipChange = (e) => {
        if(!zipRegex.test(e.target.value) && e.target.value){
            setZipErrorMessage("Zipcode should be a number with 5 digits");
        }else{
            setZipErrorMessage("");
        }
        setZip(e.target.value);
    }

    const [countryNameValue, setCountryName] = React.useState(`CA`);

    const handleCountryName = (event) => {
        setCountryName(event.target.value);
    };

    useEffect(() => {
        // CART item value calculation
        const cartItemsData = JSON.parse(localStorage.getItem("cartItems"));
        console.log(cartItemsData.CartItems);
        for(let idx=0;idx<cartItemsData.CartItems.length;idx++) {
            orderCostData.itemCost += (cartItemsData.CartItems[idx].Price)*(cartItemsData.CartItems[idx].quantity)
        }
        if(radioButtonSelect==='Standard'){
            orderCostData.shippingCost=5;
        }else if(radioButtonSelect==='Express0'){
            orderCostData.shippingCost=20;
        }else if(radioButtonSelect==='Express1'){
            orderCostData.shippingCost=15;
        }else if(radioButtonSelect==='Express2'){
            orderCostData.shippingCost=10;
        }
        // tax and total amount calculation
        orderCostData.totalBeforeTax = orderCostData.itemCost + orderCostData.shippingCost;
        orderCostData.tax = (orderCostData.itemCost*15)/100;
        orderCostData.totalAmount = orderCostData.itemCost + orderCostData.shippingCost +  orderCostData.tax;
        dispatch(orderCost(orderCostData))
    }, radioButtonSelect)
    
    return (
        <Layout>
            <PageTitle title="Checkout Summary" />
            <Grid 
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '30vh' }} className="textFont"><h1 >Checkout Summary</h1></Grid>  {/* Important snipet to align content inside grid */} 
            <Box sx={{ flexGrow: 1, mx:8 }} className="textFont">
                
                <Grid container spacing={16}
                direction="row"
                justifyContent="center">
                    <Grid item xs={12}  lg={5} md={5}>
                        <Accordion expanded={expanded === 'shippingInfo'} onChange={handleChange('shippingInfo')}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}><h4 className="textFont">Shipping Information</h4></AccordionSummary>
                                <AccordionDetails>
                                        {/* <InputBase placeholder="First Name" variant="outlined"  className={classes.field} fullWidth required></InputBase> */}
                                        <TextField label="First Name" variant="standard" onChange={handleFirstNameChange} fullWidth required ></TextField>
                                        {firstNameErrorMessage.length > 0 ? (<p style={{color:"red"}} className="errorMessage">{firstNameErrorMessage}</p>):null}
                                        <TextField label="Last Name" variant="standard" onChange={handleLastNameChange} fullWidth required></TextField>
                                        {lastNameErrorMessage.length > 0 ? (<p style={{color:"red"}} className="errorMessage">{lastNameErrorMessage}</p>):null}
                                        
                                        <Box component="span" sx={{ display: 'block' }}>
                                            <FormControl variant="standard" size="small" fullWidth required>
                                                <InputLabel >Country</InputLabel>
                                                <Select
                                                value={countryNameValue}
                                                onChange={handleCountryName}
                                                label="Country"
                                                MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
                                                >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                
                                                {Country &&
                                                Country.getAllCountries().map((item) => (
                                                    <MenuItem key={item.isoCode} value={item.isoCode}>
                                                    {item.name}
                                                    </MenuItem>
                                                ))}
                                                
                                                </Select>
                                            </FormControl>  
                                        </Box>
                                        {/*State Dropdown*/}
                                        {countryNameValue && (<Box component="span" sx={{ display: 'block' }}>
                                            <FormControl variant="standard" size="small" fullWidth required>
                                                <InputLabel >State</InputLabel>
                                                <Select
                                                value={state}
                                                onChange={handleStateChange}
                                                label="State"
                                                MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
                                                >
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    
                                                    {Country &&
                                                    State.getStatesOfCountry(countryNameValue).map((item) => (
                                                        <MenuItem key={item.isoCode} value={item.isoCode}>
                                                        {item.name}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>  
                                        </Box>)}
                                        {state && (<Box component="span" sx={{ display: 'block' }}>
                                            <FormControl variant="standard" size="small" fullWidth required>
                                                <InputLabel >City</InputLabel>
                                                <Select
                                                value={city}
                                                onChange={handleCityChange}
                                                label="City"
                                                MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
                                                >
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    
                                                    {Country && 
                                                    City.getCitiesOfState(countryNameValue,state).map((item) => (
                                                        <MenuItem key={item.isoCode} value={item}>
                                                        {item.name}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>  
                                        </Box>)}
                                        {cityErrorMessage.length > 0 ? (<p style={{color:"red"}} className="errorMessage">{cityErrorMessage}</p>):null}
                                        
                                        <TextField label="Street Address" variant="standard" onChange={handleStAddressChange} fullWidth required></TextField>
                                        {stAddressErrorMessage.length > 0 ? (<p style={{color:"red"}} className="errorMessage">{stAddressErrorMessage}</p>):null}
                                        {/* <TextField label="City" variant="standard" onChange={handleCityChange} fullWidth required></TextField>
                                        {cityErrorMessage.length > 0 ? (<p style={{color:"red"}} className="errorMessage">{cityErrorMessage}</p>):null} */}
                                        {/* <TextField label="State" variant="standard"  onChange={handleStateChange} fullWidth required></TextField> */}
                                        {/* {stateErrorMessage.length > 0 ? (<p style={{color:"red"}} className="errorMessage">{stateErrorMessage}</p>):null} */}
                                        <TextField label="Zip Code" variant="standard" onChange={handleZipChange} fullWidth required></TextField>
                                        {zipErrorMessage.length > 0 ? (<p style={{color:"red"}} className="errorMessage">{zipErrorMessage}</p>):null}
                                </AccordionDetails>
                                
                        </Accordion>
                        <Accordion expanded={expanded === 'shippingMethod'} onChange={handleChange('shippingMethod')}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}><h4 className="textFont">Shipping Method</h4></AccordionSummary>
                                <AccordionDetails>
                                    <FormControl>
                                        {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            defaultValue="Standard"
                                            name="radio-buttons-group" onChange={(e) => handleRadioButton(e)}
                                        >
                                            <FormControlLabel value="Standard" control={<Radio 
                                            
                                            sx={{
                                                color: teal[800],
                                                '&.Mui-checked': {
                                                color: teal[600],
                                            },
                                            }}
                                            />} label="Standard Shipping" />
                                            <FormControlLabel value="Express0" control={<Radio 
                                            
                                            sx={{
                                                color: teal[800],
                                                '&.Mui-checked': {
                                                color: teal[600],
                                            },
                                            }}
                                            />} label="Express Same-Day Shipping" />
                                            <FormControlLabel value="Express1" control={<Radio 
                                            
                                            sx={{
                                                color: teal[800],
                                                '&.Mui-checked': {
                                                color: teal[600],
                                            },
                                            }}
                                            />} label="Express One-Day Shipping" />
                                            <FormControlLabel value="Express2" control={<Radio 
                                            
                                            sx={{
                                                color: teal[800],
                                                '&.Mui-checked': {
                                                color: teal[600],
                                            },
                                            }}
                                            />} label="Express Two-Day Shipping" />
                                            
                                        </RadioGroup>
                                    </FormControl>
                                </AccordionDetails>
                                
                        </Accordion>
                    </Grid>
                    <Grid item xs={12} lg={5} md={5} >
                        <Card className="textFont">
                            <Card.Header className="text-center"><h2>Order Summary</h2></Card.Header>
                            <Card.Body >
                                <Card.Title>Cost of Items:  <span style={{float: "right"}}>${orderSumCost.itemCost}</span></Card.Title>
                                <Card.Title>Shipping & Handling: <span style={{float: "right"}}>${orderSumCost.shippingCost}</span> </Card.Title>
                                <Card.Title>Total Before Tax: <span style={{float: "right"}}>${orderSumCost.totalBeforeTax}</span> </Card.Title>
                                <Card.Title>Estimated GDT/HST: <span style={{float: "right"}}>${orderSumCost.tax}</span> </Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                
                                <Card.Title>Total Amount <span style={{float: "right"}}>${orderSumCost.totalAmount}</span></Card.Title>
                                
                            </Card.Footer>
                            <Button variant="contained"
                            className={classes.root} onClick={() => handleNewButton()}>Place Order</Button>
                            {/* <Button variant="primary" className="placeButton" onClick={() => handleNewButton()}>Place Order</Button> */}
                        </Card>
                        <MedEasyPlus></MedEasyPlus>
                    </Grid>
                    
                </Grid>
            </Box>
        </Layout>
        
    );
}