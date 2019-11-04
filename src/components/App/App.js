import React, { Component } from 'react';

import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import PeoplePage from '../PeoplePage/PeoplePage';

import './App.css';

export default class App extends Component {
  state = {
    curentPerson: null
  };

  render() {
    return (
      <div>
        <Header />
        <RandomPlanet />
        <PeoplePage />
        <PeoplePage />
        <PeoplePage />
        <PeoplePage />
      </div>
    );
  }
}
