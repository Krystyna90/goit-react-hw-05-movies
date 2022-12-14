import React from "react";
import PropTypes from "prop-types";
import css from "./ReviewList.module.css";

const ReviewList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(({ author, content }) => (
        <li key={author}>
          <span className={css.Paragraph}>Author: {author}</span>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default ReviewList;

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};
