# Aufgabe 3.3/3.4: Eigene UI-Komponente implementieren

## Auftrag
1. Wählen Sie unter 3.3 Eigene UI-Komponente wählen aus, welche Komponente Sie implementieren möchten. (First Come, First Served)
2. Setzen Sie den Auftrag 3.4 um.

### Vorlage | Akkordeon
![](/Modul%20Tag%202/Block_03_04/Auftrag%203.3/Content/Accordeon.png)

### Resultat
**JavaScript**
```JavaScript
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
```

![](/Modul%20Tag%202/Block_03_04/Auftrag%203.3/Content/MyAkkrdeon.png)