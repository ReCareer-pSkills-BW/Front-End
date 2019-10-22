import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchData} from '../actions/index';
import styled from "styled-components";
import { backgroundColor, cardColor, mainFont } from '../Styling';

const Providers = styled.div `
    background: ${backgroundColor};
    text-align:center;
    margin-top: 3%;

`

const ClientCard = styled.div `
    background: ${cardColor};
    width:30%;
    margin: 3% 35%;
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

const AdminProviders = (props) => {

    useEffect (() => {
        props.fetchData();
        console.log(props.jobData)
    }, [])


    if(props.loading) {
        
        return <h3>Loading Data...</h3>
    }
    console.log(props.jobData)

    // function compare(a, b) {
    //     const nameA = a.name.toUpperCase();
    //     const nameB = b.name.toUpperCase();
      
    //     let comparison = 0;
    //     if (nameA > nameB) {
    //       comparison = 1;
    //     } else if (nameA < nameB) {
    //       comparison = -1;
    //     }
    //     return comparison;
    //   }
      
    //   props.jobData.sort(compare);

    return (

        <Providers>
            <h1>Provider Locations</h1>
            <ClientCard>
                {props.jobData.map(data => (
                    <H4 onClick={() => props.history.push(`/admin-main/${data.id}`)}>{data.name}</H4>
                ))} 
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

export default connect(mapStateToProps, {fetchData})(AdminProviders)