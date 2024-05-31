/* Allgemein Objekte STATRT ======================= */
const output = document.getElementById('task_list');
const pop_close = document.querySelectorAll('.pop_close');
const reload_button = document.getElementById('refresh');

const create_button = document.getElementById('create');
const pop_create = document.getElementById('pop_create');

const change_button = document.getElementById('change');
const pop_change = document.getElementById('pop_change');

const delete_button = document.getElementById('delete');
const pop_delete = document.getElementById('pop_delete');

const login_button = document.getElementById('login');
const pop_login = document.getElementById('pop_login');
let token;

const popup = document.querySelectorAll('.popup');
let allTask = document.querySelectorAll('.task');
/* Allgemein Objekte END ======================= */

/* RELOAD BUTTON START ========================= */
reload_button.addEventListener('click', () => {
    GETALL();
});
/* RELOAD BUTTON END ========================= */

/* GET REQUEST START =========================== */

async function GETALL() {
    const response = await fetch(`http://localhost/auth/jwt/tasks`, {
        method: "GET",
        headers: {
            "token": token.token,
        }
    });

    data = await response.json();

    createList(data);
}
/* GET REQUEST END =========================== */

/* CREATE LIST FUNCTION START ================== */
function createList(data) {

    output.innerHTML = "";
    data.forEach(elm => {

        // Daten auslesen
        let taskID = elm.id;
        let taskValue = elm.title;
        let taskCheck = elm.completed;

        // Create Elements
        let newTask = document.createElement('div');
        let taskText = document.createElement('p');

        // Element Inhalt
        if (taskCheck == true) {
            taskText.innerHTML = `<input type="checkbox" name="${taskID}" id="${taskID}" checked disabled> ` + taskID + "  <span class=\"message\">" + taskValue + "</span";
        } else {
            taskText.innerHTML = `<input type="checkbox" name="${taskID}" id="${taskID}" disabled> ` + taskID + " <span class=\"message\">" + taskValue + "</span";
        }

        newTask.setAttribute("id", taskID);

        newTask.classList.add('task');

        newTask.append(taskText);
        output.append(newTask);

    });
}
/* CREATE LIST FUNCTION END ================== */

/* SEARCHBAR START ========================= */

const searchbar = document.forms.searchbar;
const search_input = searchbar.elements.search;

search_input.addEventListener('input', async (event) => {
    event.preventDefault();

    let data;

    output.innerHTML = "";

    try {
        let searchValue = search_input.value;

        if (searchValue == "") {


            GETALL();


        } else {

            const response = await fetch(`http://localhost/auth/jwt/task/${searchValue}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token.token,
                },
            });

            data = await response.json();

            data = [data]

            createList(data);

        }

    } catch (error) {
        alert('Fehler aufgetreten:', error);
    }
});

/* SEARCHBAR END ========================= */

/* CLOSE POPUP START ========================= */
pop_close.forEach(elem => {

    elem.addEventListener('click', () => {
        popup.forEach(element => {
            element.classList.remove('show');
        });
    })

});
/* CLOSE POPUP END ========================= */


/* CREATE METHOD START =================== */

const createForm = document.forms.create;

create_button.addEventListener('click', () => {

    pop_create.classList.add('show');

});

createForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Daten auslesen
    let title = createForm.elements.title.value;
    let completed = createForm.elements.completed.checked;

    try {

        const response = await fetch(`http://localhost/auth/jwt/tasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token.token,
            },
            body: JSON.stringify(
                {
                    "completed": completed,
                    "title": title,
                }
            ),
        });

        if (response.ok) {
            pop_create.classList.remove('show');

            GETALL();
        }


    } catch (error) {
        alert('Fehler aufgetreten:', error);
    }
});


/* CREATE METHOD NED =================== */

/* DELETE METHOD START ================= */
const deleteForm = document.forms.delete;

delete_button.addEventListener('click', () => {

    pop_delete.classList.add('show');

});

deleteForm.elements.taskID.addEventListener('input', (event) => {
    const input = event.target.value;
    allTask = document.querySelectorAll('.task');

    let foundMatch = false;

    allTask.forEach(element => {
        if (element.getAttribute('id') === input) {
            foundMatch = true;
        }
    });

    if (!foundMatch) {
        deleteForm.elements.taskID.setCustomValidity('Kein Eintrag mit dieser ID gefunden');
    } else {
        deleteForm.elements.taskID.setCustomValidity('');
    }
});

deleteForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Daten auslesen
    let taskID = deleteForm.elements.taskID.value;

    try {

        const response = await fetch(`http://localhost/auth/jwt/task/${taskID}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token.token,
            }
        });

        if (response.ok) {
            pop_delete.classList.remove('show');

            GETALL();
        }

    } catch (error) {
        alert('Fehler aufgetreten:', error);
    }

});

/* DELETE METHOD END =================== */

/* PUT METHOD START ==================== */


const changeForm = document.forms.change;

change_button.addEventListener('click', () => {

    pop_change.classList.add('show');

});

changeForm.elements.taskID.addEventListener('input', (input) => {
    input = event.target.value;
    allTask = document.querySelectorAll('.task');

    allTask.forEach(element => {
        if (element.getAttribute('id') === input) {
            changeForm.elements.title.value = element.getElementsByClassName('message')[0].innerText;
            changeForm.elements.completed.checked = element.getElementsByTagName('input')[0].checked;
        } else {

        }
    });
});

changeForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Daten auslesen
    let taskID = changeForm.elements.taskID.value;
    let title = changeForm.elements.title.value;
    let completed = changeForm.elements.completed.checked;

    try {

        const response = await fetch(`http://localhost/auth/jwt/tasks`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token.token,
            },
            body: JSON.stringify(
                {
                    "id": taskID,
                    "completed": completed,
                    "title": title,
                }
            ),
        });

        if (response.ok) {
            pop_change.classList.remove('show');

            GETALL();
        }


    } catch (error) {
        alert('Fehler aufgetreten:', error);
    }

});
/* PUT METHOD END ==================== */

/* LOGIN METHOD START ================ */
//const login_button = document.getElementById('login');
//const pop_login = document.getElementById('pop_login');

const loginForm = document.forms.login;

login_button.addEventListener('click', () => {
    pop_login.classList.add('show');
});

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    try {

        const response = await fetch(`http://localhost/auth/jwt/sign`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "email": loginForm.elements.email.value,
                "password": loginForm.elements.password.value,
            }),
        });

        token = await response.json();

        const verify = await fetch('http://localhost/auth/jwt/verify', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token.token,
            },
        })

        if (verify.ok) {
            alert('good');
        }

    } catch (error) {

        alert('Fehler aufgetreten:', error);
    }
});


/* LOGIN METHOD START ================ */

// INIT LIST

async function init() {

    try {

        const response = await fetch(`http://localhost/auth/jwt/verify`, {
            method: "GET",
        });

        if (response.ok) {
            GETALL();
        } else {
            output.innerText = "Bitte melden Sie sich an!"
        }

    } catch (error) {

        alert('Fehler aufgetreten:', error);
    }

}

init();