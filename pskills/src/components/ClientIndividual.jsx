import React, { useState, useEffect } from "react";
import ClientCard from './clientCard';
import axios from 'axios';
import styled from 'styled-components';



export default function ClientIndividual(props) {
    const [employee, setEmployee] = useState([])
    const [secondId, setSecondId] = useState(props)
    console.log(props.match.params.id)
    const id = props.match.params.id
   
    const Cards = styled.div`
    display: flex;
    justify-content: center;
    `
    // need to get specific ID
    const get = `https://rickandmortyapi.com/api/character/${id}`
    
    useEffect(() => {
        axios
            .get(get)
            .then(response => {
                console.log(response)
                setEmployee(response.data);
            })
            .catch(error => {
                console.log('error', error)
            });
            console.log(employee)
    }, []);

    return (
        <ClientCard
            name = {employee.name}
            image = {employee.image}
        />
    )


}