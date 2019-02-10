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
// making app the stateful component
class App extends Component {
  // setting this.state.spaceObjects to the spaceObjects JSON array
  state = {
    spaceObjects,
    score: 0,
    topScore: 0,
    guessed: [],
    playing: true
  };


  // the function that randomizes things on the page
  handleRandomize = () => {
    let temp = this.state.spaceObjects
    function shuffle(array) {
      let currentIndex = array.length, temporaryValue, randomIndex;
    
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
    // call the shuffle function
    shuffle(temp);
    // set spaceObject to the shuffled temp
    this.setState({spaceObjects:temp});
    console.log(this.state);
  }

  // function that updates the score
  updateScore = () => {
    let currentScore = this.state.score;
    currentScore = currentScore + 1;
    this.setState( {score: currentScore} );
  }

  // function that updates guessed
  updateGuessed = id => {
    let currentGuessed = this.state.guessed;
    // push the guessed ids into the guessed array
    currentGuessed.push(id);
    // store the updated guessed array
    this.setState( {guessed: currentGuessed});
  }

  checkGuessed = id => {
    for (let i=0; i < this.state.guessed.length; i++) {
      if(id===this.state.guessed[i]) {
        return this.setState( {playing: false});
      } else {
        // console.log("keep guessing");
      }
  }
}

  // function that handles the card clicks or "guess"
  handleUpdate = id => {
    this.checkGuessed(id);
    // calls updateGuess
    this.updateGuessed(id);
    // calls updateScore
    this.updateScore();
    // calls the handleRandomize
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
          userScore={this.state.score}
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
