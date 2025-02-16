// const objects = ["rock", "paper", "scissors"];
// function getComputerChoice() {
//     // const objects = ["rock", "paper", "scissors"];
//     let randomObject = objects[Math.floor(Math.random() * objects.length)];
//     return randomObject;
// }
// console.log(getComputerChoice());

function getHumanChoice() {
    let userChoice = prompt("Enter rock, paper, or scissors: " || "");
    if (userChoice === null) {
        userChoice = "";
    }

    userChoice = userChoice.toLowerCase().trim();

    if (userChoice === "rock" || userChoice === "paper"
        || userChoice === "scissors") {
            return userChoice;
        } else {
            console.log("Invalid choice. Please enter 'rock', 'paper', or 'scissors'.");
            return getHumanChoice();
        }
}
// console.log(getHumanChoice());

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3) + 1;

    if (randomChoice === 1) {
        return ("rock");
    } else if (randomChoice === 2) {
        return ("paper");
    } else {
        return ("scissors");
    }
}

// console.log(getComputerChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log(`It's a tie!!!You both chose ${humanChoice}`);
    } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
              (humanChoice === "paper" && computerChoice === "rock") ||
              (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        console.log(`You win!!${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`Computer wins!!${computerChoice} beats ${humanChoice}`);
    }
    console.log(`Score: Human - ${humanScore}, Computer - ${computerScore}`);
}
// const humanChoice = getHumanChoice();
// const computerChoice = getComputerChoice();
// playRound(humanChoice, computerChoice);

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);