# Aufgabe 2.2: DOM mit JavaScript manipulieren

## Auftrag
Diese Aufgabe ergänzt das Resultat von Auftrag 1.1: HTML und CSS repetieren, um dynamische Aktionen, welche
den DOM verändern.

### Vorlage
![Vorlage Beispiel](/Modul%20Tag%201/Block_02/Auftrag%202.2/Content/Vorlage.png)

### Resultat
- [index.html](/Modul%20Tag%201/Block_02/Auftrag%202.2/Content/index.html)
- [script.js](/Modul%20Tag%201/Block_02/Auftrag%202.2/Content/script.js)

```JavaScript
let AddItems = document.getElementById('add');
let AlbumBody = document.getElementById('latest');
let firstDiv = document.getElementsByClassName('albums')[0];

// Nimmt das erst selektierte Albumreihe und clone es
AddItems.addEventListener('click', function AddNewItems() {
    let clone = firstDiv.cloneNode(true);
    AlbumBody.appendChild(clone);
});

// Löscht die erste Albumklasse
let removeButton = document.getElementById('remove');
removeButton.addEventListener('click', function () {
    firstDiv = document.getElementsByClassName('albums')[0];
    if (firstDiv) {
        firstDiv.remove();
    }
});
```