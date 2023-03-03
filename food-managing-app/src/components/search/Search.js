import React, { useState } from "react";
import "./style.css";

function Search(props) {
  const [inputValue, setInputValue] = useState("");
  const { getDataFromSearchComponent } = props;

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getDataFromSearchComponent(inputValue);
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        placeholder="Search recipes"
        id="search"
        value={inputValue}
        onChange={handleInputValue}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
