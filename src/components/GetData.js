import React, { Component } from 'react';
import { db } from '../utils/db';

class GetData extends Component {

  constructor() {
    super();
    this.state = {
      cities: []
    }
  }

  componentDidMount() {
    db.collection("cities").onSnapshot(snap => {
      const result = snap.docs.map(doc => {
        return { id: doc.id, ...doc.data() };
      });
      this.setState({ cities: result });
    });
  }

  render() {
    return (
      <div>
        <h1>Get Data</h1>
        {this.state.cities.map(item => (
          <p key={item.id} onClick={() => this.props.selectCity(item)}>{item.name}</p>
        ))}
      </div>
    );
  }
}

export default GetData;
