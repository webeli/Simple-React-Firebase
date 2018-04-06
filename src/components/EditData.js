import React, { Component } from 'react';
import { db } from '../utils/db';

class EditData extends Component {

  constructor() {
    super();
    this.state = {
      selectedItem: ''
    }
  }

  editData(e) {
    e.preventDefault();
    db.collection("cities").add({
      name: this.input.value
    }).then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    }).catch(function (error) {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    return (
      <div>
        <h1>Edit Data</h1>
        {!!this.state.selectedItem ? (
          <form onSubmit={(e) => this.editData(e)}>
            <input type="text" placeholder="Click on city to edit" ref={(i) => this.input = i} />
            <button type="submit">Edit</button>
          </form>
        ) : (
          <div>You need to click on a city to edit.</div>
        )}
      </div>
    );
  }
}

export default EditData;