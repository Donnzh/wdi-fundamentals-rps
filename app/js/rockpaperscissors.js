
'use strict';

function getInput() {
  console.log("Please choose either 'rock', 'paper', or 'scissors'.")
  return prompt();
};

function randomPlay() {
  var randomNumber = Math.random();
  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  };
};


function playerMove(move) {
  return move || getInput();
};

var computerMove = function (move) {
  return move || randomPlay();
}

function getWinner(playerMove,computerMove)

{

  if ( playerMove == "rock" && computerMove == "paper") {
   winner = "computer";
 }

  // Double equals on winner. winner == "player"

  else if (playerMove == "rock" && computerMove == "scissors") {
   winner = "player";
 }
 else if ( playerMove == "scissors" && computerMove == "paper") {
   winner = "player";
 }
 else if ( playerMove == "scissors" && computerMove == "rock") {
  winner = "computer";
}
else if ( playerMove == "paper" && computerMove == "rock") {
 winner = "player";
}
else if ( playerMove == "paper" && computerMove == "scissors") {
 winner = "computer";
}
else{
 winner = "It's a tie";
}
return winner
}

console.log("Let's play Rock, Paper, Scissors");
var playerWins = 0;
var computerWins = 0;


function playToFive() {


  while ( (playerWins < 5 ) && (computerWins < 5) ) {


    var pMov = playerMove();
    var cMov = computerMove();
    var winner = getWinner(pMov, cMov);


    if ( winner === "player" ) {
      playerWins++;
    }  else if ( winner === "computer") {
      computerWins++;
    };


    console.log('Player:' + pMov + ',computer: ' + cMov + '   WINNER:' + winner + '   CurrenlyScore:' + playerWins + ':' + computerWins )
  };
  return [playerWins, computerWins];
};
playToFive()