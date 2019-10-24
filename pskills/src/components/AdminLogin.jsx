import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import {connect, useDispatch} from 'react-redux';
import {adminReg} from '../actions/index';
import { backgroundColor } from '../Styling';
import {adminLogin} from '../actions/index';
import {axiosWithLoginAuth} from '../utils/axiosWithLoginAuth';


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

function AdminLogin(props) {

const dispatch = useDispatch()

const [user, setUser] =useState({
    username: '',
    password: ''

})
 

const onInputChange = e => 
   setUser({...user, [e.target.name]: e.target.value});
   
   const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithLoginAuth()
        .post(`/login`, user)
        .then(result => {
            console.log(result)
            localStorage.setItem("token", result.data.payload);    
           props.history.push("/admin-providers");
    })
   }
 
return(
    <Page>
        <Form onSubmit={handleSubmit}>
            <H2>Admin Login</H2>
            <label>Enter a Username: </label>
            <Input type="text" name="username" onChange={onInputChange}/> 
            <br/>
            <label>Enter a Password: </label>
            <Input name ="password" type="password" onChange={onInputChange}/> 
            <br/>
            <button>Login</button>
        </Form>
</Page>
 )

}


// const mapStateToProps = (state) => {
//     return {
//         user: state.user,
//         loading: state.loading,
//         error: state.error
//     };
// };

export default AdminLogin

// connect(mapStateToProps, {adminLogin})(AdminLogin)
