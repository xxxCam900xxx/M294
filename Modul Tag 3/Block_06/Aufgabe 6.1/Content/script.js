let Data = [];

document.forms.newAdress.addEventlistener('submit', (event) => {
    event.preventDefault();

    const adress = new FormData(event.traget);
    Data.push(adress);

    renderData(Data);
});

function renderData(Data) {
    const listElement = document.getElementById('list');
    listElement.replaceChildren([]);

    for (const adress of adresses) {

    }
}