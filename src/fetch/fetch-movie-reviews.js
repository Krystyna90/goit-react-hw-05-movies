const KEY = "39e7639bbdd6f3ff4985c89cb032db66";

function fetchMovieReviews(movieId) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
  ).then((response) => response.json());
}

export default fetchMovieReviews;
