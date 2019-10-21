import React, {useState, useEffect} from 'react'
import axios from 'axios'
import PrisonCard from './PrisonCard'
import {NavLink} from 'react-router-dom'



const Prison = props => {
    const [prison, setPrison] = useState(null)


    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${props.match.params.prisonID}`)
        .then(res => {
            setPrison(res.data.results)
        })
        .catch (err => {
            console.log('Error in server', err);
        })
    }, [props.match.params.prisonID])
    
   
    return (
     <div>
         <PrisonCard id ={prison}/> 
     </div>

    )

}

export default Prison; 