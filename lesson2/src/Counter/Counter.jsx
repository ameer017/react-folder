import React from 'react'
import './Counter.css'
import { useState } from 'react'

const Counter = (props) => {
    const [counter, setCounter] = useState(props.startAt)
    function countDown() {
        setCounter (counter - props.countBy)

        if(counter <= 0) {
            setCounter(false);
        }
    }
    

    function countUp() {
        setCounter (counter + props.countBy)
    }
    function reset() {
        setCounter(counter === 0)
    }

    return (
        <>
        <p>startAt: {props.startAt}</p>
        <p>startBy: {props.countBy}</p>
        <h4>{counter}</h4>
        <button className='primaryBtn' onClick={countDown}>-</button> 

        <button className='secondaryBtn' onClick={countUp}>+</button>

            <br />

        <button className='secondaryBtn' onClick={reset}><ion-icon name="refresh-outline"></ion-icon></button>

        </>
  );
}

Counter.defaultProps = {
    startAt: 0,
    countBy: 1
}  


export default Counter