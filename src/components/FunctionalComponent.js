import React from 'react';

function FunctionalComponent({ count, increment, decrement, reset }) {
    return (
        <div className="counter-box">
            <h2>Functional Component Counter</h2>
            <div className="buttons">
                <button onClick={decrement}>-</button>
                <div className="number-display">{count}</div>
                <button onClick={increment}>+</button>
            </div>
            <button className="reset-btn" onClick={reset}>
                Reset
            </button>
        </div>
    );
}

export default FunctionalComponent;