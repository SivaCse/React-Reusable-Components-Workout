import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import LoginContainer from './components/login/LoginContainer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <LoginContainer />
      </div>
    );
  }
}

export default App;
