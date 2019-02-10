/* eslint-disable no-unused-vars */
/* eslint-disable semi */
import React, { Component } from 'react';
// import the wrapper component
import Wrapper from './components/Wrapper';
// import the title/jumbotron component
import Title from './components/Title';
// import './App.css';
// import the sticky navbar/scoreboard component
import Navbar from './components/NavBar';
// import the JSON object with the space objects for the memory game
// const spaceObjects =  './spaceOjects.json';
// import the MemoryCard component

class App extends Component {
  // setting this.state.spaceObjects to the spaceObjects JSON array
  // state = {
  //   spaceObjects
  // };

  render() {
   
    return (
      <Wrapper>
        <Navbar
          title='Memory Game'
          userScore={0}
          topScore={0}
        />
        <Title
          title='Memory Game'
          message='A simple click-based memory game.' />

      </Wrapper>
    );
  }
}
export default App;
