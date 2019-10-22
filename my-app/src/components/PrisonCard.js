import React from 'react'


const PrisonCard = props => {
    
    return(
    <div>
        <img src ={props.value.image}/>
        <h2>{props.value.name}</h2>
        <p>{props.value.species}</p>
    
    </div>
             
    )
}

export default PrisonCard; 