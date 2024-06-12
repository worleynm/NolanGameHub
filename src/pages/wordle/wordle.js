export class Wordle {
  constructor(){
    this.gameState = {
      currentAttempt: 0,
      currentPosition: 0,
      currentGuess: '',
      gameOver: false
    }
    this.gameConfig = {
      rows: 6,
      cols: 5,
      word: ""
    };
  }
  

  
  async isWordValid(word){
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then((response) => response.json());
    return Array.isArray(response) && response.length > 0;
  }

  async getRandomWord(){
    let response, word;

    do {
        response = await fetch(`https://it3049c-hangman.fly.dev`).then((response) => response.json());
        word = await response.word;
    } while (!await this.isWordValid(word));
    console.log(word)
    return word;
  }

  async initialize(){
    this.gameConfig.word = await this.getRandomWord();
    return this.gameConfig.word;
  }

}