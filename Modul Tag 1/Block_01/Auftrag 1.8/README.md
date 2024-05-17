# Auftrag 1.8: Einfaches JavaScript Programm schreiben 2

## Auftrag
Schreiben Sie ein einfaches JavaScript Programm, bei welchem den Benutzer eine Zahl zwischen 1 und 100 erraten muss. Die Zahl wird zum Programmstart zufällig gewählt und das Programm verrät nach jedem Versuch, ob der Versuch zu hoch oder zu niedrig war.

- Verwenden Sie für die Ausgabe die alert()-Funktion
- Verwenden Sie für die Abfrage des Versuchs die prompt()-Funktion
- Verwenden Sie Math.floor(Math.random() * 100) um die Zufallszahl zu generieren.

### Resultat

**JavaScript**
```JavaScript
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
```