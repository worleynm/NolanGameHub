import { useState, useEffect } from 'react';
import { Wordle } from '../wordle';

const GameScreen = () => {
  const [wordleGame, SetWordleGame] = useState(new Wordle());
  useEffect(()=>{
    async function initialize(){
      await wordleGame.initialize();
    }
    initialize();
  }, [])
  
  document.addEventListener("keydown", async(event) =>{
    if (!wordleGame.gameState.gameOver) {
        if(isLetter(event.key) && wordleGame.gameState.currentPosition < wordleGame.gameConfig.cols && wordleGame.gameState.currentAttempt < wordleGame.gameConfig.rows){
            addLetterToGrid(wordleGame.gameState.currentAttempt, wordleGame.gameState.currentPosition, event.key);
            wordleGame.gameState.currentGuess += event.key;
            wordleGame.gameState.currentPosition++;
        }
        else if(event.key === 'Backspace'){
            if(wordleGame.gameState.currentPosition > 0){
              wordleGame.gameState.currentPosition--;
                addLetterToGrid(wordleGame.gameState.currentAttempt, wordleGame.gameState.currentPosition, '');
                wordleGame.gameState.currentGuess = wordleGame.gameState.currentGuess.slice(0, -1);
            }
        }
        else if(event.key === 'Enter'){
            if(await checkGuess(wordleGame.gameState.currentGuess, wordleGame.gameConfig.word)){
                revealAttemptResult(wordleGame.gameState.currentGuess, wordleGame.gameConfig.word);
                wordleGame.gameState.currentAttempt++;
                wordleGame.gameState.currentGuess = '';
                wordleGame.gameState.currentPosition = 0;
            }
        }
    }
})

function checkWord(userGuess, wordToBeGuessed){
  return userGuess.split('').map((letter, index) => {
      if(letter === wordToBeGuessed[index]){
          return 'correct'
      }
      else if(wordToBeGuessed.includes(letter)){
          return 'misplaced'
      }
      else {
          return 'incorrect'
      }
  });
}

function revealAttemptResult(userGuess, wordToBeGuessed){
  const attemptResult = checkWord(userGuess, wordToBeGuessed);
  attemptResult.forEach((element, index) => {
      let gridSquare = document.getElementById(`${wordleGame.gameState.currentAttempt}-${index}`);
      gridSquare.classList.add(element)
      if (gridSquare.classList.contains("incorrect") && gridSquare.classList.contains("correct")) {
        gridSquare.classList.remove("incorrect")
      }
      else if (gridSquare.classList.contains("incorrect") && gridSquare.classList.contains("misplaced")) {
        gridSquare.classList.remove("incorrect")
      }
  });
}

async function isWordValid(word){
  const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then((response) => response.json());
  return Array.isArray(response) && response.length > 0;
}

async function checkGuess(userGuess, wordToBeGuessed){
  if(await isWordValid(userGuess)){
      if(userGuess === wordToBeGuessed){
          wordleGame.gameState.gameOver = true;
      }
      return true;
  }
  return false;
}

  function isLetter(letter) {
    return letter.length === 1 && letter.match(/[a-z]/i);
}

function addLetterToGrid(row, col, letter){
  const letterDiv = document.getElementById(`${row}-${col}`);
  letterDiv.innerText = letter;
}

  function SetupGrid(){
    let array2d = []
    let x = 0

    for(let row = 0; row < 6; row++){
        for(let col = 0; col < 5; col++){
            x++
            array2d.push(<div className='letter'id={`${row}-${col}`} key = {x}> </div>)
        }
    }

    return (<div id = 'wordle-grid'>
      {array2d}
    </div>);
  }

  return (
    <div>
      <SetupGrid />
      
    </div>
  );

};

export default GameScreen;
