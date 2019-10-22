import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import PrisonCard from './PrisonCard'


function PrisonList() {
const [prison, setPrisonList] = useState([])

    useEffect(() =>{
        axios.get('https://rickandmortyapi.com/api/character/')
          .then( res => {
              setPrisonList(res.data.results);
              console.log(res.data)
             
          })
         .catch(err => {
             console.log('Error in server', err)
         })
    }, [])

    return (
        <div>

            <p>testing</p>
        {prison.map(value => (
            <NavLink to = {`/prison-list/${value.id}`}> 
            <PrisonCard value ={value}/>
            </NavLink>
        ))}
        </div>
    )

}

export default PrisonList; 