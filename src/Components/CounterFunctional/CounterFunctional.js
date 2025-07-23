import React, { useState } from "react";
import './CounterFunctional.css';

const CounterFunctional = (props) => {
    const incrementVal = () => {
        setCount(val => val + 1);
    };

    const decrementVal = () => {
        if (currCountVal > 0) {
            setCount(val => val - 1);
        } else {
            alert('Counter value cannot be less than 0');
        }
    };

    const [currCountVal, setCount] = useState(props.initCounter);
    
    return (
        <div>
            <h1>Functional Counter</h1>
            <div className="counter-container">
                <span className="value">{currCountVal}</span>
                <div>
                    <button className="decrement" onClick={decrementVal}>-</button>
                    <button className="increment" onClick={incrementVal}>+</button>
                </div>
            </div>
        </div>
    )
};

export default CounterFunctional;