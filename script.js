// Declare game variables
let humanScore = 9;
let computerScore = 9;
let choice = null;
let responseLine = "";
let winner = null;
let element = 0

// Declare document items as variables
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const play = document.querySelector("#play");
const response = document.querySelector(".response");
const scoreboard = document.querySelector(".scoreboard");
const banner = document.querySelector(".banner");
const image = document.querySelector("#image");

scoreboard.textContent = `Player: 0   Computer: 0`;
response.textContent = "Let's play!";

image.src = "images/start-game.jpg";
image.style = "border:5px solid black; border-radius:8px";

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

    response.textContent = "Make your move...";
    scoreboard.textContent = `Player: ${humanScore}   Computer: ${computerScore}`;
    banner.textContent = "Game on!";

    image.src = "images/start-game.jpg";
    image.style = "border:5px solid black; border-radius:8px";

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
        let object = 0;
        if (humanChoice == computerChoice) {
            responseLine = "Tie!";
        } else if (computerChoice == "Rock") {
            if (humanChoice == "Paper") {
                humanScore++;
                responseLine = "You Win! Paper beats rock.";
                object = 2;
            } else if (humanChoice == "Scissors") {
                computerScore++;
                responseLine = "You lose! Rock beats scissors."
                object = 1;
            }
        } else if (computerChoice == "Paper") {
            if (humanChoice == "Scissors") {
                humanScore++;
                responseLine = "You Win! Scissors beats paper."
                object = 3;
            } else if (humanChoice == "Rock") {
                computerScore++;
                responseLine = "You lose! Paper beats rock.";
                object = 2;
            }
        } else if (computerChoice == "Scissors") {
            if (humanChoice == "Rock") {
                humanScore++;
                responseLine = "You Win! Rock beats scissors.";
                object = 1;
            } else if (humanChoice == "Paper") {
                computerScore++;
                responseLine = "You lose! Scissors beats paper.";
                object = 3;
            }
        }
        if (object == 1) {
            image.src = "images/win-rock.jpg";
            image.style = "border:5px solid black; border-radius:8px";
        } else if (object == 2) {
            image.src = "images/win-paper.jpg";
            image.style = "border:5px solid black; border-radius:8px";
        } else if (object == 3) {
            image.src = "images/win-scissors.jpg";
            image.style = "border:5px solid black; border-radius:8px";
        }
        response.textContent = responseLine;
        scoreboard.textContent = `Player: ${humanScore}   Computer: ${computerScore}`;
        if (humanScore == 5) {
            banner.textContent = "You won the game!";
            image.src = "images/you-win.jpg";
            image.style = "border:5px solid black; border-radius:8px";
        } else if (computerScore == 5) {
            banner.textContent = "You lost the game :(";
            image.src = "images/you-lose.jpg";
            image.style = "border:5px solid black; border-radius:8px";
        }
    }
}

