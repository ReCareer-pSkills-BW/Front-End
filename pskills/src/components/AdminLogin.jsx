import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import {connect, useDispatch} from 'react-redux';
import {adminReg} from '../actions/index';

const NavStyle = styled(NavLink)`
  padding: 0.2rem 1.2rem;
  background: #333;
  border-radius: 5px; 
  text-decoration: none;
  color: #fff;
  margin-top: 10rem;
`


function AdminLogin() {

const dispatch = useDispatch()

const [admin, setAdmin] =useState({
    userName: '',
    passWord: ''

})
 

const onInputChange = e => 
   setAdmin({...admin, [e.target.name]: e.target.value});
   
  

 
return(
    <div>
    <h2>AdminLogin</h2>
    <form>
        <label>Enter Username: </label>
        <input type="text" name="username" onChange={onInputChange}/> 
        <br/>
        <label>Enter Password: </label>
        <input name ="password" type="password" onChange={onInputChange}/> 
        <br/>
        <NavStyle to ='/admin-providers' onClick={() => dispatch(adminReg(admin))}>Login</NavStyle>
    </form>
    </div>
 )

}


const mapStateToProps = (state) => {
    return {
        user: state.user,
        loading: state.loading,
        error: state.error
    };
};

export default connect(mapStateToProps, {adminReg})(AdminLogin)
