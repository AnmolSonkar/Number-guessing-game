let randomNumber = Math.floor(Math.random() * 100) + 1;
let count = 0;

let guessInput = document.querySelector("#guess");
let submit = document.querySelector("#submit");
let preguess = document.querySelector("#preguess");
let result = document.querySelector("#result");
let newGame = document.querySelector("#newgame");

function getNumber() {
    if (count === 10) {
        gameOver();
    } else {
        const guess = Number(guessInput.value);
        if (isNaN(guess) || guess < 1 || guess > 100) {
            alert("Please enter a valid number between 1 and 100!");
        } else {
            preguess.textContent += guess + " ";

            if (guess < randomNumber) {
                result.textContent = "Wrong! Last guess was too low!";
                result.style.backgroundColor = "red";
                result.style.padding = "2px";
            } else if (guess === randomNumber) {
                result.textContent = "Congratulations! You got it right!";
                result.style.backgroundColor = "green";
                result.style.padding = "2px";
                guessInput.disabled = true;
                submit.disabled = true;
                newGame.style.display = "inline";
            } else {
                result.textContent = "Wrong! Last guess was too high!";
                result.style.backgroundColor = "red";
                result.style.padding = "2px";
            }
            count++;
        }
    }
    guessInput.value = "";
    guessInput.focus();
}

submit.addEventListener("click", getNumber);

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guessInput.disabled = false;
    submit.disabled = false;
    newGame.style.display = "none";
    result.textContent = "";
    result.style.backgroundColor = "white";
    preguess.textContent = "";
    count = 0;
}

newGame.addEventListener("click", restartGame);

function gameOver() {
    guessInput.disabled = true;
    submit.disabled = true;
    newGame.style.display = "inline";
    result.textContent = "!!!GAME OVER!!!";
    result.style.backgroundColor = "red";
}
