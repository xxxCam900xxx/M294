// .setCustomValidity("Invalid field.");

const form = document.forms.regist;

// Used For POST stuff
form.addEventListener("submit", (event) => {
    event.preventDefault();
});

// Used for Validation
form.pwd_accept.addEventListener('input', passwordCheck);
form.pwd.addEventListener('input', passwordCheck);

function passwordCheck () {
    
    const pwd = form.pwd.value;
    const pwd_accept = form.pwd_accept.value;

    if (pwd !== pwd_accept) {
        // Fehlermeldung
        form.pwd_accept.setCustomValidity('Passwortstimmt nicht überein.');
    } else {
        form.pwd_accept.setCustomValidity('');
    }
};