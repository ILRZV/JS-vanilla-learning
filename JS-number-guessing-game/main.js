document.addEventListener("DOMContentLoaded", function () {
    var randomNumber = Math.floor(Math.random() * 100) + 1;

    var guesses = document.querySelector('.guesses');
    var lastResult = document.querySelector('.lastResult');
    var lowOrHi = document.querySelector('.lowOrHi');

    var guessSubmit = document.querySelector('.guessSubmit');
    var guessField = document.querySelector('.guessField');

    var guessCount = 0;
    var resetButton;

    guessSubmit.addEventListener('click', checkGuess);

    function checkGuess() {
        let num = +guessField.value;
        console.log(guessCount);
        if (guessCount == 0) {
            guesses.textContent = "Previous guesses: " + num;
        } else {
            guesses.textContent += ' ' + num;
        }
        guessCount++;
        if (guessCount > 10) {
            lastResult.textContent = 'YOU LOSE!!!';
            lastResult.style.backgroundColor = 'red';
            endGame();
        } else {
            if (num > randomNumber) {
                lastResult.textContent = 'Too high';
                lastResult.style.backgroundColor = 'red';
            }
            if (num < randomNumber) {
                lastResult.textContent = 'Too low';
                lastResult.style.backgroundColor = 'red';
            } 
            if (num == randomNumber) {
                lastResult.textContent = 'YOU WIN!!!';
                lastResult.style.backgroundColor = 'green';
                endGame();
            }
            guessField.textContent = '';
        }
        guessField.value = '';
        guessField.focus(); 
    }

    function endGame() {
        guessField.disabled = true;
        guessSubmit.disabled = true;
        resetButton = document.createElement('button');
        resetButton.textContent = 'Reset';
        document.body.appendChild(resetButton);
        lastResult.textContent += '  It was ' + randomNumber;
        resetButton.addEventListener('click', newGame);
    }

    function newGame() {
        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessCount = 0;
        guesses.textContent = '';
        lastResult.textContent = '';
        lastResult.style.backgroundColor = 'white';
        resetButton.parentNode.removeChild(resetButton);
        guessField.focus();
        randomNumber = Math.floor(Math.random() * 100) + 1;
    }
});
