// /**
//  *
// * @author Saloni Raythatha(sl768578@dal.ca)  (Banner ID - B00883060) (frontend functionality for Search, Filter and Display)
// *
// */

// In order to perform the search refer below samples exisiting in the database
// * List of some expected inputs are = {Metacin, Mask, Surgical Mask, Thermometer, Ibuprofen, Azithromycin, Baby Wipes, Cough Drops, B.P Machine, Crocin, Paracetamol  etc. are currently some valid inputs}


import React, {useState} from 'react';
import Layout from '../../components/Layout/Layout';
import './css/SearchResults.css';
import searchResultsContext from '../../containers/SearchResults/SearchResultsContext';
import { useLocation} from "react-router-dom"
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import * as ReactBootStrap from "react-bootstrap";
import PageTitle from '../../components/PageTitle/PageTitle';
import {
    CardMedia,
  } from "@material-ui/core";

function SearchResults(props){
    const [searchResults, setSearchResults] = useState([]);
    const [isFetching, setIsFetching] = useState([]);
    const [brand, setBrand] = useState("AllBrands");
    const [price, setPrice] = useState("AllPrices");
    const [dose, setDose] = useState("AllDoses");
    const [productType, setProductType] = useState("AllProductTypes");
    const useStyles = makeStyles({
        root: {
          background: "#1A374D",
          borderRadius: "10px",
          color: '#1A374D',
          height: 40,
          padding: '0 30px',
          margin: "20px",
          textTransform: 'none',
          "&:hover": {
            background: "#fff",
            color: "#1A374D"
          }
        },
      });
    const classes = useStyles();
    let location = useLocation();
    let navigate = useNavigate();

    // this navigates to the product disply page when user click "View Product Details" under any individual product result
    const productDisplay = (id) => {
        navigate(`/ProductDisplay/${id}`);
      };


    // filter using brands
    const handleBrandStateChange = (e) => {
        if (e.target.value === "AllBrands") {
            setBrand("AllBrands")
        } else {
            setBrand(e.target.value)
        }
    }

    // filter using price
    const handlePriceStateChange = (e) => {
        if (e.target.value === "AllPrices") {
            setPrice("AllPrices")
        } else {
            setPrice(e.target.value)
        }
    }

     // filter using dose amount
    const handleDoseStateChange = (e) => {
        if (e.target.value === "AllDoses") {
            setDose("AllDoses")
        } else {
            setDose(e.target.value)
        }
    }

    // filter using product type
    const handleProductTypeStateChange = (e) => {
        if (e.target.value === "AllProductTypes") {
            setProductType("AllProductTypes")
        } else {
            setProductType(e.target.value)
        }
    }
    const selectedBrand = brand
    const selectedPrice = price
    const selectedDose = dose
    const selectedproductType = productType

    console.log(searchResults)
    console.log(location.state);

    let filteredResults = searchResults
    // Filter based on brand
    if (selectedBrand !== "AllBrands") {
        filteredResults = filteredResults.filter( function (item) {
            return item['Brands'] === selectedBrand
        });
    }
    
    // Filter based on productTypes
    if (selectedproductType !== "AllProductTypes") {
        filteredResults = filteredResults.filter( function (item) {
            return item['ProductType'] === selectedproductType
        });
    }

    // Filter based on price
    if (selectedPrice !== "AllPrices") {
        filteredResults = filteredResults.filter( function (item) {
            // Price range $1 - $20
            if (selectedPrice === "$1 - $20") {
                return parseInt(item['Price']) >= 1 && parseInt(item['Price']) <= 20
            } else if (selectedPrice === "$21 - $50") {
                return parseInt(item['Price']) >= 21 && parseInt(item['Price']) <= 50
            } else if (selectedPrice === "$51 - $100") { 
                return parseInt(item['Price']) >= 51 && parseInt(item['Price']) <= 100
            } else if (selectedPrice === "$101 - $500") {
                return parseInt(item['Price']) >= 101 && parseInt(item['Price']) <= 500
            } else if (selectedPrice === "Over $500") {
                return parseInt(item['Price']) >= 1000
            } 
        });
    }

    // Filter based on dose
    if (selectedDose !== "AllDoses") {
        filteredResults = filteredResults.filter( function (item) {
            // Price range $1 - $20
            if (selectedDose === "1mg-50mg") {
                return parseInt(item['Dose']) >= 1 && parseInt(item['Dose']) <= 50
            } else if (selectedDose === "51mg-100mg") {
                return parseInt(item['Dose']) >= 51 && parseInt(item['Dose']) <= 100
            } else if (selectedDose === "101mg-500mg") { 
                return parseInt(item['Dose']) >= 101 && parseInt(item['Dose']) <= 500
            } else if (selectedDose === "501mg-1000mg") {
                return parseInt(item['Dose']) >= 501 && parseInt(item['Dose']) <= 1000
            } else if (selectedDose === "Over 1000mg") {
                return parseInt(item['Dose']) >= 1000
            } else if (selectedDose === "") {
                return "No Results Available For Filtered Critera";
            }
        });
    }

    const loadingDiv = <div> <h2></h2> </div>
    const lastSearchTerm = location.state.lastSearchedTerm
    return(
        <searchResultsContext.Provider value={{ searchResults, setSearchResults, isFetching, setIsFetching }}>
        <Layout searchTerm={lastSearchTerm.length ? lastSearchTerm : ""}>
        <PageTitle title="Search Results" />
                <div className="headingSize">
                <ReactBootStrap.Card.Title>
                  <h5> SEARCH RESULTS</h5>
                  <div>Filter Criteria: &nbsp;&nbsp; ProductType:{selectedproductType} &nbsp;&nbsp; Brand:{selectedBrand} &nbsp;&nbsp; Price:{selectedPrice}  &nbsp;&nbsp; Dose:{selectedDose}&nbsp;&nbsp;</div>
                  </ReactBootStrap.Card.Title>
                </div>  

                    <div class="Filter-Model">                               
                        <div class="Filter-Heading">Product Type</div>
                        <div class="Filter-Options">
                            <div><input type="radio" checked={selectedproductType === "Personal Care"}  onChange={handleProductTypeStateChange} value="Personal Care" name="Personal Care" /> Personal Care</div>
                            <div><input type="radio" checked={selectedproductType === "Vitamin"}  onChange={handleProductTypeStateChange} value="Vitamin" name="Vitamin" /> Vitamin</div>
                            <div><input type="radio" checked={selectedproductType === "Regular"}  onChange={handleProductTypeStateChange} value="Regular" name="Regular" /> Regular</div>
                            <div><input type="radio" checked={selectedproductType === "Baby Care"}  onChange={handleProductTypeStateChange} value="Baby Care" name="Baby Care" /> Baby Care</div>
                            <div><input type="radio" checked={selectedproductType === "Medical Equipment"}  onChange={handleProductTypeStateChange} value="Medical Equipment" name="Medical Equipment" /> Medical Equipment</div>
                            <div><input type="radio" checked={selectedproductType === "Health Care"}  onChange={handleProductTypeStateChange} value="Health Care" name="Health Care" /> Health Care</div>
                            <div><input type="radio" checked={selectedproductType === "AllProductTypes"} onChange={handleProductTypeStateChange} value="AllProductTypes" name="AllProductTypes" /> All Product Types</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                        <div class="Filter-Heading">Brands </div>
                        <div class="Filter-Options">
                            <div><input type="radio" checked={selectedBrand === "Advil"}  onChange={handleBrandStateChange} value="Advil" name="Advil" /> Advil</div>
                            <div><input type="radio" checked={selectedBrand === "Motrin"} onChange={handleBrandStateChange} value="Motrin" name="Motrin" /> Motrin</div>
                            <div><input type="radio" checked={selectedBrand === "Aveno"} onChange={handleBrandStateChange} value="Aveno" name="Aveno" /> Aveno</div>
                            <div><input type="radio" checked={selectedBrand === "Cipla"} onChange={handleBrandStateChange} value="Cipla" name="Cipla" /> Cipla</div>
                            <div><input type="radio" checked={selectedBrand === "Sun Pharma"} onChange={handleBrandStateChange} value="Sun Pharma" name="Sun Pharma" /> Sun Pharma</div>
                            <div><input type="radio" checked={selectedBrand === "Emcure"} onChange={handleBrandStateChange} value="Emcure" name="Emcure" /> Emcure</div>
                            <div><input type="radio" checked={selectedBrand === "Zydus"} onChange={handleBrandStateChange} value="Zydus" name="Zydus" /> Zydus</div>
                            <div><input type="radio" checked={selectedBrand === "Tylenol"} onChange={handleBrandStateChange} value="Tylenol" name="Tylenol" /> Tylenol</div>
                            <div><input type="radio" checked={selectedBrand === "MedEasy Basics"} onChange={handleBrandStateChange} value="MedEasy Basics" name="MedEasy Basics" /> MedEasy Basics</div>
                            <div><input type="radio" checked={selectedBrand === "Johnson"} onChange={handleBrandStateChange} value="Johnson" name="Johnson" /> Johnson</div>
                            <div><input type="radio" checked={selectedBrand === "AllBrands"} onChange={handleBrandStateChange} value="AllBrands" name="AllBrands" /> All Brands</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                        <div class="Filter-Heading">Price </div>
                        <div class="Filter-Options">
                            <div><input type="radio" checked={selectedPrice === "$1 - $20"} onChange={handlePriceStateChange} value="$1 - $20" name="price1" /> $1 - $20</div>
                            <div><input type="radio" checked={selectedPrice === "$21 - $50"} onChange={handlePriceStateChange} value="$21 - $50" name="price2" /> $21 - $50</div>
                            <div><input type="radio" checked={selectedPrice === "$51 - $100"} onChange={handlePriceStateChange} value="$51 - $100" name="price3" /> $51 - $100</div>
                            <div><input type="radio" checked={selectedPrice === "$101 - $500"} onChange={handlePriceStateChange} value="$101 - $500" name="price4" /> $101 - $500</div>
                            <div><input type="radio" checked={selectedPrice === "Over $500"} onChange={handlePriceStateChange} value="Over $500" name="price5" /> Over $500</div>
                            <div><input type="radio" checked={selectedPrice === "AllPrices"} onChange={handlePriceStateChange} value="AllPrices" name="AllPrices" /> All Prices</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                        <div class="Filter-Heading">Dose(mg) </div>
                        <div class="Filter-Options">
                            <div><input type="radio" checked={selectedDose === "1mg-50mg"} onChange={handleDoseStateChange} value="1mg-50mg" name="dose1" /> 1mg-50mg</div>
                            <div><input type="radio" checked={selectedDose === "51mg-100mg"} onChange={handleDoseStateChange} value="51mg-100mg" name="dose2" /> 51mg-100mg</div>
                            <div><input type="radio" checked={selectedDose === "101mg-500mg"} onChange={handleDoseStateChange} value="101mg-500mg" name="dose3" /> 101mg-500mg</div>
                            <div><input type="radio" checked={selectedDose === "501mg-1000mg"} onChange={handleDoseStateChange} value="501mg-1000mg" name="dose4" /> 501mg-1000mg</div>
                            <div><input type="radio" checked={selectedDose === "Over 1000mg"} onChange={handleDoseStateChange} value="Over 1000mg" name="dose5" /> Over 1000mg</div>
                            <div><input type="radio" checked={selectedDose === "AllDoses"} onChange={handleDoseStateChange} value="AllDoses" name="AllDoses" /> All Doses / Not Applicable</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                    </div>

                <div class="searchresults">
                {isFetching ? loadingDiv : 
                filteredResults.length === 0 ? (<div class="errorImg"> <img src={['https://demoimages.s3.us-west-2.amazonaws.com/noresults.jpeg']}></img></div>) 
                :filteredResults.map(item => (
                    <div key={item.id} className= "product-Listing">
                        <ReactBootStrap.Card style={{ width: "18rem",fill:"Highlight" }} key={item._id} >
                        <ReactBootStrap.Card.Img variant="top" src={item.ImageURL}  class="responsive"/>
                            <ReactBootStrap.Card.Body>
                                <ReactBootStrap.Card.Title>
                                <h5 style={{textAlign:"center"}}>Name:{item.Name}</h5>&nbsp;&nbsp;
                                </ReactBootStrap.Card.Title>
                                <ReactBootStrap.Card.Text>
                                <p>Brand: {item.Brands}</p>  
                                </ReactBootStrap.Card.Text>
                                <ReactBootStrap.Card.Text>
                                <p>Product Type: {item.ProductType}</p>  
                                </ReactBootStrap.Card.Text>
                                <ReactBootStrap.Card.Text>
                                <p>Price in Cad: {item.Price}</p>  
                                </ReactBootStrap.Card.Text>
                                <ReactBootStrap.Card.Text>
                                <p>Dose: {item.Dose}</p>  
                                </ReactBootStrap.Card.Text>
                                <ReactBootStrap.Card.Text>
                                <p>Description: {item.ProductDescription}</p>
                                </ReactBootStrap.Card.Text>
                                <ReactBootStrap.Card.Text>
                                <div className={classes.root}>
                                        <Button onClick={() => { productDisplay(item._id);}}>View Product</Button>
                                </div>
                                </ReactBootStrap.Card.Text>
                            </ReactBootStrap.Card.Body>
                        </ReactBootStrap.Card>   
                    </div>
        ))}
        </div>        
        </Layout>
        </searchResultsContext.Provider>

    );

}

export default SearchResults;