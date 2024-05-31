// Alle Elemente mit der Klasse "accordion" abrufen
var accordions = document.getElementsByClassName("accordion");

// Durch jedes Akkordeon-Element iterieren
for (var i = 0; i < accordions.length; i++) {
  // Dem jeweiligen Akkordeon einen Klick-Event-Listener hinzufügen
  accordions[i].addEventListener("click", function() {
    // Die Klasse "active" des angeklickten Akkordeons umschalten
    this.classList.toggle("active");
    
    // Das nächste Geschwister-Element des angeklickten Akkordeons abrufen
    var panel = this.nextElementSibling;
    
    // Die maximale Höhe des Panels umschalten
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}