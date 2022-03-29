import React from 'react';
import data from '../Assets/chapter1'

function Narrative({id, setId}) {
    function handleContinue(){
        setId(id + 1)
    }
    return (
        <div>
            <p>{data[id].text}</p>
            {data[id].text2 ? <p>{data[id].text2}</p> : null}
            {data[id].options ? <button>{data[id].options}</button> : <button onClick={handleContinue}>Continue</button>}
        </div>
    );
}

export default Narrative;