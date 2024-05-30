# Auftrag 7.1: Wetter für einen bestimmten Ort anzeigen

In dieser Aufgabe geht es darum, den Benutzer nach seiner Postleitzahl zu fragen und dann eine Wetter-API abzufragen, um die aktuelle Temperatur und die Wettervorhersage (optional) für diese Postleitzahl zu erhalten.

1. Teil: Benutzereingabe erhalten Fragen Sie den Benutzer mit einem passenden Formular nach einer schweizerischen Postleitzahl. Stellen Sie sicher, dass die Eingabe gültig ist, d.h., dass sie nur Zahlen enthält und die richtige Anzahl an Ziffern hat.

2. Teil: API abfragen Fügen Sie das notwendige JavaScript hinzu, welches die Daten von der nachfolgend beschriebenen API bezieht.

Die Funktion sollte einen GET-Request an die Wetter-API von Meteo Schweiz senden. Die URL lautet: https://app-prod-ws.meteoswiss-app.ch/v1/plzDetail?plz=818000, wobei die ersten 4-Zahlen der Postleitzahl entsprechen. Die URL für den Request sollte die gegebene Postleitzahl enthalten.

Verarbeiten Sie die JSON-Antwort der API, um die aktuelle Temperatur und die Wettervorhersage (optional) zu extrahieren.

3. Teil: Ergebnisse ausgeben Geben Sie die aktuelle Temperatur, das zugehörige Datum und die Wettervorhersage (optional) für die vom Benutzer eingegebene Postleitzahl aus.

**Tipp**: Benutzen Sie die fetch-Funktion um die API abzufragen. Verwenden Sie einen Dienst wie https://corsproxy.io/, um die CORS-Probleme zu umgehen.

### Abgabe

```JavaScript

const formula = document.forms.Abfrage;
const input_field = formula.elements.wetter;

const temp = document.getElementById('temp');
const forWet = document.getElementById('forcast');

formula.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const wetterOrt = formData.get("wetter");

  // Mit Proxy CORS (Cross Origin) umgehen
  const response = await fetch(`https://corsproxy.io/?https://app-prod-ws.meteoswiss-app.ch/v1/plzDetail?plz=${wetterOrt}00`);
  const data = await response.json();

  // Daten rauslesen
  let currentTemprature = data["currentWeather"].temperature;
  let forcast = data["forecast"][0].precipitation;

  temp.innerText = currentTemprature;
  forWet.innerText = forcast;
  
});

```