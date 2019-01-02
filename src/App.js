import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from "./Components/Nav/NavBar.cmp";
import { Button } from '@material-ui/core';

// import Icon from '@material-ui/core/Icon';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Button>React Button</Button>
        </header>
      </div>
    );
  }
}

export default App;
