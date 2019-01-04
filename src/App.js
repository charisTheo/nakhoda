import React, { Component } from 'react';
import './App.css';

import NavBar from "./Components/Nav/NavBar.cmp";
import MenuBar from './Components/MenuBar/MenuBar.cmp';
import Header from './Components/Header/Header.cmp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <MenuBar />
        <Header />
      </div>
    );
  }
}

export default App;
