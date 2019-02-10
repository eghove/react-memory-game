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


  // the function that randomizes things on the page
  handleRandomize = () => {
    let temp = this.state.spaceObjects
    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
    
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      temp = array;
    }
    shuffle(temp);
    this.setState(temp);
  }

  handleUpdate = id => {
    this.handleRandomize();
  }

  componentDidMount() {
    // makes sure it start from a randomized state
    this.handleRandomize();
  }
  
  render() {
    return (
      <Wrapper>

        {/* the NavBar/ScoreBoard Component */}
        <Navbar
          title='Memory Game'
          userScore={0}
          topScore={0}
        />

        {/* the Title Component */}
        <Title
          title='Memory Game'
          message='A simple click-based memory game.'
        />

        {/* the Memory card display component */}
        <div className="row">
          {this.state.spaceObjects.map(spaceObject => (
            <MemoryCard
              key = {spaceObject.id}
              id={spaceObject.id}
              name={spaceObject.name}
              image={spaceObject.image}
              handleUpdate = {this.handleUpdate}
            />
          ))}
        </div>


      </Wrapper>
    );
  }
}
export default App;
