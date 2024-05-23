# Auftrag 3.1.2: Eingabe verarbeiten

## Auftrag
Erstellen Sie eine HTML Seite mit 2 H1-Elementen, einem Text Input und einem Button und einem UL-Element.

- Ändern Sie den Inhalt des 1. H1 Elementes zum Wert des Textfeldes, wenn der Benutzer etwas eintippt (bei jedem Buchstaben)
- Fügen Sie ein Element in der UL-Liste mit dem Text hinuz, wenn der Benutzer auf den Knopf drückt
- Ändern Sie den Inhalt des 2. H1 Elementes zum Wert des Textfeldes, wenn der Benutzer fertig ist mit eintippen

### Vorlage
Keine

### Resultat

Event
- [index.html](./Content/index.html)
- [app.js](./Content/app.js)

```JavaScript
let bod = document.getElementById('section');

let Textchanger = document.createElement('h1');
let FinishedText = document.createElement('h1');
let input = document.createElement('input');
let button = document.createElement('button');
let List = document.createElement('ul');

input.classList.add('newTask');
button.innerText = "Add";

button.addEventListener('click', AddNewTask);
input.addEventListener('input', () => {
    let a1 = document.getElementsByTagName('h1')[0];

    a1.innerText = input.value;
});

input.addEventListener('change', (event) => {
    let a2 = document.getElementsByTagName('h1')[1];
    a2.innerText = event.currentTarget.value;
});

bod.append(input);
bod.append(Textchanger);
bod.append(FinishedText);
bod.append(button);
bod.append(List);

/////////////////////////////////////////////////////7

function AddNewTask() {
    let newTask = document.createElement('li');
    let newText = document.getElementsByClassName('newTask')[0].value;
    newTask.innerText = newText;
    List.appendChild(newTask);
}
```