import React from 'react';

function WelcomeScreen({ onStart }) {
  return (
    <div className="welcome-screen">
      <h1>Welcome to Tic Tac Toe</h1>
      <p>Click the button below to start the game!</p>
      <button onClick={onStart}>Start Game</button>
    </div>
  );
}


export default WelcomeScreen;


// import {PropTypes} from 'prop-types';

// export const WelcomeScreen = ({ name, onNameChange, onGameStart }) => {

//   function onStartGameClick() {
//     console.log(name)
//     onGameStart();
//   }
  
//   return (
//     <div id="welcome-screen">
//       <form id="name-form">
//         <div className="form-group">
//           <label htmlFor="username">Type your name: </label>
//           <input
//             className="form-control"
//             type="text"
//             id="username"
//             name="username"
//             value={name}
//             onChange={(e) => onNameChange(e.target.value)}
//             required
//             placeholder="Enter Name Here..."
//             minLength="2"
//             maxLength="15"
//           />
//         </div>
//         <button 
//           className="btn btn-primary" 
//           id="start-game-button" type="button" 
//           onClick={onStartGameClick}>
//           Start Game!
//         </button>
//       </form>
//     </div>
//   );
// };
// WelcomeScreen.propTypes = {
//   name: PropTypes.string.isRequired,
//   onNameChange: PropTypes.func.isRequired,
//   onGameStart: PropTypes.func.isRequired
// }


