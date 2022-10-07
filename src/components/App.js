import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Home/Home";
import fetchMovies from "../fetch/fetch-api";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies().then(({ results }) => {
      const moviesArray = results.map((result) => ({
        movieName: result.original_title,
      }));
      setMovies(moviesArray);
    });
  });

  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Home movies={movies} />}></Route>
      </Routes> */}
    </>
  );
};

export default App;
