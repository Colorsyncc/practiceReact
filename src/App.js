import React, { Component } from 'react';
import './App.css';
import Name from './components/Name';

class App extends Component {

    render() {
      const data = ['Color', 'Mental','Rogue']
      
        return (
        <div className="root">
            <Name name={data[0]}/>
            <Name name={data[1]}/>
            <Name name={data[2]}/>

        </div>
        )
      }
}

export default App;
