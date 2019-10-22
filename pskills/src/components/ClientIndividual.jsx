import React, { useState, useEffect } from "react";
import ClientCard from './clientCard';
import axios from 'axios';
import styled from 'styled-components';



export default function ClientIndividual() {
    const [employee, setEmployee] = useState([])

    const Cards = styled.div`
    display: flex;
    justify-content: center;
    `

    // need to get specific ID
    const get = 'https://rickandmortyapi.com/api/character/' + ""

    useEffect(() => {
        axios
            .get(get)
            .then(response => {
                setEmployee(response.data.results);
            })
            .catch(error => {
                console.log('error', error)
            });
        // TODO: Add API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    }, []);

    return (
        <div>
            {employee.map(person => {
                return (
                    <Cards>
                        <ClientCard
                            name={person.name}
                            image={person.image}
                            bio={person.gender}
                            skills={person.status}
                            location={person.location} />
                    </Cards>
                );
            })}

        </div>

    )


}