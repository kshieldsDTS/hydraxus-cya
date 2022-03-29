import React from 'react';
import { useState } from 'react'
import C1P3A from './C1P3A';
import C1P3B from './C1P3B';
import C1P3C from './C1P3C';

function C1P3(props) {
    const [userInput, setUserInput] = useState('')
    function handleChange(ev){
        setUserInput(ev.target.value)
    }
    const [window, setWindow] = useState(false)
    const [check, setCheck] =
    useState(false)
    const [door, setDoor] = useState(false)
    const [room, setRoom] = useState(false)
    const [page, setPage] = useState()
    async function handleSubmit(ev) {
        if (userInput)
        ev.preventDefault();
        const array = userInput.split(" ")
        setCheck(false)
        setWindow(false)
        setRoom(false)
        setDoor(false)
        setPage('')
        for (let i = 0; i<array.length; i++) {
            if (array[i] === 'check') {
                await setCheck(!check)
            }
            if (array[i] === 'window') {
                await setWindow(!check)
            }
            if (array[i] === 'room') {
                await setRoom(!check)
            }
            if (array[i] === 'door') {
                await setDoor(!check)
            }
            // checkInput()
        }
        if (window === true && check === true) {
					await setPage('a');
				}
				if (room === true && check === true) {
					await setPage('b');
				}
				if (door === true && check === true) {
					await setPage('c');
				}
    }
    // async function checkInput() {
    //     if (window === true && check === true) {
    //         await setPage('a')
    //     }
    //     if (room === true && check === true) {
	// 		await setPage('b');
	// 	}
    //     if (door === true && check === true) {
	// 		await setPage('c');
	// 	}
    // }
    // add logic to find keywords in input and make move based on that.
    // Not sure how to implement. Convert string to array, then parse the array?
    return (
			<div>
				<p>
					Your eyes open, and you find yourself in a cold, dimly lit room. You
					sit up from the simple mat of straw and tattered cloth. A single
					window with a pair of iron bars allows sunlight to filter in to the
					room.
				</p>
				<form onSubmit={handleSubmit}>
					<legend>What do you do?</legend>
					<input type='text' onChange={handleChange}></input>
					<input type='submit'></input>
				</form>
				<br />
				{page === 'a' ? <C1P3A /> : null}
				{page === 'b' ? <C1P3B /> : null}
				{page === 'c' ? <C1P3C /> : null}
			</div>
		);
}

export default C1P3;