import React, { Component } from 'react';
import logo from './logo.svg';
import { db } from './utils/db'
import './App.css';
import GetData from './components/GetData';
import AddData from './components/AddData';
import EditData from './components/EditData';

class App extends Component {

  constructor() {
    super();
    this.state = {
      cities: [],
      selectedCity: null
    }
  }

  componentDidMount() {
    db.collection("cities").get().then(snap => {
      const result = snap.docs.map(doc => {
        return { id: doc.id, ...doc.data() }
      });
      this.setState({ cities: result });
    });
  }

  selectCity(city) {
    this.setState({ selectedCity: city })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-content">
          <AddData />
          <GetData selectCity={(city) => this.selectCity(city)} />
          <EditData selectedCity={this.state.selectedCity} />
        </div>
      </div>
    );
  }
}

export default App;
