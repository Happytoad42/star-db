import React, { Component } from 'react';
import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import SwapiService from '../../services/SwapiService';
import { SwapiServiceProvider } from '../swapi-service-context';

import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from '../sw-components';

import './App.css';

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    curentPerson: null
  };

  render() {
    return (
      <SwapiServiceProvider value={this.swapiService}>
        <div className='container'>
          <Header />
          <PersonDetails itemId={11} />
          <PlanetDetails itemId={5} />
          <StarshipDetails itemId={9} />
          <PersonList />
          <StarshipList />
          <PlanetList />
        </div>
      </SwapiServiceProvider>
    );
  }
}
