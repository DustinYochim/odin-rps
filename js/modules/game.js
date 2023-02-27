const Game = (function () {
  let playerWins = 0;
  let computerWins = 0;
  let ties = 0;

  let playerChoice = null;
  let computerChoice = null;

  function setPlayerChoice(choice) {
    // console.log("setPlayerChoice() called");
    if (choice === undefined) {
      playerChoice = prompt("Rock, paper, or scissors?").toLowerCase();
    } else {
      playerChoice = choice;
    }
  }

  function setComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    computerChoice = options[randomIndex];
  }

  function getComputerChoice() {
    return computerChoice;
  }

  function getPlayerChoice() {
    return playerChoice;
  }

  function updateScore() {
    // console.log("updateScore() called");
    if (playerChoice === computerChoice) {
      ties++;
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      playerWins++;
    } else {
      computerWins++;
    }
  }
  function showRoundResults() {
    // console.log("showRoundResults() called");
    console.log(
      `Player chose ${playerChoice}. Computer chose ${computerChoice}.`
    );
    if (playerChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log("Player wins!");
    } else {
      console.log("Computer wins!");
    }
  }

  function isGameOver() {
    return playerWins === 5 || computerWins === 5;
  }

  function logScore() {
    // console.log("showScore() called");
    console.log(`Player: ${playerWins}`);
    console.log(`Computer: ${computerWins}`);
    console.log(`Ties: ${ties}`);
  }

  function showRound(i) {
    console.log(`Round ${i + 1}`);
  }

  function playRound() {
    // console.log("playRound() called");
    setPlayerChoice();
    setComputerChoice();
    updateScore();
    showRoundResults();
    logScore();
  }

  function logWinner() {
    if (playerWins > computerWins) {
      console.log("Player wins the game!");
    } else if (playerWins < computerWins) {
      console.log("Computer wins the game!");
    } else {
      console.log("It's a tie!");
    }
  }

  function startGame() {
    for (let i = 0; i < 5; i++) {
      showRound(i);
      playRound();
    }
    logWinner();
  }

  function reset() {
    playerWins = 0;
    computerWins = 0;
    ties = 0;
  }

  function hello() {
    console.log("Hello from Game");
  }

  return {
    startGame,
    setPlayerChoice,
    setComputerChoice,
    getPlayerChoice,
    getComputerChoice,
    updateScore,
    isGameOver,
    getPlayerWins: () => playerWins,
    getComputerWins: () => computerWins,
    reset,
  };
})();

export default Game;
