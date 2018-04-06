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

  onDelete(id) {
    console.log(id);
    db.collection("cities").doc(id).delete().then(function () {
      console.log("Document successfully deleted!");
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    return (
      <div>
        <h1>Get Data</h1>
        {this.state.cities.length === 0 && (
          <div>Initializing data...</div>
        )}
        {this.state.cities.map(item => (
          <div className="App-item">
            <span key={item.id} onClick={() => this.props.selectCity(item)}>{item.name}</span>
            <button onClick={() => this.onDelete(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    );
  }
}

export default GetData;
