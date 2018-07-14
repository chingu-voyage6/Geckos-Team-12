/**
 * This is the entry file for app
 */
import React, { Component } from 'react';
import Main from './components/Main';
import _Navbar from "./components/Navbar";
import Sidebar from './components/Sidebar';
import './App.css';
class App extends Component {
  render() {
    return (
      <div>
        <_Navbar/>
        
      </div>
    );
  }
}

export default App;
