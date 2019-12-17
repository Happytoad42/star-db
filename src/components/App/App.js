import React, { Component } from 'react';
import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import SwapiService from '../../services/SwapiService';
import { SwapiServiceProvider } from '../swapi-service-context';

import { PeoplePage, PlanetsPage, StarshipsPage } from '../../components/pages';

import './App.css';

export default class App extends Component {
  state = {
    curentPerson: null,
    swapiService: new SwapiService()
  };

  onServiceChange = () => {
    console.log('Change context value');
  };

  render() {
    return (
      <SwapiServiceProvider value={this.state.swapiService}>
        <div className='container'>
          <Header onServiceChange={this.onServiceChange} />
          <RandomPlanet />
          <PeoplePage />
          <PlanetsPage />
          <StarshipsPage />
        </div>
      </SwapiServiceProvider>
    );
  }
}
