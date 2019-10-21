import React,{useState} from 'react'
import axios from 'axios'


function AdminLogin() {
const [adminForm, setAdminForm] =useState({
    userName: '',
    passWord: ''

})
 const onInputChange = e => 
   setAdminForm({...adminForm, [e.target.name]: e.target.value});
   
  
 

return(
    <form>
        <label>Enter Username: </label>
        <input name="username" type="text" name="userName" onChange={onInputChange}/> 
        <br/>
        <label>Enter Password: </label>
        <input name ="passWord" type="password" onChange={onInputChange}/> 
        <br/>
        <button>Login</button>
    </form>
 )

}

export default AdminLogin;