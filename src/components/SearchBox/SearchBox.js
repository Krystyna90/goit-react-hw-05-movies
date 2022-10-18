import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import SearchButton from "../SearchButton/SearchButton";
import css from "./SearchBox.module.css";

const SearchBox = ({ submitForm }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  let [input, setInput] = useState("");
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (query.length !== 0) setInput(query);
  }, [query]);

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    submitForm(input.trim().toLowerCase());
    setSearchParams(input !== "" ? { query: input } : {});
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
          onChange={onChangeInput}
        ></input>
        <SearchButton></SearchButton>
      </div>
    </form>
  );
};
SearchBox.propTypes = {
  submitForm: PropTypes.func.isRequired,
};

export default SearchBox;
