import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  name = 'chisty';
  render() {
    return (
      <div>
      <Router>
      <Navbar/>
      <Routes>
      <Route exact path="/"> {<News pageSize={6}  key = 'general' country='in' category = 'general'/> }</Route>
      <Route exact path="/business"> {<News pageSize={6} key = 'Business'  country='in' category = 'Business'/> }</Route>
      <Route exact path="/entertainment"> {<News pageSize={6}  key = 'entertainment' country='in' category = 'entertainment'/> }</Route>
      <Route exact path="/sports"> {<News pageSize={6}  key = 'sports' country='in' category = 'sports'/> }</Route>
      <Route exact path="/science"> {<News pageSize={6} key = 'science'  country='in' category = 'science'/>} </Route>
      <Route exact path="/health"> {<News pageSize={6}  key = 'health' country='in' category = 'health'/>} </Route>
      <Route exact path="/technology"> {<News pageSize={6} key = 'technology'  country='in' category = 'technology'/>} </Route>
      </Routes>
      </Router>
      </div>
    )
  }
}

