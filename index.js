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

getComputerChoice ();

