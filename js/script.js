let playerWins = 0;
let computerWins = 0;
let draws = 0;
const NUM_ROUNDS = 5;

const buttons = document.querySelectorAll('button');
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
        message.textContent = `Let's go! You won. ${playerSelection.charAt(0).toUpperCase() + 
                                playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + 
                                computerSelection.slice(1)}.`;
    } else if (winner === 'computer') {
        message.textContent = `Oh no! You lost. ${computerSelection.charAt(0).toUpperCase() + 
            computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + 
                playerSelection.slice(1)}.`;
    } else if (winner === 'draw') {
        message.textContent = `This round is a draw.`;
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

function displayWinner() {
    if (playerWins > computerWins) {
        message.textContent = 'You won!';
    } else if (computerWins > playerWins) {
        message.textContent = 'You lost...'
    } 
}

function checkForWin() {
    if (playerWins >= 5 || computerWins >= 5) {
        return true;
    } else {
        return false;
    }
}

function playRound(playerSelection){ 
    const computerSelection = getComputerSelection();
    let winner = getRoundWinner(playerSelection, computerSelection);
    updateScore(winner);
    updateScoreBoard();
    displayRound(playerSelection, computerSelection, winner);
}


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (playerWins < 5 && computerWins < 5) {
            playRound(button.id);
        } else {
            playerWins > computerWins ? alert('You win!') : alert('You lose!');
        }
    });
});