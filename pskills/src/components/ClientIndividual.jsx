import React, { useState, useEffect } from "react";
import ClientCard from './clientCard';
import axios from 'axios';
import styled from 'styled-components';



export default function ClientIndividual(props) {
    const [employee, setEmployee] = useState([])
    const [id, setID] = useState(props)
    const [secondId, setSecondId] = useState(props)
   
    const Cards = styled.div`
    display: flex;
    justify-content: center;
    `
    // need to get specific ID
    const get = 'http://localhost:3333/providers/'
    
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
    console.log(employee[0])
let placeOne = employee[id.match.params.id[0]]
let newEmployee = []
if (placeOne != undefined){
    newEmployee.push(placeOne.candidates[secondId.match.params.id[1]])
    console.log(newEmployee)

}
    return (
        <div>
            {newEmployee.map(person => {
                console.log(person.primary_skill)
                return (
                    <Cards>
                        <ClientCard
                            name={person.name}
                            age={person.age}
                            skills={person.primary_skill} />
                    </Cards>
                );
            })}

        </div>

    )


}