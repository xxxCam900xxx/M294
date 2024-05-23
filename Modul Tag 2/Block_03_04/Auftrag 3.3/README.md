# Aufgabe 3.3/3.4: Eigene UI-Komponente implementieren

## Auftrag
1. Wählen Sie unter 3.3 Eigene UI-Komponente wählen aus, welche Komponente Sie implementieren möchten. (First Come, First Served)
2. Setzen Sie den Auftrag 3.4 um.

### Vorlage | Akkordeon
![](/Modul%20Tag%202/Block_03_04/Auftrag%203.3/Content/Accordeon.png)

### Resultat

#### Accordeon
**JavaScript**
```JavaScript
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
```

![](/Modul%20Tag%202/Block_03_04/Auftrag%203.3/Content/MyAkkrdeon.png)

#### Modal
- [index.html](./Content/Modal/index.html)
- [Normal Modal with own JS](./Content/Modal/normal_modal.js)
- [Dialog Modal with new HTML Dialog Tag](./Content/Modal/dialog_modal.js)

**Normal Modal**
```JavaScript
let Main = document.querySelector('body');
let ModalButton = document.getElementById('normal_modal');

ModalButton.addEventListener('click', () => {
    // Creating Modal Elements
    let BackgroundModal = document.createElement('div');
    let Modal = document.createElement('div');
    let Modal_Close_Button = document.createElement('div');

    // Added Text to Elements
    Modal_Close_Button.innerHTML = '<i class="fa-solid fa-x"></i>';

    // Added Modal Classes
    BackgroundModal.classList.add('modal_background');
    Modal.classList.add('modal_main');
    Modal_Close_Button.classList.add('modal_close');

    // Added Funtion to Elements
    Modal_Close_Button.addEventListener('click', () => {
        BackgroundModal.remove();
    });

    Modal.append(Modal_Close_Button);
    BackgroundModal.append(Modal);
    Main.append(BackgroundModal);
});
```

**Dialog Modal**
```JavaScript
const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const selectEl = favDialog.querySelector("select");
const confirmBtn = favDialog.querySelector("#confirmBtn");

// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener("click", () => {
  favDialog.showModal();
});

// "Favorite animal" input sets the value of the submit button
selectEl.addEventListener("change", (e) => {
  confirmBtn.value = selectEl.value;
});

// "Cancel" button closes the dialog without submitting because of [formmethod="dialog"], triggering a close event.
favDialog.addEventListener("close", (e) => {
  outputBox.value =
    favDialog.returnValue === "default"
      ? "No return value."
      : `ReturnValue: ${favDialog.returnValue}.`; // Have to check for "default" rather than empty string
});

// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  favDialog.close(selectEl.value); // Have to send the select box value here.
});

```

#### ParalaxSlider

- [index.html](./Content/ParalaxSlider/index.html)
- [ParalaxSlider.js](./Content/ParalaxSlider/ParalaxSlider.js)

```JavaScript

```