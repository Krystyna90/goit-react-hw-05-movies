import { useState, useEffect, Suspense } from "react";
import {
  NavLink,
  Link,
  Outlet,
  useParams,
  useLocation,
} from "react-router-dom";
import fetchMoviesDetails from "../fetch/fetch-movie-details";
import css from "../components/AppBar/AppBar.module.css";
import back from "../images/back.png";

const navItems = [
  {
    href: "cast",
    text: "Cast",
  },
  {
    href: "reviews",
    text: "Reviews",
  },
];

const MovieId = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLink = location.state?.from ?? "/";

  useEffect(() => {
    fetchMoviesDetails(movieId).then((result) => setMovie(result));
  }, [movieId]);

  return (
    <>
      <Link to={backLink}>
        <img src={back} alt="Back" width="50" height="40"></img>
      </Link>
      {movie && (
        <div className={css.MovieCard}>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.original_title}
            ></img>
          </div>
          <div>
            <h2> {movie.original_title}</h2>
            <p>User score: {movie.vote_average}</p>
            <h4>Overview</h4>
            <p>{movie.overview}</p>
            <h4>Genres</h4>
            <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
          </div>
        </div>
      )}

      <div>
        <h3>Additional information</h3>
        {navItems.map((item) => (
          <li key={item.href}>
            <NavLink
              className={css.NavigationLink}
              to={item.href}
              state={{ from: "/movies" }}
            >
              {item.text}
            </NavLink>
          </li>
        ))}
        <Suspense fallback={null}>
          <Outlet></Outlet>
        </Suspense>
      </div>
    </>
  );
};

export default MovieId;
