import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import SearchBox from "../components/SearchBox/SearchBox";
import Home from "../components/Home/Home";
import fetchMoviesKeyword from "../fetch/fetch-movie-keyword";
import back from "../images/back.png";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [movieSubmit, setMovieSubmit] = useState("");
  const query = searchParams.get("query") ?? "";

  const changeInput = (value) => {
    setSearchParams(value !== "" ? { query: value } : {});
  };

  useEffect(() => {
    if (movieSubmit !== "") {
      fetchMoviesKeyword(movieSubmit, 1).then(({ results }) => {
        if (results.length === 0) alert("There are no results");
        const moviesArray = results.map((result) => ({
          movieName: result.original_title,
          movieId: result.id,
        }));
        setMovies(moviesArray);
      });
    }
  }, [movieSubmit]);

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
      <SearchBox
        submitForm={onSearchSubmit}
        onChange={changeInput}
        value={query}
      ></SearchBox>
      {movieSubmit && <Home movies={movies}></Home>}
    </div>
  );
};

export default Movies;
