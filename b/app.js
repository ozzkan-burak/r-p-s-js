const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');

let userChoice = '';
let computerChoice = '';
let result = '';

const posibbleChoices = document.querySelectorAll("button");

posibbleChoices.forEach(posibbleChoice => posibbleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerText = userChoice;
  generateComputerChoice();
}));

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * posibbleChoices.length) + 1;

  switch (randomNumber) {
    case 1: computerChoice = 'rock';
      break;
    case 2: computerChoice = 'paper';
      break;
    case 3: computerChoice = 'scissors';
      break;
    default: computerChoice = '';
  }
  getResult();
  return computerChoiceDisplay.innerText = computerChoice;
}

function getResult() {
  switch (userChoice) {
    case 'rock': computerChoice === 'rock' ? resultDisplay.innerText = 'Draw' : computerChoice === 'paper' ? resultDisplay.innerText = 'Computer Wins' : resultDisplay.innerText = 'User Wins';
      break;
    case 'paper': computerChoice === 'rock' ? resultDisplay.innerText = 'User Wins' : computerChoice === 'paper' ? resultDisplay.innerText = 'Draw' : resultDisplay.innerText = 'Computer Wins';
      break;
    case 'scissors': computerChoice === 'rock' ? resultDisplay.innerText = 'Computer Wins' : computerChoice === 'paper' ? resultDisplay.innerText = 'User Wins' : resultDisplay.innerText = 'Draw';
      break;
    default: resultDisplay.innerText = 'Please select a choice';
  }

  
}