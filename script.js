function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}


function rollDice() {
    var die1Result = rollDie();
    var die2Result = rollDie();
    var total = die1Result + die2Result;
    document.getElementById("die1").textContent = die1Result;
    document.getElementById("die2").textContent = die2Result;
    document.getElementById("total").textContent = total;
}
document.getElementById("rollButton").addEventListener("click", rollDice);
