/**
 *
 * @version 1.0
 * @author [Chandan Shukla](chandan.shukla@dal.ca)
 */


import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import {VscThreeBars} from 'react-icons/vsc';
import {FaTimes} from 'react-icons/fa';




export const Nav = styled.nav`
    background: linear-gradient(to right, #1A374D , #11999E 60%, #E4F9F5);
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem cacl((100vw - 1000px)/2);
    z-index: 15;

    @media screen and (max-width: 1200px){
        transition: 0.8s all ease;
    }
`

export const NavBrand = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 1.2rem;
    height: 100%;
    cursor: pointer;
    margin-left: 0.5rem;
    font-size: 25px;
    &.active{
        color: #fff;
    }
`

export const NavLink = styled(Link)`
    color: #1A374D;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem;
    height: 100%;
    cursor: pointer;
    margin-left: 0.5rem;
    &.active{
        color: #11999E;
    }
    &:hover {
        color: #11999E;
        border-bottom: 3px solid #147581;
      }
`

export const Bars = styled(VscThreeBars)`
    display: none;
    color: #1A374D;

    @media screen and (max-width: 1200px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 2rem;
        cursor: pointer;
    }
`
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 1200px){
        display:none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 6px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #1A374D;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #1A374D;
    }
`


export const NavItem = styled.li`
    height: 80px;

`

export const SideBarC = styled.aside`

    position: fixed;
    width: 100%;
    height: 100%;
    background: #185263;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.2s ease-in-out; 
    opacity: ${({open}) => (open ? '100%' : '0')};
    top: ${({open}) => (open ? '0' : '-100%')};
    z-index: 999;
`
   

export const CloseIcon =  styled(FaTimes)`
    color: #fff;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;

    &:hover{
        color: #11999E;
        transition: 0.2s ease-in-out;
      }
`

export const SideBarMenuWrap = styled.div`
  color: #11999E;
`;





export const SideBarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #E4F9F5;
  cursor: pointer;
  
  &:hover{
    color: #11999E;
    background: #E4F9F5;
    transition: 0.2s ease-in-out;
  }

`;



export const SideBarMenu = styled.div`

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
  
  
`;


