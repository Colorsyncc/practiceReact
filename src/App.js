import React, { Component } from 'react';
import './App.css';
import Name from './components/Name';

class App extends Component {

render() {
    
    return (
    <div className="root">
        <Name firstName={'El Terrible de ColorSync'}/>
    </div>
    )
  }
}


export default App;
