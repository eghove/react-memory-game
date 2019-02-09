/* eslint-disable no-unused-vars */
/* eslint-disable semi */
// Title component index.js file

import React from 'react';
// import './style.css';

function Title (props) {
  return (
    <div className='row'>
      <div className='col-md-12'>
        <div className = 'jumbotron text-center'>
          <h1 class="display-4">{props.title}</h1>
          <p className = 'lead'>{props.message}</p>
        </div>
      </div>
    </div>
  )
}

export default Title;
