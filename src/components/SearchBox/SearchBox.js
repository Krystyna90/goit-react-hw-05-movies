import PropTypes from "prop-types";
import SearchButton from "../SearchButton/SearchButton";
import css from "./SearchBox.module.css";

const SearchBox = ({ submitForm, onChange, value }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    submitForm(value.trim().toLowerCase());
  };

  return (
    <form onSubmit={onSubmit}>
      <div className={css.SearchContainer}>
        <input
          className={css.SearchInput}
          type="text"
          autoComplete="off"
          placeholder="Your movie"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        ></input>
        <SearchButton></SearchButton>
      </div>
    </form>
  );
};
SearchBox.propTypes = {
  submitForm: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SearchBox;
