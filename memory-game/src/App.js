/* eslint-disable no-unused-vars */
/* eslint-disable semi */
import React from 'react';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
// import './App.css';

// keeping all this commented out in case I end up needing it
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

function App () {
  return (
    <Wrapper>
      <Title message = 'A simple click-based memory game.'>Memory Game</Title>
    </Wrapper>
  );
}

export default App;
