import { FaSearch } from "react-icons/fa";
import css from "./SearchButton.module.css";

export default function SearchButton() {
  return (
    <button type="submit" aria-label="Search" className={css.SearchBtn}>
      <FaSearch></FaSearch>
    </button>
  );
}
