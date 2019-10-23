import React from 'react'
import styled from 'styled-components'



const CardContainer = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center; 
margin-top: 1.5rem;
`
const ItemContainer = styled.div`
background: rgba(255, 255, 255, 0.8);
border-radius: 10px;
box-shadow: 0 0 10px black;
padding: 1rem 2.2rem;
max-width: 100%;
text-align: center; 

`

const PrisonCard = props => {
    
    return(
    <CardContainer>
       <ItemContainer>
        <img src ={props.value.image}/>
        <h2>{props.value.name}</h2>
        <p>{props.value.species}</p>
       </ItemContainer>
    </CardContainer>
             
    )
}

export default PrisonCard; 