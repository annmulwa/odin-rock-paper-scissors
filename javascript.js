// const objects = ["rock", "paper", "scissors"];
// function getComputerChoice() {
//     // const objects = ["rock", "paper", "scissors"];
//     let randomObject = objects[Math.floor(Math.random() * objects.length)];
//     return randomObject;
// }
// console.log(getComputerChoice());

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

console.log(getComputerChoice());

function getHumanChoice() {
    let userChoice = prompt("Enter rock, paper, or scissors: ").toLowerCase().trim();
    if (userChoice === "rock" || userChoice === "paper"
        || userChoice === "scissors") {
            return userChoice;
        } else {
            console.log("Invalid choice. Please enter 'rock', 'paper', or 'scissors'.");
            return getHumanChoice();
        }
}
console.log(getHumanChoice());