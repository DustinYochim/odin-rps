let playerWins = 0;
let computerWins = 0;
let draws = 0;

// This function randomly returns 'rock', 'paper', 'scissors'
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

// This function takes in the playerSelection and computerSelection and
// returns the winner of the round
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

// This function takes in the current round, playerSelection and 
// computerSelection and displays the results
function displayRound(round, playerSelection, computerSelection, winner) {
    console.log(`Round: ${round + 1}`);
    console.log(`Player picks ${playerSelection}.`);
    console.log(`Computer picks ${computerSelection}.`);
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

// This function takes in the rounds winner and
// updates the score
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

// This function displays the current score
function displayScore() {
    console.log(`Player: ${playerWins}\nComputer: ${computerWins}\nDraws: ${draws}`);
}

// This function displays the winner of the game
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

// This function plays a single round of rock paper scissors
function playRound(round){ 
    const playerSelection = getPlayerSelection();
    const computerSelection = getComputerSelection();
    let winner = getRoundWinner(playerSelection, computerSelection);
    updateScore(winner);
    displayRound(round, playerSelection, computerSelection, winner);
    displayScore();
}

// This function calls the playRound function and keeps score and reports
// the winner at the end of the game
function game() {
    for (let round = 0; round < 5; round++) {
        playRound(round);
    }
    displayWinner();
}

game();