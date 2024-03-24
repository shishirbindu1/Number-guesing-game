const randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParse");
const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validGuess(guess);
  });
}

const validGuess = (guess) => {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("please Enter number greater than 0");
  } else if (guess > 100) {
    alert("Enter number between 1 -100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over Random number was ${randomNumber}`);
      endGame();
    }else{
        displayGuess()
        checkGuess()
    }
  }
};

const checkGuess = (guess) => {};

const displayGuess = (guess) => {};

const displayMessage = (message) => {};

const newGame = () => {};

const endGame = () => {};
