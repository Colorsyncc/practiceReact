import React, { Component } from 'react';
import './App.css';
import TestEvents from './components/TestEvents';

class App extends Component {
    constructor(){
      super();  
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
    if(this.state.count === 0){
      return;
    }
    this.setState({
      count: this.state.count -1
    })
  }

  render(){
    const { count }  = this.state;
    return (
    <div class="root">
      <TestEvents 
        handleClickIncrement={this.handleClickIncrement}
        handleClickDecrement={this.handleClickDecrement}
        count={count}
      />
    </div>
    )
  }
}


export default App;
