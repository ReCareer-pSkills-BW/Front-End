import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

const NavStyle = styled(NavLink)`
  padding: 0.2rem 1.2rem;
  background: #333;
  border-radius: 5px; 
  text-decoration: none;
  color: #fff;
  margin-top: 10rem;
`


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
        <NavStyle to ='./prison-list'>Login</NavStyle>
    </form>
    </div>
 )

}

export default AdminLogin;