import React, { Component } from 'react';
import './App.css';
import Name from './components/Name';

class App extends Component {
  render(){
    return (
    <div className="root">
      
      {/* Aqui llamamos al componente Name y le pasamos 3 propiedades */} 
      <Name 
        name={'ColorSync'} 
        age='12' 
        junior={true}
      />
    </div>
    )
  }
}

export default App;
