async function getJoke(){
    const apiUrl = 'https://icanhazdadjoke.com';

    const jokeItemEl = document.getElementById('jokeItem');

try {
    const response = await fetch(apiUrl, {
        headers: {
            'Accept': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const joke = data.joke;

    console.log(joke);

    jokeItemEl.innerHTML = joke;

} catch (e) {
    console.log(e);
}
}

