let choices = ["rock", "paper", "scissors"];
let outcomes = ["You win!", "You Lose!", "Tie!"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
  let message;
  let winner;
  let playerChoice = playerSelection.toLowerCase();
  switch (playerChoice) {
    case "rock":
      if (computerSelection === "scissors") winner = outcomes[0];
      else if (computerSelection === "paper") winner = outcomes[1];
      else if (computerSelection == "rock") {
        winner = outcomes[2];
        return winner;
      }
      break;
    case "paper":
      if (computerSelection === "rock") winner = outcomes[0];
      else if (computerSelection === "scissors") winner = outcomes[1];
      else if (computerSelection == "paper") {
        winner = outcomes[2];
        return winner;
      }
      break;
    case "scissors":
      if (computerSelection === "rock") winner = outcomes[1];
      else if (computerSelection === "paper") winner = outcomes[0];
      else if (computerSelection == "scissors") {
        winner = outcomes[2];
        return winner;
      }
      break;
    default:
      message = "Unknown input";
      break;
  }
  if (winner === outcomes[0]) {
    message = winner + " " + playerSelection + " beats " + computerSelection;
  } else if (winner === outcomes[1]) {
    message = winner + " " + computerSelection + " beats " + playerSelection;
  }
  return message;
}

function game() {}

console.log(playRound(getComputerChoice(), getComputerChoice()));
