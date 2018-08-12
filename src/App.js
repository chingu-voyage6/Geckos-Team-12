/**
 * This is the entry file for app
 */
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/LogIn';
import QuestionPage from './components/QuestionPage';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <div>
            <Switch>
              <Route exact path="/" component={Login} />
             
            </Switch>
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
