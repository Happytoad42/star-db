import React, { Component } from 'react';
import Spinner from '../../components/Spinner/Spinner';
import SwapiService from '../../services/SwapiService';

import './PersonDetails.css';

export default class PersonDetails extends Component {
  state = {
    person: null,
    loading: true
  };

  swapiSerice = new SwapiService();

  componentDidMount() {
    this.getPersonData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.getPersonData();
    }
  }

  getPersonData = () => {
    this.setState({ loading: true });
    const { personId } = this.props;
    if (!personId) {
      return;
    }
    this.swapiSerice
      .getPerson(personId)
      .then(person => this.setState({ person, loading: false }));
  };

  render() {
    const { person, loading } = this.state;

    if (!person) {
      return <span>Please select a person from the list</span>;
    }

    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? <PersonView person={person} /> : null;

    return (
      <div className='person-details card'>
        {spinner}
        {content}
      </div>
    );
  }
}

const PersonView = ({ person }) => {
  const { id, name, gender, birthYear, eyeColor } = person;
  return (
    <>
      <img
        className='person-image'
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt={`${name}`}
      />

      <div className='card-body'>
        <h4>{name}</h4>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <span className='term'>Gender</span>
            <span>{gender}</span>
          </li>
          <li className='list-group-item'>
            <span className='term'>Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className='list-group-item'>
            <span className='term'>Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
