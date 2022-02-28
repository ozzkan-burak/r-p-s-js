const userChoiceDisplay = document.createElement('h2');
const computerChoiceDisplay = document.createElement('h2');
const resultDisplay = document.createElement('h2');

const init = () => {
  resultDisplay.innerText = "Make your choice!";
}

init();

const gameGrid = document.getElementById("game");
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay);

const choices = ['rock', 'paper', 'scissors'];

for (let x of choices){
  const button = document.createElement('button');
  button.innerText = x;
  button.addEventListener('click', ()=> {
    playRound(x, computerPlay());
  });
  gameGrid.append(button);
}

function playRound(userChoice, computerChoice){
  userChoiceDisplay.innerText = `You chose: ${userChoice}`;
  computerChoiceDisplay.innerText = `Computer chose: ${computerChoice}`;
  if (userChoice === computerChoice){
    resultDisplay.innerText = "It's a draw!";
  } else if (userChoice === 'rock' && computerChoice === 'scissors' || userChoice === 'paper' && computerChoice === 'rock' || userChoice === 'scissors' && computerChoice === 'paper'){
    resultDisplay.innerText = "You win!";
  } else {
    resultDisplay.innerText = "You lose!";
  }
}

function computerPlay(){
  return choices[Math.floor(Math.random() * choices.length)];
}