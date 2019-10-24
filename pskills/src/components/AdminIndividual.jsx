import React,{useState, useEffect} from 'react'
import axios from 'axios'
import PrisonCard from './PrisonCard'
import AddCandidate from './AddCandidate'



function PrisonList(props) {
const [prison, setPrisonList] = useState([])    
const [statePen, setStatePen] = useState([])
const [countyJail, setCountyJail] =useState([])
const [federalFacilty, setFederalFacility] = useState([])
 

 
    useEffect(() =>{
        const getPrisons = () => {
         axios.get('http://localhost:3333/providers')
          .then( res => {
              //setPrisonList(res.data.results);
              console.log(res);
              const statePenCandidates = res.data[0].candidates
              const countyJailCandidates = res.data[1].candidates
              const federalFacilityCandidates = res.data[2].candidates
              console.log(federalFacilityCandidates);
              setStatePen(statePenCandidates);
              setCountyJail(countyJailCandidates);
              setFederalFacility(federalFacilityCandidates);
              
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
          
        {statePen.map(value => {
            if(props.match.params.candidateID === '00' && value.id === 0) {
               return <PrisonCard candidate ={value} id ={value.id}/>
            } else if(props.match.params.candidateID === '01' && value.id ===1){
                return <PrisonCard candidate ={value} id ={value.id}/>
            }
            if(props.match.params.candidateID === '02' && value.id === 2){
                return <PrisonCard candidate ={value} id ={value.id}/>
            }
        })}

        {countyJail.map(value => {
            if(props.match.params.candidateID === '10' && value.id === 0) {
                return <PrisonCard candidate ={value} id ={value.id}/>
            } else if(props.match.params.candidateID === '11' && value.id === 1){
                return <PrisonCard candidate ={value} id ={value.id}/>
            }
            if(props.match.params.candidateID === '12' && value.id ===2){
                return <PrisonCard candidate ={value} id ={value.id}/>
            }
        })}

        {federalFacilty.map(value => {
            if(props.match.params.candidateID === '20' && value.id === 0){
                return <PrisonCard candidate ={value} id ={value.id}/>
            } else if(props.match.params.candidateID ==='21'&& value.id === 1){
                return <PrisonCard candidate ={value} id ={value.id}/>
            }
            if(props.match.params.candidateID === '22' && value.id === 2) {
                return <PrisonCard candidate ={value} id ={value.id}/>
            }
        })}



      
        
        </div>
    )

}

export default PrisonList; 