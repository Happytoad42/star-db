import React, { Component } from 'react';
import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import SwapiService from '../../services/SwapiService';
import { SwapiServiceProvider } from '../swapi-service-context';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage,
  LoginPage,
  SecretPage
} from '../../components/pages';

import './App.css';
import './bootstrap.min.css';
import { StarshipDetails } from '../sw-components';

export default class App extends Component {
  state = {
    curentPerson: null,
    swapiService: new SwapiService(),
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    });
  };

  onServiceChange = () => {
    console.log('Change context value');
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <SwapiServiceProvider value={this.state.swapiService}>
        <Router>
          <div className='container'>
            <Header onServiceChange={this.onServiceChange} />
            <RandomPlanet />
            <Switch>
              <Route
                path='/'
                render={() => <h2>Welcome to Star DB!</h2>}
                exact
              />
              <Route path='/people/:id?' component={PeoplePage} />
              <Route path='/planets' component={PlanetsPage} />
              <Route path='/starships' component={StarshipsPage} exact />
              <Route
                path='/starships/:id'
                render={({ match }) => {
                  return <StarshipDetails itemId={match.params.id} />;
                }}
              />
              <Route
                path='/login'
                render={() => (
                  <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />
                )}
              />
              <Route
                path='/secret'
                render={() => <SecretPage isLoggedIn={isLoggedIn} />}
              />
              <Route render={() => <h2>Page not found</h2>} />
            </Switch>
          </div>
        </Router>
      </SwapiServiceProvider>
    );
  }
}
