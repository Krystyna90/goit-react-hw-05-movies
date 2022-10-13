import { useState } from "react";
import PropTypes from "prop-types";
import SearchButton from "../SearchButton/SearchButton";
import css from "./SearchBox.module.css";

export const SearchBox = ({ submitForm }) => {
  const [input, setInput] = useState("");

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submitForm(input.trim().toLowerCase());
  };

  return (
    <form onSubmit={onSubmit}>
      <div className={css.SearchContainer}>
        <input
          className={css.SearchInput}
          type="text"
          autoComplete="off"
          placeholder="Your movie"
          value={input}
          onChange={onInputChange}
        ></input>
        <SearchButton></SearchButton>
      </div>
    </form>
  );
};
SearchBox.propTypes = {
  submitForm: PropTypes.func.isRequired,
};
