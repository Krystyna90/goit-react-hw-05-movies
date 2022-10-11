import { useState, useEffect } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import css from "../components/AppBar/AppBar.module.css";

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

export const MovieId = ({ movies }) => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    movies.map((movie) => {
      if (movie.movieId === movieId)  setMovie(movie);
    });
  }, [movieId]);
  console.log(movie);

  return (
    <>
      <div className={css.MovieCard}>
        <h1>{movieId}</h1>
        <h3>Additional information</h3>
        {navItems.map((item) => (
          <li key={item.href}>
            <NavLink className={css.NavigationLink} to={item.href}>
              {item.text}
            </NavLink>
          </li>
        ))}
        <Outlet></Outlet>
      </div>
    </>
  );
};
