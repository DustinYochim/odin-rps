let playerWins = 0;
let computerWins = 0;
let draws = 0;
const NUM_ROUNDS = 5;

let loserMessages = [
  "Looks like rock, paper, and scissors all beat you this time.",
  "Good effort, but you missed the mark.",
  "You should have gone with your guy, or maybe listened to mine.",
  "Looks like luck wasn't on your side this round.",
  "I suggest you take some time to practice before facing me again.",
  "Better luck next time, or maybe just better skills.",
  "You're a pro at losing, keep up the good work.",
  "Maybe you should stick to games with fewer options, less chance for of failure.",
  "Well, there's always the next round for redemption.",
  "Just because you lost this round doesn't mean you're a loser, it just means you lost this round.",
];

let winnerMessages = [
  "Congratulations on winning, now try not to get too bigheaded about it.",
  "Looks like Lady luck was on your side this time.",
  "Well played, but let's not get too carried away.",
  "Who would have thought the game could be won with just a simple choice?",
  "Good job, maybe next time you can aim for a more challenging opponent.",
  "Not everyone can win, but congratulations, you're one of the few.",
  "Enjoy the win while it lasts, because there's always another round.",
  "Winning is great, but don't let it go to your head.",
  "Well done, but remember, there's always room for improvement.",
  "You must have been practicing, because that was a pretty impressive win.",
];

const buttons = document.querySelectorAll("button");
let playerScore = document.querySelector(".player-score");
let computerScore = document.querySelector(".computer-score");
let message = document.querySelector(".message");
let winnerDisplay = document.querySelector(".game-over-message");
let loserDisplay = document.querySelector(".game-over-message");
let choicesDiv = document.querySelector(".choices");
let snarkyMessage = document.createElement("div");
let playAgainButton = document.createElement("button");

function getComputerSelection() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getRoundWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "draw";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

function displayRound(playerSelection, computerSelection, winner) {
  if (winner === "player") {
    message.textContent = `Let's go! You won. ${
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    } beats ${
      computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    }.`;
  } else if (winner === "computer") {
    message.textContent = `Oh no! You lost. ${
      computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    } beats ${
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    }.`;
  } else if (winner === "draw") {
    message.textContent = `This round is a draw.`;
  } else {
    alert("Alert in displayRound function!!");
  }
}

function updateScore(winner) {
  switch (winner) {
    case "player":
      playerWins++;
      break;
    case "computer":
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

function gameOverDisplay() {
  if (playerWins > computerWins) {
    winnerDisplay.textContent = "Winner!";
    snarkyMessage.classList.add("snarky-message");
    snarkyMessage.textContent =
      winnerMessages[Math.floor(Math.random() * winnerMessages.length)];
    choicesDiv.appendChild(snarkyMessage);
  } else {
    loserDisplay.textContent = "Loser!";
    snarkyMessage.classList.add("snarky-message");
    snarkyMessage.textContent =
      loserMessages[Math.floor(Math.random() * loserMessages.length)];
    choicesDiv.appendChild(snarkyMessage);
  }
}

function resetGame() {
  playerWins = 0;
  computerWins = 0;
  draws = 0;
  playerScore.textContent = "0";
  computerScore.textContent = "0";
  message.textContent = "First to 5 wins.";
  winnerDisplay.textContent = "Which do you choose?";
  snarkyMessage.textContent = "";
  choicesDiv.removeChild(playAgainButton);
}

function playAgain() {
  playAgainButton.classList.add("play-again");
  playAgainButton.textContent = "Play again.";
  choicesDiv.appendChild(playAgainButton);
  playAgainButton.addEventListener("click", () => {
    resetGame();
  });
}

function checkForEnd() {
  if (playerWins >= 5 || computerWins >= 5) {
    return true;
  } else {
    return false;
  }
}

function endGame() {
  gameOverDisplay();
  playAgain();
}

function playRound(playerSelection) {
  const computerSelection = getComputerSelection();
  let winner = getRoundWinner(playerSelection, computerSelection);
  updateScore(winner);
  updateScoreBoard();
  displayRound(playerSelection, computerSelection, winner);
  if (checkForEnd()) {
    endGame();
  }
}

function playGame() {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (playerWins < 5 && computerWins < 5) {
        playRound(button.id);
      }
    });
  });
}

playGame();
