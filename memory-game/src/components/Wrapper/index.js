/* eslint-disable no-unused-vars */
/* eslint-disable semi */

// Wrapper index.js file

import React from 'react';
import './style.css';

function Wrapper (props) {
  return <div className = 'wrapper'> {props.children} </div>
}

export default Wrapper;
