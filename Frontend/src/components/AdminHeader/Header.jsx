/**
 *
 * @version 1.0
 * @author [Chandan Shukla](chandan.shukla@dal.ca)
 */
// /**
//  *
// * @author Saloni Raythatha(sl768578@dal.ca)  (all the search box functionality code in the Header.jsx file)
// *
// */

import React from 'react';
// import {Nav, NavLink,Bars, Link} from 'react-router-dom';
import { FcSearch } from 'react-icons/fc';
import medicinelogo from "../../images/medicine.svg"
import { FaCartPlus } from 'react-icons/fa';
import { RiLoginBoxFill } from 'react-icons/ri';
import { BsPersonPlusFill } from 'react-icons/bs';
import styled from 'styled-components';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, NavBrand } from '../NavElements/NavElements';
import { CgProfile } from 'react-icons/cg';
import { GrLogout } from 'react-icons/gr';
import { Navbar, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Header/Header.css';
import "./Header.css";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { useState, useEffect } from "react";
import axios from "axios";
import searchResultsContext from '../../containers/SearchResults/SearchResultsContext';
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';



const useStyles = makeStyles({
    root: {
        background: "#1A374D",
        border: 0,
        borderRadius: "10px",
        color: 'white',
        height: 40,
        padding: '0 30px',
        margin: "6px",
        textTransform: 'none',
        "&:hover": {
            background: "#fff",
            color: "#1A374D"
        }
    },
});

export default function Header(props) {

    const navigate = useNavigate();
    const classes = useStyles();

    //Search box functionality 
    // method to search box
    const product_data_url = "/products/";
    const [name, setName] = useState('')
    const { setSearchResults, setIsFetching } = useContext(searchResultsContext);
    const lastSearchTerm = props.searchTerm;

    async function fetchedDataFromURL(searchName) {
        console.log(searchName)
        console.log(product_data_url + searchName)
        setIsFetching(true)
        await axios.get(product_data_url + searchName).then(result => {
            const medicines = [];
            console.log(result);
            result.data.response.forEach((item, index) => {
                medicines.push(item)
                console.log(item['Brands'])
                console.log(item['Name'])
            })
            console.log(medicines)
            setSearchResults(medicines);
            setIsFetching(false)
        });
    }

    function handleSearchButtonClick(e) {
        // fetchedDataFromURL(name);
    }

    function handleSearchBoxValueChange(e) {
        console.log(e.target.value);
        setName(e.target.value);
    }
    function handleLogout() {
        localStorage.removeItem("Email");
        localStorage.removeItem("token");
        navigate('/');
    }

    function handleOrderDetails() {
        navigate('/OrderDetails');
        window.location.reload();
    }
    function handleform() {
        navigate('/postblog');
        window.location.reload();
    }
    function handleshowblog() {
        navigate('/viewBlog');
        window.location.reload();

    }
    function handleveriblog() {
        navigate('/validatingBlog');
        // window.location.reload();

    }


    useEffect(() => {
        if (lastSearchTerm != undefined && lastSearchTerm.length > 0) {
            setName(lastSearchTerm)
            fetchedDataFromURL(lastSearchTerm)
        }
    }, [lastSearchTerm]);

    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark" className="CustomNavbar">
                <Container>

                    <Link to="/AdminHome" className="navbar-brand Brand">
                        <img src={medicinelogo} className="App-logo" alt=""></img>
                        
                        MedEasy
                    </Link>

                   

                </Container>
            </Navbar>

            <Nav>
                <div></div>
                <NavMenu id="navadmin">
                    <Link to='/items' style={{ textDecoration: 'none' }}>
                        <Button id="Buttonadmin" variant="contained"
                            className={classes.root} >
                            Admin Product
                        </Button>
                    </Link>
                    <Link to='/career' style={{ textDecoration: 'none' }}>
                        <Button id="Buttonadmin" variant="contained"
                            className={classes.root}>
                            Careers
                        </Button>
                    </Link>
                    <Button id="Buttonadmin" variant="contained"
                        className={classes.root} onClick={handleveriblog}>
                        Verify Blog
                    </Button>

                </NavMenu>

                <Bars onClick={props.toggle} />
                <NavMenu>
                    <NavMenu>
                        {(localStorage.getItem("token") == undefined) ?
                            <>
                                <NavLink to="/Login"><RiLoginBoxFill /> Login</NavLink>
                                <NavLink to="/Register"><BsPersonPlusFill /> Sign-up</NavLink>
                            </> :
                            <>
                                <NavLink style={{ marginRight: "15px" }} to="/Profile"> <CgProfile /> Profile</NavLink>
                                <NavLink onClick={handleLogout} to="/"><GrLogout />Logout</NavLink>
                            </>}
                        {/* <NavLink to="/Cart"><FaCartPlus /> Cart</NavLink> */}
                    </NavMenu>
                </NavMenu>

            </Nav>
        </>
    )
}

