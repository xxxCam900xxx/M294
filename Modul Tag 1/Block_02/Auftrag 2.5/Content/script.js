let Cups = ['noball', 'noball', 'ball'];
const gamefield = document.getElementById('playground');

// Funktion zum Mischen eines Arrays
const shuffleArray = function (array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const shuffeldCups = shuffleArray(Cups);

shuffeldCups.forEach(element => {
    const tile = document.createElement('div');
    const tileButton = document.createElement('button');
    const tileImage = document.createElement('img');

    if (element == 'ball') {
        tileImage.setAttribute('src', "./img/RedBall.png");
    } else {
        tileImage.setAttribute('src', "./img/empty.png");
    }

    tile.classList.add('cup');
    tileButton.classList.add('hidden');
    tileImage.setAttribute('isball', element);

    tile.addEventListener('click', () => {
        tileButton.classList.remove('hidden');
        IsCorrect(tileImage);
    })

    tileButton.append(tileImage);
    tile.append(tileButton);
    gamefield.append(tile);
    
});

/* function IsCorrect(image) {
    if (image.isball)
} */

function refresh() {
    location.reload();
}