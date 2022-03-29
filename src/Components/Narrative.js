import React from 'react';
import data from '../Assets/chapter1'

function Narrative({id, setId}) {
    function handleContinue(){
        setId(id + 1)
    }
    function handleSubmit(ev){
        ev.preventDefault()
    }
    return (
        <div>
            <p>{data[localStorage.getItem("id")].text}</p>
            {data[id].text2 ? <p>{data[id].text2}</p> : null}
            {data[id].keywords ? <form>
                <input type='text'></input>
                <input type='submit' onClick={handleSubmit}></input>
            </form>: <button onClick={handleContinue}>Continue</button>}
        </div>
    );
}

export default Narrative;