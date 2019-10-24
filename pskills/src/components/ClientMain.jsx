import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {fetchData} from '../actions/index';
import '../App.css'
import styled from "styled-components";
import { backgroundColor, cardColor, mainFont } from '../Styling';
import {Link} from "react-router-dom";
import ClientIndividual from './ClientIndividual'

const H1 = styled.h1 `

`

const MainDisplay = styled.div `
    background: ${backgroundColor};
    height: 100vh;
    display:flex;
`

const Card = styled(Link) `
    text-align:center;
    background: ${cardColor};
    height: 20%;
    width: 30%;
    border-radius:10px;
    margin: 3%;
    border:1px solid black;
    justify-content:space-evenly;
        :hover{
            cursor: pointer;
        }
`

const initialLocation = {
    id: '',
    name: '',
    type: '',
    residents: [],
  };



const ClientMain = (props) => {
    const [location, setLocation] = useState(initialLocation)

    const thisId = props.match.params.provider -1

    // useEffect (() => {
        
    //     props.fetchData();
     
    
    //     setLocation(props.jobData[thisId]);
    //     const thisLocation = props.jobData.find(
    //         location => `${location}` === props.jobData[thisId]
    //     );    console.log(location)

    //     if (thisLocation) setLocation(thisLocation);

    // }, [])

    console.log(props.jobData)
    console.log(props.jobData[thisId])
    console.log(props.location.key)
    console.log(props)
    console.log(props.match.params.provider)

    if(props.loading) {
        
        return <h3>Loading Data...</h3>
    }
    if(props.jobData[thisId] == undefined || location == undefined) {
        return <h3>Please go back and choose a prison...</h3>
    }
        return (
            <>
                <H1>Data</H1>
                <MainDisplay>
                    <h4>{props.jobData[thisId].id}</h4>
                    {props.error && <p>{props.error}</p>}
                        <>
                        {/* {props.jobData[thisId].id.map(data => (

                                <Card onClick={() => props.history.push(`/client-individual/${location.id}${data.id}`)}>
                                    <p>{data.id}</p>
                                    <p>{data.age}</p>
                                </Card>
                            ))} */}
                                
                        </>


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

export default connect(mapStateToProps, {fetchData})(ClientMain)