function getComputerChoice() {
    number = Math.floor(Math.random() * 3)
    if (number == 0) {
        return "rock";
    } else if (number == 1) {
        return "paper";
    } else {
        return "scissors";
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

console.log(getHumanChoice())