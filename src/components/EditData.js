import React, { Component } from 'react';
import { db } from '../utils/db';

class EditData extends Component {

  editData(e) {
    e.preventDefault();
    db.collection("cities").doc(this.state.selectedCity.id).set({
      name: this.state.selectedCity.name
    });
  }

  componentWillReceiveProps(nextProps) {
    if (!!nextProps.selectedCity) {
      this.setState({ selectedCity: nextProps.selectedCity });
    }
  }

  onCityNameChange(e) {
    const newSelectedCityState = { ...this.state.selectedCity, name: e.target.value };
    this.setState({ selectedCity: newSelectedCityState });
  }

  render() {
    return (
      <div>
        <h1>Edit Data</h1>
        {!!this.props.selectedCity ? (
          <form onSubmit={(e) => this.editData(e)}>
            <input type="text" value={this.state.selectedCity.name} onChange={(e) => this.onCityNameChange(e)} />
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