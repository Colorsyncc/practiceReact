import React, { Component } from 'react';
import './App.css';
import Name from './components/Name';
import { Data } from './constants/Data';

class App extends Component {
    render() {
        return (
            <div className="root">
                { Data.map((data , key) => 
                <Name 
                    name={data.name}
                    key={key}
                    age={data.age}
                    />
                )}
            </div>
        )
    }
}

App.displayName = 'App';

export default App;