import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import SearchBox from "../components/SearchBox/SearchBox";
import Home from "../components/Home/Home";
import fetchMoviesKeyword from "../fetch/fetch-movie-keyword";
import back from "../images/back.png";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [movieSubmit, setMovieSubmit] = useState("");
  const location = useLocation();

  const searchQuery = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (searchQuery === null) return;
    fetchMoviesKeyword(searchQuery, 1).then(({ results }) => {
      if (results.length === 0) alert("There are no results");
      const moviesArray = results.map((result) => ({
        movieName: result.original_title,
        movieId: result.id,
      }));
      setMovies(moviesArray);
    });
  }, [searchQuery]);

  const onSearchSubmit = (movie) => {
    if (movie !== movieSubmit) {
      setMovieSubmit(movie);
    } else {
      alert("What movies are you looking for? ");
    }
  };
  return (
    <div>
      <Link to="/">
        <img src={back} alt="Back" width="50" height="40"></img>
      </Link>
      <SearchBox submitForm={onSearchSubmit}></SearchBox>
      {searchQuery && <Home movies={movies}></Home>}
    </div>
  );
};

export default Movies;
