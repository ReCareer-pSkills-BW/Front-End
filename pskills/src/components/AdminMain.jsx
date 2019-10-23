import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchData } from '../actions/index';
import '../App.css'
import styled from "styled-components";
import { backgroundColor, cardColor, mainFont } from '../Styling';
import { adminAddCandidate } from '../actions/index';


const H1 = styled.h1`

`

const MainDisplay = styled.div`
    background: ${backgroundColor};
    height: 100%;
    display:flex;
`

const Card = styled.div`
    text-align:center;
    background: ${cardColor};
    height: 20%;
    width: 20%;
    border-radius:10px;
    margin: 3%;
    border:1px solid black;
    justify-content:space-evenly;
`
const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`
const Input = styled.input`
padding: 10 px;
margin: 10px; 
`

const Button = styled.button`
background: blue;
color: white;
border: none;
height: 60px;
width: 170px;
font-size: 1.4rem;
margin: auto;
`

const initialLocation = {
    id: '',
    name: '',
    type: '',
    residents: [],
};



const AdminMain = (props) => {
    const [location, setLocation] = useState(initialLocation)

    const dispatch = useDispatch()


    const [employee, setEmployee] = useState({
        name: " ",
        location: " ",
        skills: ' ',
    });
    const [display, setDisplay] = useState(false);
    const [displayTwo, setDisplayTwo] = useState(false);

    const click = e => {
        if (display == true) {
            setDisplay(false);
        }
        if (display == false) {
            setDisplay(true);
        }
    };


    const thisId = props.match.params.provider - 1

    useEffect(() => {
        props.fetchData();
        setLocation(props.jobData[thisId]);
        const thisLocation = props.jobData.find(
            location => `${location}` === props.jobData[thisId]
        );
        if (thisLocation) setLocation(thisLocation);
    }, [])

    console.log(props.jobData[thisId])

    console.log(props.match.params.provider)


    const changeHandler = e => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
        console.log(e.target.value);
    };
    const submit = e => {
        setDisplayTwo(true);
        e.preventDefault();
    }

    if (props.loading) {

        return <h3>Loading Data...</h3>
    }

    return (
        <>
            <H1>Potential Employees...</H1>
            {display && <Form onSubmit={submit}>
                <div>
                <label htmlFor="name">Name:</label>
                <Input
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Name"
                    onChange={changeHandler}
                    value={employee.name}
                />
                </div>
                <div>
                <label htmlFor="location">Location:</label>
                <Input
                    name="location"
                    id="location"
                    placeholder="Location"
                    onChange={changeHandler}
                    value={employee.location}
                />
                </div>
                <div>
                <label htmlFor="skills">Skills:</label>
                <Input
                    name="skills"
                    id="skills"
                    placeholder="Skills"
                    onChange={changeHandler}
                    value={employee.skills}
                />
                </div>
                <button onClick={() => dispatch(adminAddCandidate(employee))}>Add Employee</button>
            </Form>}
            <MainDisplay>
                {props.error && <p>{props.error}</p>}
                <>
                    <Card onClick={() => props.history.push(`/admin-individual/${location.id}`)}>
                        <p>{location.name}</p>
                        <p>{location.type}</p>
                        <p>{location.dimension}</p>
                    </Card>
                    <Card>
                        <p>{location.name}</p>
                        <p>{location.type}</p>
                        <p>{location.dimension}</p>
                    </Card>
                    <Card>
                        <p>{location.name}</p>
                        <p>{location.type}</p>
                        <p>{location.dimension}</p>
                    </Card>
                    <Card>
                        <p>{location.name}</p>
                        <p>{location.type}</p>
                        <p>{location.dimension}</p>
                    </Card>
                    {displayTwo && <Card >
                        <p>Name:{employee.name}</p>
                        <p>Location:{employee.location}</p>
                        <p>Skills: {employee.skills}</p>
                    </Card>}
                </>
                </MainDisplay>
                <MainDisplay>
                <Button onClick={click}>{!display && "Add Canidate" || 'Hide' }</Button>
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

export default connect(mapStateToProps, { fetchData })(AdminMain)