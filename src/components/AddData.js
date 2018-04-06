import React, { Component } from 'react';
import { db } from '../utils/db';

class AddData extends Component {

  addData(e) {
    e.preventDefault();
    db.collection("cities").add({
      name: this.input.value
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  }

  render() {
    return (
      <div>
        <h1>Add Data</h1>
        <form onSubmit={(e) => this.addData(e)}>
          <input type="text" placeholder="Add City" ref={(i) => this.input = i} />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default AddData;