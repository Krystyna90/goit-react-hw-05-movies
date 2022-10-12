import { Route, Routes, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import fetchMovies from "../fetch/fetch-api";
import { AppBar } from "./AppBar/AppBar";
import Home from "./Home/Home";
import { MovieId } from "../pages/MovieId";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies().then(({ results }) => {
      const moviesArray = results.map((result) => ({
        movieName: result.original_title,
        movieId: result.id,
      }));
      setMovies(moviesArray);
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<AppBar></AppBar>}>
          <Route index element={<Home movies={movies}></Home>}></Route>
          <Route path="movies" element={<Outlet></Outlet>}>
            <Route path=":movieId" element={<MovieId movies={movies} />}>
              <Route path="cast" element={<div>Cast</div>}></Route>
              <Route path="reviews" element={<div>Reviews</div>}></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
