////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////


// gets player's move or asks for move if one is not given //
function getPlayerMove(move) {
    return move || getInput();
}

// gets computer's move if given or chooses one through randomPlay function //
function getComputerMove(move) {
    return move || randomPlay();
}

// compares player move to computer move to determine winner for each play //
function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove) {
        winner= 'tie';
        console.log("You tied!");
    } else if (playerMove ==='rock') {
        if (computerMove === 'scissors') {
            winner= 'player';
            console.log("Rock beats scissors. You win.");
        } else if (computerMove === 'paper') {
            winner= 'computer';
            console.log("Paper beats rock. Computer wins.");
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            winner= 'player';
            console.log("Paper beats rock. You win.");
        } else if (computerMove === 'scissors') {
            winner= 'computer';
            console.log("Scissors beat paper. Computer wins.");
        }
    } else if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            winner= 'computer';
            console.log("Rock beats scissors. Computer wins.");
        } else if (computerMove === 'paper') {
            winner= 'player';
            console.log("Scissors beat paper. You win.");
        }
    }
    return winner;
}


// asks for moves from computer and player until either the player or the computer has won five times //
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    while (computerWins < 5 && playerWins< 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
        if (winner === 'computer') {
            computerWins +=1;
            console.log("The score is " + [playerWins, computerWins]);
        } else if (winner ==='player') {
            playerWins +=1;
            console.log("The score is " + [playerWins, computerWins]);
        }
    }
    if (playerWins === 5) {
        console.log("Player Wins. Awesome job!");
    } else if (computerWins === 5) {
        console.log("Computer Wins.");
    }
    return [playerWins, computerWins];
}
