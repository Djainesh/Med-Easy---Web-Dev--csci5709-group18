/**
 *
 * @version 1.0
 * @author [Chandan Shukla](chandan.shukla@dal.ca)
 */


import Layout from '../../components/Layout/Layout';
import {useNavigate} from "react-router-dom";
import React,{ useState } from "react";
import {Container, Row, Col, Card, Button, CardGroup} from 'react-bootstrap';
import './Checkout.css';


export default function Checkout(props) {

    const firstNameRegex = /^[a-zA-Z]+$/;
    const lastNameRegex = /^[a-zA-Z]+$/;
    const streetAddressRegex = /^([0-9]{1,4})([a-zA-Z0-9@/\-*&\s]){8,}$/;
    const cityRegex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)+$/;
    const stateRegex = /^[a-zA-Z\s]{1,}$/;
    const zipRegex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    const cardRegex = /^[0-9]{16}$/;
    const cardNameRegex = /^[a-zA-Z\s]{1,}$/;
    const cvvRegex = /^[0-9]{3}$/;

    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState(""); 
    const [stAddress, setStAddress] = useState(""); 
    const [city, setCity] = useState(""); 
    const [state, setState] = useState(""); 
    const [zip, setZip] = useState(""); 
    const [cardNo, setCardno] = useState("");
    const [cardName, setCardName] = useState("");
    const [cvv, setCVV] = useState("");

    let navigate = useNavigate(); 
    function routeChange(){ 
        navigate("/Checkout/OrderPlaced");
    }

    function handleNewButton(){

        if(firstNameErrorMessage.length===0 && lastNameErrorMessage.length===0 && stAddressErrorMessage.length===0 && cityErrorMessage.length===0 && stateErrorMessage.length===0 && zipErrorMessage.length===0 && cardErrorMessage.length===0 && cardNameErrorMessage.length===0 && cvvErrorMessage.length===0){

            if(firstName.length===0 || lastName.length===0 || stAddress.length===0 || city.length===0 || state.length===0 || zip.length===0 || cardNo.length===0 || cardName.length===0 || cvv.length===0){
                return window.alert("Please fill all the fields");
            }else{
                routeChange();
            }

        }else{
            return window.alert("Please resolve the highlighted errors before proceeding")
        }
        console.log("inside");
    }

    const [firstNameErrorMessage, setFirstNameErrorMessage] = useState(""); 
    const handleFirstNameChange = (e) => {
        console.log("inside");
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
        if(!cityRegex.test(e.target.value) && e.target.value){
            setCityErrorMessage("Field should start with 1-4 numbers and should be minimum 8 character long");
        }else{
            setCityErrorMessage("");
        }
        setCity(e.target.value);
    }

    const [stateErrorMessage, setStateErrorMessage] = useState("");
    const handleStateChange = (e) => {
        
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

    const [cardErrorMessage, setCardErrorMessage] = useState("");
    const handCardChange = (e) => {
        if(!cardRegex.test(e.target.value) && e.target.value){
            setCardErrorMessage("Field should have 16 digit");
        }else{
            setCardErrorMessage("");
        }
        setCardno(e.target.value);
    }

    const [cardNameErrorMessage, setCarNamedErrorMessage] = useState("");
    const handCardNameChange = (e) => {
        if(!cardNameRegex.test(e.target.value) && e.target.value){
            setCarNamedErrorMessage("Field should contain letters");
        }else{
            setCarNamedErrorMessage("");
        }
        setCardName(e.target.value);
    }

    const [cvvErrorMessage, setCVVErrorMessage] = useState("");
    const handCVVChange = (e) => {
        if(!cvvRegex.test(e.target.value) && e.target.value){
            setCVVErrorMessage("Field should contain 3 digits");
        }else{
            setCVVErrorMessage("");
        }
        setCVV(e.target.value);
    }



    return (
        <Layout>
            <div className="d-flex justify-content-center checkoutHeader">
                <h1>Checkout Summary</h1>
            </div>
            <div className="d-flex p-2 justify-content-center" style={{marginTop:"5%"}}>
                <div className="row rowcustom">
                    <div className="col-lg">
                        <div className="row d-inline-flex">
                            <div className="row">
                                <div className="col justify-content-start">
                                    <h5>1. Shipping Information</h5>
                                </div>
                                <div className="col">
                                    <div className="flex-row d-inline-flex">
                                            <label>Firstname</label>
                                            <input  type="text" placeholder="First Name" style={{marginLeft:"20px"}} onChange={handleFirstNameChange} required></input>
                                            {firstNameErrorMessage.length > 0 ? (<p style={{color:"red"}} className="errorMessage">{firstNameErrorMessage}</p>):null}
                                    </div>
                                    <div className="flex-row d-inline-flex" style={{marginTop:"5px"}}>
                                            <label>Lastname</label>
                                            <input  type="text" placeholder="Last Name" style={{marginLeft:"20px"}} onChange={handleLastNameChange} required></input>
                                            {lastNameErrorMessage.length > 0 ? (<p style={{color:"red"}} className="errorMessage">{lastNameErrorMessage}</p>):null}
                                    </div>
                                    <div className="flex-row" style={{marginTop:"5px"}}>
                                            <label>St. Address</label>
                                            <input  type="text" placeholder="St. Address" style={{marginLeft:"7px"}} onChange={handleStAddressChange} required></input>
                                            {stAddressErrorMessage.length > 0 ? (<p style={{color:"red"}} className="errorMessage">{stAddressErrorMessage}</p>):null}
                                    </div>
                                    <div className="flex-row" style={{marginTop:"5px"}}>
                                            <label>City</label>
                                            <input  type="text" placeholder="City" style={{marginLeft:"62px"}} onChange={handleCityChange} required></input>
                                            {cityErrorMessage.length > 0 ? (<p style={{color:"red"}} className="errorMessage">{cityErrorMessage}</p>):null}
                                    </div>
                                    <div className="flex-row" style={{marginTop:"5px"}}>
                                            <label>State</label>
                                            <input  type="text" placeholder="State" style={{marginLeft:"52px"}} onChange={handleStateChange} required></input>
                                            {stateErrorMessage.length > 0 ? (<p style={{color:"red"}} className="errorMessage">{stateErrorMessage}</p>):null}
                                    </div>
                                    <div className="flex-row" style={{marginTop:"5px"}}>
                                            <label>Zip Code</label>
                                            <input  type="text" placeholder="Zip Code" style={{marginLeft:"24px"}} onChange={handleZipChange} required></input>
                                            {zipErrorMessage.length > 0 ? (<p style={{color:"red"}} className="errorMessage">{zipErrorMessage}</p>):null}
                                    </div>
                                </div>
                            </div>
                            <div className="row"style={{marginTop:"5px"}}>
                                <div className="col justify-content-start">
                                    <h5>2. Shipping Method</h5>
                                </div>
                                <div className="col">
                                    <div className="flex-row d-inline-flex" style={{marginTop:"5px"}}>
                                                <label>Card No</label>
                                                <input  type="text" placeholder="Card No" style={{marginLeft:"30px"}} onChange={handCardChange} required></input>
                                                {cardErrorMessage.length > 0 ? (<p style={{color:"red"}} className="errorMessage">{cardErrorMessage}</p>):null}
                                    </div>
                                    <div className="flex-row d-inline-flex" style={{marginTop:"5px"}}>
                                                <label>Name</label>
                                                <input  type="text" placeholder="Name" style={{marginLeft:"48px"}} onChange={handCardNameChange} required></input>
                                                {cardNameErrorMessage.length > 0 ? (<p style={{color:"red"}} className="errorMessage">{cardNameErrorMessage}</p>):null}
                                    </div>
                                    <div className="flex-row d-inline-flex" style={{marginTop:"5px"}}>
                                                <label>CVV</label>
                                                <input  type="text" placeholder="CVV" style={{marginLeft:"60px"}} onChange={handCVVChange} required></input>
                                                {cvvErrorMessage.length > 0 ? (<p style={{color:"red"}} className="errorMessage">{cvvErrorMessage}</p>):null}
                                    </div>
                                </div>
                                    
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <Card className="checkoutContainer border ">
                            <Card.Header className="text-center"><h1>Order Summary</h1></Card.Header>
                            <Card.Body>
                                <Card.Title>Items: </Card.Title>
                                <Card.Title>Shipping & Handling: </Card.Title>
                                <Card.Title>Total Before Tax: </Card.Title>
                                <Card.Title>Estimated GDT/HST: </Card.Title>
                                <Card.Title>Estimated GDT/HST: </Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                
                                <Card.Title>Total Amount</Card.Title>
                                
                            </Card.Footer>
                            <Button variant="primary" className="placeButton" onClick={() => handleNewButton()}>Place Order</Button>
                        </Card>
                    </div>
                </div>
            </div>
            
        </Layout>
        
    );
}


