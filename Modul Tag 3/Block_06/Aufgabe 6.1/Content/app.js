const list = document.getElementById('list');
const form = document.forms.formular;
let Data = [];

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let formData = new FormData(form);
    let formular = Object.fromEntries(formData);

    console.log(Data);

    // Bedingungen Erfüllen
    /* if (currentVorname != '') {
        form.elements.Vorname.setCustomValidity();
    } */


    Data.push(formular);

    renderData(Data);
});

function renderData(Data) {
    list.replaceChildren([]);

    for (const row of Data) {
        // Ausgelesene Inhalte
        let currentVorname = row.Vorname;
        let currentNachname = row.Nachname;
        let currentAddress = row.Strasse;
        let currentPLZ = row.PLZ;
        let currentOrt = row.Ort;
        let currentEmail = row.Email;

        let currentDuzen = row.Duzen;
        let currentSiezen = row.Siezen;

        let currentSelect = row.Bekanntvon;

        // console.log(formular);
        // console.log(formular.Bekanntvon);

        // Elemente erstellen
        let form_newCard = document.createElement('div');
        let form_name = document.createElement('h1');
        let form_adresse = document.createElement('div');
        let form_strasse = document.createElement('h2');
        let form_ort = document.createElement('p');

        let form_email = document.createElement('a');

        let form_erlaubt = document.createElement('div');
        let form_duzen = document.createElement('p');
        let form_siezen = document.createElement('p');

        let form_bekannt = document.createElement('h2');

        let form_del = document.createElement('div');

        // Klassen hinzufügen
        form_newCard.classList.add('form_card');
        form_adresse.classList.add('form_adresse');
        form_del.classList.add('button');

        // Textinhalt hinzufügen
        form_name.innerText = currentVorname + ' ' + currentNachname;
        form_strasse.innerText = currentAddress;
        form_ort.innerText = currentOrt + ' ' + currentPLZ;
        form_email.innerHTML = currentEmail;
        form_email.setAttribute('href', 'mailto:' + currentEmail);

        if (currentDuzen == 1) {
            form_duzen.innerHTML = 'Duzen erlaubt? : <input type="checkbox" value="on" name="Duzen" id="fromduzen" disabled checked>';
        }
        if (currentSiezen == 1) {
            form_siezen.innerHTML = 'Siezen erlaubt? : <input type="checkbox" value="on" name="Siezen" id="fromsiezen" disabled checked>';
        }

        form_duzen.innerHTML = 'Duzen erlaubt? : <input type="checkbox" name="Duzen" id="fromduzen" disabled>';
        form_siezen.innerHTML = 'Siezen erlaubt? : <input type="checkbox" name="Siezen" id="fromsiezen" disabled>';

        if (currentSelect == undefined || currentSelect == '') {
            form_bekannt.innerText = currentSelect;
            form_bekannt.innerText = 'Neu';
        }
        else {
            form_bekannt.innerText = currentSelect;
        }

        form_del.innerText = 'Remove';

        // Funktionen hinzufügen
        form_del.addEventListener('click', () => {
            form_newCard.remove();
        });

        // Zusammenbauen
        form_adresse.append(form_strasse);
        form_adresse.append(form_ort);

        form_erlaubt.append(form_duzen);
        form_erlaubt.append(form_siezen);

        form_newCard.append(form_bekannt);
        form_newCard.append(form_name);
        form_newCard.append(form_adresse);
        form_newCard.append(form_email);
        form_newCard.append(form_erlaubt);


        form_newCard.append(form_del);
        list.append(form_newCard);
    }
}