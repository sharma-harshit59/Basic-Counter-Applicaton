import './App.css';

import React, { Component } from 'react';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    if (this.state.count === 0) {
      alert("Functional Counter cannot be negative");
    } else {
      this.setState({ count: this.state.count - 1 });
    }
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="App app-container">
        <ClassComponent />
        <FunctionalComponent count={this.state.count} increment={this.increment} decrement={this.decrement} reset={this.reset} />
      </div>
    );
  }
}

export default App;
