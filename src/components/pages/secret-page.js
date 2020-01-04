import React from 'react';
import { Redirect } from 'react-router-dom';

export const SecretPage = ({ isLoggedIn = false }) => {
  if (isLoggedIn) {
    return (
      <div className='jumbotron text-center'>
        <h1>Hello there, secret-seeker!</h1>
      </div>
    );
  }

  return <Redirect to='/login' />;
};

export default SecretPage;
