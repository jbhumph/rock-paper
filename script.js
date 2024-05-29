

function getComputerChoice() {
    number = Math.floor(Math.random() * 3)
    if (number == 0) {
        return "Rock";
    } else if (number == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }

}

function getHumanChoice() {
    proper = false;
    while (proper == false) {
        let choice = prompt("Rock, Paper, or Scissors? ")
        if (choice.toUpperCase() == "ROCK") {
            proper = true;
            return "Rock"
        } else if (choice.toUpperCase() == "PAPER") {
            proper = true;
            return "Paper"
        } else if (choice.toUpperCase() == "SCISSORS") {
            proper = true;
            return "Scissors"
        } else {
            proper = false;
        }
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    if (humanChoice == computerChoice) {
        console.log("Tie!")
    } else if (computerChoice == "Rock") {
        if (humanChoice == "Paper") {
            humanScore++;
            console.log("You Win! Paper beats rock.")
        } else if (humanChoice == "Scissors") {
            computerScore++;
            console.log("You lose! Rock beats scissors.")
        }
    } else if (computerChoice == "Paper") {
        if (humanChoice == "Scissors") {
            humanScore++;
            console.log("You Win! Scissors beats paper.")
        } else if (humanChoice == "Rock") {
            computerScore++;
            console.log("You lose! Paper beats rock.")
        }
    } else if (computerChoice == "Scissors") {
        if (humanChoice == "Rock") {
            humanScore++;
            console.log("You Win! Rock beats scissors.")
        } else if (humanChoice == "Paper") {
            computerScore++;
            console.log("You lose! Scissors beats paper.")
        }
    }
}

function playGame() {
    console.log("Get ready - This game will have 5 rounds.")
    /*for (let i = 0; i < 5; i++) {
        playRound()
    }*/
    playRound()
    if (humanScore > computerScore) {
        console.log("You won the game!")
    } else if (humanScore < computerScore) {
        console.log("You lost the game :(")
    } else {
        console.log("It's a tie game!")
    }
    console.log(`Player: ${humanScore}   Computer: ${computerScore}`)
}


// Declare game variables
let humanScore = 0;
let computerScore = 0;


// DOM elements
document.addEventListener("DOMContentLoaded", () => {
    // Declare document items as variables
    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");

    const play = document.querySelector("#play");

    play.addEventListener("click", () => {
        playGame();
    });
})