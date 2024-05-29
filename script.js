

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
    choice = null;
    

}

function playRound(humanChoice, computerChoice) {
    humanChoice = choice;
    computerChoice = getComputerChoice();
    if (humanChoice == computerChoice) {
        responseLine = "Tie!";
    } else if (computerChoice == "Rock") {
        if (humanChoice == "Paper") {
            humanScore++;
            responseLine = "You Win! Paper beats rock.";
        } else if (humanChoice == "Scissors") {
            computerScore++;
            responseLine = "You lose! Rock beats scissors."
        }
    } else if (computerChoice == "Paper") {
        if (humanChoice == "Scissors") {
            humanScore++;
            responseLine = "You Win! Scissors beats paper."
        } else if (humanChoice == "Rock") {
            computerScore++;
            responseLine = "You lose! Paper beats rock.";
        }
    } else if (computerChoice == "Scissors") {
        if (humanChoice == "Rock") {
            humanScore++;
            responseLine = "You Win! Rock beats scissors.";
        } else if (humanChoice == "Paper") {
            computerScore++;
            responseLine = "You lose! Scissors beats paper.";
        }
    }
}

function playGame() {
    count = 0;
    while (count < 2) {
        rock.addEventListener("click", () => {
            choice = "Rock";
            playRound();
            count++;
        })

        paper.addEventListener("click", () => {
            choice = "Paper";
            playRound();
            count++;
        })

        scissors.addEventListener("click", () => {
            choice = "Scissors";
            playRound();
            count++;
        })
    }
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
let choice = null;
let count = 0;
let responseLine = "";


// DOM elements
document.addEventListener("DOMContentLoaded", () => {
    // Declare document items as variables
    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");

    const play = document.querySelector("#play");
    const response = document.querySelector(".response");
    const scoreboard = document.querySelector(".scoreboard");

    scoreboard.textContent = `Player: ${humanScore}   Computer: ${computerScore}`;

    play.addEventListener("click", () => {
        console.log("Hello")
    });

    rock.addEventListener("click", () => {
        choice = "Rock";
        playRound();
        count++;
        response.textContent = responseLine;
        scoreboard.textContent = `Player: ${humanScore}   Computer: ${computerScore}`;
    })

    paper.addEventListener("click", () => {
        choice = "Paper";
        playRound();
        count++;
        response.textContent = responseLine;
        scoreboard.textContent = `Player: ${humanScore}   Computer: ${computerScore}`;
    })

    scissors.addEventListener("click", () => {
        choice = "Scissors";
        playRound();
        count++;
        response.textContent = responseLine;
        scoreboard.textContent = `Player: ${humanScore}   Computer: ${computerScore}`;
    })

    
})