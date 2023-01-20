let playerWins = 0;
let computerWins = 0;
let draws = 0;
const NUM_ROUNDS = 5;

let playerScore = document.querySelector('.playerScore');
let computerScore = document.querySelector('.computerScore');
let message = document.querySelector('.message');

function getComputerSelection() {
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2: 
            return 'scissors';
    }
}

function getPlayerSelection() {
    let x = prompt('Rock, Paper, or Scissors?').toLowerCase();
    while (x !== 'rock' && x !== 'paper' && x !== 'scissors') {
        x = prompt('You must enter Rock, Paper, or Scissors.').toLowerCase();
    }
    return x;
}

function getRoundWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'draw'
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
               (playerSelection === 'paper' && computerSelection === 'rock') ||
               (playerSelection === 'scissors' && computerSelection === 'paper')) {
                    return 'player';
    } else {
        return 'computer'
    }
}

function displayRound(playerSelection, computerSelection, winner) {
    if (winner === 'player') {
        console.log('You won this round.');
    } else if (winner === 'computer') {
        console.log('Computer wins this round.');
    } else if (winner === 'draw') {
        console.log('This round is a draw.');
    } else {
        alert('Alert in displayRound function!!');
    }
}

function updateScore(winner) {
    switch(winner) {
        case 'player':
            playerWins++;
            break;
        case 'computer':
            computerWins++;
            break;
        default:
            draws++;
    }
}

function updateScoreBoard() {
    playerScore.textContent = playerWins;
    computerScore.textContent = computerWins;
}

function displayScore() {
    console.log(`Player: ${playerWins}\nComputer: ${computerWins}\nDraws: ${draws}`);
}

function displayWinner() {
    if (playerWins > computerWins) {
        console.log('PLAYER WINS');
    } else if (computerWins > playerWins) {
        console.log('COMPUTER WINS');
    } else if (playerWins === computerWins) {
        console.log("It's a tie!");
    } else {
        alert('Problem in displayWinner() function');
    }
}

function playRound(playerSelection){ 
    const computerSelection = getComputerSelection();
    let winner = getRoundWinner(playerSelection, computerSelection);
    updateScore(winner);
    updateScoreBoard();
    displayRound(playerSelection, computerSelection, winner);
    displayScore();
}

function game() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (playerWins < 5 && computerWins < 5) {
                playRound(button.id);
            }
            else {
                displayWinner();
                return;
            }
        });
    });

}

game();