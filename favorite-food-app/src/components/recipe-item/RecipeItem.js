import React from "react";
import "./style.css";

function RecipeItem({ id, image, title }) {
  return (
    <div className="recipe-item" key={id}>
      <div>
        <img src={image} alt="..." />
      </div>
      <p>{title}</p>
      <button>Add Favorite</button>
    </div>
  );
}

export default RecipeItem;
