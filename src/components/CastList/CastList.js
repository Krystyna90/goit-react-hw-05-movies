import React from "react";
import css from "./CastList.module.css";
import PropTypes from "prop-types";

import noImage from "../../images/noImage.webp";

const CastList = ({ cast }) => {
  return (
    <div className={css.CastListContainer}>
      {cast.map(({ profile_path, name, character }) => (
        <li className={css.CastItem} key={name}>
          <img
            className={css.CastImg}
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w300${profile_path}`
                : noImage
            }
            alt={name}
            width="100"
            height="150"
          ></img>
          {name}
          <p>Character: {character}</p>
        </li>
      ))}
    </div>
  );
};
export default CastList;

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      profile_path: PropTypes.string,
      name: PropTypes.string,
      character: PropTypes.string,
    })
  ),
};
