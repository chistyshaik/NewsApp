import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  name = 'chisty';
  render() {
    return (
      <div>
        hello my first class based component{this.name}
      </div>
    )
  }
}

