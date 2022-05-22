/**
 *
 * @version 1.0
 * @author [Chandan Shukla](chandan.shukla@dal.ca)
 */

import React from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import {NavLink, Link} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown'
import { FcSearch } from 'react-icons/fc';
import {FaCartPlus} from 'react-icons/fa';
import {RiLoginBoxFill} from 'react-icons/ri';
import {BsPersonPlusFill} from 'react-icons/bs';
import './Header.css';
// let navigate = useNavigate(); 
// function routeChange(){ 
//     navigate("/checkout");
// }




export default function Header(props) {
    return (
        <div>

        <Navbar collapseOnSelect expand="lg" variant="dark" className="CustomNavbar">
            <Container>
            <Link to="/" className="navbar-brand Brand">MedEasy</Link>
            {/* <div class="d-flex justify-content-center">
            <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"></input>
            <button id="search-button" type="button" class="btn searc">
                <FcSearch />
            </button>
            </div> */}
            {/* <div className="checksearch" >
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <button type="button" class="btn searchButton">
                    <FcSearch />
                </button>
            </div> */}
            <NavLink to="/Cart" className="nav-link navLinkContent"><FaCartPlus /> Cart</NavLink>
            </Container>
        </Navbar>
        {/* <Navbar collapseOnSelect expand="lg" variant="dark" className="CustomNavbar">
            <Container>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Dropdown className="d-inline mx-2 dropdown" autoClose="outside">
                    <Dropdown.Toggle id="dropdown-autoclose-true" className="dropbtn">
                    Profile
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-content">
                    <Dropdown.Item href="#">Baby Needs</Dropdown.Item>
                    <Dropdown.Item href="#">Personal Care</Dropdown.Item>
                    <Dropdown.Item href="#">Health & Nutrition</Dropdown.Item>
                    <Dropdown.Item href="#">Vitamin & Supplements</Dropdown.Item>   
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="d-inline mx-2 dropdown" autoClose="outside">
                    <Dropdown.Toggle id="dropdown-autoclose-true" className="dropbtn">
                    Product
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-content">
                    <Dropdown.Item href="#">Baby Needs</Dropdown.Item>
                    <Dropdown.Item href="#">Personal Care</Dropdown.Item>
                    <Dropdown.Item href="#">Health & Nutrition</Dropdown.Item>
                    <Dropdown.Item href="#">Vitamin & Supplements</Dropdown.Item>   
                    </Dropdown.Menu>
                </Dropdown>
                <button class="btn pcrButton" type="button">PCR Test Booking</button>
                </Nav>
                <Nav className="nav-item">
                    <li>
                        <NavLink to="/Login" className="nav-link navLinkContent"><RiLoginBoxFill /> Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Sinup" className="nav-link navLinkContent"><BsPersonPlusFill /> Sin-up</NavLink>
                    </li>
                    <li>
                    <NavLink to="/Cart" className="nav-link navLinkContent"><FaCartPlus /> Cart</NavLink>
                    </li>
            </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar> */}
        </div>
    );
}


