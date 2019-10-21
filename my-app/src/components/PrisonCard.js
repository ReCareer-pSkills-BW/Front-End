import React from 'react'


const PrisonCard = props => {
    return(
    <div>
        <img src ={props.prisonImage}/>
        <h2>{props.prisonName}</h2>
        <p>{props.prisonSpecies}</p>
        <p>{props.prisonLocation}</p>
    </div>
             
    )
}

export default PrisonCard; 