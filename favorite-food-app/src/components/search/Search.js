import React, { useState } from "react";
import "./style.css";

function Search() {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <form className="search-form">
      <input
        name="search"
        id="search"
        placeholder="Search Recipes"
        value={search}
        onChange={handleChange}
      />
      <button type="submit">Search recipes</button>
    </form>
  );
}

export default Search;
