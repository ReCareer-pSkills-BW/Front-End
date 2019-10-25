import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/index';
import '../App.css'
import styled from "styled-components";
import { backgroundColor, cardColor, mainFont } from '../Styling';
import { Link } from "react-router-dom";
import ClientIndividual from './ClientIndividual';
import axios from 'axios';

const H1 = styled.h1`

`

const MainDisplay = styled.div`
    background: ${backgroundColor};
    height: 100vh;
    display:flex;
    flex-wrap: wrap;
`

const Card = styled(Link)`
    text-align:center;
    background: ${cardColor};
    height: 20%;
    width: 30%;
    border-radius:10px;
    margin: 3%;
    border:1px solid black;
    font-size: 1.2rem;
    justify-content:space-evenly;
        :hover{
            cursor: pointer;
        }
`


const ClientMain = (props) => {
    const [location, setLocation] = useState([])
    const [characters, setCharacters] = useState([]);
    const thisId = props.match.params.provider
    console.log(props)


    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/character/?page=${thisId[0]}`)
            .then(response => {
                console.log(response)
                setCharacters(response.data.results);
            })
            .catch(error => {
                console.log('error', error)
            });
        // TODO: Add API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    }, []);
    console.log(characters)

    console.log(props.jobData[thisId])
    // if(props.jobData[thisId] == undefined || location == undefined) {
    //     return <h3>Please go back and choose a prison...</h3>
    // }
    return (
        <>
            <H1>{props.jobData[thisId].institution}</H1>
            <MainDisplay>

                {characters.map(char => {
                        return (
                            <Card onClick={() => props.history.push(`/client-individual/${char.id}`)}>
                                <p>Name: {char.name}</p>
                                <p>Gender: {char.gender}</p>
                            </Card>
                        )
                    }
                )
                }


            </MainDisplay>
        </>
    );
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

export default connect(mapStateToProps, { fetchData })(ClientMain)