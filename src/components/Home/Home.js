import React from "react";
import PropTypes from "prop-types";
import { NavLink, Outlet } from "react-router-dom";
// import PropTypes from "prop-types";
import css from "./Home.module.css";

export default function Home({ movies }) {
  return (
    <>
      <ul className={css.MovieList}>
        {movies.map(({ movieName, movieId }) => (
          <li key={movieId}>
            <NavLink className={css.MovieItem} to={`/movies/${movieId}`}>
              {movieName}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet></Outlet>
    </>
  );
}

Home.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      movieId: PropTypes.number.isRequired,
      movieName: PropTypes.string,
    })
  ),
};
