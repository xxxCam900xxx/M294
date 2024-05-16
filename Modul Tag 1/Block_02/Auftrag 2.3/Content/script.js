document.getElementById('choose').addEventListener('click', function () {
    const randomNumber = Math.floor(Math.random() * 195);
    const destinations = document.querySelectorAll('li');

    const currentDestination = document.querySelector('.active');
    const selectedDestination = destinations[randomNumber];

    if (currentDestination) {
        currentDestination.classList.remove('active');
    }

    selectedDestination.classList.add('active');
    
    const offset = 100;
    const scrollPosition = selectedDestination.offsetTop - offset;
    
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
});

document.getElementById('spin').addEventListener('click', function () {
    const destinations = document.querySelectorAll('li');
    const spinDuration = 1000; // In Millisekunden
    const initialSpinDelay = 3000;
    const maxSpinSpeed = 300; // Maximum spin speed (higher value means slower spin)
    const offset = 100; // Abstand zu WIndow Oben

    let spinSpeed = maxSpinSpeed;
    let spinDelay = initialSpinDelay;
    let spinInterval;
    let spinTimeout;
    let currentDestination;

    const spinStep = function () {
        const randomNumber = Math.floor(Math.random() * 195);
        const selectedDestination = destinations[randomNumber];

        if (currentDestination) {
            currentDestination.classList.remove('active');
        }
        selectedDestination.classList.add('active');
        currentDestination = selectedDestination;

        selectedDestination.scrollIntoView();

        if (spinSpeed < 100) {
            clearInterval(spinInterval);
            clearTimeout(spinTimeout);

            const scrollPosition = selectedDestination.offsetTop - offset;
            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
        }

        spinDelay += 10;
    };

    spinInterval = setInterval(spinStep, spinSpeed);

    spinTimeout = setTimeout(function () {
        if (currentDestination) {
            currentDestination.classList.remove('active');
        }

        clearInterval(spinInterval);
        const selectedDestination = document.querySelector('.active');
        if (selectedDestination) {
            selectedDestination.classList.remove('active');
        }
        const finalDestination = destinations[Math.floor(Math.random() * 195)];
        finalDestination.classList.add('active');

        const scrollPosition = finalDestination.offsetTop - offset;
        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        });
    }, spinDuration);
});