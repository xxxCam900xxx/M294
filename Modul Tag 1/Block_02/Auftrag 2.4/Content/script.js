const cantons = ['ag', 'ar', 'bl', 'fr', 'gl', 'ju', 'ne', 'ow', 'sh', 'sz', 'ti', 'vd', 'zg', 'ai', 'be', 'bs', 'ge', 'gr', 'lu', 'nw', 'sg', 'so', 'tg', 'ur', 'vs', 'zh'];
const playground = document.getElementById('playground');

const getFlagPath = function (canton) {
  return `./img/${canton}.png`;
};

// Funktion zum Mischen eines Arrays
const shuffleArray = function (array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Zufällige Auswahl von 10 Kantonen
const randomCantons = shuffleArray(cantons).slice(0, 10);

// Durchgang zwei Mal ausführen
for (let i = 0; i < 2; i++) {
  // Zufällige Reihenfolge für die 10 Kantonen-Bilder
  const shuffledCantons = shuffleArray(randomCantons);

  shuffledCantons.forEach(function (value) {
    const tile = document.createElement('div');
    const tileButton = document.createElement('button');
    const tileImage = document.createElement('img');

    // Bild zunächst verdecken
    tileImage.classList.add('hidden');

    tileButton.addEventListener('click', function () {
      // Bei Klick auf den Button das Bild anzeigen
      tileImage.classList.remove('hidden');
      comparePair();
    });

    tileImage.setAttribute('src', getFlagPath(value));
    tileButton.appendChild(tileImage);
    tile.appendChild(tileButton);
    playground.appendChild(tile);
  });
}