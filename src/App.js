/**
 * This is the entry file for app
 */
import React, { Component } from 'react';
import Main from './components/Main';
import _Navbar from "./components/Navbar";
import Sidebar from './components/Sidebar';
class App extends Component {
  render() {
    return (
      <div>
        <_Navbar/>
        <div className="wrapper">
          <div className="sidebar-container">
            <Sidebar />
          </div>
          <div className="main-container">
            <Main />
          </div>
          <div className="sidebar-container">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
