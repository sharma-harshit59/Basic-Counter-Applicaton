import React, { Component } from "react";

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    decrement = () => {
        if (this.state.count === 0) {
            alert("Class Counter cannot be negative");
        } else {
            this.setState({ count: this.state.count - 1 });
        }
    };

    reset = () => {
        this.setState({ count: 0 });
    };

    render() {
        return (
            <div className="counter-box">
                <h2>Class Component Counter</h2>
                <div className="buttons">
                    <button onClick={this.decrement}>-</button>
                    <div className="number-display">{this.state.count}</div>
                    <button onClick={this.increment}>+</button>
                </div>
                <button className="reset-btn" onClick={this.reset}>
                    Reset
                </button>
            </div>
        );
    }
}

export default ClassComponent;