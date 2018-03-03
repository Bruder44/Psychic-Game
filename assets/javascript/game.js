var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;

var compChoice = letters[Math.floor(Math.random() * letters.length)];

console.log(compChoice);

document.onkeyup = function(event) {
  var playerChoice = event.key.toLowerCase();
  if (event.keyCode <= 90 && event.keyCode >= 65) {
    if (playerChoice === compChoice) {
      wins++;
      guessesLeft = 9;
      compChoice = letters[Math.floor(Math.random() * letters.length)];
      document.getElementById("wins").innerText = wins;
      document.getElementById("guesses").appendChild = guessesLeft;
    } else {
      if (guessesLeft > 0) {
        guessesLeft--;
        var choice = document.createElement("span");
        choice.innerHTML = playerChoice; 
        document.getElementById("guesses").innerText = guessesLeft;
        document.getElementById("guessesmade").appendChild(choice);
        
      }
      if (guessesLeft === 0) {
        losses++;
        guessesLeft = 9;
        var choice = document.createElement("span");
        choice.innerHTML = playerChoice; 
        document.getElementById("losses").innerText = losses;
        document.getElementById("guesses").innerText = guessesLeft;
        compChoice = letters[Math.floor(Math.random() * letters.length)];
      }
    }
  }
  console.log(event);
};