// This function randomly returns 'rock', 'paper', 'scissors'
function getComputerChoice() {
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2: 
            return 'scissors';
    }
}

// This function takes in the playerSelection and computerSelection and
// returns a string that declares the winner of the round
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return `Draw! You both picked ${playerSelection}`;
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
               (playerSelection === 'paper' && computerSelection === 'rock') ||
               (playerSelection === 'scissors' && computerSelection === 'paper')) {
                    return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

// This function calls the playRound function and keeps score and reports
// the winner at the end of the game
function game() {

}

// const playerSelection = 'ROCK';
// const computerSelection = getComputerChoice();
// console.log(`Player: ${playerSelection}`);
// console.log(`Computer: ${computerSelection}`);
// console.log(playRound(playerSelection, computerSelection));