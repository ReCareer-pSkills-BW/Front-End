import React from "react";
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const Head = styled.header`
display:flex;
justify-content: space-evenly;
align-items: flex-end;
background: rgba(162, 173, 208, 1);
`
const Nav = styled.button`
font-size: 1.5rem;
text-decoration: none;
color: white;
background: rgba(8, 69, 126, 1);
border: none;
margin: 10px;
border-radius: 15px;
`
const Pic = styled.img`
width: 180px;
height: auto;
margin: 10px;
`

export default function Header() {
  return (
    <>
      <Head>
        <Pic src={require('./ReCareerlogo.png')} />
        <NavLink to={'/'}><Nav>Home</Nav></NavLink>
        <NavLink to={'/admin-login'}><Nav>Login</Nav></NavLink>
        <NavLink to={'/client-providers'}><Nav>View Providers</Nav></NavLink>
        {/* <NavLink to={'/individual'}><Nav>individual</Nav></NavLink> */}
      </Head>
    </>
  );
}
