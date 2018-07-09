/**
 * This is the entry file for app
 */
import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import _Navbar from "./components/Navbar";
import Sidebar from './components/Sidebar';
class App extends Component {
  render() {
    return (
      <div>
        <_Navbar/>
        <div className="wrapper">
          <Sidebar />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
