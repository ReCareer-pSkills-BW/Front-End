import React from "react";
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const Head = styled.header`
display:flex;
justify-content: space-evenly;
align-items: center;
`
const Nav = styled.h3`
font-size: 1.8rem;
text-decoration: none;
color: blue;
`
const Title = styled.div`
color: red;
text-align: center;
font-size: 3rem;
`

export default function Header() {
  return (
    <>
      <Head>
        <Title>
          ReCareer
        </Title>
        <NavLink to={'/home'}><Nav>Home</Nav></NavLink>
        <NavLink to={'/admin'}><Nav>Login</Nav></NavLink>
        <NavLink to={'/people'}><Nav>View Canidates</Nav></NavLink>
      </Head>
    </>
  );
}
