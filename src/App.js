import React, { Component } from 'react';
import './App.css';
import Name from './components/Name';
import { Data } from './constants/Data';

class App extends Component {
    render() {
        return (
            <div className="root">
                { Data.map((name , key) => <Name name={name} key={key} />)}
            </div>
        )
    }
}

export default App;