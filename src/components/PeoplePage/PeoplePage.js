import React, { Component } from 'react';
import ItemList from '../ItemList/ItemList';
import PersonDetails from '../PersonDetails/PersonDetails';
import './PeoplePage.css';

export default class PeoplePage extends Component {
  state = {
    selecedPerson: 3,
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  onPersonSelected = id => {
    this.setState({
      currentPerson: +id
    });
  };

  render() {
    if (this.state.hasError) {
      return <h2>Ooops! Something went wrong!</h2>;
    }

    return (
      <div className='row mb2'>
        <div className='col-md-6'>
          <ItemList onItemSelected={this.onPersonSelected} />
        </div>
        <div className='col-md-6'>
          <PersonDetails personId={this.state.currentPerson} />
        </div>
      </div>
    );
  }
}
