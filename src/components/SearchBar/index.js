import React from "react";
import classes from "./searchBar.module.css";
import classnames from "classnames";

const SearchBar = () => {
  return (
    <div className={classes["search"]}>
      <input
        type="search"
        placeholder="Enter Group id"
        className={classes["search__input"]}
      />
      <button
        type="submit"
        className={classnames("btn left-margin", classes["search-btn"])}
      >
        {" "}
        Search
      </button>
    </div>
  );
};

export default SearchBar;
