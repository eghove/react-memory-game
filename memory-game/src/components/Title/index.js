/* eslint-disable no-unused-vars */
/* eslint-disable semi */
// Title component index.js file

import React from 'react';
// import './style.css';

function Title(props) {
  if (props.highscore === true) {
    return (
      <div className='row'>
        <div className='col-md-12'>
          <div className='jumbotron text-center'>
            <h1 className="display-4">{props.title}</h1>
            <p className='lead'>{props.message}</p>
            <p className='alert alert-success' role='alert'>You got a new high score!</p>
          </div>
        </div>
      </div>
    )
  } else {

    return (
      <div className='row'>
        <div className='col-md-12'>
          <div className='jumbotron text-center'>
            <h1 className="display-4">{props.title}</h1>
            <p className='lead'>{props.message}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Title;
