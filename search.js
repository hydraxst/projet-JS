document.getElementById('a-search-bar-page').addEventListener('input', function() {
    const query = this.value;
    if (query.length > 2) { 
        searchMovies(query);
    } else {
        document.getElementById('results').innerHTML = ''; 
    }   
});

function searchMovies(query) {
    const apiKey = '7c8d496a'; 
    const url = `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "True") {
                const movies = data.Search.slice(0, 4); 
                displayResults(movies);
            } else {
                document.getElementById('results').innerHTML = '<p>Aucun résultat trouvé.</p>';
            }
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données:', error);
        });
}

function displayResults(movies) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.setAttribute('data-imdbid', movie.imdbID); 

        const poster = movie.Poster !== 'N/A' ? movie.Poster : 'https://sbedirect.com/8317-large_default/panneau-sens-interdit.jpg'; 
        movieElement.innerHTML = `
            <img src="${poster}" alt="${movie.Title}">
            <div>${movie.Title}</div>
        `;

        movieElement.addEventListener('click', () => {
            window.location.href = `movie.html?id=${movie.imdbID}`;
        });

        resultsContainer.appendChild(movieElement);
    });
}