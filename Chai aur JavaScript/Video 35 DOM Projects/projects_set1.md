# Projects related to DOM

## Project link below
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1 solution

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);  // mouse click event
    console.log(e.target);  // where did mouse click
    if (e.target.id === 'grey') {   // checking the id of the event target
      body.style.backgroundColor = e.target.id   // changing bg color of body
    }
    if (e.target.id === 'white') {   
      body.style.backgroundColor = e.target.id   
    }
    if (e.target.id === 'blue') {   
      body.style.backgroundColor = e.target.id   
    }
    if (e.target.id === 'yellow') {   
      body.style.backgroundColor = e.target.id   
    }
  });
});
// event listener is a function that waits for an event to occur on an element (like a button click, mouse movement, or key press) and then executes a specified function. In JavaScript, we use the addEventListener() method to attach event listeners to elements.
// element.addEventListener(event, function, useCapture);
```

## Project 2 solution

```javascript
const form = document.querySelector('form');
// const height = parseInt(document.querySelector('#height').value)   // this usecase is wrong as it will give empty values

form.addEventListener('submit', function (e) {
  e.preventDefault(); // stops the default form submission behavior

  const height = parseInt(document.querySelector('#height').value); // accessing input value & converting into integer using parseInt
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2); // bmi formula
    results.innerHTML = `<span>${bmi}</span>`; // show the result

    if (bmi < 18.6) {   // checking the categort of BMI
      results.innerHTML += '<span>Category: Underweight</span>'; // += used to append value in innerHTML
    } else if (bmi >= 18.6 && bmi < 24.9) {
      results.innerHTML += '<span>Category: Normal Range</span>';
    } else {
      results.innerHTML += '<span>Category: Overweight</span>';
    }
  }
});
```

## Project 3 solution

```javascript
// const clock = document.querySelector('#clock')
const clock = document.getElementById('clock'); // another way for selecting id

setInterval(function () {   // setInterval(function, delay, param1, param2, ...);
  let date = new Date(); // creating Date object
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString()   // inserting date in #clock div
}, 1000);
// setInterval() method repeatedly executes a function at a fixed time interval (in milliseconds).
```

## Project 4 solution

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1); // generating random number

const userInput = document.querySelector('#guessField'); // accesiing user input through id #guessField
const submit = document.querySelector('#subt'); // accessing submit button through id #subt
const guessSlot = document.querySelector('.guesses'); // accessing previous guesses
const remaining = document.querySelector('.lastResult'); // accessing guesses remaining
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');  // accessing the results div

const p = document.createElement('p'); // creating a paragraph element

let prevGuess = []; // creating an array in which previous guesses will be shown
let numGuess = 1; // num of guesses taking starting from 1
let playGame = true;

if(playGame){  // checks whether the game is playable
  submit.addEventListener('click', function(e){   // The game logic is triggered only when the user submits a guess
    e.preventDefault()
    let guess = parseInt(userInput.value)   // takes the number given by user
    console.log(guess)
    validateGuess(guess)  // passing the userInput value to next function
  })
}

function validateGuess(guess){  // ensuring that user gives a valid num between 1 & 100
  if(isNaN(guess)){
    alert('Please enter a valid number')
  } else if(guess < 1){
    alert('Please enter a number greater than 1')
  } else if(guess > 100){
    alert('Please enter a number smaller than 100')
  } else {
    prevGuess.push(guess)  // inserting the guessed num into previous guesses
    if(numGuess >= 10){  // ensuring that the game ends after 10 guesses
      cleanUpGuess(guess)
      displayMessage(`Game over. Random number was ${randomNumber}`)
      endGame()
    } else {
      cleanUpGuess(guess)
      checkGuess(guess)  // checking whether the guess is right or wrong
    }
  }
}

function checkGuess(guess){  // checks whether the guess made is equal, lower or higher than the random num generated and displays a message accordingly
  if(guess === randomNumber ){
    displayMessage(`You guessed it right`)
    endGame()
  } else if(guess < randomNumber){
    displayMessage(`Number is too low`)
  } else if(guess > randomNumber){
    displayMessage(`Number is too high`)
  }
}

function cleanUpGuess(guess){  // cleaning the user input after guessing, updating previous guesses and guesses remaining 
  userInput.value = ''   // clearing the input box after each guess
  guessSlot.innerHTML += `${guess}, `  // appending the guess values in previous guesses span element
  numGuess++;  // incrementing num of guesses
  remaining.innerHTML = `${10 - numGuess}`
}

function displayMessage(message){  // displaying a message after submiting a guess
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){   // ending the game
  userInput.value = ''
  userInput.setAttribute('disabled', '')  // disabling the user input in key value pairs
  p.classList.add('button')  // classList property is used to add, remove, toggle, or check classes on an HTML element
  p.innerHTML = `<h2 id="newGame">Start new game</h2>`
  startOver.appendChild(p)  // adds p element inside resultParas div
  playGame = false
  newGame()
}

function newGame() {   // starting new game
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];  // resetting previous guessed values
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${10 - numGuess}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true;
  });
}
```

## Project 4 solution (ChatGPT Version)

```javascript
// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 10; // Maximum attempts
let guessHistory = []; // Store previous guesses

// Select elements
const userInput = document.querySelector('#guessField');
const submitBtn = document.querySelector('#subt');
const message = document.querySelector('.lowOrHi');
const guessList = document.querySelector('.guesses');
const remainingAttempts = document.querySelector('.lastResult');
const resultContainer = document.querySelector('.resultParas');

// Display initial attempts
remainingAttempts.textContent = attempts;

// Listen for button click
submitBtn.addEventListener('click', function (e) {
  e.preventDefault();
  let guess = parseInt(userInput.value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    showMessage('Enter a number between 1 and 100.');
  } else {
    checkGuess(guess);
  }
  userInput.value = ''; // Clear input after guess
});

// Function to check guess
function checkGuess(guess) {
  guessHistory.push(guess); // Store guess
  guessList.textContent = guessHistory.join(', '); // Display previous guesses
  attempts--; // Reduce attempts
  remainingAttempts.textContent = attempts;

  if (guess === randomNumber) {
    showMessage('🎉 Correct! You win!');
    endGame();
  } else if (attempts === 0) {
    showMessage(`❌ Game Over! The number was ${randomNumber}`);
    endGame();
  } else {
    if (guess < randomNumber) {
      showMessage('📉 Too low!');
    } else {
      showMessage('📈 Too high!');
    }
  }
}

// Function to show messages
function showMessage(text) {
  message.innerHTML = `<h2>${text}</h2>`;
}

// Function to end the game
function endGame() {
  userInput.disabled = true;
  submitBtn.disabled = true;

  // Create restart button
  let restartBtn = document.createElement('button');
  restartBtn.textContent = '🔄 Play Again';
  restartBtn.addEventListener('click', restartGame);
  resultContainer.appendChild(restartBtn);
}

// Function to restart the game
function restartGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 10;
  guessHistory = [];
  guessList.textContent = '';
  remainingAttempts.textContent = attempts;
  message.innerHTML = '';
  userInput.disabled = false;
  submitBtn.disabled = false;
  document.querySelector('button').remove(); // Remove restart button
}
```