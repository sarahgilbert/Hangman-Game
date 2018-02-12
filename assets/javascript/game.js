
// create a bank of possible words
var words = ["adventure", "treasure", "galleon", "plank", "swashbuckling"];

// make a way for the computer to randomly choose one of the words
var words = words[Math.floor(Math.random() * words.length)];

// make an array filled with _ to match the number of letters in each word

var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }

// connect the guessing form in html to javascript

//keep track of letters left to be guessed
var remainingLetters = word.length;

// show which letters have been guessed 

//put the letters on the right lines so that the player can see

//limit the number of wrong guesses a user can make

// end the game if the user wins, or makes too many wrong guesses

// display the number of wins




// stuff below this is from rock, paper, scissors activity

// create a variable to hold the number of wins //
var wins = 0;


// create a function to run whenever the user presses a key
document.onkeypress =function(event) {
// determines which key was pressed
    var userGuess = event.key;
}

 // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
 var computerChoices = ["r", "p", "s"];

 // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
//var html =
 "<p>You chose: " + userGuess + "</p>" +
 
 "<p>wins: " + wins + "</p>";
 
// Set the inner HTML contents of the #game div to our html string
//document.querySelector("#game").innerHTML = html;