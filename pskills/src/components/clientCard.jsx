import React from "react";
import styled from "styled-components";

const Card = styled.div`
background: rgba(255, 255, 255, 0.8);
border-radius: 10px;
box-shadow: 0 0 10px black;
padding: 1rem 2.2rem;
max-width: 100%;
text-align: center; 
margin-top: 1.5rem;

`

export default function ClientCard(props) {
  return (
    <div>
    <Card >
        <img variant="top" src={props.image} />
          <div>
            <h2>{props.name}</h2>
            <div>
            <p>Location: {props.location.name}</p>
                <p> Skills: {props.skills}</p>
              <p>Bio: {props.bio}</p>
            </div>
        </div>
      </Card>
  </div>
  )
}
