import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import { backgroundColor } from '../Styling';
import {connect, useDispatch} from 'react-redux';
import {adminReg} from '../actions/index';



const NavStyle = styled(NavLink)`
  padding: 0.2rem 1.2rem;
  border-radius: 5px; 
  text-decoration: none;
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

function AdminRegister() {

const dispatch = useDispatch()

const [newAdmin, setNewAdmin] =useState({
    userName: '',
    passWord: ''

})

const onInputChange = e => 
   setNewAdmin({...newAdmin, [e.target.name]: e.target.value});
 
return(
    <Page>
        <Form>
            <H2>Admin Registration</H2>
            <label>Enter a Username: </label>
            <Input type="text" name="username" onChange={onInputChange}/> 
            <br/>
            <label>Enter a Password: </label>
            <Input name ="password" type="password" onChange={onInputChange}/> 
            <br/>
            <NavStyle to ='/admin-providers' onClick={() => dispatch(adminReg(newAdmin))}>Register</NavStyle>
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

export default connect(mapStateToProps, {adminReg})(AdminRegister)