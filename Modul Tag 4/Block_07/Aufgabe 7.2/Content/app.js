const card = document.forms.register;
const message = card.elements.message;
const user = card.elements.username;

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
            "Authorization" : Auth,
         },
        body: JSON.stringify(
            {
                "message" : message.value,
                "username" : user.value,
            }
        ),
    });


});