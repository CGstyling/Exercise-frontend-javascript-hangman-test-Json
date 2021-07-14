let numberOfWrongGuesses = 0;
let guessedWord;

function displayWordSoFar(word, guesses) {
  let wordToUser = "";
  for( let i = 0; i < word.length; i++) {
    if (guesses.includes(word[i])) {
      //yaaaay! we have a good gues
      wordToUser = wordToUser + word[i] + " ";
    } else {
      wordToUser = wordToUser + "_ ";
      //sorry you dit not guess the letter, so print _
    }
  }
  return wordToUser;
}

function isGameWon(word, guesses) {
  return displayWordSoFar(word, guesses).split(" ").join("") === word;
}

function isGameLost(word, guesses) {
  let wrongGuesses = [];
  let wordArray = word.split("");

  //Identify uniquely wrong guessed numbers
  for( let i = 0; i < guesses.length; i++) {
      if(!wordArray.includes(guesses[i])){
        if(!wrongGuesses.includes(guesses[i])){
          wrongGuesses.push(guesses[i]);
        }
      }
  }
  return wrongGuesses.length >= 7;
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};
