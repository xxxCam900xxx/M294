# Auftrag 1.7: Einfaches JavaScript Programm schreiben

## Auftrag
Schreiben Sie ein einfaches JavaScript Programm, welches den Benutzer nach seinem Namen fragt und dann je nach Tageszeit "Guten Morgen <Name>", "Guten Tag <Name>", "Guten Abend <Name>" oder "Gute Nacht <Name>" ausgibt.

- Verwenden Sie für die Ausgabe die alert()-Funktion
- Verwenden Sie für die Abfrage des Names die prompt()-Funktion
- Verwenden Sie new Date(), um ein Date-Objekt zu erzeugen und verwenden Sie die getHours() Methode um die Stunden herauszuholen. 
- Ziehen Sie die Dokumentation https://devdocs.io/javascript/global_objects/date bei.

### Resultat
**JaveScript**
```JavaScript
let name = prompt("Wie ist ihr Name?");
let dateTime = new Date();

dateTime = dateTime.getHours();

if (dateTime >= 6 && dateTime <= 11) {
    alert('Guten Morgen ' + name);
} 
else if (dateTime == 12) {
    alert('Guten Mittag ' + name);
} else if (dateTime >= 12 && dateTime <= 19) {
    alert('Guten Abend ' + name);
} else {
    alert('Gute Nacht ' + name);
}
```