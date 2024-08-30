const Game = (function () {
  let playerWins = 0;
  let computerWins = 0;
  let ties = 0;

  let playerChoice = null;
  let computerChoice = null;

  function setPlayerChoice(choice) {
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

  function isGameOver() {
    return playerWins === 5 || computerWins === 5;
  }


  function playRound() {
    setPlayerChoice();
    setComputerChoice();
    updateScore();
    showRoundResults();
    logScore();
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
