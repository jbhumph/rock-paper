// Declare game variables
let humanScore = 0;
let computerScore = 0;
let choice = null;
let responseLine = "";

// Declare document items as variables
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const play = document.querySelector("#play");
const response = document.querySelector(".response");
const scoreboard = document.querySelector(".scoreboard");
const banner = document.querySelector(".banner");

rock.addEventListener("click", () => {
    playRound("Rock");
})

paper.addEventListener("click", () => {
    playRound("Paper");
})

scissors.addEventListener("click", () => {
    playRound("Scissors");
})

play.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    choice = null;
    responseLine = "";

    response.textContent = responseLine;
    scoreboard.textContent = "";
    banner.textContent = "";

})


function getComputerChoice() {
    // Function creates random choice for computer
    number = Math.floor(Math.random() * 3)
    if (number == 0) {
        return "Rock";
    } else if (number == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(humanChoice) {
    if (humanScore <= 4 && computerScore <= 4) {
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
        response.textContent = responseLine;
        scoreboard.textContent = `Player: ${humanScore}   Computer: ${computerScore}`;
        if (humanScore == 5) {
            banner.textContent = "You won the game!";
        } else if (computerScore == 5) {
            banner.textContent = "You lost the game :(";
        }
    }
}

