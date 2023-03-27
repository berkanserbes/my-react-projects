import React from "react";
import "./style.css";

function RecipeItem({ id, image, title, addFavorite }) {
  return (
    <div className="recipe-item" key={id}>
      <div>
        <img src={image} alt="..." />
      </div>
      <p>{title}</p>
      <button onClick={addFavorite}>Add Favorite</button>
    </div>
  );
}

export default RecipeItem;
