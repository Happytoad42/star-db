import React, { Component } from 'react';
import ItemList from '../ItemList/ItemList';
import ItemDetails, { Record } from '../ItemDetails/ItemDetails';
import './PeoplePage.css';

import SwapiService from '../../services/SwapiService';
import Row from '../../components/Row/Row';

export class ErrorBoundry extends Component {
  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h2>Ooops! Something went wrong!</h2>;
    }
    return this.props.children;
  }
}

export default class PeoplePage extends Component {
  state = {
    currentPerson: 3
  };

  swapiService = new SwapiService();

  onPersonSelected = id => {
    this.setState({
      currentPerson: +id
    });
  };

  render() {
    const { getPerson, getPersonImage } = this.swapiService;
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
      >
        {i => `${i.name} (${i.birthYear})`}
      </ItemList>
    );

    const personDetails = (
      <ItemDetails
        itemId={this.state.currentPerson}
        getData={getPerson}
        getImageUrl={getPersonImage}
      >
        <Record field='gender' label='Gender' />
        <Record field='eyeColor' label='Eye Color' />
      </ItemDetails>
    );

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />;
      </ErrorBoundry>
    );
  }
}
