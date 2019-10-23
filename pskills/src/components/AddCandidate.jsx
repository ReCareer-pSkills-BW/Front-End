import React, { useState } from 'react'
import styled from 'styled-components'



const FormStyle = styled.form`
display: flex; 
flex-direction: column;
align-content: center;
align-items: center; 
margin-top: 1.2rem;
`


const InputStyle = styled.input`

margin: 0.5rem 0rem; 
padding: 0.5rem 1.2rem;
border: 1px black solid;
border-radius: 5px;

`

const ButtonStyle = styled.button`

display: inline-block;
max-width: 100%;
border: none;
border-radius: 5px;
background: #333;
color: #fff;
padding: 0.5rem 1rem;
margin-top: 0.5rem;

`

const LabelStyle = styled.label`
  color: #333;
  font-size: 18px;
  font-weight: bold; 
`


const HeaderStyle = styled.h2`

text-align: center;
font-weight: bold; 




`


const AddCandidate = props => {
    const [candidate, setCandidate] = useState([{
        name: '' ,
        species: ''
    }])
   

  const submitForm = e => {
      e.preventDefault();
      props.addCandidate(candidate);
      setCandidate([{name: '', species: ''}]) 
  }

    const changeHandler = e => {
        setCandidate({...candidate, [e.target.name]: e.target.value})
    }
    
    return(
      <div>
          <HeaderStyle>Add a Candidate</HeaderStyle>
           <FormStyle onSubmit ={submitForm} >
              <LabelStyle htmlFor = 'name'>Name</LabelStyle>
              <InputStyle 
              name ='name'
              type ='text'
              id ='name'
              placeholder ='Enter Name'  
             onChange={changeHandler}/>
            
              <LabelStyle htmlFor ='species'> Species</LabelStyle>
                  <InputStyle 
                  name ='species'
                  type ='text'
                  id ='species'
                  placeholder ='Enter Species' 
                  onChange={changeHandler}/>
              <ButtonStyle type='submit'>Add Candidate</ButtonStyle>
          </FormStyle>
      </div>
     ) 

}

export default AddCandidate; 