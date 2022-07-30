import React, { Component } from 'react';
import General from './components/General';

class App extends Component {
  constructor() {
    super();
  }
  render(){
    return (
      <div className="App">
        <h1> CV Builder </h1>
        <General></General>
      </div>
    );
    }
}

export default App;
