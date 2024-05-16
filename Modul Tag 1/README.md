# Modul Tag 1
> [!NOTE]
> -  Entwicklungsumgebung einrichten
> - Repetition HTML und CSS
> - Einstieg in JavaScript im Browser
> - DOM manipulieren und dynamisches Gestalten

# Inhaltsverzeichnis
#### Block 1
- [Frontend in Webapplikationen](#frontend-in-webapplikationen)
- [Block 1 | Auftrag 1.1 - HTML und CSS repetieren ](/Modul%20Tag%201/Block_01/Auftrag%201.1/README.md)
- [«Clientseitige» Webtechnologien](#clientseitige-webtechnologien)
- [Clientseitige Webtechnologien über die Zeit](#client-server-modell-im-world-wide-web)
- [Clientseitige Webtechnologien über die Zeit](#clientseitige-webtechnologien-über-die-zeit)
- [JavaScript in HTML einbinden](#javascript-in-html-einbinden)
- [Block 1 | Aufgabe 1.2: "Hallo Welt!" mit JavaScript](/Modul%20Tag%201/Block_01/Auftrag%201.2/README.md)
- [JavaScript Grundlagen](#javascript-grundlagen)
- [Block 1 | Aufgabe 1.3: Mit Schleifen, Bedingungen und Modulo arbeiten](/Modul%20Tag%201/Block_01/Auftrag%201.3/README.md)
- [Entwicklertools (Devtools) im Browser](#entwicklertools-devtools-im-browser)
- [Block 1 | Aufgabe 1.4: Entwicklertools des Browsers anwenden](/Modul%20Tag%201/Block_01/Auftrag%201.4/README.md)
- [Mit Listen (Arrays) und Objekten arbeiten](#mit-listen-arrays-und-objekten-arbeiten)
#### Block 2
- [DOM Grundlagen](#dom-grundlagen)
- [Block 2 | Aufgabe 2.1: Elemente im DOM selektieren](/Modul%20Tag%201/Block_02/Auftrag%202.1/README.md)
- [Elemente im DOM manipulieren](#elemente-im-dom-manipulieren)
- [Auf Ereignisse (Events) aus dem DOM reagieren](#auf-ereignisse-events-aus-dem-dom-reagieren)
- [Block 2 | Aufgabe 2.2: DOM mit JavaScript manipulieren](/Modul%20Tag%201/Block_02/Auftrag%202.2/README.md)
- [Block 2 | Aufgabe 2.3: Dynamisches hinzufügen von CSS Klassen](/Modul%20Tag%201/Block_02/Auftrag%202.3/README.md)
- [Block 2 | Aufgabe 2.4: Memory-Spiel erstellen](/Modul%20Tag%201/Block_02/Auftrag%202.4/README.md)

---

# Block 1 | Frontend für Applikationen realisieren

---

# Frontend in Webapplikationen

#### Was macht ein Frontend aus?

Als **Frontend** wird die so **genannte Präsentationsebene** bezeichnet – also der Teil einer Software-Anwendung oder anderen Applikation wie beispielsweise einer Webseite, der **für den Betrachter sichtbar** ist (grafische Benutzeroberfläche). 

#### Wo läuft ein Frontend?

**Ein Frontend läuft auf dem Endgerät des Nutzers**, z. B. auf einem Computer, Smartphone oder Tablet. Es ist die Benutzeroberfläche einer Anwendung, über die der Benutzer mit der Software interagieren kann. Das Frontend besteht aus HTML, CSS und JavaScript und wird von einem Webbrowser interpretiert. *Es gibt Webfrontends für Browser und mobile Frontends für bestimmte Betriebssysteme.*

#### Wie ist das Frontedn mit dem Backend verbunden?

Klassischerweise sind in einem CMS Backend und Frontend so miteinander verknüpft, dass sich das Backend immer nur auf ein Frontend bezieht. Bei einem Headless CMS ist das anders – über eine Schnittstelle lassen sich in diesem Fall unbegrenzt viele Frontends durch ein einziges Backend versorgen.

#### Welche Technologien braucht man im Frontend? Welche Frameworks?

Ein Frontend-Framework ist dafür verantwortlich, was Website-Besucher sehen. **HTML**, **CSS** und **JavaScript** sind die drei wichtigsten Tools für die Entwicklung eines Frontend-Frameworks.

- **JavaScript-Frameworks**
    - React
    - Angular
    - Vue

- **CSS-Frameworks**
    - Bootstrap
    - Foundation
    - Bulma

---

# «Clientseitige» Webtechnologien

#### Was verstehen Sie unter clientseitigen Webtechnologien?

Definition. Webtechnologien sind Instrumente der Webseitenerstellung. Ihre Funktionen beziehen sich beispielsweise auf die Textstrukturierung, Layoutgestaltung sowie Inhaltsformatierung. Da sich das Internet in einem ständigen Wandel befindet, ist eine zeitgemäße Verwendung der Webtechnologien überaus relevant.

**History of JavaScript**: 
[https://www.youtube.com/watch?v=Sh6lK57Cuk4&ab_channel=Fireship](https://www.youtube.com/watch?v=Sh6lK57Cuk4&ab_channel=Fireship)

---

# Client-Server-Modell im World Wide Web

![](/Modul%20Tag%201/Content/ClientServerModell01.png)

Unser Endgerät macht eine Server Abfrage

![](/Modul%20Tag%201/Content/ClientServerModell02.png)

Serverseitiger Code wird von einem Dienst auf dem Server ausgeführt, z.B. mit PHP, Java oder JS

![](/Modul%20Tag%201/Content/ClientServerModelll03.png)

Clientseitiger Code wird von vom Browser auf dem Client ausgeführt, z.B. mit JS

---

# Clientseitige Webtechnologien über die Zeit
Um die Jahrtausendwende gab es verschiedene Ansätze für clientseitige Technologien, bevor sich schlussendlich
JavaScript ganz durchgesetzt hat.

![](/Modul%20Tag%201/Content/VorgängerVorJS.png)

Das World Wide Web ohne Javascript heutzutage, wäre eine Lustlose Leere.

Viele Webseiten wie:
- youtube.com
- instagram.com
- srf.ch

wären einfach Leer oder Laden nicht einmal rein!

---

# JavaScript in HTML einbinden

```html
<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Hello, World! /title>

            <script>
            alert("Hello, World!")
            </script>

            <script src="./external.js"></script>
        </head>
        <body>
            ...
        </body>

        <script src="./external.js"></script>

        <script>
            alert("Hello, World!")
            </script>
    </html>
```
---

# JavaScript Grundlagen

### Variablen und Datentypen
- [Struktur von JavaScript](https://javascript.info/structure)
- [Variablen](https://javascript.info/variables)
- [Datentypen](https://javascript.info/types)

### Vergleiche und Verzweigungen
- [Vergleiche | < > == === !=](https://javascript.info/comparison)
- [Verzeigungen | If ... else](https://javascript.info/ifelse)
- [Operatoren | OR AND NOT](https://javascript.info/logical-operators)

---

# Entwicklertools (Devtools) im Browser
Mit F12 öffnet man mit jeder WebEngine den Inspector:
- Inspector
- Console
- Network
- Source / Debugger
- Breakpoints, Conditional Breakpoints
- Logpoints

---

# Mit Listen (Arrays) und Objekten arbeiten
- [Arrays](https://javascript.info/array)
- [Objekte](https://javascript.info/object)

---

# Block 2 | DOM manipulieren und dynamisches Gestalten

---

# DOM Grundlagen

## DOM Grundlagen : Hierarchie
- [DOM Hierarchie](https://javascript.info/dom-nodes)

## DOM Grundlagen : Beziehungen
- [Im DOM navigieren](https://javascript.info/dom-navigation)

## Elemente im DOM selektieren | Teil 1
- [Selektoren](https://javascript.info/searching-elements-dom)

```javascript
// Über die ID suchen
getElementById(id);

// Über die Klasse suchen
getElementsByClassName(className);

// Über Elementname suchen
getElementsByTagName(tagName);
```

## Elemente im DOM selektieren | Teil 2
```javascript
// Nur EIN Element suchen
querySelector(selector);

// Alle Element suchen mit bestimment eigenschaften
querySelectorAll(selector);
```
---

# Elemente im DOM manipulieren
```JavaScript
// Element erstellen
let element = document.createElement(tagName);

// Element einfügen (before)
body.prepend(element)

// Element einfügen (after)
body.append(element)

// Element löschen
remove(element);

// Textinhalt in ein Element einfügen
element.innerText = "Hello";

// HTML-Inhalt in ein Element einfügen
element.innerHTML = "Hello";
```

---

# Auf Ereignisse (Events) aus dem DOM reagieren
- [Ereignisse](https://javascript.info/events)

Beim Eintreten einer Aktion eine
Funktion ausführen:

- on* = callback

```JavaScript
// Ereignis
element.addEventListener(event, callback);
```