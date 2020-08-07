import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import SiderDemo from './home/index'

class App extends Component{
  render () {
    return (
      <Router>
        <div className='App'>
          <Route path='/' component={ SiderDemo }></Route>
        </div>
      </Router>
    )
  }
}

export default App;
