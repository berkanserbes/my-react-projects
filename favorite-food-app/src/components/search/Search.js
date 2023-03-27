import React, { useState } from "react";
import "./style.css";

function Search({ handleSubmit }) {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    handleSubmit(e, search);
    setSearch("");
  };

  return (
    <form className="search-form" onSubmit={onSubmit}>
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
