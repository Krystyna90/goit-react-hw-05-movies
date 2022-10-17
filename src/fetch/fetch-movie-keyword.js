const KEY = "39e7639bbdd6f3ff4985c89cb032db66";

function fetchMoviesKeyword(query, page) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&page=${page}&language=en-US&include_adult=false&query=${query}`
  ).then((response) => response.json());
}

export default fetchMoviesKeyword;

// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
// `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&page=${page}&language=en-US&include_adult=false&query=${movie}`
