# Aufgabe 3.1: Elemente im DOM selektieren

## Auftrag
In diesem Auftrag geht es darum, die Event wie beispielsweise "onClick", näher kennenzulernen.

### Vorlage
![Vorlage Beispiel](/Modul%20Tag%202/Block_03_04/Auftrag%203.1/Content/Vorlage.png)

### Resultat

**ConsoleOutput Website**
- [index.html](./Content/index.html)
- [app.js](./Content/app.js)

**Event Tester**
- [index.html](./Content/OwnTester/index.html)
- [script.js](./Content/OwnTester/script.js)

**HTML**
```html
<body onload="handleLoad()"> 
<!-- Ruft die handleLoad-Funktion beim Laden der Seite auf -->
  
  <button onclick="handleClick()">Klick mich!</button> 
  <!-- Ruft die handleClick-Funktion beim Klick auf den Button auf -->
  
  <div onmouseover="handleMouseOver()" onmouseout="handleMouseOut()">Hovere über mich!</div> 
  <!-- Ruft die handleMouseOver-Funktion beim Mouseover und die handleMouseOut-Funktion beim Mouseout des DIV-Elements auf -->
  
  <input type="text" onkeydown="handleKeyDown()" onkeyup="handleKeyUp()" onchange="handleChange()"> 
  <!-- Ruft die handleKeyDown-Funktion beim Tastendruck, die handleKeyUp-Funktion beim Tastenfreigabe und die handleChange-Funktion bei der Änderung des Eingabewerts auf -->

  <form onsubmit="handleSubmit()"> 
  <!-- Ruft die handleSubmit-Funktion beim Absenden des Formulars auf -->
    <input type="submit" value="Absenden">
  </form>
</body>
```

**JavaScript**
```JavaScript

// Event-Handler-Funktion für den Klick
function handleClick() {
  alert("Button wurde geklickt!"); 
}

// Event-Handler-Funktion für das Mouseover-Ereignis
function handleMouseOver() {
  alert("Maus über dem Element!"); 
}

// Event-Handler-Funktion für das Mouseout-Ereignis
function handleMouseOut() {
  alert("Maus hat das Element verlassen!"); 
}

// Event-Handler-Funktion für das Tastendruck-Ereignis
function handleKeyDown() {
  alert("Eine Taste wurde gedrückt!"); 
}

// Event-Handler-Funktion für das Tastenfreigabe-Ereignis
function handleKeyUp() {
  alert("Eine Taste wurde losgelassen!");
}

// Event-Handler-Funktion für das Absenden des Formulars
function handleSubmit() {
  alert("Formular wurde abgeschickt!");
}

// Event-Handler-Funktion für die Änderung des Eingabewerts
function handleChange() {
  alert("Der Wert wurde geändert!"); 
}

// Event-Handler-Funktion für das Laden der Seite oder eines Bildes
function handleLoad() {
  alert("Die Seite oder ein Bild wurde geladen!");
}

```