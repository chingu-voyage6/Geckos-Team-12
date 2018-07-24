/**
 * This is the entry file for app
 */
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
      
import _Navbar from "./components/Navbar";
import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import Main from './components/Main';
import QuestionPage from './components/QuestionPage';
import './App.css';

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
        <Router>
          <Switch>
            <Route exact path="/" component={ HomePage } />
            <Route path="/:questionId" component={ QuestionPage } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
