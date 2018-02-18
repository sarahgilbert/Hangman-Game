
// create a bank of possible words so that the computer can choose a random word
var words = ["adventure", "treasure", "galleon", "plank", "swashbuckling"];

// make a way for the computer to randomly choose one of the words
var thisWord = words[Math.floor(Math.random() * words.length)];

// make an array filled with _ to match the number of letters in each word
// before the player starts guessing, show the player little lines representing each of the letters in the word
var answerArray = [];
    for (var i = 0; i < thisWord.length; i++) {
       answerArray[i] = "_";
    }
// ?loop -for, while, do?
// get a guess from the player
// connect the guessing form in html to javascript
//document.getElementById("guess");

// if the guess is in the word, update the player's progress by showing the letter on the right line

//if the letter guessed isn't in the word, update the number of lives remaining
//keep track of letters left to be guessed
//var remainingLetters = word.length;

// show which letters have been guessed 

//if the number of lives remaining is zero, end the game
// if the player guesses the word, update the number of wins




// stuff below this is from rock, paper, scissors activity

// create a variable to hold the number of wins //
//var wins = 0;


// create a function to run whenever the user presses a key
//document.onkeypress =function(event) {
// determines which key was pressed
  //  var userGuess = event.key;
//}

 // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
 var computerChoices = ["r", "p", "s"];

 // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
//var html =
// "<p>You chose: " + userGuess + "</p>" +
 
 //"<p>wins: " + wins + "</p>";
 
// Set the inner HTML contents of the #game div to our html string
//document.querySelector("#game").innerHTML = html;