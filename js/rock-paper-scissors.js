function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (computerChoice === 1) {
        return "rock";
    } else if (computerChoice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Type choice: rock, paper, or scissors");
    humanChoice = humanChoice.toLowerCase();
    humanChoice = humanChoice.replace(/ /g, "");
    if (humanChoice === "rock" || humanChoice ===  "paper" || humanChoice === "scissors") {
        return humanChoice;
    } else {
        return "Error: invalid choice."
    }
}

function playRound() {
    computerChoice = getComputerChoice();
    console.log(computerChoice);
    humanChoice = getHumanChoice();
    console.log("Computer: " + computerChoice);
    console.log("You: " + humanChoice);
    if (computerChoice === "rock") {
        if (humanChoice === "rock") {
            console.log("This round is a tie!");
        } else if (humanChoice === "paper") {
            humanScore++;
            console.log("You win this round — paper beats rock!");
        } else if (humanChoice === "scissors") {
            computerScore++;
            console.log("Computer wins this round — rock beats scissors!");
        }
    } else if (computerChoice == "paper") {
        if (humanChoice === "rock") {
            computerScore++;
            console.log("Computer wins this round — paper beats rock!");
        } else if (humanChoice === "paper") {
            console.log("This round is a tie!");
        } else if (humanChoice === "scissors") {
            humanScore++;
            console.log("You win this round — scissors beats paper!");
        }
    } else if (computerChoice == "scissors") {
        if (humanChoice === "rock") {
            humanScore++;
            console.log("You win this round — rock beats scissors!");
        } else if (humanChoice === "paper") {
            computerScore++;
            console.log("Computer wins this round — scissors beats paper!")
        } else if (humanChoice === "scissors") {
            console.log("This round is a tie!");
        }
    }
}

function playGame() {
    for (let i = 1; i < 6; i++) {
        console.log("Round " + i);
        playRound();
        console.log("You: " + humanScore + " — " + "Computer: " + computerScore);
        console.log("");
    }
}

let humanScore = 0;
let computerScore = 0;
let computerChoice;
let humanChoice;

playGame();



//  Pseudocode:
//  Write function that returns "rock" "paper" or "scissors" as computer's choice
//  Write function that gets user input — "rock" "paper" or "scissors"
//  Write function that tracks score
//  Write function for a single round of play
//  Write logic to play an entire game (5 rounds)
