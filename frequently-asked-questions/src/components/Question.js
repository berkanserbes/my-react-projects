import React, { useState } from "react";

function Question({ question }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <div className={isOpen ? "opened" : "closed"}>
        <h4>{question.title}</h4>
        <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "-" : "+"}</button>
      </div>
      {isOpen && <p>{question.info}</p>}
    </section>
  );
}

export default Question;
