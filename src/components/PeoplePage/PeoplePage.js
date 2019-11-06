import React, { Component } from 'react';
import ItemList from '../ItemList/ItemList';
import PersonDetails from '../PersonDetails/PersonDetails';
import './PeoplePage.css';
import SwapiService from '../../services/SwapiService';

const Row = ({ left, right }) => {
  return (
    <div className='row mb2'>
      <div className='col-md-6'>{left}</div>
      <div className='col-md-6'>{right}</div>
    </div>
  );
};

export default class PeoplePage extends Component {
  state = {
    currentPerson: 3,
    hasError: false
  };

  swapiService = new SwapiService();

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

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={({ name, gender, birthYear }) =>
          `${name} (${gender}, ${birthYear})`
        }
      />
    );

    const personDetails = <PersonDetails personId={this.state.currentPerson} />;

    return <Row left={itemList} right={personDetails} />;
  }
}
