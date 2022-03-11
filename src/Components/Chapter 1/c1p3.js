import React from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom'

function C1P3(props) {
    const [userInput, setUserInput] = useState('')
    function handleChange(ev){
        setUserInput(ev.target.value)
    }
    function handleSubmit(ev){
        ev.preventDefault();
        console.log('submitted!');
        console.log(userInput);
    }
    return (
        <div>
            <p>Your eyes open, and you find yourself in a cold, dimly lit room. You sit up from the simple mat of straw and tattered cloth. A single window with a pair of iron bars allows sunlight to filter in to the room.</p>
            <form onSubmit={handleSubmit}>
                <legend>What do you do?</legend>
                <input type='text' onChange={handleChange}></input>
                <input type='submit' ></input>
            </form>
        </div>
    );
}

export default C1P3;