import React from "react";

function Button({ onClick }) {
  return (
    <button onClick={onClick}>
      <span>New Quote</span>
    </button>
  );
}

export default Button;
