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
    let playerWins = 0;
    let computerWins = 0;
    let draws = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Rock, Paper, or Scissors?');
        const computerSelection = getComputerChoice();
        console.log(`Round: ${i + 1}`);
        console.log(`Player picks: ${playerSelection}.`);
        console.log(`Computer picks: ${computerSelection}.`);
        let results = playRound(playerSelection, computerSelection);
        console.log(results);
        if (results.slice(0,8) === 'You win!') {
            playerWins++;
        } else if (results.slice(0,9) === 'You lose!') {
            computerWins++;
        } else {
            draws++;
        }
    }
    if (playerWins > computerWins) {
        console.log(`Player wins!\nPlayer Wins: ${playerWins}\nComputer Wins: ${computerWins}\nDraws: ${draws}`);
    } else if (computerWins > playerWins) {
        console.log(`Computer wins!\nPlayer Wins: ${playerWins}\nComputer Wins: ${computerWins}\nDraws: ${draws}`);
    } else {
        console.log(`It's a draw!\nPlayer Wins: ${playerWins}\nComputer Wins: ${computerWins}\nDraws: ${draws}`);

    }
}

game();

// const playerSelection = 'ROCK';
// const computerSelection = getComputerChoice();
// console.log(`Player: ${playerSelection}`);
// console.log(`Computer: ${computerSelection}`);
// console.log(playRound(playerSelection, computerSelection));