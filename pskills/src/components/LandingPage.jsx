
import React, { useState, useEffect } from "react"
import styled from "styled-components";
import { backgroundColor} from '../Styling';

const Main = styled.div`
background-color: rgba(248, 248, 255, 1);
color: rgba(8, 69, 126, 1);
`
const Intro = styled.div`
display: flex;
flex-direction: column;
align-items: center; 
margin-left: 40px;
margin-right: 40px;
border-bottom: solid black 2px;
`
const Body = styled.div`
display: flex;
flex-direction: column;
align-items: center;
flex-wrap:
`
const Card = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 20px;
`
const Information = styled.div`
display: flex;
flex-direction: column;
align-items: center; 
width: 50%;
padding: 10px;
`
const Names = styled.h2`
font-size: 2rem;
`
const Learn = styled.button`
font-size: 1.5rem;
text-decoration: none;
color: white;
background: rgba(8, 69, 126, 1);
border: none;
margin: 10px;
border-radius: 15px;
`

export default function Home() {

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

    const clickTwo = e => {
        if (displayTwo == true) {
            setDisplayTwo(false);
        }
        if (displayTwo == false) {
            setDisplayTwo(true);
        }
    };

    return (
        <>
            <Main>
                <Intro>
                    <img src='' />
                    <h1>Recareer</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque felis eu mauris eleifend, a accumsan lorem consectetur. Cras condimentum lacus eget neque interdum, vitae iaculis orci convallis. Sed faucibus a tellus nec consequat. Nam vulputate purus mauris, at interdum felis blandit a. Nulla sed erat ac sem tempus facilisis. Ut gravida hendrerit dolor, a euismod velit ullamcorper nec. Nulla cursus, quam et pulvinar posuere, tellus odio blandit metus, ac bibendum mauris ligula vel justo.</p>
                </Intro>
                <Body>
                    <h1>Success Stories</h1>
                    <Card>
                        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
                        <Information>
                            <Names> Rick</Names>
                            <h3> Atlanta, Georgia</h3>
                            {displayTwo && (<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque felis eu mauris eleifend, a accumsan lorem consectetur. Cras condimentum lacus eget neque interdum, vitae iaculis orci convallis. Sed faucibus a tellus nec consequat. Nam vulputate purus mauris, at interdum felis blandit a. Nulla sed erat ac sem tempus facilisis. Ut gravida hendrerit dolor, a euismod velit ullamcorper nec. Nulla cursus, quam et pulvinar posuere, tellus odio blandit metus, ac bibendum mauris ligula vel justo.</p>)}
                            <Learn onClick={clickTwo}>{!displayTwo && "Learn More!" || "Show Less"}</Learn>
                        </Information>
                    </Card>

                    <Card>
                        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
                        <Information>
                            <Names> Ricky</Names>
                            <h3> New York City, New York</h3>
                            {display && (<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque felis eu mauris eleifend, a accumsan lorem consectetur. Cras condimentum lacus eget neque interdum, vitae iaculis orci convallis. Sed faucibus a tellus nec consequat. Nam vulputate purus mauris, at interdum felis blandit a. Nulla sed erat ac sem tempus facilisis. Ut gravida hendrerit dolor, a euismod velit ullamcorper nec. Nulla cursus, quam et pulvinar posuere, tellus odio blandit metus, ac bibendum mauris ligula vel justo.</p>)}
                            <Learn onClick={click}>{!display && "Learn More!" || "Show Less"}</Learn>
                        </Information>
                    </Card>
                </Body>
            </Main>
        </>
    )
}

