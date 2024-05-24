# Modul Tag 1
> [!NOTE]
> - Ich setze CSS Transitions im Zusammenhang mit JavaScript ein.
> - Ich animiere Elemente mit JavaScript und CSS.
> - Ich beschreibe Vektorgrafiken mit SVG.
> - Ich zeichne mit der Canvas API von JavaScript.


# Inhaltsverzeichnis
#### Block 5
- [CSS mit JavaScript kombinieren](#css-mit-javascript-kombinieren)
- [CSS Transitions](#css-transitions)
#### Block 6
- [Formulare in Web-Frontends einsetzen](#formulare-in-web-frontends-einsetzen)
- [Mit HTML Fomulare erstellen](#mit-html-fomulare-erstellen)
- [Mit JavaScript Formulare auslesen (Variante 1)](#mit-javascript-formulare-auslesen-variante-1)
- [Mit JavaScript Formulare auslesen (Variante 2)](#mit-javascript-formulare-auslesen-variante-2)
- [Wichtige Formularereignisse (Events)](#wichtige-formularereignisse-events)
- [Aufgabe 6.1: PLZ zu Ort zuordnen](./Block_06/Aufgabe%206.1/README.md)
- [Submit-Verhalten von Formularen](#submit-verhalten-von-formularen)
- [6.2: Passwortbestätigung implementieren](./Block_06/Aufgabe%206.2/README.md)
- [Aufgabe 6.3: Formular nach Vorgabe erstellen](./Block_06/Aufgabe%206.3/README.md)

---

# Block 5 | Animation und Grafiken

---

# CSS mit JavaScript kombinieren

Eine Einführung in die Möglichkeiten der Verwendung von CSS und JavaScript in Kombination

- CSS und JavaScript sind zwei grundlegende Webtechnologien.
- Kombination ermöglicht dynamische Gestaltung und Interaktion.
- Verbessert Benutzererlebnis und Funktionalität.
- Nicht zu viele auf einmal!

![](/Modul%20Tag%203/Content/DJ.png)

---

### Inline-Styling mit JavaScript
- Verwendung von "element.style.property" für Inline-Styling.
- Schnelle Anpassungen an einzelne Elemente.
- Begrenzte Wiederverwendbarkeit und Trennung von Stil und Logik

### Manipulation von Klassen mit JavaScript
- "element.classList" für Klassenmanipulation.
- Einfaches Wechseln von Stilen.
- Bessere Trennung von Stil und Logik als Inline-Styling.

---

# CSS Transitions

Erklärung und Anwendung von CSS Transitions zur Erzeugung sanfter Animationseffekte

- CSS Transitions ermöglichen animierte Übergänge von einem Stil zum anderen.
- Einfache Syntax: "transition: [property] [duration] [timing-function] [delay]".
- Beispiele für animierte Eigenschaften: color , width , opacity .
- Verbesserung der visuellen Ästhetik und Benutzerfreundlichkeit.

---

# Block 6 | Formulare in Web-Frontends einsetzen

---

# Formulare in Web-Frontends einsetzen
Ich erfrage Informationen mit den passenden Formularelementen.
- Ich reichere Formularelemente mit zusätzlichen Funktionen an.
- Ich unterscheide zwischen client- und serverseitiger Validierung.
- Ich setze ein Formular aus mehreren Formularelementen zusammen.
- Ich strukturiere Formulare logisch.

--- 

# Mit HTML Fomulare erstellen

```html
<form name="signUp">

    <label for="firstname">Vorname</label>
    <input type="text" id="firstname" name="firstname">

    <label for="age">Alter</label>
    <input type="number" id="age" name="age">

    <label for="favbrowser">Lieblingsbrowser</label>
    <select id="favbrowser" name="favbrowser">
        <option value="firefox">Firefox</option>
        <option value="chrome">Chrome</option>
        <option value="opera">Opera</option>
        <option value="safari">Safari</option>
    </select>

    <button type="submit">Abschicken</button>

</form>
```

- [Lesen: Formularelemete](https://javascript.info/form-elements)
- [Lesen: <input>-Typen](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
- [Lesen: Formulare abschicken](https://javascript.info/forms-submit)

---

# Mit JavaScript Formulare auslesen (Variante 1)

```html
<form name="signUp">
    <input type="text" id="firstname" name="firstname">
</form>

<script>
    // Formular mit Namen auswählen
    const form = document.forms.signUp;

    // Eingabefeld mit Name auswählen
    const firstNameElement = form.elements.firstname;

    // Wert auslesen
    const firstNameValue = firstNameElement.value;
</script>
```

---

# Mit JavaScript Formulare auslesen (Variante 2)

Falls das Formular grösser wird oder die Formularelemente dynamisch ausgelesen werden sollen, eignet
sich diese Methode besser.

```html
<form name="signUp">
    <input type="text" id="forename" name="forename">
</form>

<script>
    // Formular mit Namen auswählen
    const form = document.forms.signUp;

    // Eingabefeld mit Name auswählen
    const formData = new FormData(form);

    // Wert auslesen
    const forenameValue = formData.get("forename");
</script>
```

---

# Wichtige Formularereignisse (Events)

- [Lesen: Formularereignisse](https://javascript.info/events-change-input)

Eingabeereignisse:
- Event: **input**
- Event: **change**
- Event: **blur**
- Event: **cut**, **copy** & **paste**

Formularereignisse:
- Event: **submit**
- Event: **valid** & **invalid**

---

# Submit-Verhalten von Formularen

- Ohne Angabe der Attribute **action** und **method** wird ein HTML Formular per **GET** -Methode an sich selber gesendet.
- Eine neue Seite lädt, womit Zustände in JavaScript ohne weitere Massnahmen verloren gehen.
- Im submit -Ereignis kann das Verhalten gesteuert werden:

```JavaScript
form.addEventListener("submit", (event) => {
    event.preventDefault();
});

```

---

# Validierung von Formularelementen mit Attributen

Attribute, die für die Validation eingesetzt werden können:
- required
- pattern
- min und max
- minlength und maxlength
- step

Auch nützlich in diesem Zusammenhang:
- placeholder

---

# Block 8 | Clientseitiges Routing

---