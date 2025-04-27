const playButton = document.querySelector('.intro button');
const introScreen = document.querySelector('.intro');
const matchScreen = document.querySelector('.match');
const options = document.querySelectorAll('.options button');
const playerHand = document.querySelector('.player-hand');
const computerHand = document.querySelector('.computer-hand');
const winnerDisplay = document.querySelector('.winner');
const playerScoreDisplay = document.querySelector('.player-score p');
const computerScoreDisplay = document.querySelector('.computer-score p');

let playerScore = 0;
let computerScore = 0;

const computerOptions = ['rock', 'paper', 'scissors'];

const images = {
  rock: 'https://wrpsa.com/wp-content/uploads/2021/08/rock-400x374.png',
  paper: 'https://wrpsa.com/wp-content/uploads/2021/08/paper-400x374.png',
  scissors: 'https://wrpsa.com/wp-content/uploads/2021/08/scissors-400x374.png'
};

playButton.addEventListener('click', () => {
    introScreen.classList.add('fadeOut');
    matchScreen.classList.remove('fadeOut');
    matchScreen.classList.add('fadeIn');
});

const playMatch = (playerChoice) => {
    const computerNumber = Math.floor(Math.random() * 3); 
    const computerChoice = computerOptions[computerNumber];
    
    console.log(`Player chose: ${playerChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    
    playerHand.src = images[playerChoice];  
    computerHand.src = images[computerChoice]; 

    let result = '';
    if (playerChoice === computerChoice) {
        result = 'It\'s a tie!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win!';
        playerScore++; 
    } else {
        result = 'Computer wins!';
        computerScore++; 
    }

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    winnerDisplay.textContent = result;

    setTimeout(() => {
        playerHand.src = images.rock;
        computerHand.src = images.rock;
    }, 1500); 
};

options.forEach(option => {
    option.addEventListener('click', (event) => {
        const playerChoice = event.target.classList[0]; 
        console.log(`Player selected: ${playerChoice}`);
        playMatch(playerChoice);
    });
});
