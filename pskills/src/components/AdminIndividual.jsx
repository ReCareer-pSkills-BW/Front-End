import React,{useState, useEffect} from 'react'
import axios from 'axios'
import PrisonCard from './PrisonCard'
import AddCandidate from './AddCandidate'
import {NavLink} from 'react-router-dom'


function PrisonList() {
const [prison, setPrisonList] = useState([])    
const [statePen, setStatePen] = useState([])
const [countyJail, setCountyJail] =useState([])
const [federalFacilty, setFederalFacility] = useState([])
const backUp = 'https://rickandmortyapi.com/api/character/'
 
    useEffect(() =>{
        const getPrisons = () => {
         axios.get('http://localhost:3333/providers')
          .then( res => {
              //setPrisonList(res.data.results);
              const statePenCandidates = res.data[0].candidates
              const countyJailCandidates = res.data[1].candidates
              console.log(statePenCandidates);
              setStatePen(statePenCandidates);
              setCountyJail(countyJailCandidates);
              
          })
         .catch(err => {
             console.log('Error in server', err)
         })
    }
    getPrisons(); 
    }, [])
//    const editCandidate = newCandidate => {
//        setPrisonList([...prison, newCandidate])
//    }
    return (
        <div>
     {/* <AddCandidate editCandidate ={editCandidate}/>  */}
           {countyJail.map(value => (
               <NavLink to = {`/admin-individual/${value.id}`}>
               <PrisonCard candidate ={value} id ={value.id}/>
               </NavLink>
           ))}
        {statePen.map(value => (
            <PrisonCard candidate ={value} id ={value.id}/>
        ))}

      
        
        </div>
    )

}

export default PrisonList; 