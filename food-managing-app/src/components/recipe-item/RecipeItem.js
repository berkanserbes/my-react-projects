import React from "react";
import "./style.css";

function RecipeItem({ id, image, title, recipe }) {
  return (
    <div className="recipe-item">
      <div key={id}>
        <img src={image} alt="recipe img" />
      </div>
      <p>{title}</p>
      <button>Add Favourites</button>
    </div>
  );
}

export default RecipeItem;
