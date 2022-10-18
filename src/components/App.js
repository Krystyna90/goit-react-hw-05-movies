import { Route, Routes, Outlet } from "react-router-dom";
import { useState, useEffect, lazy } from "react";
import fetchMovies from "../fetch/fetch-api";
import AppBar from "./AppBar/AppBar";
import Home from "./Home/Home";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";
import NotFoundElement from "./NotFoundElement/NotFoundElement";

const Movies = lazy(() => import("../pages/Movies"));
const MovieId = lazy(() => import("../pages/MovieId"));

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
            <Route index element={<Movies></Movies>}></Route>
            <Route path=":movieId" element={<MovieId movies={movies} />}>
              <Route path="cast" element={<Cast></Cast>}></Route>
              <Route path="reviews" element={<Reviews></Reviews>}></Route>
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFoundElement></NotFoundElement>}></Route>
      </Routes>
    </>
  );
};

export default App;
