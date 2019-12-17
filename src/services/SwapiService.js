export default class SwapiService {
  _apiBase = 'https://swapi.co/api';

  GetResource = async url => {
    let result = await fetch(`${this._apiBase}${url}`);
    if (!result.ok) {
      throw new Error(`Could not fetch ${url}, recieved ${result.status}`);
    }
    return await result.json();
  };

  getAllPeople = async () => {
    const res = await this.GetResource(`/people`);
    return res.results.map(this._transformPerson);
  };

  getAllPlanets = async () => {
    const res = await this.GetResource(`/planets`);
    return res.results.map(this._transformPlanet);
  };

  getAllStarships = async () => {
    const res = await this.GetResource(`/starships`);
    return res.results.map(this._transformStarship);
  };

  getPerson = async id => {
    const person = await this.GetResource(`/people/${id}`);
    return this._transformPerson(person);
  };

  getPersonImage = ({ id }) => {
    return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
  };

  getPlanet = async id => {
    const planet = await this.GetResource(`/planets/${id}`);
    return this._transformPlanet(planet);
  };

  getPlanetImage = ({ id }) => {
    return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
  };

  getStarship = async id => {
    const starship = await this.GetResource(`/starships/${id}`);
    return this._transformStarship(starship);
  };

  getStarshipImage = ({ id }) => {
    return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
  };

  _extractId = item => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  _transformPlanet = planet => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    };
  };

  _transformPerson = person => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    };
  };

  _transformStarship = starship => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity
    };
  };
}
