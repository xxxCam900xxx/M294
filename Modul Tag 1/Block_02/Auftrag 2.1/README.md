# Aufgabe 2.1: Elemente im DOM selektieren

## Auftrag
Üben Sie das Selektieren von Elementen im DOM in diesem Auftrag

1. Öffnen Sie die Datei "auftrag-2.1/Bulgarien.html" aus den Quellcodevorlagen oder die Seite für die Aufträge in einem modernen Browser.
2. Öffnen Sie die Konsole der Entwicklertools (F12).
3. Benutzen Sie "getElementsByClassName" und "innerText" um den Namen der Hauptstadt auszugeben.
4. Zählen Sie wie viele Regionen (Nordostbulgarien, ...) es gibt, indem Sie "getElementsByClassName" und "length" verwenden.
5. Geben Sie alle Namen "Klasse: p-name" der Einträge mit dem Attribute "data-group='nature'" auf der Konsole aus. Dazu soll querySelectorAll und forEach verwendet werden.
6. Geben Sie die Fläche von Bulgarien mit nur einem "querySelector" und "innerText" zurück.

### Vorlage
![Vorlage Beispiel](/Modul%20Tag%201/Block_02/Auftrag%202.1/Content/Vorlage.png)

### Resultat

```JavaScript
// Benutzen Sie "getElementsByClassName" und "innerText" um den Namen der Hauptstadt auszugeben.
let elements = document.getElementsByClassName('voy-qb-item-value1');

console.log(Hauptstadt);

// Zählen Sie wie viele Regionen (Nordostbulgarien, ...) es gibt, indem Sie "getElementsByClassName" und "length" verwenden.
let Anzahl = document.getElementsByClassName('voy-regionList').length;
console.log(Anzahl);

// Geben Sie alle Namen "Klasse: p-name" der Einträge mit dem Attribute "data-group='nature'" auf der Konsole aus. 
// Dazu soll querySelectorAll und forEach verwendet werden.
let p_name = document.querySelectorAll('[data-group="nature"]');

p_name.forEach(OutPutName);

function OutPutName (elm) {
    let elmText = elm.innerText;
    console.log(elmText);
}

// Geben Sie die Fläche von Bulgarien mit nur einem "querySelector" und "innerText" zurück.
let fläche = document.querySelector('[data-wikidata-value="110.994 km²"]');
let flächeText = fläche.innerText;
console.log(flächeText);
```


**Allemöglichkeiten**
```JavaScript
// Selektion per ID
var elementById = document.getElementById("elementId");

// Selektion per Klassennamen
var elementsByClassName = document.getElementsByClassName("className");

// Selektion per Tagname
var elementsByTagName = document.getElementsByTagName("tagName");

// Selektion per CSS-Selektor
var elementsBySelector = document.querySelectorAll("CSS-Selektor");

// Selektion des ersten Elements per CSS-Selektor
var elementBySelector = document.querySelector("CSS-Selektor");

// Selektion des Elternelements
var parentElement = element.parentElement;

// Selektion von Kinderelementen
var childElements = element.children;
```