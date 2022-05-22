/**
 *
 * @version 1.0
 * @author [Chandan Shukla](chandan.shukla@dal.ca)
 */


import React from 'react';
import './Footer.css';


function Footer(){
    return(
        <div className="footer">
            <div className="align-content-stretch container">
                <div className="row">
                    <div className="col center">
                        <h3>MedEasy</h3>
                        <h5>About MedEasy</h5>
                        <h5>Career</h5>
                        <h5>Terms of Service</h5>
                        <h5>Contact</h5>
                    </div>
                    <div className="col center">
                        <h3>Shopping</h3>
                        <h5>Offers/Coupons</h5>
                        <h5>Health Articles</h5>
                        <h5>FAQs</h5>
                    </div>
                    <div className="col center">
                        <h3>Social</h3>
                        <h5>Facebook</h5>
                        <h5>Twitter</h5>
                        <h5>LinkedIn</h5>
                        <h5>YouTube</h5>
                    </div>
                </div>
                <div className="row">
                    <p className="col center">
                        &copy;{new Date().getFullYear()} MedEasy Pvt Ltd | All rights reserved | Privacy
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;