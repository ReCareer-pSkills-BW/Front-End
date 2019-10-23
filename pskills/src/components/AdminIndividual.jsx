import React,{useState, useEffect} from 'react'
import axios from 'axios'
import PrisonCard from './PrisonCard'
import AddCandidate from './AddCandidate'


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
   const editCandidate = newCandidate => {
       setPrisonList([...prison, newCandidate])
   }
    return (
        <div>
       <AddCandidate editCandidate ={editCandidate}/> 
           
        {prison.map(value => (

      <PrisonCard value ={value}/>
        ))}
        </div>
    )

}

export default PrisonList; 