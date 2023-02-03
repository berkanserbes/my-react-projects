import React from "react";

function Context(props) {
  return (
    <>
      <h3 className="quote">"{props.content}"</h3>
      <i className="author">{props.author}</i>
    </>
  );
}

export default Context;
