function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (computerChoice === 1) {
        return "Rock";
    } else if (computerChoice === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

let computerChoice = getComputerChoice();



//  Pseudocode:
//  Write function that returns "rock" "paper" or "scissors" as computer's choice
//  Write function that gets user input — "rock" "paper" or "scissors"
//  Write function that tracks score
//  Write function for a single round of play
//  Write logic to play an entire game (5 rounds)
