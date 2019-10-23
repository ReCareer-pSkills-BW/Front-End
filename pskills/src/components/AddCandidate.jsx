import React, { useState } from 'react'
import styled from 'styled-components'
import {adminEdit} from '../actions/index';



const FormStyle = styled.form`
display: flex; 
flex-direction: column;
align-content: center;
align-items: center; 
`


const InputStyle = styled.input`

margin-bottom: 1.2rem; 


`

const initialCandidate ={
    id: '',
    first_name: '',
    last_name: ''
}

const AddCandidate = props => {

    const [editing, setEditing] = useState(false);
    const [candidateToEdit, setCandidateToEdit] = useState(initialCandidate);
    const [candidateInfo, setCandidateInfo] = useState(initialCandidate)

    const editCandidate = candidate => {
        setEditing(true);
        setCandidateToEdit(candidateInfo);
      };
   
      const confirmEdit = e => {
          e.preventDefault();
          adminEdit()
      }

  const submitForm = e => {
      e.preventDefault();
      props.editCandidate(candidateInfo);
      setCandidateInfo([{name: '', species: ''}]) 
  }

    const changeHandler = e => {
        setCandidateToEdit({...candidateToEdit, [e.target.name]: e.target.value})
    }
    
    return(
      <div>
           <FormStyle  onClick={() => confirmEdit(candidateInfo)} >
              <label htmlFor = 'name'>Name</label>
              <InputStyle 
              name ='name'
              type ='text'
              id ='name'
              placeholder ='Enter Name'  
             onChange={changeHandler}/>
            
              <label htmlFor ='species'> Species</label>
                  <InputStyle 
                  name ='species'
                  type ='text'
                  id ='species'
                  placeholder ='Enter Species' 
                  onChange={changeHandler}/>
              <button type='submit'>Confirm Changes</button>
          </FormStyle>
      </div>
     ) 

}

export default AddCandidate; 