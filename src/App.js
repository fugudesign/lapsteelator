import React, { Component } from 'react';
import './App.css';
import Lapsteelator from './components/Lapsteelator/Lapsteelator';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tokenIsLoad: false
    }
  }

  render() {
    return (
      <div className="App">
         <Lapsteelator />
      </div>
    );
  }

}

export default App;
