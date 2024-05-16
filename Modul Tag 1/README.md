# Modul Tag 1
> [!NOTE]
> -  Entwicklungsumgebung einrichten
> - Repetition HTML und CSS
> - Einstieg in JavaScript im Browser
> - DOM manipulieren und dynamisches Gestalten

# Inhaltsverzeichnis
- [Frontend in Webapplikationen](#frontend-in-webapplikationen)
- [Block 1 | Auftrag 1.1 - HTML und CSS repetieren ](/Modul%20Tag%201/Block_01/Auftrag%201.1/README.md)
- [«Clientseitige» Webtechnologien](#clientseitige-webtechnologien)
- [Clientseitige Webtechnologien über die Zeit](#client-server-modell-im-world-wide-web)
- [Clientseitige Webtechnologien über die Zeit](#clientseitige-webtechnologien-über-die-zeit)
- [JavaScript in HTML einbinden](#javascript-in-html-einbinden)
- [Block 1 | Aufgabe 1.2: "Hallo Welt!" mit JavaScript](/Modul%20Tag%201/Block_01/Auftrag%201.2/README.md)
- [JavaScript Grundlagen](#javascript-grundlagen)
- [Block 1 | Aufgabe 1.3: Mit Schleifen, Bedingungen und Modulo arbeiten](/Modul%20Tag%201/Block_01/Auftrag%201.3/README.md)

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