/**
 *
 * @version 1.0
 * @author [Chandan Shukla](chandan.shukla@dal.ca)
 */

import React, {useState} from 'react'
import './Layout.css';

import Header from '../HeaderNew/Header';
import SideBar from '../Topbar/SideBar';



export default function Layout(props) {

    const [open,setOpen] = useState(false);

    const isToggle = () => {
        setOpen(!open);
    }

    return (
        <div className="page-container">  {/*Important CSS propertes to stick the Footer at the bottom */}
            <div className="content-wrap">
                <Header toggle={isToggle} searchTerm={props.searchTerm}/>
                <SideBar open={open} toggle={isToggle}/>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    );
}
