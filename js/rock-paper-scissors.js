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

function printScore() {
    resultBox.textContent =
        `Computer: ${computerScore}
You: ${humanScore}`;
}

function playRound(humanChoice) {
    if (gameOver === true) {
        resultBox.textContent = "";
        humanScore = 0;
        computerScore = 0;
        gameOver = false;
    }
    computerChoice = getComputerChoice();
    if (computerChoice === "rock") {
        if (humanChoice === "rock") {
            alert("This round is a tie!");
            printScore();
        } else if (humanChoice === "paper") {
            humanScore++;
            alert("You win this round — paper beats rock!");
            printScore();
        } else if (humanChoice === "scissors") {
            computerScore++;
            alert("Computer wins this round — rock beats scissors!");
            printScore();
        }
    } else if (computerChoice == "paper") {
        if (humanChoice === "rock") {
            computerScore++;
            alert("Computer wins this round — paper beats rock!");
            printScore();
        } else if (humanChoice === "paper") {
            alert("This round is a tie!");
            printScore();
        } else if (humanChoice === "scissors") {
            humanScore++;
            alert("You win this round — scissors beats paper!");
            printScore();
        }
    } else if (computerChoice == "scissors") {
        if (humanChoice === "rock") {
            humanScore++;
            alert("You win this round — rock beats scissors!");
            printScore();
        } else if (humanChoice === "paper") {
            computerScore++;
            alert("Computer wins this round — scissors beats paper!")
            printScore();
        } else if (humanChoice === "scissors") {
            alert("This round is a tie!");
            printScore();
        }
    }
    if (humanScore === 5 || computerScore === 5) {
        callWinner();
    }
}

function callWinner() {
    let humanVictory = "Congratulations, the human race triumphs over machine!";
    let computerVictory = "Resistance is futile, the computer is victorious!";
    gameOver = true;
    resultBox.textContent =
        `Computer: ${computerScore}
You: ${humanScore}`;
    if (humanScore > computerScore) {
        resultBox.textContent += `

${humanVictory}`;
    } else if (humanScore < computerScore) {
        resultBox.textContent += `

${computerVictory}`;
    } else {
        resultBox.textContent += `

No victor — the game is tied!`;
    }
}

let humanScore = 0;
let computerScore = 0;
let computerChoice;
let humanChoice;
let gameOver;

let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");
let resultBox = document.querySelector("#result");

rockButton.addEventListener("click", () => {
    playRound("rock");
});

paperButton.addEventListener("click", () => {
    playRound("paper");
});

scissorsButton.addEventListener("click", () => {
    playRound("scissors");
});



//  Pseudocode:
//  Write function that returns "rock" "paper" or "scissors" as computer's choice
//  Write function that gets user input — "rock" "paper" or "scissors"
//  Write function that tracks score
//  Write function for a single round of play
//  Write logic to play an entire game (5 rounds)
