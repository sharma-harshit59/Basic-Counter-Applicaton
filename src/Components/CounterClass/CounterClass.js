import React, { Component } from "react";
import './CounterClass.css';

class CounterClass extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            currCountVal: this.props.initCounter
        };
    }

    incrementVal() {
        this.setState({
            currCountVal: this.state.currCountVal + 1
        });
    }

    decrementVal() {
        if (this.state.currCountVal > 0) {
            this.setState({
                currCountVal: this.state.currCountVal - 1
            });
        } else {
            alert('Counter value cannot be less than 0');
        }
    }

    render() {
        return (
            <div>
                <h1>Class Counter</h1>
                <div className="counter-container">
                    <span className="value">{this.state.currCountVal}</span>
                    <div>
                        <button className="decrement" onClick={() => this.decrementVal()}>-</button>
                        <button className="increment" onClick={() => this.incrementVal()}>+</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CounterClass;