import React from "react";
import PropTypes from "prop-types";

export default function Home({ movies }) {
  return (
    <ul>
      {movies.map(({ movieName }) => (
        <li>{movieName}</li>
      ))}
    </ul>
  );
}

Home.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      moviesName: PropTypes.string.isRequired,
    })
  ).isRequired,
};
