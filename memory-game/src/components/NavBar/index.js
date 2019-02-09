
import React from 'react';

function Navbar (props) {
  return(
    <nav className = "navbar navbar-expand-lg navbar-light bg-light">
        <a class = "navbar-brand" href = "/" alt = {props.title}>{props.title}</a>
        <ul className = "navbar-nav mr-auto">
          <li className = "nav-item">Click an image to start!</li>
        </ul>
        <span className = "navbar-text">
          Your Score: {props.userScore} | Top Score: {props.topScore}
        </span>
    </nav>
  )
}

export default Navbar;