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