import React, { Component } from 'react';
import { db } from '../utils/db';

class AddData extends Component {

  addData(e) {
    e.preventDefault();
    db.collection("cities").add({
      name: this.input.value
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