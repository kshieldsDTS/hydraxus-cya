import React from 'react';
import data from '../Assets/chapter1'
import { useState } from 'react'

function Narrative({id, setId}) {
    const [userInput, setUserInput] = useState()
    function handleContinue(){
        setId(++id)
    }
    function handleChange (ev) {
        setUserInput(ev.target.value)
    }
    function handleSubmit(ev){
        ev.preventDefault()
        console.log(userInput);
    }
    return (
        <div>
            <p>{data[id].text}</p>
            {data[id].text2 ? <p>{data[id].text2}</p> : null}
            {data[id].keywords ? <form>
                <input type='text' onChange={handleChange}></input>
                <input type='submit' onClick={handleSubmit}></input>
            </form>
            : 
            <button onClick={handleContinue}>Continue</button>}
        </div>
    );
}

export default Narrative;