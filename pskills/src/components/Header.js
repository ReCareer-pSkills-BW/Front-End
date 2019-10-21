import React from "react";
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const Head = styled.header`
display:flex;
justify-content: space-evenly;
align-items: flex-start;
`
const Nav = styled.h3`
font-size: 1.8rem;
text-decoration: none;
color: blue;
`
const Pic = styled.img`
width: 200px;
height: auto;
`

export default function Header() {
  return (
    <>
      <Head>
        <Pic src={require('./ReCareerlogo.jpg')} />
        <NavLink to={'/home'}><Nav>Home</Nav></NavLink>
        <NavLink to={'/admin'}><Nav>Login</Nav></NavLink>
        <NavLink to={'/people'}><Nav>View Canidates</Nav></NavLink>
        <NavLink to={'/individual'}><Nav>individual</Nav></NavLink>
      </Head>
    </>
  );
}
