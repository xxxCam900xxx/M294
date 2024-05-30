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