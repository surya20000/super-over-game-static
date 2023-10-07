const strikeButton =document.getElementById("strike");
const resetbutton = document.getElementById("reset");
const $team1Score = document.getElementById("score-team1");
const $team1Wickets = document.getElementById("wickets-team1");
const $team2Score = document.getElementById("score-team2");
const $team2Wickets = document.getElementById("wickets-team2");
const strikeAudio = new Audio("http://bit.ly/so-ball-hit");
const gameOverAudio = new Audio("http://bit.ly/so-crowd-cheer");
var team1Score = 0;
var team1Wickets = 0;
var team2Score = 0;
var team2Wickets = 0;
var team1BallFaced = 0;
var team2BallFaced = 0;
var turn = 1;
const possibleOutcomes = [1,2,3,4,5,6,"W"];

function gameOver () {
    gameOverAudio.play()
    if (team1Score > team2Score) alert("IND Wins");
    if(team2Score > team1Score) alert("PAK Wins");
    if (team1Score === team2Score ) alert("It is another superover!");
}
function updateScore() {
    $team1Score.textContent = team1Score;
    $team2Score.textContent = team2Score;
    $team1Wickets.textContent = team1Wickets;
    $team2Wickets.textContent = team2Wickets;
}
resetbutton.onclick = () => {
    window.location.reload();
}
strikeButton.onclick = () => {
    strikeAudio.pause();
    strikeAudio.currentTime = 0;
    strikeAudio.play();

const randomEvents = possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length )];

if (turn === 2) {
    team2BallFaced++;
    document.querySelector(
        `#team2-superover div:nth-child(${team2BallFaced})`
    ).textContent = randomEvents
    if (randomEvents === "W") {
        team2Wickets++;
    }else{
        team2Score += randomEvents
    }
    if (
        team2BallFaced === 6 ||
        team2Wickets === 2 ||
        team2Score > team1Score
    ) {
        turn = 3;
        gameOver ()
    }
}
if (turn === 1) {
    team1BallFaced++;
    document.querySelector(
        `#team1-superover div:nth-child(${team1BallFaced})`
    ).textContent = randomEvents
    if (randomEvents === "W") {
        team1Wickets++;
    }else{
        team1Score += randomEvents
    }
    if (team1BallFaced === 6 || team1Wickets === 2)turn = 2;
       
    };
    updateScore ();
}