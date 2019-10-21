import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'


function AdminLogin() {
const [adminForm, setAdminForm] =useState({
    userName: '',
    passWord: ''

})
 

const onInputChange = e => 
   setAdminForm({...adminForm, [e.target.name]: e.target.value});
   
  
 

return(
    <div>
    <h2>AdminLogin</h2>
    <form>
        <label>Enter Username: </label>
        <input type="text" name="userName" onChange={onInputChange}/> 
        <br/>
        <label>Enter Password: </label>
        <input name ="passWord" type="password" onChange={onInputChange}/> 
        <br/>
        <NavLink to ='/prison-list'>Login</NavLink>
    </form>
    </div>
 )

}

export default AdminLogin;