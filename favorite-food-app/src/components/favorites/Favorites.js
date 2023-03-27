import React from "react";

function Favorites({ id, image, title, removeFavorite }) {
  return (
    <div>
      <div>
        <img src={image} alt="item" key={id} />
      </div>
      <p>{title}</p>
      <button onClick={removeFavorite}>Remove Favorite</button>
    </div>
  );
}

export default Favorites;
