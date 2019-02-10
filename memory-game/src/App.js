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
import spaceObjects from './spaceObjects';
// import the MemoryCard component
import MemoryCard from './components/MemoryCard';
class App extends Component {
  // setting this.state.spaceObjects to the spaceObjects JSON array
  state = {
    spaceObjects
  };

  render() {
    console.log(spaceObjects);
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
      {this.state.spaceObjects.map(spaceObject => (
        <MemoryCard 
          id = {spaceObject.id}
          name = {spaceObject.name}
          image = {spaceObject.image}
        />
      ))}

      </Wrapper>
    );
  }
}
export default App;
