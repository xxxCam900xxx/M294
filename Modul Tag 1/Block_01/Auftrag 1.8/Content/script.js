function guessingGame() {
    let guessingNum = Math.floor(Math.random() * 100);
    let correct = false;

    while (!correct) {
        let userNum = parseInt(prompt("Rate meine Zahl! Zwischen 0 - 100"));

        if (!isNaN(userNum)) {
            if (userNum < guessingNum && userNum >= 0) {
                alert("Deine Zahl ist zu klein!");
            } else if (userNum > guessingNum && userNum <= 100) {
                alert("Deine Zahl ist zu groß!");
            } else if (userNum === guessingNum) {
                alert("Glückwunsch! Du hast die richtige Zahl erraten!");
                correct = true;
            }
        } else {
            alert("Ungültige Eingabe. Bitte gib eine Zahl ein.");
        }
    }
}