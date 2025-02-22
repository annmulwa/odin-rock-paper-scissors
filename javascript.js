let humanScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];
const result = document.querySelector("#result");
const human = document.querySelector("#human");
const computer = document.querySelector("#computer");
const score = document.querySelector("#score");
const finalScore = document.querySelector("#finalScore");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        buttons.forEach(button => button.style.color = "");
        button.style.color = "green";
        const humanChoice = button.id;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
});

function getComputerChoice() {
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

function playRound(humanChoice, computerChoice) {
    human.textContent = `You chose ${humanChoice}`;
    computer.textContent = `Computer chose ${computerChoice}`;
    let resultRound;
    if (humanChoice === computerChoice) {
        resultRound = `It's a tie!!!You both chose ${humanChoice}`;
    } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
              (humanChoice === "paper" && computerChoice === "rock") ||
              (humanChoice === "scissors" && computerChoice === "paper")) {
        resultRound = `You win!!${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        resultRound = `Computer wins!!${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }
    result.textContent = resultRound;
    score.textContent = `SCORE: Human - ${humanScore} and Computer - ${computerScore}`;
    checkWinner();
}

function checkWinner() {
    if (humanScore === 5) {
        finalScore.textContent = "You win!!!";
        defaultbuttons();
    } else if (computerScore === 5) {
        finalScore.textContent = "Computer wins!!!";
        defaultbuttons();
    }
}

function defaultbuttons() {
    buttons.forEach((button) => {
        button.disabled = true;
        button.style.color = "";
    });
}