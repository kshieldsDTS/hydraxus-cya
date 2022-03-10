import React from 'react';
import { Link } from 'react-router-dom'

function Welcome(props) {
    return (
        <div>
            <p>Welcome to Hydraxus, a world of where magic, monsters, gods, and mystery await you, an adventurer. In this Choose-Your-Own-Adventure, you will type out how you would like to interact with the world.</p>
            <Link to='/c1p1'><button>Begin!</button></Link>
        </div>
    );
}

export default Welcome;