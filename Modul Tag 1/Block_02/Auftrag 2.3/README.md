# Aufgabe 2.3: Dynamisches hinzufügen von CSS Klassen

## Auftrag

[Styles und Klassen mit JavaScript manipulieren](https://javascript.info/styles-and-classes)
Mit dem dynamischen Hinzufügen von CSS Klassen kann die Gestaltung beim Eintreffen eines Ereignisses auf
einfache Art und Weise verändert werden.

1. Öffnen Sie den Ordner "auftrag-2.3" aus den Quellcodevorlagen für die Aufträge im Editor.
2. Stellen Sie sicher, dass die externe CSS- und JavaScript-Datei geladen wird.
3. Verwenden Sie Flexbox, um die Anordnung der Listeneinträge so zu gestalten, dass möglichst viele Einträge auf dem Bildschirm angezeigt werden.
4. Fügen Sie eine Funktion in der JavaScript-Datei hinzu, die ein zufälliges Land auswählt. Verwenden Sie dazu die Math.random()-Funktion und den Math.floor()-Operator.
5. Rufen Sie die Funktion innerhalb einem Event-Handler (addEventListener) auf, welche beim Klicken auf den enthaltenen Button ausgelöst wird.
6. Innerhalb der Funktion, verwenden Sie "querySelectorAll" oder 'children', um auf alle li-Elemente innerhalb der Liste mit der ID "destinations" zugreifen zu können.
7. Verwenden Sie die classList.add()-Methode, um dem zufällig ausgewählten li-Element eine CSS-Klasse hinzuzufügen, die es optisch hervorhebt.
8. Stellen Sie sicher, dass die CSS-Klasse, die zuvor dem zufällig ausgewählten li-Element hinzugefügt wurde, von allen anderen li-Elementen entfernt wird.
9. Gestalten Sie die Seite ansprechend, unter der Beachtung der maximalen Zeitvorgabe.
10. (Optional 🔥🔥🔥) Animieren Sie die Zielsuche, indem Sie zuerst schnell zufällig durch die Ländern gehen und die Suche nach und nach verlangsamen, bis sie beim Ziel zum Halten kommt. (setTimeout)
11. (Optional 🔥🔥🔥) Optimieren Sie die Zielsuche für kleinere Anzeigen. Stellen Sie sicher, dass das gefundene Resultat immer im sichtbaren Bereich des Browserfensters ist. Dazu benötigen Sie "scrollIntoView".

### Vorlage

![Vorlage Beispiel](/Modul%20Tag%201/Block_02/Auftrag%202.3/Content/Vorlage.png)

### Resultat

![](/Modul%20Tag%201/Block_02/Auftrag%202.3/Content/Resultat.png)

**Nächstes Reiseziel auswählen**

```JavaScript
document.getElementById('choose').addEventListener('click', function () {
    const randomNumber = Math.floor(Math.random() * 195);
    const destinations = document.querySelectorAll('li');

    const currentDestination = document.querySelector('.active');
    const selectedDestination = destinations[randomNumber];

    if (currentDestination) {
        currentDestination.classList.remove('active');
    }

    selectedDestination.classList.add('active');

    const offset = 100;
    const scrollPosition = selectedDestination.offsetTop - offset;

    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
});
```

**Roulette**

```JavaScript
document.getElementById('spin').addEventListener('click', function () {
    const destinations = document.querySelectorAll('li');
    const spinDuration = 1000; // In Millisekunden
    const initialSpinDelay = 3000;
    const maxSpinSpeed = 300; // Maximum spin speed (higher value means slower spin)
    const offset = 100; // Abstand zu WIndow Oben

    let spinSpeed = maxSpinSpeed;
    let spinDelay = initialSpinDelay;
    let spinInterval;
    let spinTimeout;
    let currentDestination;

    const spinStep = function () {
        const randomNumber = Math.floor(Math.random() * 195);
        const selectedDestination = destinations[randomNumber];

        if (currentDestination) {
            currentDestination.classList.remove('active');
        }
        selectedDestination.classList.add('active');
        currentDestination = selectedDestination;

        selectedDestination.scrollIntoView();

        if (spinSpeed < 100) {
            clearInterval(spinInterval);
            clearTimeout(spinTimeout);

            const scrollPosition = selectedDestination.offsetTop - offset;
            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
        }

        spinDelay += 10;
    };

    spinInterval = setInterval(spinStep, spinSpeed);

    spinTimeout = setTimeout(function () {
        if (currentDestination) {
            currentDestination.classList.remove('active');
        }

        clearInterval(spinInterval);
        const selectedDestination = document.querySelector('.active');
        if (selectedDestination) {
            selectedDestination.classList.remove('active');
        }
        const finalDestination = destinations[Math.floor(Math.random() * 195)];
        finalDestination.classList.add('active');

        const scrollPosition = finalDestination.offsetTop - offset;
        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        });
    }, spinDuration);
});
```
