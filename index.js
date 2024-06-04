function getComputerChoice () {
    let RandomVariable = Math.random();
    console.log(RandomVariable);
    if (RandomVariable <= 0.29) {
        return console.log("Rock");
    }
    else if (RandomVariable > 0.29 && RandomVariable <= 0.59) {
        return console.log("paper");
    }
    else {
    return console.log("Scissors");
    }
   
}

function getHumanChoice (){
    let HumanChoice = prompt("Choose Rock, Paper or Scissors");
    HumanChoice = HumanChoice.charAt(0).toUpperCase() + HumanChoice.slice(1).toLowerCase();
    if (HumanChoice === "Rock" || HumanChoice === "Paper" || HumanChoice === "Scissors") {
        return console.log(HumanChoice);
    } 
    else {
        return alert("choose again");
    }
}

getHumanChoice ();