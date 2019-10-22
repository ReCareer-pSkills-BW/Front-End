import React, { useState } from 'react'


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
           <form onSubmit ={submitForm} >
              <label htmlFor = 'name'>Name</label>
              <input 
              name ='name'
              type ='text'
              id ='name'
              placeHolder ='EnterName'  
             onChange={changeHandler}/>
            
              <label htmlFor ='species'>
                  <input 
                  name ='species'
                  type ='text'
                  id ='species'
                  placeHolder ='Enter Species' 
                  onChange={changeHandler}/>
              </label>
              <button type='submit'>Add Candidate</button>
          </form>
      </div>
     ) 

}

export default AddCandidate; 