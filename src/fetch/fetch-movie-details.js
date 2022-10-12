const KEY = "39e7639bbdd6f3ff4985c89cb032db66";

function fetchMoviesDetails(movieId) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}`
  ).then((response) => response.json());
}

export default fetchMoviesDetails;
