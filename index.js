const { question } = require("readline-sync");
const { displayWordSoFar, isGameWon, isGameLost } = require("./gamelogic");

function game(word, guesses) {

 // Zorg dat de gebruiker letters kan raden
  console.log("De eerder geraden letters zijn: " + guesses);
  const letter = question("Raad een letter: ");

  // Houdt in de guesses-array bij welke letters de gebruiker geraden heeft
  guesses.push(letter);

  // Laat zien welke letters al geraden zijn (met displayWordSoFar)
  console.log("Het woord zover: " + displayWordSoFar(word, guesses));

  // Heeft iemand alle letters geraden? Wuhuuu! Log dan dat ze gewonnen hebben
  if(isGameWon(word, guesses)){
    console.log("Yaay.. gewonnen!");
  }

  // Heeft iemand 7 letters fout geraden? Jammer! Log dan dat ze verloren hebben
  if(isGameLost(word, guesses)){
    console.log("prutser, je hebt verloren!");
  }

  // Stop het programma met return wanneer iemand gewonnen of verloren heeft
  if(isGameWon(word, guesses) || isGameLost(word, guesses)){
  //Game is finished
    return;
  }

  // volgende ronde! we roepen game nog een keer aan
   game(word, guesses);
}

console.log(`
__________
| /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
|/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
|       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
|      / \\   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
|            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
`);

game("javascript", []);
