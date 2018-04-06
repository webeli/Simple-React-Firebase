import React, { Component } from 'react';
import logo from './logo.svg';
import { db } from './utils/db'
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      cities: []
    }
  }

  componentDidMount() {
    db.collection("cities").get().then(snap => {
      const result = snap.docs.map(doc => {
        return { id: doc.id, ...doc.data()}
      });
      this.setState({ cities: result });
    });
  }

  render() {
     return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.state.cities.map(item => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>
    );
  }
}

export default App;
