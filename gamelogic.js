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
  //let wordOutCome = displayWordSoFar(word, guesses);
  //wordOutCome = wordOutCome.split(" ").join("");
  //return wordOutCome === word;

  return displayWordSoFar(word, guesses).split(" ").join("") === word;
}

function isGameLost(word, guesses) {
  if (guesses.length >= 7 ) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};
