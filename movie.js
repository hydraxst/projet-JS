const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id')
const APIKEY = '7c8d496a'
if (movieId) {
    fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=7c8d496a&plot=full`)
        .then(response => response.json())
        .then(data => {
            const movieDetails = document.getElementById('container-mov');
            movieDetails.innerHTML = `
                <h1 id="title-mov">${data.Title}</h1>
                <img id="img-mov" src="${data.Poster}" alt="${data.Title}">
                <h3 id="title-resume">Résumé</h3>
                <p id="word-resume">Résumé: ${data.Plot}</p>
                <h3 id="title-genre">Genre</h3>
                <p id="word-genre">Genre: ${data.Genre}</p>
                <h3 id="title-actor">Actor</h3>
                <p id="word-actor">Acteurs: ${data.Actors}</p>
            `;
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données:', error);
        });
} else {
    document.getElementById('container-mov').innerHTML = '<p>Aucun film sélectionné.</p>';
}