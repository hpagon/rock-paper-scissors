let choices = ["rock", "paper", "scissors"];
let outcomes = ["You win!", "You Lose!", "Tie!"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
//   let message;
  let winner;
  let playerChoice = playerSelection.toLowerCase();
  switch (playerChoice) {
    case "rock":
      if (computerSelection === "scissors") winner = 0;
      else if (computerSelection === "paper") winner = 1;
      else if (computerSelection == "rock") winner = 2;
      break;
    case "paper":
      if (computerSelection === "rock") winner = 0;
      else if (computerSelection === "scissors") winner = 1;
      else if (computerSelection == "paper") winner = 2;
      break;
    case "scissors":
      if (computerSelection === "rock") winner = 1;
      else if (computerSelection === "paper") winner = 0;
      else if (computerSelection == "scissors") winner = 2;
      break;
    default:
      winner = "-1";
      break;
  }
  //   if (winner === outcomes[0]) {
  //     message = winner + " " + playerSelection + " beats " + computerSelection;
  //   } else if (winner === outcomes[1]) {
  //     message = winner + " " + computerSelection + " beats " + playerSelection;
  //   }
  //   message = winner;
  //   return message;
  return winner;
}

console.log(playRound(getComputerChoice(), getComputerChoice()))

function game() {
  let userInput;
  let compInput;
  let playerScore = 0;
  let computerScore = 0;

  console.log("Let's play Rock Paper Scissors");
  for (let i = 0; i < 5; i++) {
    userInput = prompt("Your turn, you choose...", getComputerChoice());
    compInput = getComputerChoice();
  }
}
