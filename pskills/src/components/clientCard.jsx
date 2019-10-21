import React from "react";
import styled from "styled-components";

const Card = styled.div`
width: 400px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin: 1%;
color: maroon;
text-align: center;
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
