function getComputerChoice () {
    let RandomVariable = Math.random();
    if (RandomVariable <= 0.29) {
        return "Rock";
    }
    else if ( RandomVariable > 0.29 && RandomVariable <= 0.59){
        return "Paper";
    }
    else {
        return "Scissors";
    }
    }
   


function getHumanChoice (){
    let HumanChoice = prompt("Choose Rock, Paper or Scissors");
    HumanChoice = HumanChoice.charAt(0).toUpperCase() + HumanChoice.slice(1).toLowerCase();
    if (HumanChoice === "Rock" || HumanChoice === "Paper" || HumanChoice === "Scissors") {
        return HumanChoice;
    } 
    else {
        return alert("choose again");
    }
}

let HumanScore = 0;
let ComputerScore = 0;

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        alert("It's a tie!");
    }
    if ( ( humanChoice === "Rock" && computerChoice === "Scissors") ||
    ( humanChoice === "Paper" && computerChoice === "Rock") ||
    ( humanChoice === "Scissors" && computerChoice === "Paper") )
    {
        HumanScore++; 
        alert ('You won');
    }
    else {
        ComputerScore++;
        alert ("you lost");
    }
    console.log(`Your score: ${HumanScore} - Computer score: ${ComputerScore}`)
}



function  playGame (){
    for (i= 0; i < 5; i++) {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound (humanSelection, computerSelection);
    }
}

playGame();