import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import NavBar from "./Components/Nav/NavBar.cmp";
import MenuBar from './Components/MenuBar/MenuBar.cmp';

// import Icon from '@material-ui/core/Icon';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <MenuBar />
        <header>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
