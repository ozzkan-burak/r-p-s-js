const resultDisplay = document.querySelector('#result');
const choicesDisplay = document.querySelector('#choices');
const choices = ['rock', 'paper', 'scissors'];

const handleClick = (e) => {
  console.log(e.target.innerText)
  getResults(e.target.innerText, choices[Math.floor(Math.random() * choices.length)]);
}

choices.forEach(choice => {
  const button = document.createElement('button');
  button.innerText = choice;
  button.addEventListener('click', handleClick);
  choicesDisplay.append(button);
});

function getResults(userChoice, computerChoice) {
  switch (userChoice + computerChoice) {
    case 'scissorspaper':
    case 'rockscissors':
    case 'paperrock':
      resultDisplay.innerText = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + '. You win!';
      break;
    case 'paperscissors':
    case 'rockpaper':
    case 'scissorsrock':
      resultDisplay.innerText = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + '. You lose!';
      break;
    case 'scissorsscissors':
    case 'rockrock':
    case 'paperpaper':
      resultDisplay.innerText = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + '. Its a draw!';
      break;
  }
}