const fetch = require('node-fetch');

const apiKey = '7c8d496a';
const searchQuery = 'star wars'; // Example search query

async function getMovies() {
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchQuery)}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.Response === 'True') {
            console.log(data.Search);
        } else {
            console.log('Error:', data.Error);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getMovies();