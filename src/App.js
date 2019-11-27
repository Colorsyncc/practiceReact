import React, { Component } from 'react';
import './App.css';




class App extends Component() {
    constructor(){
        this.state = {
          count: 0
        }
    }

handleClickIncrement = () => {
    this.setState({
        count: this.state.count +1
    });
}

handleClickDecrement = () => {
  this.setState({
    count: this.state.count -1
  })
 }
}


export default App;
