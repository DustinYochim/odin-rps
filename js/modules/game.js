const Game = (function () {
  let playerWins = 0;
  let computerWins = 0;
  let ties = 0;

  let playerChoice = null;
  let computerChoice = null;

  function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }

  function getPlayerChoice() {
    const options = ["rock", "paper", "scissors"];
    const playerChoice = prompt("Rock, paper, or scissors?").toLowerCase();
    if (options.includes(playerChoice)) {
      return playerChoice;
    } else {
      alert("Invalid choice. Try again.");
      return getPlayerChoice();
    }
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

  function showScore() {
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
    playerChoice = getPlayerChoice();
    computerChoice = getComputerChoice();
    updateScore();
    showRoundResults();
    showScore();
  }

  function startGame() {
    for (let i = 0; i < 5; i++) {
      showRound(i);
      playRound();
    }
  }

  function reset() {
    playerWins = 0;
    computerWins = 0;
    ties = 0;
  }

  return {
    startGame,
  };
})();

export default Game;
