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

function getPlayerMove(move) {
     // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove=== computerMove) {
        winner= 'tie';
        console.log("Tie");
    } else if (playerMove==='rock' && computerMove=== 'scissors') {
        winner= 'player';
        console.log("Rock beats scissors. You win.");
    } else if (playerMove=== 'rock' && computerMove=== 'paper') {
        winner= 'computer';
        console.log("Paper beats rock. Computer wins.");
    } else if (playerMove=== 'scissors' && computerMove=== 'paper') {
        winner= 'player';
        console.log("Scissors beat paper. You win.");
    } else if (playerMove=== 'scissors' && computerMove=== 'rock') {
        winner= 'computer';
        console.log("Rock beats scissors. Computer wins.");
    } else if (playerMove=== 'paper' && computerMove=== 'rock') {
        winner= 'player';
        console.log("Paper beats rock. You win.");
    } else if (playerMove=== 'paper' && computerMove=== 'scissors') {
        winner= 'computer';
        console.log("Scissors beat paper. Computer wins.");
    }
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
    while (computerWins <5 && playerWins<5) {
        var playerMove= getPlayerMove();
        var computerMove= getComputerMove();
        var winner= getWinner(playerMove, computerMove);
        if (winner=== 'computer') {
            computerWins +=1;
            console.log("The score is " + [playerWins, computerWins]);
        } else if (winner==='player') {
            playerWins +=1;
            console.log("The score is " + [playerWins, computerWins]);
        }
    }
    if (playerWins ===5) {
        console.log("Player Wins. Awesome job!");
    } else if (computerWins ===5) {
        console.log("Computer Wins.");
    }
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}


