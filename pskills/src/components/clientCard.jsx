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
transition: transform 1.5s;

&:hover {
  transform: scale(1.3);
  margin: 5rem;
}
`

export default function ClientCard(props) {
  return (
    <div>
    <Card >
        <img variant="top" src={props.image} />
          <div>
            <h2>{props.name}</h2>
            <div>
                <p> Skills: {props.skills}</p>
              <p>Age: {props.age}</p>
            </div>
        </div>
      </Card>
  </div>
  )
}
