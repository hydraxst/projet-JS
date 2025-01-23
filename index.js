const movieId = urlParams.get("id");
const APIKEY = "7c8d496a";

fetch(`https://www.omdbapi.com/?i=tt15467380&apikey=7c8d496a&plot=full`)
  .then((response) => response.json())
  .then((data) => {
    const moviePoster = document.getElementById("mov-img-2");
    moviePoster.innerHTML = `
            <a id="pour-img"><img id="img-mov-1" src="${data.Poster}" alt=""></a>
            <p id="text-top">${data.Poster}</p>
            `;
  })
  .catch((error) => {
    console.error("Erreur lors de la récupération des données:", error);
  });
