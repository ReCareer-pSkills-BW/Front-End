import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import PrisonCard from './PrisonCard'


function PrisonList() {
const [prison, setPrisonList] = useState([])
 
    useEffect(() =>{
        const getPrisons = () => {
        axios.get('https://rickandmortyapi.com/api/character/')
          .then( res => {
              setPrisonList(res.data.results);
              console.log(res)
             
          })
         .catch(err => {
             console.log('Error in server', err)
         })
    }
    getPrisons(); 
    }, [])

    return (
        <div>

            <p>testing</p>
        {prison.map(value => (
            <NavLink to = {`/prisons/${value.id}`}> 
            <PrisonCard value ={value}/>
            </NavLink>
        ))}
        </div>
    )

}

export default PrisonList; 