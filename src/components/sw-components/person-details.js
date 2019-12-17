import React from 'react';
import { withSwapiService } from '../HOC-helpers';
import ItemDetails, { Record } from '../ItemDetails/ItemDetails';

const PersonDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record field='gender' label='Gender' />
      <Record field='eyeColor' label='Eye Color' />
    </ItemDetails>
  );
};

const mapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  };
};

export default withSwapiService(PersonDetails, mapMethodsToProps);
