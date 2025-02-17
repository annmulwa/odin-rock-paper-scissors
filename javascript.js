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

// let humanScore = 0;
// let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    console.log(`humanchoice: ${humanChoice}`);
    console.log(`computerchoice: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log(`It's a tie!!!You both chose ${humanChoice}`);
        return "tie";
    } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
              (humanChoice === "paper" && computerChoice === "rock") ||
              (humanChoice === "scissors" && computerChoice === "paper")) {
        console.log(`You win!!${humanChoice} beats ${computerChoice}`);
        return "human";
    } else {
        console.log(`Computer wins!!${computerChoice} beats ${humanChoice}`);
        return "computer";
    }
    // console.log(`Score: Human - ${humanScore}, Computer - ${computerScore}`);
}
// const humanChoice = getHumanChoice();
// const computerChoice = getComputerChoice();
// playRound(humanChoice, computerChoice);

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (i = 1; i <= 5; i++) {
        console.log(`Round ${i}`);

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const setRound = playRound(humanSelection, computerSelection);

        if (setRound === "human") {
            humanScore++;
        } else if (setRound === "computer") {
            computerScore++;
        }
    }
    console.log(`Final Score: Human - ${humanScore}, Computer - ${computerScore}`);

    //checking for the winner
    if (humanScore > computerScore) {
        console.log(`You win!!!with a score of ${humanScore}`);
    } else if (humanScore < computerScore) {
        console.log(`Computer wins!!!with a score of ${computerScore}`);
    } else {
        console.log("It's a tie!!!");
    }
}
playGame();