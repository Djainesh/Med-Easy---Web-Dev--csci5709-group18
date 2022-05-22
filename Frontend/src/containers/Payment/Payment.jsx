/**
 *
 * @version 1.0
 * @author [Chandan Shukla](chandan.shukla@dal.ca)
 */



import React, {useEffect} from 'react';
//import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { teal } from '@mui/material/colors';
import {useNavigate} from "react-router-dom";
import {Card} from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import Header from '../../components/Header/Header';
import {TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import styled from "styled-components";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Country, State, City } from "country-state-city";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import PaymentPlaceNow from './PaymentPlaceNow';
import PageTitle from '../../components/PageTitle/PageTitle';
import { useSelector, useDispatch } from 'react-redux'
import {paymentType} from '../../features/payment/PaymentType';
import PropTypes from 'prop-types';
import './CSS/Payment.css';



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

const styleTextField = makeStyles((theme) => ({
    root: {
    "& .MuiInputBase-root": {
        color: teal[600]
        },
        "& .MuiFormLabel-root": {
        color: teal[600]
        },
        root: {
        borderColor: 'teal'
        },
        '&$focused $notchedOutline': {
        borderColor: 'teal'
        }
    },  
    
    }
));




export default function Payment() {
    // importing the payment method state
    const paymentMethodType = useSelector((state) => state.paymentMethodType.value);
    // localStorage.setItem("first name","Chandan")
    const buttonStyle = useStyles();
    const textFieldStyle = styleTextField();
    var shippingInfo = JSON.parse(localStorage.getItem("shippingInfo"));
    let cityLocalStore = shippingInfo.city.name;
    let stateCodeLocalStore = shippingInfo.city.stateCode;
    let countryCodeLocalStore = shippingInfo.city.countryCode;
    // Checkbox toggle
    const [checkBillingAddress, setCheckedBilling] = React.useState(true);
    const handleChange = (event) => {
        setCheckedBilling(!checkBillingAddress);
        // if(checkBillingAddress){
        //     setStateName("");
        //     countryNameValue("");
        // }else{
        //     setStateName(`${stateCodeLocalStore}`);
        //     countryNameValue(`${countryCodeLocalStore}`);
        // }
    };

    // Handles the value for first name
    const [firstNameValue,setFirstName] = React.useState("");
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }

    // Handles the value for last name
    const [lastNameValue,setLasttName] = React.useState("");
    const handleLastName = (e) => {
        setLasttName(e.target.value);
    }

    // Handles the value for street address
    const [stAddressValue,setstAddress] = React.useState("");
    const handleStAddress = (e) => {
        setstAddress(e.target.value);
    }

     // Handles the value for city name
    const [cityNameValue,setCityName] = React.useState("");
    const handleCityName = (e) => {
        setCityName(e.target.value);
    }

    const [stateNameValue,setStateName] = React.useState("");
    // const [stateNameValue,setStateName] = React.useState("");
    const handleStateName = (e) => {
        setStateName(e.target.value);
    }

    const [zipCodeValue,setZipCode] = React.useState("");
    const handleZipCode = (e) => {
        setZipCode(e.target.value);
    }

    const [countryNameValue, setCountryName] = React.useState("");
    // const [countryNameValue, setCountryName] = React.useState("");
    const handleCountryName = (event) => {
        setCountryName(event.target.value);
        console.log(event.target.value)
    };

    // Radio button state handdler
    const [radioButtonSelect,setRadioButton] = React.useState('Standard');
    const handleRadioButton =(event) => {
        setRadioButton(event.target.value);
    }

   
    
    console.log(cityNameValue);
    return (
        <div className="page-container">
            <div className="content-wrap">
                <Header />
                <PageTitle title="Payment Information" />
                <Grid 
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        style={{ minHeight: '30vh' }} className="textFont"><h1>Payment Information</h1></Grid> 
                <Box sx={{ flexGrow: 1, mx:8}} className="textFont" >
                    <Grid container spacing={16} direction="row" justifyContent="center">
                        <Grid item xs={12}  lg={4} md={5}>
                            <h4>Billing Information</h4>

                            <TextField label={"First Name"} variant="standard" disabled={checkBillingAddress} onChange={handleFirstName} value={checkBillingAddress?shippingInfo.firstName:firstNameValue} fullWidth required ></TextField>
                            
                            <TextField label={"Last Name"} variant="standard" disabled={checkBillingAddress} onChange={handleLastName} value={checkBillingAddress?shippingInfo.lastName:lastNameValue} fullWidth required></TextField>

                            <Box component="span" sx={{ display: 'block' }}>
                                <FormControl variant="standard" size="small" fullWidth required>
                                    <InputLabel >Country</InputLabel>
                                    <Select
                                    value={checkBillingAddress?countryCodeLocalStore:countryNameValue}
                                    disabled={checkBillingAddress}
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
                            {<Box component="span" sx={{ display: 'block' }}>
                                <FormControl variant="standard" size="small" fullWidth required>
                                    <InputLabel >State</InputLabel>
                                    <Select
                                    value={checkBillingAddress?stateCodeLocalStore:stateNameValue}
                                    disabled={checkBillingAddress}
                                    onChange={handleStateName}
                                    label="State"
                                    MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>

                                        
                                        {Country &&
                                        State.getStatesOfCountry(checkBillingAddress?countryCodeLocalStore:countryNameValue).map((item) => (
                                            <MenuItem key={item.isoCode} value={item.isoCode}>
                                            {item.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>  
                            </Box>}
                            {(<Box component="span" sx={{ display: 'block' }}>
                                <FormControl variant="standard" size="small" fullWidth required>
                                    <InputLabel >City</InputLabel>
                                    <Select
                                    value={checkBillingAddress?cityLocalStore:cityNameValue}
                                    disabled={checkBillingAddress}
                                    onChange={handleCityName}
                                    label="City"
                                    MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        
                                        {!checkBillingAddress?City.getCitiesOfState(countryNameValue,stateNameValue).map((item) => (
                                            <MenuItem key={item.isoCode} value={item}>
                                            {item.name}
                                            </MenuItem>
                                        )):(<MenuItem key={cityLocalStore} value={cityLocalStore}>
                                        {cityLocalStore}
                                        </MenuItem>)}
                                    </Select>
                                </FormControl>  
                            </Box>)}
                            
                            <TextField label="Street Address" variant="standard" disabled={checkBillingAddress} onChange={handleStAddress}  value={checkBillingAddress?shippingInfo.stAddress:stAddressValue} fullWidth required></TextField>
                        
                            {/* <TextField label="City" variant="standard" disabled={checkBillingAddress} onChange={handleCityName} value={checkBillingAddress?shippingInfo.city:cityNameValue} fullWidth required></TextField> */}
                            
                            {/* <TextField label="State" variant="standard" disabled={checkBillingAddress} onChange={handleStateName} value={checkBillingAddress?shippingInfo.state:stateNameValue}  fullWidth required></TextField> */}
                            
                            <TextField label="Zip Code" type="number" variant="standard" disabled={checkBillingAddress} onChange={handleZipCode} value={checkBillingAddress?shippingInfo.zip:zipCodeValue} fullWidth required></TextField>
                            

                            <Box component="span" sx={{ display: 'block', mt:2 }}>

                                <FormControlLabel  control={<Checkbox checked={checkBillingAddress} defaultChecked onChange={handleChange} style={{
                                color: "#13878F"
                                }} />} label="Your billing address same as your shipping address?" />


                            </Box>
                        
                        </Grid>
                        <Grid item xs={12}  lg={4} md={5}>
                            <PaymentPlaceNow></PaymentPlaceNow>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    )
}
