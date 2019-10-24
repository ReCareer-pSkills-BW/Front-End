import { axiosWithLoginAuth } from '../utils/axiosWithLoginAuth';
import axios from 'axios';

export const LOAD_DATA = 'LOAD_DATA';
export const LOAD_SUCCESS = 'LOAD_SUCCESS';
export const LOAD_FAILURE ='LOAD_FAILURE';

// React 2 stuff, feel free to check it out

export const fetchData = () => (dispatch) => {
    dispatch({type: LOAD_DATA })
    axios
    .get(' https://recareer.herokuapp.com/api/public')
        .then(res => {
            dispatch({ type: LOAD_SUCCESS, payload: res.data})
            console.log(res)
        })
        .catch(err => dispatch({ type: LOAD_FAILURE, payload: err.response}))
}

export const START_LOGIN = 'START_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const adminLogin = (userInfo, history) => (dispatch) => {
    dispatch({type: START_LOGIN})
    axios
    .post('http://localhost:3333/login', userInfo) 
        .then(res => { 
            localStorage.setItem('token', res.data.payload)
            console.log(res.data)
            dispatch({type: LOGIN_SUCCESS, payload: res.data})
    })
        .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err.response}))
}

export const DELETE_DATA = 'DELETE_DATA';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAILURE ='DELETE_FAILURE';

export const adminDel = (id) => (dispatch) => {
    dispatch({type: DELETE_DATA})
    axiosWithLoginAuth()
    .delete(`/providers/candidates/${id}`)
        .then(res => dispatch({type: DELETE_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: DELETE_FAILURE, payload: err.response}))
}

export const EDIT_DATA = 'EDIT_DATA';
export const EDIT_SUCCESS = 'EDIT_SUCCESS';
export const EDIT_FAILURE = 'EDIT_FAILURE';

export const adminEdit = (user) => (dispatch) => {
    dispatch({type: EDIT_DATA})
    axiosWithLoginAuth()
    .post('/:id', user) 
        .then(res => dispatch({type: EDIT_SUCCESS, payload: res.data}))
        .catch(err => dispatch({ type: EDIT_FAILURE, payload: err.response}))
}

export const ADD_DATA = 'ADD_DATA';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILURE = 'ADD_FAILURE';

export const adminAddCandidate = (candidate) => (dispatch) => {
    dispatch({type: ADD_DATA})
    axiosWithLoginAuth()
    .post('/providers/candidates', candidate) 
        .then(res => dispatch({type: ADD_SUCCESS, payload: res.data}))
        .catch(err => dispatch({ type: ADD_FAILURE, payload: err.response}))
}