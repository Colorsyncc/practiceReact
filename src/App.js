import React, { Component } from 'react';
import './App.css';
import Name from './components/Name';

class App extends Component {



render() {

  
  const data = [
    'Color', 'Mental','Rogue'
  ]
  
    return (
    <div className="root">
        <Name data={data[0]}/>
        <Name data={data[1]}/>
        <Name data={data[2]}/>

    </div>
    )
  }
}


export default App;
