import React, { useState } from "react";
import ToDoItem from "./components/ToDoItem";
import InputArea from "./components/InputArea";

function App() {
  const [items, setItems] = useState([]);

  const addItem = (inputText) => {
    setItems((prevValue) => [...prevValue, inputText]);
  };

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((item, index) => {
            return (
              <ToDoItem
                key={index}
                id={index}
                text={item}
                onChecked={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
