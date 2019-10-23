import React from "react";
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import { backgroundColor, textColor } from '../Styling';

const Head = styled.header`
display:flex;
align-items: flex-end;
background: rgba(162, 173, 208, 1);
`
const Nav = styled.button`
font-size: 1.2rem;
text-decoration: none;
color: lightcyan;
background: rgba(8, 69, 126, 1);
border: none;
margin: 10px;
border-radius: 15px;
padding:10px;
transition: color 1s;
  :hover{
    color: ${textColor};
    background: lightcyan;
    cursor: pointer;
  }
`
const Pic = styled.img`
width: 180px;
height: auto;
margin: 10px;
`
const ButtonDiv = styled.div `
margin: 0 0 1vh 53vw;
  
`

export default function Header() {

  const logout = () => {
    localStorage.removeItem("token");
}

  return (
    <>
      <Head>
        <Pic src={require('./ReCareerlogo.png')} />
        <ButtonDiv>
          <NavLink to={'/'}><Nav>Home</Nav></NavLink>
          <NavLink to={'/admin-register'}><Nav>Register</Nav></NavLink>
          <NavLink to={'/admin-login'}><Nav>Login</Nav></NavLink>
          <NavLink to={'/client-providers'}><Nav>View Providers</Nav></NavLink>
          <NavLink to={'/'} onClick={logout}><Nav>Log Out</Nav></NavLink>
        </ButtonDiv>
      </Head>
    </>
  );
}
