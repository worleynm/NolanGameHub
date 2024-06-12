import React from 'react';
import WelcomeScreen from './screens/WelcomeScreen';
import GameScreen from './screens/GameScreen';
import './App.css';

export function App() {
  const [gameStarted, setGameStarted] = React.useState(false);

  return (
    <div className="App">
      {!gameStarted ? (
        <WelcomeScreen onStart={() => setGameStarted(true)} />
      ) : (
        <GameScreen />
      )}
    </div>
  );
}

//export default App;

// import { useState } from 'react'
// import './App.css'
// import Game from './screens/GameScreen'

// export function App() {
//   const [name, setName] = useState(`Bearcat`)
  

//   return (
//     <>
//       <div>
//           {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
//           <h1>Rock Paper Scissors</h1> 
//           <Game />
//       </div>
    
//     </>
//   )
// }


