import React, { Component } from 'react';
import './App.css';
import Name from './components/Name';

class App extends Component {



render() {

  
  const data = [
    {name1:'Color', name2:'Mental', name3:'Rogue'}
  ]
  
    return (
    <div className="root">
        <Name data={data}/>
    </div>
    )
  }
}


export default App;
