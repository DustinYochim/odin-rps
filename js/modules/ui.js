import Game from "./game.js";

const UI = (function () {
  const winningMessageElement = document.querySelector("#winningMessage");
  const winningMessageTextElement = document.querySelector(
    ".data-winning-message-text"
  );
  function startGame() {
    Game.reset();
    resetUI();
    addListeners();
  }

  function addListeners() {
    const buttonContainer = document.querySelector("#buttonContainer");
    const buttons = buttonContainer.querySelectorAll("button");
    const restartButton = document.querySelector("#play-again");
    restartButton.addEventListener("click", () => {
      startGame();
    });
    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        clickHandler(e);
      });
    });
  }
  function isGameOver() {
    return Game.isGameOver();
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
    const playerScore = document.querySelector("#player-score");
    const computerScore = document.querySelector("#computer-score");
    playerScore.textContent = Game.getPlayerWins();
    computerScore.textContent = Game.getComputerWins();
  }

  function showRoundDetails() {
    const roundDetails = document.querySelector("#round-details");
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
  function resetUI() {
    const playerScore = document.querySelector("#player-score");
    const computerScore = document.querySelector("#computer-score");
    const roundDetails = document.querySelector("#round-details");
    winningMessageElement.classList.remove("show");
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    roundDetails.textContent = "";

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.removeEventListener("click", (e) => {
        clickHandler(e);
      });
    });
  }
  function hello() {
    Game.hello();
  }
  return {
    startGame,
  };
})();

export default UI;
