# Aufgabe 1.3: Mit Schleifen, Bedingungen und Modulo arbeiten

## Auftrag
Üben Sie die Anwendung von Schleifen mit Hilfe des folgenden Auftrags.

### Vorlage
![Vorlage Beispiel](/Modul%20Tag%201/Block_01/Auftrag%201.3/Content/Vorlage.png)

### Resultat

[index.html](/Modul%20Tag%201/Block_01/Auftrag%201.3/Content/index.html)
[loop.js](/Modul%20Tag%201/Block_01/Auftrag%201.3/Content/loop.js)

```javascript
let console = document.getElementById("console");

for (let num = 1; num <= 30; num++) {
  setTimeout(() => {
    let element = document.createElement("p");
    let text = "";
    
    if (num % 3 === 0 && num % 5 === 0) {
      text = "FizzBuzz";
    } else if (num % 3 === 0) {
      text = "Fizz";
    } else if (num % 5 === 0) {
      text = "Buzz";
    } else {
      text = num.toString();
    }
    
    element.innerText = text;
    console.appendChild(element);
  }, num * 500);
}
```