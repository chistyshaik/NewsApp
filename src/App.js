import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React, { Component } from 'react';
import Spinner from './components/Spinner';

export default class App extends Component {
  name = 'chisty';
  render() {
    return (
      <div>
      <Navbar/>
      <News pageSize = {6}/>
      </div>
    )
  }
}

