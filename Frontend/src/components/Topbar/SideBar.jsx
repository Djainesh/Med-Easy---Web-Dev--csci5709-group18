/**
 *
 * @version 1.0
 * @author [Chandan Shukla](chandan.shukla@dal.ca)
 */

import React from 'react';
import {SideBarC,CloseIcon, Icon, SideBarMenu, SideBarLink,SideBarMenuWrap} from '../NavElements/NavElements';
import { useNavigate } from 'react-router-dom';





export default function SideBar(props) {

  const navigate = useNavigate();
  function handleLogout()
  {
      localStorage.removeItem("Email");
      localStorage.removeItem("token");
      navigate('/');
  } 
  return (
    <>

    <SideBarC open={props.open} onClick={props.toggle}>
        <Icon onClick={props.toggle}>
            <CloseIcon />
        </Icon>
        <SideBarMenuWrap>
          <SideBarMenu>
          {(localStorage.getItem("token") == undefined) ?
            <>
                <SideBarLink to="/Login"> Login</SideBarLink>
                <SideBarLink to="/Register">Sign-up</SideBarLink>
                </>:
                <>
                <SideBarLink style={{marginRight: "15px"}}  to= "/Profile"> Profile</SideBarLink>
                <SideBarLink  onClick={handleLogout} to = "/">Logout</SideBarLink>
                </>}
            <SideBarLink to="/Cart" onClick={props.toggle}>
              Cart
            </SideBarLink>
            <SideBarLink to="/BookTest">
              COVID-19 Test
            </SideBarLink>
            <SideBarLink to="/OrderDetails">
              OrderDetails
            </SideBarLink>
          </SideBarMenu>
        </SideBarMenuWrap>
    </SideBarC>
    
    </>
    
  );
}

