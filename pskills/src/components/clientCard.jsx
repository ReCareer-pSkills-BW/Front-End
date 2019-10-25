import React from "react";
import styled from "styled-components";

const Card = styled.div`
background: rgba(255, 255, 255, 0.8);
border-radius: 10px;
box-shadow: 0 0 10px black;
padding: 1rem 2.2rem;
width: 55%;
text-align: center; 
margin-top: 1.5rem;
transition: transform 1.5s;

&:hover {
  transform: scale(1.2);
  margin: 5rem;
}
`
const Pic = styled.img`
max-width: 500px
height: 500px;
`
const Body = styled.div`
display:flex;
justify-content:center;
`

const Header = styled.h1`
font-size: 3rem;
color: purple;
`
const SubHead = styled.h2`
font-size: 2rem;
color: red;
`

export default function ClientCard(props) {
  return (
    <Body>
    <Card >
        <Pic variant="top" src={props.image} />
          <div>
            <Header>{props.name}</Header>
            <div>
              <SubHead>Location: {props.location}</SubHead>
              <SubHead>Species: {props.species}</SubHead>
              <p>Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum elit ac libero semper, et rhoncus purus ultricies. Duis pretium mauris a bibendum tempor. Aenean nunc nibh, tincidunt sed fringilla ac, feugiat a dolor. Aliquam tempor egestas tortor sed euismod. Sed eu magna urna. Aliquam vel sapien sit amet diam euismod laoreet. Donec et consectetur nulla. Aliquam eu efficitur augue. Donec efficitur ex quis lorem pellentesque sagittis. Sed in sollicitudin velit. Morbi nec lectus vitae ex suscipit vulputate.</p>

            </div>
        </div>
      </Card>
  </Body>
  )
}
