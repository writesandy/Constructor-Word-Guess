let Word = require("./Game.js");
let inquirer = require("inquirer.js");


function Game () {
    //declare variables and functions to initialize game

    this.play = function () {
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
                
              return /[a-z1-9]/gi.test(val);
            }
        }
    ]).then(function(val){
        let guessedCorrectly = false;
    });
    
}

}

