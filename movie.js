
const apiKey = '7c8d496a';
const search = 'transformers';
const apiurl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${search}`;

fetch(apiurl)
  .then((response) => response.json())
  .then((data) => {
    if (data.Response === "True") {
      const movies = data.Search;
      const container = document.querySelector('.containeur');
      movies.forEach((movie) => {
        const card = document.createElement('div');
        card.className = 'card';
        const button = document.createElement('button');
        button.className = 'button-movie';
        const img = document.createElement('img');
        img.src = movie.Poster !== "N/A" ? movie.Poster : './im/Image non trouvée.png';
        img.className = 'card-img';
        img.alt = movie.Title;
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        const title = document.createElement('h3');
        title.className = 'card-title';
        title.textContent = movie.Title;
        button.appendChild(img)
        cardBody.appendChild(button);
        cardBody.appendChild(title);
        card.appendChild(img);
        card.appendChild(cardBody);
        container.appendChild(card);
      });
    } else {
      console.error("Aucun film trouvé avec ce terme de recherche !");
    }
  })
  .catch((err) => console.log("Erreur :", err));
