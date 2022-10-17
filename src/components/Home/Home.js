import { Suspense } from "react";
import PropTypes from "prop-types";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import css from "./Home.module.css";

export default function Home({ movies }) {
  const location = useLocation();
  return (
    <>
      <ul className={css.MovieList}>
        {movies.map(({ movieName, movieId }) => (
          <li key={movieId}>
            <NavLink
              className={css.MovieItem}
              to={`/movies/${movieId}`}
              state={{ from: location }}
            >
              {movieName}
            </NavLink>
          </li>
        ))}
      </ul>
      <Suspense fallback={null}>
        <Outlet></Outlet>
      </Suspense>
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
