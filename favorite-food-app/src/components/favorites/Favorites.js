import React from "react";
import "./style.css";

function Favorites({ id, image, title, removeFavorite }) {
  return (
    <div className="favorite-item">
      <div>
        <img src={image} alt="item" key={id} />
      </div>
      <p>{title}</p>
      <button onClick={removeFavorite}>Remove Favorite</button>
    </div>
  );
}

export default Favorites;
