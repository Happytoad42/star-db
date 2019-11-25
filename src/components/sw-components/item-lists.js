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

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ name, model }) => (
  <span>
    {name} ({model})
  </span>
);

const { getAllPeople, getAllPlanets, getAllStarships } = swapiService;

const PersonList = withData(
  withChildFuntion(ItemList, renderName),
  getAllPeople
);

const PlanetList = withData(
  withChildFuntion(ItemList, renderName),
  getAllPlanets
);

const StarshipList = withData(
  withChildFuntion(ItemList, renderModelAndName),
  getAllStarships
);

export { PersonList, PlanetList, StarshipList };
