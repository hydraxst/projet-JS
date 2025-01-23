fetch(`https://www.omdbapi.com/?i=tt15467380&apikey=7c8d496a&plot=full`)
  .then((response) => response.json())
  .then((data) => {
    const moviePoster = document.getElementById("mov1-1");
    moviePoster.innerHTML = `
            <a href="movie.html?id=tt15467380"><img id="img-mov-1" src="${data.Poster}"></img></a>
            <p id="text-top">${data.Title}</p>
            `;
  })
  .catch((error) => {
    console.error("Erreur lors de la récupération des données:", error);
  });
  fetch(`https://www.omdbapi.com/?i=tt13622970&apikey=7c8d496a&plot=full`)
  .then((response) => response.json())
  .then((data) => {
    const moviePoster = document.getElementById("mov1-2");
    moviePoster.innerHTML = `
            <a href="movie.html?id=tt13622970"><img id="img-mov-1" src="${data.Poster}"></img></a>
            <p id="text-top">${data.Title}</p>
            `;
  })
  .catch((error) => {
    console.error("Erreur lors de la récupération des données:", error);
  });
  fetch(`https://www.omdbapi.com/?i=tt2975590&apikey=7c8d496a&plot=full`)
  .then((response) => response.json())
  .then((data) => {
    const moviePoster = document.getElementById("mov1-3");
    moviePoster.innerHTML = `
            <a href="movie.html?id=tt2975590"><img id="img-mov-1" src="${data.Poster}"></img></a>
            <p id="text-top">${data.Title}</p>
            `;
  })
  .catch((error) => {
    console.error("Erreur lors de la récupération des données:", error);
  });
  fetch(`https://www.omdbapi.com/?i=tt15467380&apikey=7c8d496a&plot=full`)
  .then((response) => response.json())
  .then((data) => {
    const moviePoster = document.getElementById("mov2-1");
    moviePoster.innerHTML = `
            <a href="movie.html?id=tt15467380"><img id="img-mov-1" src="${data.Poster}"></img></a>
            <p id="text-top">${data.Title}</p>
            `;
  })
  .catch((error) => {
    console.error("Erreur lors de la récupération des données:", error);
  });
  fetch(`https://www.omdbapi.com/?i=tt13622970&apikey=7c8d496a&plot=full`)
  .then((response) => response.json())
  .then((data) => {
    const moviePoster = document.getElementById("mov2-2");
    moviePoster.innerHTML = `
            <a href="movie.html?id=tt13622970"><img id="img-mov-1" src="${data.Poster}"></img></a>
            <p id="text-top">${data.Title}</p>
            `;
  })
  .catch((error) => {
    console.error("Erreur lors de la récupération des données:", error);
  });
  fetch(`https://www.omdbapi.com/?i=tt2975590&apikey=7c8d496a&plot=full`)
  .then((response) => response.json())
  .then((data) => {
    const moviePoster = document.getElementById("mov2-3");
    moviePoster.innerHTML = `
            <a href="movie.html?id=tt2975590"><img id="img-mov-1" src="${data.Poster}"></img></a>
            <p id="text-top">${data.Title}</p>
            `;
  })
  .catch((error) => {
    console.error("Erreur lors de la récupération des données:", error);
  });