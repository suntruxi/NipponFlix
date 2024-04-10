import React from "react";
import "./Search.css";

function Search() {
  return (
    <div className="search-section">
      {/* Search for your favorite shows */}
      <div classNameName="search-input">
        <input
          className="search-box"
          type="text"
          placeholder="What Anime will u watch next?"
        />
        <button className="btn-search">Search</button>
      </div>
    </div>
  );
}

export default Search;
