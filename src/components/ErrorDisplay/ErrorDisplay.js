import React from 'react';
import './ErrorDisplay.css';

const ErrorDisplay = () => {
  return (
    <div className='error-display'>
      <span className='boom'>Boom!</span>
      <span>We experienced a slight disturbance in data flow</span>
      <span>(but we have already sent droids to fix it)</span>
    </div>
  );
};

export default ErrorDisplay;
