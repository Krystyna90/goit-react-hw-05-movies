import { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
import { SearchBox } from "../components/SearchBox/SearchBox";
import Home from "../components/Home/Home";
import fetchMoviesKeyword from "../fetch/fetch-movie-keyword";

export const Movies = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [movieSubmit, setMovieSubmit] = useState("");
  // const filter = searchParams.get("filter") ?? "";

  useEffect(() => {
    fetchMoviesKeyword(movieSubmit, 1).then(({ results }) => {
      const moviesArray = results.map((result) => ({
        movieName: result.original_title,
        movieId: result.id,
      }));
      setMovies(moviesArray);
    });
  }, [movieSubmit]);

  // const changeSearchBox = (value) => {
  //   setSearchParams(value !== "" ? { filter: value } : {});
  // };
  const onSearchSubmit = (movie) => {
    if (movie !== movieSubmit) {
      setMovieSubmit(movie);
    }
  };
  return (
    <div>
      <SearchBox submitForm={onSearchSubmit}></SearchBox>
      {movieSubmit && <Home movies={movies}></Home>}
    </div>
  );
};
