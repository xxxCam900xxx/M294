const card = document.forms.register;
const message = card.elements.message;
const user = card.elements.username;

const output = document.getElementById('output');

card.addEventListener('submit', async (event) => {
    event.preventDefault();

    const Infos = new FormData(event.target);

    console.log(JSON.stringify(Infos));

    const request = await fetch('http://10.65.4.20/challenges/1', {
        method: 'POST',
    });

    let Auth = await request.headers.get('Authorization');

    console.log(Auth);

    const myMessage = await fetch('http://10.65.4.20/comments', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": Auth,
        },
        body: JSON.stringify(
            {
                "message": message.value,
                "username": user.value,
            }
        ),
    });

});

// Store the interval ID in a variable
const intervalId = setInterval(async function() {
    try {
      const response = await fetch('http://10.65.4.20/comments', {
        method: 'GET',
      });
  
      if (response.ok) {
        const data = await response.json();
  
        output.innerHTML = "";
  
        data.forEach(element => {
          let mes = document.createElement('div');
          let message = document.createElement('p');
          let User = document.createElement('h1');
  
          message.innerText = element.message;
          User.innerText = element.username;
  
          mes.append(User);
          mes.append(message);
          output.append(mes);
        });
  
      } else {
        console.log('Fehler beim Abrufen der Daten. Status:', response.status);
        clearInterval(intervalId); // Stop the interval
      }
    } catch (error) {
      console.log('Fehler aufgetreten:', error);
      clearInterval(intervalId); // Stop the interval
    }
  }, 1000);