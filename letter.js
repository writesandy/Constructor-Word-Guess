


function Letter (guessedLetter) {
    this.underscore = "__";
    this.guessedLetter = guessedLetter;
    this.showLetter = false;
    this.guessChecker = function(guessedLetter) {
        if (this.correctLetters === letter) {
            this.underscore = this.correctLetters;
            return true;
        } else {
            return false;
        }
    }

    this.guessedLetter = function () {
        this.showLetter
    }
};

module.exports = Letter;