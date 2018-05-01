// index.js: The file containing the logic for the course of the game, which depends on Word.js and:

// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses

// Letter.js should not require any other files.
// Word.js should only require Letter.js
// HINT: Write Letter.js first and test it on its own before moving on, then do the same thing with Word.js
// HINT: If you name your letter's display function toString, JavaScript will call that function 
// automatically whenever casting that object to a string 
// (check out this example: https://jsbin.com/facawetume/edit?js,console)


let Word = require("./Word.js");
let inquirer = require("inquirer");


function Game () {
    //declare variables and functions to initialize game

    this.play = function () {
        console.log("Guesses left: " +guesses);
        this.guessesLeft = 10;
        this.getWord();
    };
    this.getWord = function() {
        let chocolate = ["kit kat", "reeses cups", "chocolate cherries", "snickers"];
        let randomWord = chocolate[Math.floor(Math.random() * chocolate.length)];
        this.currentWord = new Word(randomWord);

        this.userInput();
        // user input will return results of inquirer.prompt


    }

    this.userInput = function () {
        return inquirer.prompt ([
        {
            type: 'input',
            name: 'letter',
            message: "Choose a letter",
            validate: function(val) {
            return /[a-z1-9]/.test(val);
            }
        }
    ]).then(function(val){
        let guessedCorrectly = this.currentWord.checkLetter(val.letter);
        if (guessedCorrectly) {
            this.currentWord.updateDisplayedWord(val.letter);
            console.log('You guessed correctly!');
        } else {
            this.guessesLeft--;
            console.log('You guessed incorrectly!');

        }
        
        if(this.guessesLeft < 1) {
            console.log('Game Over');
            process.exit(0);
        } else if (this.currentWord.checkForWin()) {
            this.play();
        }

    });
    
};

}

module.exports = Game;

