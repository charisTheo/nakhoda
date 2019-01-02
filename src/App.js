import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Button } from '@material-ui/core';

import NavBar from "./Components/Nav/NavBar.cmp";
import TopMenu from './Components/TopMenu/TopMenu.cmp';

// import Icon from '@material-ui/core/Icon';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <TopMenu />
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
