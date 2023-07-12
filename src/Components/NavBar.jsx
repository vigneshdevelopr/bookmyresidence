import React from 'react'
import { styled } from 'styled-components'

function NavBar() {
  return (
<Navbar>
    <NavContainer>
        <LogoSec className='logo'>BookMyResidence</LogoSec>
        <Navitems>
            <Navbtn>Register</Navbtn>
            <Navbtn>Signin</Navbtn>
        </Navitems>
    </NavContainer>
</Navbar>
    )
}

export default NavBar

const Navbar = styled.div`
    height: 50px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
`
const NavContainer = styled.div`
width: 100%;
max-width: 1024px;
background-color: #ffffff;
display: flex;
align-items: center;
justify-content: space-between;
`
const Navitems = styled.div`
    
`
const Navbtn = styled.button`
    margin-left: 20px;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    background-color: #38435a;
    color:#ffff;

   &:hover{
        background-color: #5392f9 !important;
    }
`
const LogoSec = styled.span`
    font-size: x-large;

    font-family: 'Ysabeau SC', sans-serif;
    font-weight: bolder;
`
