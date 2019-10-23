import React, { useState } from 'react'
import styled from 'styled-components'



const FormStyle = styled.form`
display: flex; 
flex-direction: column;
align-content: center;
align-items: center; 
`


const InputStyle = styled.input`

margin-bottom: 1.2rem; 


`

const AddCandidate = props => {
    const [candidate, setCandidate] = useState([{
        name: '' ,
        species: ''
    }])
   

  const submitForm = e => {
      e.preventDefault();
  }

    const changeHandler = e => {
        setCandidate({...candidate, [e.target.name]: e.target.value})
    }
    
    return(
      <div>
           <FormStyle onSubmit ={submitForm} >
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
              <button type='submit'>Add Candidate</button>
          </FormStyle>
      </div>
     ) 

}

export default AddCandidate; 