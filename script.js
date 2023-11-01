let currentProbability = 50; // default probability

function setProbability(prob) {
    currentProbability = prob;
    document.getElementById('selectedProbability').textContent = prob + "%";
}

function rollDice() {
    const result = Math.random() < (currentProbability / 100);
    const displayResult = result ? "True" : "False";
    document.getElementById('result').textContent = "Result: " + displayResult;
}
