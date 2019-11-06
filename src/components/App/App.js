import React, { Component } from 'react';
import SwapiSevice from '../../services/SwapiService';
import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import PeoplePage from '../PeoplePage/PeoplePage';
import ItemList from '../ItemList/ItemList';
import PersonDetails from '../PersonDetails/PersonDetails';

import './App.css';

export default class App extends Component {
  state = {
    curentPerson: null
  };

  swapiService = new SwapiSevice();

  render() {
    return (
      <div className='container'>
        <Header />
        <RandomPlanet />
        <PeoplePage />

        <div className='row mb2'>
          <div className='col-md-6'>
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllPlanets}
              renderItem={item => (
                <span>
                  {item.name}
                  <button>!</button>
                </span>
              )}
            />
          </div>
          <div className='col-md-6'>
            <PersonDetails personId={this.state.currentPerson} />
          </div>
        </div>

        <div className='row mb2'>
          <div className='col-md-6'>
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllStarships}
              renderItem={item => item.name}
            />
          </div>
          <div className='col-md-6'>
            <PersonDetails personId={this.state.currentPerson} />
          </div>
        </div>
      </div>
    );
  }
}
