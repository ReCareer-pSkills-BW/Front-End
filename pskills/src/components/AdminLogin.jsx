import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import {connect, useDispatch} from 'react-redux';
import {adminReg} from '../actions/index';
import { backgroundColor } from '../Styling';
import {adminLogin} from '../actions/index';



const NavStyle = styled(NavLink)`
  padding: 0.2rem 1.2rem;
  background: #333;
  border-radius: 5px; 
  text-decoration: none;
  color: #fff;
  margin-top: 10rem;
`
const Page = styled.div `
    background: ${backgroundColor};
    height:100vh;
`
const Form = styled.form `
    background: white;
    width:30vw;
    margin: 5% 35vw
    border-radius: 10px;
    border: 1px solid black;
    height: 30vh;
    text-align:center;
`

const Input = styled.input `
    margin: 20px 10px;
`

const H2 = styled.h2 `
    text-align:center;
    margin: 30px 0 40px
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
    <Page>
        <Form>
            <H2>Admin Login</H2>
            <label>Enter a Username: </label>
            <Input type="text" name="username" onChange={onInputChange}/> 
            <br/>
            <label>Enter a Password: </label>
            <Input name ="password" type="password" onChange={onInputChange}/> 
            <br/>
            <NavStyle to ='/admin-providers' onClick={() => dispatch(adminLogin())}>Login</NavStyle>
        </Form>
</Page>
 )

}


const mapStateToProps = (state) => {
    return {
        user: state.user,
        loading: state.loading,
        error: state.error
    };
};

export default connect(mapStateToProps, {adminLogin})(AdminLogin)
