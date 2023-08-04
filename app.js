const options = document.querySelectorAll(".choice");
const message = document.querySelector(".message");
const playerSign = document.querySelector("#playerScore");
const computerSign = document.querySelector("#computerScore");
const modal = document.querySelector(".modal");
const modalText = document.querySelector(".modal p");
const modalButton = document.querySelector("#playAgain");
const modalClose = document.querySelector("#close");
let playerScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];
const outcomes = ["You win!", "You Lose!", "Tie!"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  let winner;
  let playerChoice = playerSelection;
  switch (playerChoice) {
    case "Rock":
      if (computerSelection === "scissors") winner = 0;
      else if (computerSelection === "paper") winner = 1;
      else if (computerSelection == "rock") winner = 2;
      break;
    case "Paper":
      if (computerSelection === "rock") winner = 0;
      else if (computerSelection === "scissors") winner = 1;
      else if (computerSelection == "paper") winner = 2;
      break;
    case "Scissors":
      if (computerSelection === "rock") winner = 1;
      else if (computerSelection === "paper") winner = 0;
      else if (computerSelection == "scissors") winner = 2;
      break;
    default:
      winner = "-1";
      break;
  }
  return winner;
}

function clicked(e) {
  if (playerScore === 5) {
    modalText.textContent = `Match Won ${playerScore}:${computerScore}`;
    modal.showModal();
    return;
  }
  if (computerScore === 5) {
    modalText.textContent = `Match Lost ${playerScore}:${computerScore}`;
    modal.showModal();
    return;
  }
  let compInput = getComputerChoice();
  let result = playRound(this.textContent, compInput);
  message.textContent = `You chose ${this.textContent}. Computer chose ${compInput}. ${outcomes[result]}`;
  switch (result) {
    case 0:
      playerScore++;
      playerSign.textContent = playerScore;
      break;
    case 1:
      computerScore++;
      computerSign.textContent = computerScore;
      break;
  }
  if (playerScore === 5) {
    modalText.textContent = `Match Won ${playerScore}:${computerScore}`;
    modal.showModal();
    return;
  }
  if (computerScore === 5) {
    modalText.textContent = `Match Lost ${playerScore}:${computerScore}`;
    modal.showModal();
    return;
  }
}

function playAgain() {
  playerScore = 0;
  computerScore = 0;
  playerSign.textContent = playerScore;
  computerSign.textContent = computerScore;
  message.textContent = "You choose...";
  giveEvents();
}

function giveEvents() {
  options.forEach((option) => {
    option.addEventListener("click", clicked);
  });
}

function removeEvents() {
  options.forEach((option) => {
    option.removeEventListener("click", clicked);
  });
}

modalButton.addEventListener("click", () => {
  modal.close();
  playAgain();
});

modalClose.addEventListener("click", () => {
  modal.close();
});

giveEvents();