import Game from "./game.js";

const UI = (function () {
  const winningMessageElement = document.querySelector("#winningMessage");
  const winningMessageTextElement = document.querySelector(
    ".data-winning-message-text"
  );
  const playerScore = document.querySelector("#player-score");
  const computerScore = document.querySelector("#computer-score");
  const roundDetails = document.querySelector("#round-details");
  const buttonContainer = document.querySelector("#buttonContainer");
  const buttons = buttonContainer.querySelectorAll("button");
  const restartButton = document.querySelector("#play-again");

  function startGame() {
    addListeners();
  }

  function restartClickHandler() {
    resetUI();
    Game.reset();
    startGame();
  }

  function addListeners() {
    restartButton.addEventListener("click", restartClickHandler);
    buttons.forEach((button) => {
      button.addEventListener("click", buttonClickHandler);
    });
  }

  function endGame() {
    const winner =
      Game.getPlayerWins() > Game.getComputerWins() ? "Player" : "Computer";
    winningMessageTextElement.innerText = `${winner} wins!`;
    winningMessageElement.classList.add("show");
  }

  function clickHandler(e) {
    Game.setPlayerChoice(e.target.id);
    Game.setComputerChoice();
    Game.updateScore();
    updateScoreboard();
    showRoundDetails();
    if (Game.isGameOver()) {
      endGame();
    }
  }

  function updateScoreboard() {
    playerScore.textContent = Game.getPlayerWins();
    computerScore.textContent = Game.getComputerWins();
  }

  function showRoundDetails() {

    const playerChoice = Game.getPlayerChoice();
    const computerChoice = Game.getComputerChoice();
    roundDetails.textContent = `Player chose ${playerChoice}. Computer chose ${computerChoice}. `;
    if (playerChoice === computerChoice) {
      roundDetails.textContent += "Tie!";
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      roundDetails.textContent += "Player wins!";
    } else {
      roundDetails.textContent += "Computer wins!";
    }
  }

  function buttonClickHandler(e) {
    clickHandler(e);
  }

  function removeListeners() {
    restartButton.removeEventListener("click", restartClickHandler);
    buttons.forEach((button) => {
      button.removeEventListener("click", buttonClickHandler);
    })
  }
  function resetUI() {

    winningMessageElement.classList.remove("show");
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    roundDetails.textContent = "";

    removeListeners();
  }
  return {
    startGame,
  };
})();

export default UI;
