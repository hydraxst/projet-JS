const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id')
const APIKEY = '7c8d496a'
if (movieId) {
    fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=${APIKEY}`)
        .then(data => {
            if (data.Response === "True") {
                const movieDetails = document.getElementById('movieDetails');
                movieDetails.innerHTML = `
                    <img src="${data.Poster}" alt="${data.Title}">
                    <h2>${data.Title}</h2>
                    <p>Année: ${data.Year}</p>
                    <p>Genre: ${data.Genre}</p>
                    <p>Réalisateur: ${data.Director}</p>
                    <p>Acteurs: ${data.Actors}</p>
                    <p>Synopsis: ${data.Plot}</p>
                `;
            } else {
                document.getElementById('movieDetails').innerHTML = '<p>Film non trouvé.</p>';
            }
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données:', error);
        });
} else {
    document.getElementById('movieDetails').innerHTML = '<p>Aucun film sélectionné.</p>';
}