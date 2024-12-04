let me = 0;
let computer = 0;
let roundCount = 0;
const maxRounds = 5;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(meChoice, computerChoice) {
    if (meChoice === computerChoice) {
        return "draw";
    }

    if ((meChoice === "rock" && computerChoice === "scissors") ||
        (meChoice === "paper" && computerChoice === "rock") ||
        (meChoice === "scissors" && computerChoice === "paper")) {
        return "me";
    }

    return "computer";
}

function playGame() {
    const meChoice = document.getElementById("input").value.toLowerCase();
    const resultDisplay = document.getElementById("roundResult");
    const meScoreDisplay = document.getElementById("me");
    const computerScoreDisplay = document.getElementById("computer");
    const winnerDisplay = document.getElementById("winner");

    // Validate user input
    if (!["rock", "paper", "scissors"].includes(meChoice)) {
        resultDisplay.textContent = "Invalid input! Please enter 'rock', 'paper', or 'scissors'.";
        return;
    }

    const computerChoice = getComputerChoice();
    const winner = determineWinner(meChoice, computerChoice);

    // Update round count
    roundCount++;

    if (winner === "me") {
        me++;
        resultDisplay.textContent = `You win this round! You chose ${meChoice}, computer chose ${computerChoice}.`;
    } else if (winner === "computer") {
        computer++;
        resultDisplay.textContent = `Computer wins this round! You chose ${meChoice}, computer chose ${computerChoice}.`;
    } else {
        resultDisplay.textContent = `It's a draw! Both chose ${meChoice}.`;
    }

    // Update scores
    meScoreDisplay.textContent = me;
    computerScoreDisplay.textContent = computer;

    // Check if max rounds have been played
    if (roundCount === maxRounds) {
        if (me > computer) {
            winnerDisplay.textContent = "Congratulations! You are the overall winner!";
        } else if (computer > me) {
            winnerDisplay.textContent = "Oh! Computer wins the game! Try harder next time.";
        } else {
            winnerDisplay.textContent = "Wow! It's a tie! No overall winner.";
        }

        // Disable the play button after the game ends
        document.getElementById("play").disabled = true;
    }
}

document.getElementById("play").addEventListener("click", playGame);
