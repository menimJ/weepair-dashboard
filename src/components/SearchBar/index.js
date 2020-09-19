import React from "react";
import "./searchBar.css";

const SearchBar = () => {
  return (
    <div className="search">
      <input
        type="search"
        placeholder="Enter Group id"
        className="search__input"
      />
      <button type="submit" className="btn search-btn left-margin">
        {" "}
        Search
      </button>
    </div>
  );
};

export default SearchBar;
