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
    guessed: [0],
    playing: true,
    highscore: false
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
    this.setState({ spaceObjects: temp });
  }

  // function that updates the score
  updateScore = () => {
    let currentScore = this.state.score;
    currentScore = currentScore + 1;
    this.setState({ score: currentScore });
  }

  // function that updates guessed
  updateGuessed = id => {
    let currentGuessed = this.state.guessed;
    // push the guessed ids into the guessed array
    currentGuessed.push(id);
    // store the updated guessed array
    this.setState({ guessed: currentGuessed });
  }

  // function that resets the state
  resetGame = () => {
    this.setState({
      spaceObjects,
      score: 0,
      guessed: [0],
      playing: true
    })
  }

  // function that sets the initial state
  initialState = () => {
    this.resetGame();
    this.setState({topScore:0, highscore: false});

  }

  // checks to see if an image has already been guessed
  checkGuessed = id => {
    // make a tempArray and set that value=this.state.guessed
    let tempArray = this.state.guessed

    // inner function that does the checking
    function innerFunction(id, array) {
      // set initial value of hasBeenGuessed to false
      let hasBeenGuessed = false;
      // for loop that checks every item in the array
      for (let i = 0; i < array.length; i++) {
        if (id === array[i]) {
          // if the id matches something already in the array, set hasBeenGuessed=true and return it.
          hasBeenGuessed = true;

          return hasBeenGuessed;
        }
      }
      // pass out hasBeenGuessed to the parent checkGuessed function
      return hasBeenGuessed;
    }

    if (innerFunction(id, tempArray) === true) {
      // if hasBeenGuessed gets flipped to true, the game is over
      this.setState({ playing: false });
      return true
    } else {
      return false;
    }
  }

  // function that handles the card clicks or "guess"
  handleUpdate = id => {
    // make sure the click resets highscore to false
    this.setState({highscore: false});

    // while the game is still being played, do this:
    if (this.checkGuessed(id) === false && this.state.playing === true) {
      // update the guessed array
      this.updateGuessed(id);
      // update the game score
      this.updateScore();
    
    // when the game is over, do this
    } else {
      console.log("GAME OVER!")
      // if the user hit a new high score, update topScore accordingly
      if(this.state.score > this.state.topScore) {
        let temp = this.state.score;
        this.setState({topScore: temp, highscore: true})
      }
      // reset the game, except for topScore
      this.resetGame();
    }

    // no matter what, randomize the board
    this.handleRandomize();
    

  }



  componentDidMount() {
    // make sure the state is back to the initial state
    this.resetGame();
    

    // makes sure it start from a randomized state 
    this.handleRandomize();
  }

  render() {
    return (
      <Wrapper>

        {/* the NavBar/ScoreBoard Component */}
        <Navbar
          title='Planetary Memory Game'
          userScore={this.state.score}
          topScore={this.state.topScore}
        />

        {/* the Title Component */}
        <Title
          title='Planetary Memory Game'
          message='A simple click-based memory game, using React.js.'
          highscore= {this.state.highscore}
        />

        {/* the Memory card display component */}
        <div className="row">
          {this.state.spaceObjects.map(spaceObject => (
            <MemoryCard
              key={spaceObject.id}
              id={spaceObject.id}
              name={spaceObject.name}
              image={spaceObject.image}
              handleUpdate={this.handleUpdate}
            />
          ))}
        </div>


      </Wrapper>
    );
  }
}
export default App;
