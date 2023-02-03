import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import Title from "./components/Title";
import Context from "./components/Context";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState({
    author: "Sokrates",
    content:
      "The secret of change is to focus all of your energy, not on fighting the old, but on building the new.",
  });

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
      });
  });

  function getRandomQuote(quotes) {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  function getNewQuote() {
    setQuote({
      author: getRandomQuote(quotes).author,
      content: getRandomQuote(quotes).text,
    });
  }

  return (
    <div className="container">
      <Title />
      <div className="content-section">
        <Context content={quote.content} author={quote.author} />
        <Button onClick={getNewQuote} />
      </div>
    </div>
  );
}

export default App;
