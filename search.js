const apiKey = '7c8d496a';
const urlParams = new URLSearchParams(window.location.search);
const searchQuery = urlParams.get('query');

const displayResults = (movies) => {
  const container = document.querySelector('.container');
  container.innerHTML = '';

  if (movies && movies.length > 0) {
    movies.forEach(movie => {
      const card = document.createElement('div');
      card.className = 'card';

      const img = document.createElement('img');
      img.src = movie.Poster !== "N/A" ? movie.Poster : './im/Image non trouvée.png';
      img.className = 'card-img';
      img.alt = movie.Title;

      const cardBody = document.createElement('div');
      cardBody.className = 'card-body';

      const title = document.createElement('h3');
      title.className = 'card-title';
      title.textContent = movie.Title;

      cardBody.appendChild(img);
      cardBody.appendChild(title);
      card.appendChild(cardBody);
      container.appendChild(card);
    });
  } else {
    container.innerHTML = '<p>Aucun résultat trouvé pour votre recherche.</p>';
  }
};

if (searchQuery) {
  const apiurl = `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchQuery}`;

  fetch(apiurl)
    .then(response => response.json())
    .then(data => {
      if (data.Response === "True") {
        displayResults(data.Search);
      } else {
        displayResults([]);
      }
    })
    .catch(err => console.error('Erreur :', err));
}
