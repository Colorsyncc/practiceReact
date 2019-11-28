import React, { Component } from 'react';
import './App.css';
import TestEvents from './components/testEvents';

class App extends Component {

render() {
  const { firstName } = this.props
    return (
    <div className="root">
        <TestEvents firstName={'El Terrible de ColorSync'}/>
    </div>
    )
  }
}


export default App;
