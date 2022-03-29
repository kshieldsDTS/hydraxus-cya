import React from 'react';
import { Link } from 'react-router-dom'

function Welcome(props) {
    function startStorage(){
        localStorage.setItem("id", 0)
        localStorage.setItem("chapter", 1)
    }
    return (
        <div>
            <p>Welcome to Hydraxus, a world of where magic, monsters, gods, and mystery await you, an adventurer. In this Choose-Your-Own-Adventure, you will type out how you would like to interact with the world.</p>
            <Link to='/story'><button onClick={startStorage}>Begin!</button></Link>
        </div>
    );
}

export default Welcome;