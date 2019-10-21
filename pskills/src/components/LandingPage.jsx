import React, { useState, useEffect } from "react"
import styled from "styled-components";


export default function Home() {

    const [display, setDisplay] = useState(false);
    const [displayTwo, setDisplayTwo] = useState(false);
    
    const click = e => {
        if (display == true){
            setDisplay (false);
        }
        if (display == false){
            setDisplay (true);
        }
      };
      
      const clickTwo = e => {
        if (displayTwo == true){
            setDisplayTwo (false);
        }
        if (displayTwo == false){
            setDisplayTwo (true);
        }
      };

return (
    <>
    <div>
        <h1>Recareer</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque felis eu mauris eleifend, a accumsan lorem consectetur. Cras condimentum lacus eget neque interdum, vitae iaculis orci convallis. Sed faucibus a tellus nec consequat. Nam vulputate purus mauris, at interdum felis blandit a. Nulla sed erat ac sem tempus facilisis. Ut gravida hendrerit dolor, a euismod velit ullamcorper nec. Nulla cursus, quam et pulvinar posuere, tellus odio blandit metus, ac bibendum mauris ligula vel justo.</p>
    </div>
    <img src=''/>
    <h1>Success Stories</h1>
    <div>
        <img src = "https://rickandmortyapi.com/api/character/avatar/1.jpeg"/>
        <h2> Rick</h2>
        <h3> Atlanta, Georgia</h3>
        { displayTwo && (<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque felis eu mauris eleifend, a accumsan lorem consectetur. Cras condimentum lacus eget neque interdum, vitae iaculis orci convallis. Sed faucibus a tellus nec consequat. Nam vulputate purus mauris, at interdum felis blandit a. Nulla sed erat ac sem tempus facilisis. Ut gravida hendrerit dolor, a euismod velit ullamcorper nec. Nulla cursus, quam et pulvinar posuere, tellus odio blandit metus, ac bibendum mauris ligula vel justo.</p>) }
        <button onClick={clickTwo}>{!displayTwo &&"Learn More!" || "Show Less"}</button>
    </div>

    <div>
        <img src = "https://rickandmortyapi.com/api/character/avatar/1.jpeg"/>
        <h2> Rick</h2>
        <h3> New York City, New York</h3>
        { display && (<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque felis eu mauris eleifend, a accumsan lorem consectetur. Cras condimentum lacus eget neque interdum, vitae iaculis orci convallis. Sed faucibus a tellus nec consequat. Nam vulputate purus mauris, at interdum felis blandit a. Nulla sed erat ac sem tempus facilisis. Ut gravida hendrerit dolor, a euismod velit ullamcorper nec. Nulla cursus, quam et pulvinar posuere, tellus odio blandit metus, ac bibendum mauris ligula vel justo.</p>) }
        <button onClick={click}>{!display &&"Learn More!" || "Show Less"}</button>
    </div>
    </>
)
}