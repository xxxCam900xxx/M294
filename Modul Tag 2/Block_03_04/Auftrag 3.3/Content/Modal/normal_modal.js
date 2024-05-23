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