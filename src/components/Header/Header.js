import React from 'react';
import './Header.css';

const Header = ({ onServiceChange }) => {
  return (
    <div className='header d-flex'>
      <h3>
        <a href='/'>Star DB</a>
      </h3>
      <ul className='d-flex'>
        <li>
          <a href='/people'>People</a>
        </li>
        <li>
          <a href='/planets'>Planets</a>
        </li>
        <li>
          <a href='/starships'>Starships</a>
        </li>
      </ul>
      <button onClick={onServiceChange} className='btn btn-primary btn-sm'>
        Change Data
      </button>
    </div>
  );
};

export default Header;
