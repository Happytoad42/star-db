import React from 'react';
import ItemList from '../ItemList/ItemList';
import { withData } from '../HOC-helpers';
import SwapiService from '../../services/SwapiService';

const swapiService = new SwapiService();

const withChildFuntion = (Wrapped, fn) => {
  return props => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

const { getAllPeople, getAllPlanets, getAllStarships } = swapiService;

const PersonList = withData(
  withChildFuntion(ItemList, ({ name }) => <span>{name}</span>),
  getAllPeople
);

const PlanetList = withData(
  withChildFuntion(ItemList, ({ name }) => <span>{name}</span>),
  getAllPlanets
);

const StarshipList = withData(
  withChildFuntion(ItemList, ({ name }) => <span>{name}</span>),
  getAllStarships
);

export { PersonList, PlanetList, StarshipList };
