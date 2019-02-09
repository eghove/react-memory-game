/* eslint-disable no-unused-vars */
/* eslint-disable semi */
// Title component index.js file

import React from 'react';
// import './style.css';

function Title (props) {
  return (
    <div className='row'>
      <div className='col-md-12'>
        <div className = 'jumbotron'>
          <h1 class="display-4">{props.children}</h1>
          <p className = 'lead'>{props.message}</p>
        </div>
      </div>
    </div>
  )
}

export default Title;
