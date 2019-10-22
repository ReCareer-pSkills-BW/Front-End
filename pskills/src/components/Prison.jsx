import React, {useState, useEffect} from 'react'
import axios from 'axios'
import PrisonCard from './PrisonCard'
import {NavLink} from 'react-router-dom'



const Prison = props => {
    const [prison, setPrison] = useState({})

  
    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${props.match.params.prisonID}`)
        .then(res => {
            setPrison(res.data)
            console.log(res); 
            console.log(props.match.params.prisonID);
            console.log(prison);
            
        })
        .catch (err => {
            console.log('Error in server', err);
        })
    }, [])
    
   console.log(prison);
    return (
         
        
        //  <PrisonCard > 
     <p>test</p>

    )

}

export default Prison; 