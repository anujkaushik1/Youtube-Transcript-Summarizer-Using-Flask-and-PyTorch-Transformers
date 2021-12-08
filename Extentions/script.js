fetch('http://127.0.0.1:5000/index/V1Pl8CzNzCw')
    .then(data => data.json())
    .then(jokeData => {
        const jokeText = jokeData.text;
        const jokeElement = document.getElementById('jokeElement');

        jokeElement.innerHTML = jokeText;
        
    }) 