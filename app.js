let choices = ["rock", "paper", "scissors"];
let outcomes = ["You win!", "You Lose!", "Tie!"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
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
  return winner;
}

// console.log(playRound(getComputerChoice(), getComputerChoice()));

// function game() {
//   let userInput;
//   let compInput;
//   let result;
//   let resultMessage;
//   let playerScore = 0;
//   let computerScore = 0;

//   console.log("Let's play Rock Paper Scissors");
//   for (let i = 0; i < 5; i++) {
//     userInput = prompt("Your turn, you choose...", getComputerChoice());
//     compInput = getComputerChoice();
//     result = playRound(userInput, compInput);
//     if (result === 0) {
//       playerScore++;
//       console.log(
//         `${outcomes[0]} ${userInput.toLowerCase()} beats ${compInput}`
//       );
//       console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
//       if (playerScore === 3) {
//         console.log(`Player wins the match - ${playerScore}:${computerScore}`);
//         return;
//       }
//     } else if (result === 1) {
//       computerScore++;
//       console.log(
//         `${outcomes[1]} ${compInput} beats ${userInput.toLowerCase()}`
//       );
//       console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
//       if (computerScore === 3) {
//         console.log(`Player lost the match - ${playerScore}:${computerScore}`);
//         return;
//       }
//     } else if (result === 2) {
//       console.log(
//         `${outcomes[2]} ${userInput.toLowerCase()} ties with ${compInput}`
//       );
//       console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
//     }
//   }
//   if (playerScore > computerScore) {
//     console.log(`Player wins the match - ${playerScore}:${computerScore}`);
//   } else if (playerScore < computerScore) {
//     console.log(`Player lost the match - ${playerScore}:${computerScore}`);
//   } else {
//     console.log(`Tie. No one wins - ${playerScore}:${computerScore}`);
//   }
// }

// game();
