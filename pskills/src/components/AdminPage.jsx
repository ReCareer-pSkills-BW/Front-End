import React, {useEffect, useState} from 'react';
import {connect, useDispatch } from 'react-redux';
import {fetchData} from '../actions/index';
import styled from "styled-components";
import { backgroundColor, cardColor, mainFont } from '../Styling';
import { adminDel } from '../actions/index';
import { adminAddCandidate } from '../actions/index';

const Providers = styled.div `
    background: ${backgroundColor};
    text-align:center;
    margin-top: 3%;

`

const ClientCard = styled.div `
    background: ${cardColor};
    width:50%;
    margin: 3% 25%;
    padding: 2% 0%;
    border-radius:10px;
    border:1px solid black;
    font-size:1.2em;
        
`

const H4 = styled.h4 `
    width:30%;
    margin: 0 35% 4%;
    transition: color 1s;
    transition: transform 1s;
        :hover{
            color: lightskyblue;
            cursor: pointer;
            transform: scale(1.5);
        }
`

const Info = styled.div `
    display:inline-block;
    margin: 0 5% 2%;
`

const AdminPage = (props) => {
    const [newCandidate, setNewCandidate] = useState({
        name: '',
        candidates: [
            {
            name: '',
            age: '',
            primary_skill: ''
            }
        ]
    })

    const changeHandler = event => {
        setNewCandidate({
            ...newCandidate, [event.target.name] : event.target.value
        })
    }

    const dispatch = useDispatch()

    useEffect (() => {
        props.fetchData();
        console.log(props.jobData)
    }, [])


    if(props.loading) {
        
        return <h3>Loading Data...</h3>
    }
    console.log(props.jobData)

    console.log(props.jobData)

    return (

        <Providers>
            <h1>Admin Page</h1>
            <ClientCard>
                {props.jobData.map(data => {
                    return (
                        <div>
                            <H4 onClick={() => props.history.push(`/admin-main/${data.id}`)}>{data.name}</H4>
                            <button onClick={() => dispatch(adminAddCandidate(newCandidate))}>Add Candidate</button>
                            <div>
                                <input type='text' name='name' placeholder='Name' onChange={changeHandler}/>
                                <input type='text' name='age' placeholder='Age' onChange={changeHandler}/>
                                <input type='text' name='primary_skill' placeholder='Skill' onChange={changeHandler}/>
                            </div>
                                {props.jobData[data.id].candidates.map(people => {
                                    return (
                                        <Info>
                                            <>
                                                <p>Name: {people.name}</p>
                                                <p>Age: {people.age}</p>
                                                <p>Skill: {people.primary_skill}</p>
                                                <button onClick={() => dispatch(adminDel(people.id))}>Delete</button>
                                                <button>Edit</button>
                                            </>
                                        </Info>
                                    )
                                })}

                        </div>
                    )
})} 
            </ClientCard>

         
        </Providers>                     
         
        )
}

// React 2 stuff, feel free to check it out

const mapStateToProps = (state) => {
    console.log(state.jobData)
    return {
        jobData: state.jobData,
        loading: state.loading,
        error: state.error
    };
};

export default connect(mapStateToProps, {fetchData})(AdminPage)