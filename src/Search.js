import React, { useState } from "react";
import "./Search.css";
import { useNavigate } from "react-router-dom";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    setSearchQuery(event);
    // console.log(searchQuery);
  };
  const handleSubmit = () => {
    navigate("/results", { state: { query: searchQuery } });
    console.log(searchQuery);
  };
  return (
    <div className="search-section">
      {/* Search for your favorite shows */}
      <div classNameName="search-input">
        <input
          onChange={(event) => handleChange(event.target.value)}
          className="search-box"
          type="text"
          placeholder="What Anime will u watch next?"
        />
        <button className="btn-search" onClick={handleSubmit}>
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
