import React, { useState } from "react";
import Form from "./components/Form";
import User from "./components/User";

const API_URL = "https://api.github.com";

async function fetchUsers(query) {
  try {
    const response = await fetch(`${API_URL}/search/users?q=${query}`);
    const json = await response.json();
    return json.items || [];
  } catch(e) {
    throw new Error(e);
  }
}

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [firstSearch, setFirstSearch] = useState(true);

  function onSearchChange(e) {
    setQuery(e.target.value);
  }

  async function onSearchSubmit(e) {
    e.preventDefault();
    const results = await fetchUsers(query);
    setQuery("");
    setResults(results);
    setFirstSearch(false);
  }

  return (
    <div className="app">
      <main className="main">
        <h2>Github User Search</h2>
        <Form 
          onChange={onSearchChange}
          onSubmit={onSearchSubmit}
          value={query}
        />
        { !firstSearch && <h3>Results</h3>}
        <div id="results">
          <div>
            {results.map((user) => {
              return (
                <User 
                  key={user.id}
                  avatar={user.avatar_url}
                  url={user.html_url}
                  username={user.login}
                />
              )
            })}
          </div>
        </div>
      </main>

    </div>
  )
}

export default App;
