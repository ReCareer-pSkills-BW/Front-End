import React from 'react'
import styled from 'styled-components'
import {adminDel} from '../actions/index';


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
    
    const deleteCandidate = id => {
        adminDel(id)
    }

    return(
    <CardContainer>
       <ItemContainer>
        <img src ={props.value.image}/>
        <h2>{props.value.name}</h2>
        <p>{props.value.species}</p>
        <button onClick={() => deleteCandidate(props.candidate.id)}>Delete Candidate</button>
       </ItemContainer>
    </CardContainer>
             
    )
}

export default PrisonCard; 