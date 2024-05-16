# Aufgabe 1.2: "Hallo Welt!" mit JavaScript

## Auftrag
In dieser Aufgabe lernen Sie den Unterschied zwischen eingebettetem (inline) und externem JavaScript kennen.

### Vorlage
![Vorlage Beispiel](/Modul%20Tag%201/Block_01/Auftrag%201.2/Content/Vorlage.png)

### Resultat
[index.html](/Modul%20Tag%201/Block_01/Auftrag%201.2/Content/index.html)
[root.css](/Modul%20Tag%201/Block_01/Auftrag%201.2/Content/alert.js)

![](/Modul%20Tag%201/Block_01/Auftrag%201.2/Content/MeinResultat.png)

#### Button Intern
```javascript
function Alert_v2() {
        let Antwort = "Bitte auswählen\nEntweder OK or Abbruch.";
        if (confirm(Antwort) == true) {
            Antwort = "Dankeschön :D";
        } else {
            Antwort = "OHAAAAAAAAA! :(";
        }
        alert(Antwort);
    }
```

![](/Modul%20Tag%201/Block_01/Auftrag%201.2/Content/Confirm.png)
![](/Modul%20Tag%201/Block_01/Auftrag%201.2/Content/ConfirmDankeschön.png)
![](/Modul%20Tag%201/Block_01/Auftrag%201.2/Content/ConfirmNO.png)

#### Button Extern
```javascript
function Alert_v1 () {
    let Name = prompt("Bitte gebe deinen Namen ein!", "Max Mustermann");

    if (Name != null) {
      alert("Hallo " + Name)
    }
}
```

![](/Modul%20Tag%201/Block_01/Auftrag%201.2/Content/Prompt.png)
![](/Modul%20Tag%201/Block_01/Auftrag%201.2/Content/Alert1.png)